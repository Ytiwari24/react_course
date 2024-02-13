import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="WelCome Developer" />
      <div className="container my-5">
        <About />
        {/* <TextForm heading="Enter the Text want to Convert" /> */}
      </div>
    </>
  );
}

export default App;
