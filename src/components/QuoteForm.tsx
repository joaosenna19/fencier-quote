import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function QuoteForm() {
  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
    <h2 className="text-2xl font-bold">Step 1: Project Details</h2>
    <p className="mt-2 text-gray-500 dark:text-gray-400">
      Please provide the details of your project to get an accurate quote.
    </p>
    <form className="mt-6 space-y-4">
      <div>
        <Label htmlFor="project-name">Project Name</Label>
        <Input id="project-name" placeholder="Enter project name" />
      </div>
      <div>
        <Label htmlFor="project-description">Project Description</Label>
        <Textarea id="project-description" placeholder="Describe your project" rows={3} />
      </div>
      <div>
        <Label htmlFor="project-timeline">Project Timeline</Label>
        <Input id="project-timeline" placeholder="Enter project timeline" />
      </div>
      <div className="flex justify-end">
        <Button className="ml-auto" type="submit">
          Next Step
        </Button>
      </div>
    </form>
  </div>
  )
}

export default QuoteForm