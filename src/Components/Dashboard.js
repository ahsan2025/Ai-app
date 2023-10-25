import React from 'react'
import LeftPanel from './LeftPanel';
import CenterDashboard from './CenterDashboard';
import RightPanel from './RightPanel';

function Dashboard() {
  return (
    <div className='dashboard'>
        <LeftPanel/>
        <CenterDashboard/>
        <RightPanel/>
    </div>
  )
}

export default Dashboard