import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path='/' exact/>
        <Route element={<About/>} path='/about' />
        <Route element={<SinglePost/>} path='/post/:slug' />
        <Route element={<Post/>} path='/post' />
        <Route element={<Project/>} path='/project' />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
