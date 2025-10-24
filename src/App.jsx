
import './App.css'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { DashboardPage } from './pages/DashboardPage'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    },
    
  ])

  return <RouterProvider router={router} />
}

export default App
