import "./App.css";
import Clients from "./component/Clients/Clients";
import Contact from "./component/Contact/Contact";
import End from "./component/End/End";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Service from "./component/Service/Service";
import Subscribe from "./component/Subscrube/Subscribe";
import Works from "./component/Works/Works";
import Process from "./component/process/Process";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Works />
      <Process />
      <Subscribe />
      <Clients />
      <Contact />
      <End />
    </div>
  );
}

export default App;
