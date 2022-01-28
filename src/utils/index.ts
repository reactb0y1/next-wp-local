export const fetchACF = async (pageID) => {
  const pageData = await fetch(`http://next-wp-local/wp-json/acf/v3/pages/${pageID}`);
  const pageJSON = await pageData.json();
  const page = pageJSON.acf;

  const componentsData = await fetch('http://next-wp-local/wp-json/acf/v3/pages/84');
  const componentsJSON = await componentsData.json();
  const components = componentsJSON.acf;

  return { page, components };
};
