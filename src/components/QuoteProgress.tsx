import React from 'react'
import QuoteStep from './QuoteStep'

function QuoteProgress(
  props: {

  }
) {

  return (
    <div className="rounded-lg  border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Quote Progress</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Track your quote generation progress.</p>
            <div className="mt-6 space-y-4">
              <QuoteStep 
              stepName='Contact Information' 
              isActive = {true}
              isCompleted = {false}
              />
              <QuoteStep 
              stepName='Find your House on the Map' 
              isActive = {false}
              isCompleted = {false}
              />
              <QuoteStep 
              stepName='Draw your Fence' 
              isActive = {false}
              isCompleted = {false}
              />
              <QuoteStep 
              stepName='Choose your Materials' 
              isActive = {false}
              isCompleted = {false}
              />
              <QuoteStep 
              stepName='Summary' 
              isActive = {false}
              isCompleted = {false}
              />
            </div>
          </div>
  )
}

export default QuoteProgress