import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ component, name }) => (
          <Route Component={component} path={name} key={name} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
