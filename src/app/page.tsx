import Link from "next/link"
import constructorLogo from "/icons/constructor-logo.png"
import Image from "next/image"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/components/ui/breadcrumb"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <Link className="flex items-center gap-2" href="#">
        <Image 
                className='w-24 h-24 p-2'
                src={constructorLogo} 
                alt='icon' 
            />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-sm font-medium hover:underline" href="#">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium hover:underline" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium hover:underline" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium hover:underline" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container mx-auto py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/quote">Quote</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Step 1</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
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
        </div>
      </div>
      
    </>
    
  )
}