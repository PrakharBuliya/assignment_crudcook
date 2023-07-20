import Posts from "./components/Posts";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "1440px",
          height: "1024px",
          backgroundColor: "#11182A",
          fill: "rgba(30, 34, 46, 0.35)",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/postsmodal" element={<Posts />} />
          <Route path="/usersmodal" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
