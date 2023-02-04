import Badges from "./components/badges";
import Banner from "./components/banner";
import Plans from "./components/plans";
import Subheader from "./components/subheader";

function App() {
  return (
    <div className="App">
      <Subheader />
      <Banner />
      <Plans />
      <Badges />
    </div>
  );
}

export default App;
