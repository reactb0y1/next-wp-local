export const fetchACF = async (pageID) => {
  const page = await fetch(`http://next-wp-local/wp-json/acf/v3/pages/${pageID}`);
  const pageJSON = await page.json();
  const acf = pageJSON.acf;

  const components = await fetch('http://next-wp-local/wp-json/acf/v3/pages/84');
  const componentsJSON = await components.json();
  const acfComponents = componentsJSON.acf;

  return { acf, acfComponents };
};
