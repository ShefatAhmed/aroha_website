import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-[#f4ede4]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
