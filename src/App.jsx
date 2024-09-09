import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import BarraNav from "./components/BarraNav";
import Inicio from "./components/Inicio";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [modo, setModo] = useState(false);

  return (
    <div className={modo ? "dark" : ""}>
      <BarraNav setModo={setModo} modo={modo} />
      <section className="px-10 md:px-20 lg:px-40 dark:bg-gray-900 mainSection">
        <Inicio />
      </section>
      <Footer />
    </div>
  );
}

export default App;
