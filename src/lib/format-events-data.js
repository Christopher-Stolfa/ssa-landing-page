/**
 * Parses graphql wordpress data into a well defined object
 */
const formatEventsData = (data) => {
  const events = data.events.edges
    .filter(({ node: { eventEndDate } }) => Date.now() <= new Date(eventEndDate))
    .map(({ node }) => {
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
      const eventDuration =
        startDateObj.getUTCDate() === endDateObj.getUTCDate() ? startDateMDY : `${startDateMDY} to ${endDateMDY}`;
      return { ...node, eventDuration };
    });
  return events;
};

export default formatEventsData;
