import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessengerCustomerChat pageId="556327282910445" appId="408415308085785" />
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <MessengerCustomerChat pageId="556327282910445" appId="408415308085785" />,
//   document.getElementById("root")
// );
