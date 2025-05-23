import React from 'react';
import { Link } from 'react-router-dom';  
 
 const levelCard = [
  { name: "A1", href: "/Courses/A1/LevelA1" }, 
  { name: "A2", href: "/Courses/A2/LevelA2" },  
  { name: "B1", href: "/Courses/B1/LevelB1" },  
  { name: "B2", href: "/Courses/B2/LevelB2" },  
  { name: "C1", href: "/Courses/C1/LevelC1" },   
   
];

 const Course = () => {
  return (
    <div className="grid grid-cols-3 gap-4 m-10">
      {levelCard.map((level) => (
        <div 
          key={level.name} 
          className="
             flex items-center justify-center 
            h-80 w-75 border-2 border-gray-300
            cursor-pointer shadow-lg shadow-gray-200
            hover:scale-105 transition-transform duration-300
            rounded-full  bg-cover bg-center   
          "  
         >

          <Link 
            to={level.href}  
            className="w-full h-full flex items-center justify-center"  
          >
            {level.name}

             </Link>
             
        </div>
      ))}
           <img src="./assets/images/flag.png" alt="Flag"   />

    </div>
  );
}

export default Course;