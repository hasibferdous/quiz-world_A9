import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const Quiz = ({quiz}) => {
    const { correctAnswer, options, question } = quiz;
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const handleAnswer = (e) => {
    const value = e.target.value;
        setSelected(e.target.value);
            if (value === correctAnswer) {
                    toast.success("Good job !! It's a Correct Answer", { autoClose: 3000 });
            } 
            else {
                    toast.error("Opps! It's an Incorrect Answer", { autoClose: 3000 });
            }
    };

    return (
        <div className="bg-black text-white p-11 rounded-lg">
        <div>
          <div className="flex justify-between">
            <p className="lg:text-2xl">Question: {question.slice(3, -4)}</p>
            <div className="h-8 w-8 bg-gray-600" onClick={() => setOpen(!open)}>
              {open ? <EyeIcon></EyeIcon> : <EyeSlashIcon></EyeSlashIcon>}
            </div>
          </div>
          <div className="flex flex-col items-start ml-3 px-3 py-2">
            {options.map((option, idx) => (
              <label htmlFor="">
                <input
                  value={option}
                  checked={option === selected ? true : false}
                  type="checkbox"
                  key={idx}
                  onClick={(e) => {
                    handleAnswer(e);
                  }}
                />
                {option}
              </label>
            ))}
            {open === true && (
              <p className="lg:text-3xl pt-5 text-green-600">
                The Correct Answer: {correctAnswer}
              </p>
            )}
          </div>
        </div>
      </div>
        
    );
};

export default Quiz;
