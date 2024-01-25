import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
