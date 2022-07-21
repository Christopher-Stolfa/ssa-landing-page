/**
 * Parses & formats graphql wordpress news data into a nicer javascript object.
 */
const formatNewsData = (data) => {
  const edges = data.posts.edges;
  return edges.map(({ node: { title, date, link, content } }) => ({
    title,
    date,
    link,
    content: content.replace(/<[^>]+>/g, ''),
  }));
};

export default formatNewsData;
