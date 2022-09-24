import React from 'react'
import UserLogin from './Pages/user/UserLogin';



import {Route, Routes} from 'react-router-dom';

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>

      </Routes>
    </div>
  )
}
                            

export default MainRouter;

