// import { Container } from "@mui/material";
import cn from "classnames";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import { Footer } from "../components/components/Footer/Footer";
import { Header } from "../components/components/Header/Header";
import { ActiveList } from "../components/components/pages/ActiveList/ActiveList";
import { AllToDo } from "../components/components/pages/AllToDo/AllToDo";
import { CompletedList } from "../components/components/pages/CompletedList/CompletedList";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <div className={cn(styles.container, styles.center, styles.app)}>
        <Header />
        <Routes>
          <Route path="/" element={<AllToDo />} />
          <Route path="/active" element={<ActiveList />} />
          <Route path="/completed" element={<CompletedList />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
