import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
// import MainNavigation from "./MainNavigation";
import Talk, { action as talkAction } from "./Talk";
import MainLayout from "./MainLayout";
import Welcome, { loader as welcomeLoader } from "./Welcome";
// import CardGenerate from "./CardGenerate";
// import Welcome from "./Welcome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      action={talkAction}
      errorElement={
        <h1 style={{ color: "white", height: "100vh" }}>
          Sorry! Alloy is unable to retrieve an answer to the query you
          submitted.
        </h1>
      }
    >
      <Route index element={<Welcome />} loader={welcomeLoader} />
      <Route path="talk" element={<Talk />} action={talkAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
