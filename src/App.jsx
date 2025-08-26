import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <Routes>
    
        <Route path="/" element={<Main />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:id" element={<Product />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<TV />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
    
    </Routes>
  );
}
export default App;
