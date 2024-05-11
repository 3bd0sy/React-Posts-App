import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import AddPost from './Pages/AddPost/AddPost';
import EditPost from "./Pages/EditPost/EditPost";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="add-post" element={<AddPost />} />
          <Route path="edit/:id" element={<EditPost />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
