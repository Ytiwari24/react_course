import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="WelCome Developer" />
      <div className="container my-5">
        <TextForm heading="Enter the Text want to Convert" />
      </div>
    </>
  );
}

export default App;
