export const fetchData = async (pageID) => {
  const pageData = await fetch(`http://next-wp-local/wp-json/acf/v3/pages/${pageID}`);
  const pageJSON = await pageData.json();
  const page = pageJSON.acf;

  const componentsData = await fetch('http://next-wp-local/wp-json/acf/v3/pages/84');
  const componentsJSON = await componentsData.json();
  const components = componentsJSON.acf;

  const menuHeaderData = await fetch('http://next-wp-local/wp-json/menus/v1/menus/header-menu');
  const menuHeader = await menuHeaderData.json();

  const menuFooterData = await fetch('http://next-wp-local/wp-json/menus/v1/menus/footer-menu');
  const menuFooter = await menuFooterData.json();

  return { page, components, menu: { menuHeader, menuFooter } };
};
