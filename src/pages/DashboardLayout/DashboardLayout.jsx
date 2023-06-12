
import { Outlet } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'
import { useEffect } from 'react'




const DashboardLayout = () => {
  useEffect(()=> {
    document.title = "Photography-School || DashBoard"
  },[])
  return (
    <div className='relative  min-h-screen flex md:flex'>
      <Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout