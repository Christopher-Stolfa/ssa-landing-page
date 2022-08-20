/**
 * Parses graphql wordpress data into a well defined object
 */
const formatEventsData = (data) => {
  const edges = data.events.edges;

  const sortedEvents = [...edges].sort((a, b) => {
    const now = new Date().getTime();
    const aToDate = new Date(a.node.eventStartDate).getTime();
    const bToDate = new Date(b.node.eventEndDate).getTime();

    if (aToDate < now || bToDate < now) return false;

    return Math.abs(aToDate - now) - Math.abs(bToDate - now);
  });

  const mapEvents = sortedEvents.slice(0, 5).map(({ node }) => {
    const startDateObj = new Date(node.eventStartDate);
    const endDateObj = new Date(node.eventEndDate);

    // Creates a start and end date string. Example: Oct 9, 1995.
    const startDateMDY = `${startDateObj.toLocaleString('default', {
      month: 'short',
    })} ${startDateObj.getUTCDate()}, ${startDateObj.getUTCFullYear()}`;
    const endDateMDY = `${endDateObj.toLocaleString('default', {
      month: 'short',
    })} ${endDateObj.getUTCDate()}, ${endDateObj.getUTCFullYear()}`;
    // Creates a string showing either the event day or its duration.
    // Example: Oct 9, 1995. OR Nov 21, 1988 - Nov 24, 1988.
    const date =
      startDateObj.getUTCDate() === endDateObj.getUTCDate() ? startDateMDY : `${startDateMDY} to ${endDateMDY}`;
    return { ...node, date };
  });

  return mapEvents;
};

export default formatEventsData;
