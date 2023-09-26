import React, { useEffect } from 'react'
import CustNav from './CustNav'
import Home from '../Components/Home'
import ViewPlaceCust from '../Components/ViewPlaceCust'
import { useNavigate } from 'react-router-dom';

function CustHome() {


  return (
    <div>
    <CustNav/>
    <Home/>
    
    </div>
  )
}

export default CustHome