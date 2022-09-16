import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="s">Test</h1>
      <MessengerCustomerChat pageId="107649348764001" appId="839133677251380" />

      {/* <MessengerChat pageId="123456789101112" /> */}
    </div>
  );
}

export default App;
