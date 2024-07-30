import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Layout } from "../layout";
import { Main } from "../../pages/main";
import { Catalog } from "../../pages/catalog";
import { Blog } from "../../pages/blog";
import { Info } from "../../pages/info";
import { Cart } from "../../pages/cart";

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="blog" element={<Blog />} />
        <Route path="info" element={<Info />} />
        <Route path="cart" element={<Cart />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
