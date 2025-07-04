import { useState } from "react";
import Navbar from "./layouts/Navbar";
import { Outlet } from "react-router-dom";
import Function from "./layouts/Function";

function App() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>
      <footer>
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              sakib Industries Ltd
            </p>
          </aside>
        </footer>
      </footer>
    </div>
  );
}

export default App;
