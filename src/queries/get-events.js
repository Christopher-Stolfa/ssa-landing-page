import { gql } from '@apollo/client';

const GET_EVENTS = gql`
  {
    events(where: { orderby: { order: DESC, field: EVENT_END_DATE } }, first: 5) {
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
