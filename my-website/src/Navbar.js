import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import InfoIcon from '@mui/icons-material/Info';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';


function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' alt='home'><PowerSettingsNewIcon sx={{ fontSize: 40 }}/></Link>
        <Link to='/product' alt='product'><InfoIcon sx={{ fontSize: 40 }}/></Link>
        <Link to='/kvp' alt='kvp'><TrackChangesIcon sx={{ fontSize: 40 }}/></Link>
    </div>
  )
}

export default Navbar