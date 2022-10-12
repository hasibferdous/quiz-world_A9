import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => 
    setOpen(open === value ? 0 : value);
    
    return (
    <div className='bg-black m-11 p-11 rounded-xl'>
    <Fragment>
      <Accordion className='bg-gray-300 mb-5 p-2  rounded-xl h-52' open={open === 1}>
        <AccordionHeader className='text-3xl pt-9 pl-80' onClick={() => handleOpen(1)}>
        What is the purpose of react router ?
        </AccordionHeader>
        <AccordionBody>
        <p>React Router isn't just about matching a url to a function or component,
        it's about building a full user interface that maps to the URL, so it might 
        have more concepts in it than you're used to.There are three main jobs of React 
        Router: Subscribing and manipulating the history stack, Matching the URL to your routes, 
        Rendering a nested UI from the route matches</p>
        </AccordionBody>
      </Accordion>
      <Accordion className='bg-gray-300 mb-5 p-2 rounded-xl h-52' open={open === 2}>
        <AccordionHeader className='text-3xl pt-9 pl-96 pr-4' onClick={() => handleOpen(2)}>
          How does Context api work ?
        </AccordionHeader>
        <AccordionBody>
          <p>The React Context API is a way for a React app to effectively produce global
            variables that can be passed around.</p><p>React.createContext() is all you need. 
            It returns a consumer and a provider. Provider is a component that as it's names 
            suggests provides the state to its children. It will hold the "store" and be the 
            parent of all the components that might need that store. Consumer as it so happens 
            is a component that consumes and uses the state. </p>
        </AccordionBody>
      </Accordion>
      <Accordion className='bg-gray-300 mb-5 p-2 rounded-xl h-52' open={open === 3}>
        <AccordionHeader className='text-3xl pt-9 pl-96' onClick={() => handleOpen(3)}>
          Explain about React useRef.
        </AccordionHeader>
        <AccordionBody>
        <p>useRef is a hook which returns an object with a current property 
        set to the value passed to the hook. The useRef Hook allows you to persist values 
        between renders.It can be used to store a mutable value that does not cause a 
        re-render when updated.It can be used to access a DOM element directly.</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
    </div>
    );
};

export default Blog;