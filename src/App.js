import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import TopicDetails from './Components/TopicDetails/TopicDetails';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      
      path: '/',element: <Main></Main>, 
      children:[ {path: '/', element:<Home></Home>},
      {path: 'topics',
      loader:async ()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element: <Topics></Topics>
    },

    {path:'/quiz/:quizId', loader:async ({params})=>{return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);},element: <TopicDetails></TopicDetails>},
      
                 
    
                 {path: '/statistics', loader: async () => {
      return fetch("https://openapi.programming-hero.com/api/quiz");
    }, element:<Statistics></Statistics>},
                 
                {path: '/blog', element:<Blog></Blog>},
                 {path: '/about', element:<About></About>},
                 
                ],

      
    },
    {path:'*', element: <div className='bg-slate-400 text-5xl m-11 p-11'><b>404 Error !!! <p>This route is not found</p></b></div>}
  ]
  )

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <ToastContainer></ToastContainer>
    </div>
    
  );
}

export default App;
