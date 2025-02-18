import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Heeder"
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"
import NotFound from "./pages/NotFound/NotFound"


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App
