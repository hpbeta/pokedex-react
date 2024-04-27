import { BrowserRouter, Routes, Route} from "react-router-dom"
import  Details  from "../pages/details"
import { Home } from "../pages/home"

export function AppRoute(){
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<Details />} />
            </Routes>
        
        </BrowserRouter>


    )      
}