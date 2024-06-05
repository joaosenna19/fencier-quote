import React from 'react'

function QuoteStep(
  props: {
  isCompleted : boolean, 
  isActive : boolean, 
  stepName : string
}) 
{
  const isActive = props.isActive
  const isCompleted = props.isCompleted
  const stepName = props.stepName

  let statusColor : string = "bg-gray-500"
  
    let currentStatus : string = "Upcoming";
    if (isActive) {
        currentStatus = "In Progress";
        statusColor = "bg-blue-500"
    }
    if (isCompleted) {
        currentStatus = "Completed"
        statusColor = "bg-green-500"
    }

    
  return (
    <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${statusColor}`} />
                  <span className="text-sm font-medium">{stepName}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{currentStatus}</span>
              </div>
  )
}

export default QuoteStep