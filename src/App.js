import Body from "./Components/Body";
import Header from "./Components/Header";
// import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantsMenu from "./Components/RestaurantsMenu";
import { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

function AppLayout() {
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: " ",
    };
    setuserName(data.name);
  }, []);

  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ logedInUser: userName, setuserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // 💡 Keep path lowercase and no space
        element: (
          <Suspense>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact", // 💡 Avoid spaces in route path
        element: <ContactUs />,
      },
      {
        path: "/grocery", // 💡 Avoid spaces in route path
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", // 💡 Avoid spaces in route path
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart", 
        element: <Cart/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
