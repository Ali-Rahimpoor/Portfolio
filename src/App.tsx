import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
const App = ()=> {


  return (
    <>
      <div className="flex flex-col justify-between p-3 h-[100vh]">
       <Header/>
       <Outlet/>
       <Footer/>
      </div>
    </>
  )
}

export default App
