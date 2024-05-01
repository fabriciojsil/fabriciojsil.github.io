import { data } from "./data/profile.data";
import { HomePage } from "./pages/home.page";
import ReactGA from "react-ga4";

ReactGA.initialize("G-F4V0GVG1GK");

function App() {
  return <HomePage profile={data} />;
}

export default App;
