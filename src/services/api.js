// Feito por JoaoSantosP
export async function getCategories() {
  try {
    const fetchResult = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchResult.json();
    return categories;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const fetchResult = await fetch(url);
    const products = await fetchResult.json();
    return products;
  } catch (err) {
    console.error(err);
  }
}
