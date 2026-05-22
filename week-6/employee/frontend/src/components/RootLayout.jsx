import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen bg-indigo-50 px-8 py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout