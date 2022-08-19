import { gql } from '@apollo/client';

const GET_EVENTS = gql`
  query getEvents {
    events(where: { orderby: { order: DESC, field: EVENT_START_DATE }, status: PUBLISH }, first: 50) {
      edges {
        node {
          eventStartDate
          eventEndDate
          title
          link
        }
      }
    }
  }
`;

export default GET_EVENTS;
