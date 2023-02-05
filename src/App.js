import Badges from "./components/badges";
import Banner from "./components/banner";
import Plans from "./components/plans";
import Subheader from "./components/subheader";
import SiteLinks from "./components/sitelinks";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Subheader />
      <Banner />
      <Plans />
      <Badges />
      <SiteLinks/>
      <Footer/>
    </div>
  );
}

export default App;
