import Home from "./Page/Home";
import "./App.scss";
import TrialCode from "./components/TrialCode";
import VideoRecorder from "./components/VideoClip/VideoRecorder";
import SavedVideo from "./components/VideoClip/SavedVideo";
import VideoFilters from "./components/VideoClip/VideoFilters";
import Reel from "./components/VideoClip/Reel";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      {/* <Home /> */}
      {/* <TrialCode/> */}
      {/* <VideoRecorder />
      <SavedVideo /> */}
      {/* <VideoFilters /> */}
      <Reel />
    </div>
  );
}

export default App;
