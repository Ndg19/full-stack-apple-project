import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import Mac from "./pages/Mac/Mac";
import Iphone from "./pages/Iphone/Iphone";
import Ipad from "./pages/Ipad/Ipad";
import Watch from "./pages/Watch/Watch";
import TV from "./pages/TV/TV";
import Music from "./pages/Music/Music";
import Support from "./pages/Support/Support";
import Cart from "./pages/Cart/Crat";
import { Route, Routes } from "react-router-dom"; 
import Four04 from "./pages/FourO4/FourO4";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import IphoneDetails from "./components/IphoneDetails"

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:id" element={<IphoneDetails />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/music" element={<Music />} />
        <Route path="/support" element={<Support />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
