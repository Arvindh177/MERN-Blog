
import './App.css';
import Post from "./post"
import Layout from "./layout";
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from './pages/CreatePost';


function App() {
  return (
    
    <Routes>
      
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path={'/login'} element={<LoginPage/> } />
        <Route path={'/Register'} element={<RegisterPage/>}/>
        <Route path={'/create'} element={<CreatePost/>}/>
        </Route>
    </Routes> 
  );
}

export default App;
