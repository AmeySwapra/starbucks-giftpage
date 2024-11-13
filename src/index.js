import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // The App component that includes Header and Footer
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

// Modify the App component to include Header and Footer
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
      {/* Redirect root to /giftcards */}
      <Route path="/" element={<Navigate to="/giftcards" replace />} />
      {/* Wrapping /giftcards routes within AppLayout */}
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
