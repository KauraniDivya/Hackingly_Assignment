import React, { useState } from 'react';
import { FaTimes, FaPlus, FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const skillOptions = [
  { label: 'HTML', value: 'html', icon: <FaHtml5 size={24} /> },
  { label: 'CSS', value: 'css', icon: <FaCss3 size={24} /> },
  { label: 'JavaScript', value: 'javascript', icon: <FaJsSquare size={24} /> },
  { label: 'React', value: 'react', icon: <FaReact size={24} /> },
  { label: 'NodeJS', value: 'node', icon: <FaNodeJs size={24} /> },
  { label: 'MongoDB', value: 'mongo', icon: <FaDatabase size={24} /> },
];

const TechStack = () => {
  const [techList, setTechList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');

  const addTech = () => {
    if (selectedSkill.trim() !== '' && !techList.includes(selectedSkill)) {
      setTechList([...techList, selectedSkill]);
      setSelectedSkill('');
    } else {
      console.log("added")
     toast.error('Tech stack already added');
  
     
    }
  };
  
  
  const removeTech = (index) => {
    const updatedTechList = [...techList];
    updatedTechList.splice(index, 1);
    setTechList(updatedTechList);
  };

  return (
    
    <div className="mx-auto p-4 bg-white rounded-md w-80" style={{marginLeft:"-25px"}}>

      <div className="flex flex-wrap -mx-2">
        {techList.map((tech, index) => (
          <div key={index} className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/3 mb-4 px-2" style={{ width: "200px" }}>
            <div className="p-3 border rounded-md flex justify-between items-center">
              <span className="flex items-center" style={{height:"42px"}}>
                {skillOptions.find(option => option.value === tech)?.icon} <span className="ml-2">{tech}</span>
              </span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeTech(index)}
              >
                <FaTimes /> 
              </button>
            </div>
          </div>
        ))}

        <div className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/3 mb-4 px-2">
          <div className="p-3 border rounded-md flex justify-between items-center">
            <div className="relative">
              <div className="flex items-center">
                {selectedSkill && skillOptions.find(option => option.value === selectedSkill)?.icon} 
                <span className="ml-2">{selectedSkill}</span>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="border p-2 flex-grow rounded pl-8 pr-2 appearance-none"
                  style={{width:"200px"}}
                >
                  <option value="" disabled>Select a Skill</option>
                  {skillOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={addTech}
              style={{backgroundColor:"green", marginLeft:"20px"}}
            >
              <FaPlus /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;