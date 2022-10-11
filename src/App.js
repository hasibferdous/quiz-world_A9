import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',element: <Main></Main>, 
      children:[ {path: '/', element:<Home></Home>},
                 {path: '/topics', element:<Topics></Topics>},
                 {path: '/statistics', element:<Statistics></Statistics>},
                 {path: '/blog', element:<Blog></Blog>},
                 {path: '/about', element:<About></About>}
                ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
