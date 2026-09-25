import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import New from "./pages/New.jsx";
import Nav from "./Nav.jsx";

function App(){
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
      <Route path='/new' element={<New/>}></Route>
    </Routes>
    </>
  )
}
export default App;