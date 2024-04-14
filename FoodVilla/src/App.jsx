import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Login from './components/Login'
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux'
import store from "./utils/store";
import Cart from "./components/Cart";

const Mart = lazy(() => import("./components/Mart"))

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Vidhi",
    email: "abc@gmail.com"
  })
  return (
    <Provider store={store}>
      <UserContext.Provider value={{
        user: user
        }}>
      <div className="relative min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>  
      </UserContext.Provider>
    </Provider>
    
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [{
          path: "profile", // parentpath/{path} => /about/profile
          element: <Profile />
        }]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/mart",
        element: (
        <Suspense fallback={<Shimmer />}>
          <Mart />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  }
])

export default AppLayout
