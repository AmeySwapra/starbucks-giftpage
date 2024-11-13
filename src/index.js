import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Gift from "./page/Gift";
import GiftFeature from "./component/GiftFeature";
import GiftAnytime from "./component/GiftAnytime";
import GiftCong from "./component/GiftCong";
import GiftThank from "./component/GiftThank";
import Header from "./component/Header";
import Footer from "./component/Footer"


const AppLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/" element={<Navigate to="/giftcards" replace />} />
      
      <Route path="/giftcards" element={<AppLayout><Gift /></AppLayout>}>
        <Route path="" element={<GiftFeature />} />
        <Route path="anytime" element={<GiftAnytime />} />
        <Route path="Congratulations" element={<GiftCong />} />
        <Route path="thank" element={<GiftThank />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
