import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutUsPage,
  ContactPage,
  HomePage,
  ProductsPage,
  BookViewPage,
} from '../bookhaven';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/products"
          element={<ProductsPage />}
        />
        <Route
          path="/products/:id"
          element={<BookViewPage />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/about-us"
          element={<AboutUsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
