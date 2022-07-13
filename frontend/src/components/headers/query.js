import { gql } from '@apollo/client';

const GET_MENU = gql`
  query GET_MENU_BY_NAME {
    menu(id: "main-menu", idType: NAME) {
      name
      menuItems(where: { parentDatabaseId: 0 }) {
        nodes {
          label
          childItems {
            nodes {
              label
              url
              childItems {
                nodes {
                  label
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_MENU;
