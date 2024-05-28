import Link from "next/link"
import constructorLogo from "/icons/constructor-logo.png"
import Image from "next/image"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/components/ui/breadcrumb"
import QuoteProgress from "@/components/QuoteProgress"

import QuoteForm from "@/components/QuoteForm"

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
        <QuoteForm />
          <QuoteProgress />
        </div>
      </div>
      
    </>
    
  )
}