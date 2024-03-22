import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import NotFoundScreen from "./views/NotFoundScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
