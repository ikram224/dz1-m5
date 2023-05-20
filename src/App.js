import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GetPage from "./pages/GetPage/GetPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='getPage' element={<GetPage/>}/>
          <Route path='post' element={<PostPage/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
