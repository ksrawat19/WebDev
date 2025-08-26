import Navigation from "./Components/Navigation/Navigation"
import Product from "./Components/Product/Product"
import Recommended from "./Components/Recommended/Recommended"
import Sidebar from "./Components/Siderbar/Sidebar"
import "./index.css"

const App = () => {
  return (
    <>
        <Sidebar />  
        <Navigation />
        <Recommended />
        <Product />
    </>
  )
}
export default App