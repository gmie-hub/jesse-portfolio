import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Gallery from "./pages/gallery";
import MyAI from "./pages/myAI";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  const appRoutes = [
    { path: routes.main.about, element: <About /> },
    { path: routes.main.gallery, element: <Gallery /> },
    { path: routes.main.projects, element: <Projects /> },
    { path: routes.main.myAI, element: <MyAI /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />

        <Route element={<Layout />}>
          {appRoutes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
