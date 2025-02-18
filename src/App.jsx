import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Heeder"
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  )
}

export default App
