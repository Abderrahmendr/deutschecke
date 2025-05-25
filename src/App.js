 import './App.css';
import Navbar from './_Components/Navbar/Navbar'
 import Course from './_Components/Courses/Course' 
import  LevelA1 from './_Components/Courses/A1/ LevelA1';
import  LevelA2 from './_Components/Courses/A2/LevelA2';
import  LevelB1 from './_Components/Courses/B1/LevelB1';
import  LevelB2 from './_Components/Courses/B2/LevelB2';
import  LevelC1 from './_Components/Courses/C1/LevelC1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
          <BrowserRouter>
      <Navbar   />
    <Routes>
        <Route path="/Course" element={<Course />} /> 
        <Route path="/Courses/ LevelA1" element={<  LevelA1 />} />
        <Route path="/Courses/A2/LevelA2" element={<  LevelA2 />} />
        <Route path="/Courses/B1/LevelB1" element={<  LevelB1 />} />
        <Route path="/Courses/B2/LevelB2" element={<  LevelB2 />} />
        <Route path="/Courses/C1/LevelC1" element={<  LevelC1 />} />
    </Routes>  
    </BrowserRouter>
        </div>
   


  );
}

export default App;
