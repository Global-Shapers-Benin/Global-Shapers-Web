import React from 'react'
import ProjectCar from '../components/Project/ProjectCar'
import ImpactDashboard from '../components/Project/DashCom'
import WorkSeries from '../components/Project/WorkSeries'

const Project = () => {
  return (
    <div className= "w-full">
        <ProjectCar />
        <ImpactDashboard />
        {/* <WorkSeries /> */}
    </div>
  )
}

export default Project