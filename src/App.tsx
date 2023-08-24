import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Users from "./pages/users/Users.";
import Product from "./pages/products/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

function App() {

  const Layout = ()=>{
    return(
      <div className="main"> 
        <Navbar/>
        <div className="container">
            <div className="menuContainer"><Menu/></div>
            <div className="contentContainer"><Outlet/></div>
        </div>
        <Footer/>
      </div>
    )
  }




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products",
          element:<Product/>
        }
      ]
    },
  ]);
  
 

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
