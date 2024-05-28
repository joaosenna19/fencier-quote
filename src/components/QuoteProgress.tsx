import React from 'react'

function QuoteProgress() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h2 className="text-2xl font-bold">Quote Progress</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Track your quote generation progress.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Project Details</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="text-sm font-medium">Requirements</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Upcoming</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="text-sm font-medium">Pricing</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Upcoming</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="text-sm font-medium">Review</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Upcoming</span>
              </div>
            </div>
          </div>
  )
}

export default QuoteProgress