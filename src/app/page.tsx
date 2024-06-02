import Link from "next/link"
import constructorLogo from "/icons/constructor-logo.png"
import Image from "next/image"
import QuoteProgress from "@/components/QuoteProgress"
import Header from "@/components/Header"
import AddressInput from "@/components/AddressInput"
import OptionSelection from "@/components/OptionSelection"

import QuoteForm from "@/components/QuoteForm"

export default function Component() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex-row gap-2">
        <QuoteProgress />
        <QuoteForm />
        <AddressInput />
        <div className="grid grid-cols-1 bg-gray-500">
          Map Area
        </div>
        <OptionSelection />
        </div>
      </div>
      
    </>
    
  )
}