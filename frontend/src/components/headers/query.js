import { gql } from '@apollo/client';

const GET_MENU = gql`
  query GET_MENU_BY_NAME {
    menu(id: "main-menu", idType: NAME) {
      name
      menuItems(where: { parentDatabaseId: 0 }) {
        nodes {
          id
          databaseId
          label
          parentId
          parentDatabaseId
          childItems {
            nodes {
              id
              databaseId
              label
              parentId
              parentDatabaseId
              url
              childItems {
                nodes {
                  id
                  databaseId
                  label
                  parentId
                  parentDatabaseId
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
