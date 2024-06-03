import Link from "next/link"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import ItemCard from "./ItemCard"

export default function OptionSelection(
  props: {
    isActive : boolean
  }
) {

  const isActive = props.isActive
  if(!isActive){
    return null
  }
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Select Your Perfect Product</h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              Choose from our wide selection of products to find the one that suits your needs.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">Type</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  <ItemCard />
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowLeftIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowRightIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselNext>
              </Carousel>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">Style</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  <ItemCard />
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowLeftIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowRightIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselNext>
              </Carousel>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">Colour</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  <ItemCard />
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowLeftIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowRightIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselNext>
              </Carousel>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">Height</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  <ItemCard />
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowLeftIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                  <ArrowRightIcon className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}