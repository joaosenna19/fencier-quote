import React from 'react'

function GoogleMaps(
    props : {
        isActive : boolean
    }
) {
  const isActive = props.isActive
  
    if(!isActive) {
        return null;
    }

  return (
    <div className="flex justify-center bg-gray-500 h-64">
    <p>Map area</p>
  </div>
  )
}

export default GoogleMaps