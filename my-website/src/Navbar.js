import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import KeyIcon from '@mui/icons-material/Key';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import PaidIcon from '@mui/icons-material/Paid';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';


function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' className='navbar_link'><HomeIcon sx={{ fontSize: 40 }} alt='home page link'/><h1>Home</h1></Link>
        <Link to='/product' className='navbar_link'><InfoIcon sx={{ fontSize: 40 }} alt='product page link'/><h1>Product</h1></Link>
        <Link to='/kvp' className='navbar_link'><KeyIcon sx={{ fontSize: 40 }} alt='key value proposition link'/><h1>KVP</h1></Link>
        <Link to='/ui' className='navbar_link'><ViewQuiltIcon sx={{ fontSize: 40 }} alt='user interface link'/><h1>UI</h1></Link>
        <Link to='/ia' className='navbar_link'><ApartmentIcon sx={{ fontSize: 40 }} alt='product ia link'/><h1>IA</h1></Link>
        <Link to='/id' className='navbar_link'><ArchitectureIcon sx={{ fontSize: 40 }} alt='product id link'/><h1>ID</h1></Link>
        <Link to='/costs_and_revenue' className='navbar_link'><PaidIcon sx={{ fontSize: 40 }} alt='cost and revenue link'/><h1>Money</h1></Link>
        <Link to='/pivot' className='navbar_link'><PivotTableChartIcon sx={{ fontSize: 40 }} alt='pivots link'/><h1>Pivots</h1></Link>
    </div>
  )
}

export default Navbar