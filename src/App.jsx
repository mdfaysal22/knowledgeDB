import { Toaster } from "react-hot-toast";
import Bolg from "./Components/Bolg/Bolg";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Bolg></Bolg>
      <Toaster
      position="top-right"
      />
    </div>
  );
}

export default App;
