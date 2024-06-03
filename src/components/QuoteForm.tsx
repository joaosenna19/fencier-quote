import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function ProjectDetails(
  props: {
    isActive : boolean
  }
) {

  const isActive = props.isActive

  if(!isActive) {
    return null;
  }

  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
    <h2 className="text-2xl font-bold">Step 1: Project Details</h2>
    <p className="mt-2 text-gray-500 dark:text-gray-400">
      Please provide the details of your project to get an accurate quote.
    </p>
    <form className="mt-6 space-y-4">
      <div>
        <Label htmlFor="customer-name">Full Name</Label>
        <Input id="customer-name" placeholder="" />
      </div>

      <div>
        <Label htmlFor="customer-email">Email Address</Label>
        <Input id="customer-email" placeholder="" />
      </div>
      <div>
        <Label htmlFor="customer-phone">Phone Number</Label>
        <Input id="customer-phone" placeholder="" />
      </div>
      <div>
        <Label htmlFor="project-description">Project Details</Label>
        <Textarea id="project-description" placeholder="Give us a brief idea of what your dream fence looks like" rows={3} />
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

export default ProjectDetails