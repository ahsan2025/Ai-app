import React from 'react'
import CustomerProfile from './CustomerProfile';
import DashboardTable from './DashboardTable'
import GridLayout from './GridLayout';

function CenterDashboard() {
  return (
    <div className='main-dashboard'>
        <CustomerProfile/>
        <DashboardTable/>
        <GridLayout/>
    </div>
  )
}

export default CenterDashboard