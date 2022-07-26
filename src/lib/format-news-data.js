/**
 * Parses & formats graphql wordpress news data into a nicer javascript object.
 */
const formatNewsData = (data) => {
  const edges = data.posts.edges;
  const excerptRegex = (string = '') => {
    let newString = string;
    const stripHtml = /(<([^>]+)>)/gi;
    const stripEntities = /&#{0,1}[a-z0-9]+;/gi;

    newString = newString.replace(stripHtml, '');
    newString = newString.replace(stripEntities, '');
    return newString;
  };
  return edges.map(({ node: { title, date, link, excerpt } }) => ({
    title,
    date,
    link,
    excerpt: excerpt ? excerptRegex(excerpt) : '',
  }));
};

export default formatNewsData;
