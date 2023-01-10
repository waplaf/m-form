import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Printer from './printer';
import UserContextProvide from './state/contexts/UserContext';
import './App.css'
import Form from './form';
import Printer2 from './printer2';



function App() {

    return (
        <UserContextProvide>
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<Form/>}/>
         <Route path="/print" element={<Printer/>}/>
         <Route path="/print2" element={<Printer2/>}/>

        </Routes>
        </BrowserRouter>
        </UserContextProvide>
    );}

    export default App