import "./App.css";
import { HomeScreen } from "./Components/HomeScreen";
// borderColor : bg-gradient-to-b from-fuchsia-500 to-cyan-500
function App() {
  return (
    <div className="App bg-gradient-to-tl from-bgl1 to-bgl2 flex h-screen ">
      <HomeScreen />
    </div>
  );
}

export default App;
