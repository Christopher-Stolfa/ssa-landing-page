import styles from './skip-links.module.css';

/**
 * Skip links are placed at the top of the page to allow keyboard users to skip to the menu or content.
 */
const SkipLinks = () => {
  const linksData = [
    { id: '#header', text: 'Skip to navigation' },
    { id: '#content', text: 'Skip to content' },
  ];
  return linksData.map(({ id, text }) => (
    <a className={styles.skipNavLink} key={'skipNavLink' + id} href={id}>
      {text}
    </a>
  ));
};

export default SkipLinks;
