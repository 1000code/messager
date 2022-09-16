import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import MessengerCustomerChat from "react-messenger-customer-chat";
import YouTube from "react-youtube";

function App() {
  const [count, setCount] = useState(0);

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="App">
      <div className="">
        <YouTube videoId="jV7MYUhMavI" opts={opts} onReady={onPlayerReady} />
      </div>
      <h1 className="s">Test</h1>
      <MessengerCustomerChat pageId="107649348764001" appId="839133677251380" />

      {/* <MessengerChat pageId="123456789101112" /> */}
    </div>
  );
}

export default App;
