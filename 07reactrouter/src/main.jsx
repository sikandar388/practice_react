import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx'
import User from "./User/User.jsx";
import Github  from "./Github/Github.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element= {<Home />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<Contact />} />
      <Route path="user/:userid" element= {<User />} />
      <Route path="github" element= {<Github />} />
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
