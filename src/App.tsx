/* eslint-disable @typescript-eslint/no-unused-vars */
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Router from "./routes";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Router />
    </>
  );
}

export default App;
