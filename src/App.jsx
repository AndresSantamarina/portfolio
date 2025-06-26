import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import BarraNav from "./components/Navbar/BarraNav";
import Footer from "./components/Footer";
import "./index.css";
import Home from "./components/Home/Home";

function App() {
  const [modo, setModo] = useState(false);

  return (
    <div className={modo ? "dark" : ""}>
      <BarraNav setModo={setModo} modo={modo} />
      <section className="px-10 md:px-20 lg:px-40 dark:bg-gray-900 mainSection">
        <Home />
      </section>
      <Footer />
    </div>
  );
}

export default App;
