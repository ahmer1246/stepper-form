
import './App.css'
import Navbar from './component/navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import StepperForm from './component/steps/StepperForm'
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path:"/exist",
    element:<HomePage/>
  }
  ,{
    path:"/",
    element:<StepperForm />
  }
])

function App() {
  

  return (
   <div className=' bg-[#F9FAFB]'>
    
<RouterProvider router={router} >

</RouterProvider>
   </div>
  )
}

export default App
