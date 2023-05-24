import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<SearchBar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
