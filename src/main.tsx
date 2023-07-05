/***
 * Import bootstrap css
 */
import "bootstrap/dist/css/bootstrap.min.css";
/***
 * Configure react-toastify styles
 */
import "react-toastify/dist/ReactToastify.css";
/***
 * Configure sweetalert2 styles
 */
import "sweetalert2/src/sweetalert2.scss";
/***
 * Own styles
 */
import "./styles/style.scss";

import Layout from "./index.tsx";

import { BrowserRouter } from "react-router-dom";
/***
 * Components
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import Loader from "./components/loader/Loader.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Layout />
        <ToastContainer autoClose={3000} pauseOnHover position="top-left" />
        </React.Suspense>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
