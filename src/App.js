import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contect from "./component/Contect";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <Navbar/> <Home/> </>,
  },
  {
    path: "/About",
    element: <> <Navbar/> <About/> </>,
  },
  {
    path: "/Contect",
    element: <> <Navbar/> <Contect/> </>,
  },
]);

function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
