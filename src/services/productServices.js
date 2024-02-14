// src/services/productService.js

export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/drive/v3/files/1xr529Yf-5PIr7sAsV3SFZS-zuirk5a8l?alt=media&key=AIzaSyDJUs6Bvuk_iJMuyO4Qb3k4zqIv1bir6S4"
    );
    const data = await response.json();
    return data.products; // assuming products is an array in the response
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // return an empty array in case of error
  }
};
