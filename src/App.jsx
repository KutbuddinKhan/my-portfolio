import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/asidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
