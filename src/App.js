import "./App.css";
import { Block } from "./pages/Block";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PhotoGallery } from "./content/photo/PhotoGallery.jsx";
import { Task } from "./content/task/Task.jsx";
import { Post } from "./content/post/Post.jsx";
import { Home } from "./pages/home/Home.jsx";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/block" element={<Block />} />
          {/* логинизация по ссылке из почты */}

          <Route path="/photo-gallery" element={<PhotoGallery />} />
          {/*стартовая страница */}

          <Route path="/task" element={<Task />} />
          {/* // наверное такой путь  */}

          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
};
