import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from '../pages/login'
import SignUp from '../pages/signup'
import {DashBoard} from '../pages/dashboard'


function AppRouter (){
    return(
        <div> 
   <Router>
    <Routes>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="DashBoard" element={<DashBoard/>}/>
    </Routes>
   </Router>


   </div>
    )
}

export default AppRouter;