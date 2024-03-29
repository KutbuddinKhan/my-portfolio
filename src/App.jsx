import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/asidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <nav>Navbar</nav>
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
