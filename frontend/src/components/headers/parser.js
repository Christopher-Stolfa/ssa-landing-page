/**
 * Parses graphql wordpress data into a well defined object
 */
const parser = (data) => {
  const nodes = data.menu.menuItems.nodes;
  return nodes.map(({ label, childItems }) => {
    const subMenus = childItems.nodes;
    const subMenuNodes = subMenus[0].childItems.nodes;
    /**
     * If the menu item has sub menus, the wordpress api shapes the data differently.
     * We return a different object if the menu item has no sub menus.
     */
    if (subMenuNodes.length > 0) {
      return {
        title: label,
        subMenu: subMenus.map(({ label, childItems }) => {
          return {
            subTitle: label,
            items: childItems.nodes.map(({ label, url }) => {
              return {
                title: label,
                link: url,
              };
            }),
          };
        }),
      };
    }
    return {
      title: label,
      subMenu: [
        {
          subTitle: '',
          items: childItems.nodes.map(({ label, url }) => {
            return {
              title: label,
              link: url,
            };
          }),
        },
      ],
    };
  });
};

export default parser;
