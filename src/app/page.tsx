"use client"

import Link from "next/link"
import constructorLogo from "/icons/constructor-logo.png"
import Image from "next/image"
import QuoteProgress from "@/components/QuoteProgress"
import Header from "@/components/Header"
import React, {useState} from "react"
import { string } from "zod"
import ProjectDetails from "@/components/QuoteForm"
import MaterialSelection from "@/components/OptionSelection"
import SearchAddress from "@/components/AddressInput"

export default function Component() {

  const [activeComponent, setActiveComponent] = useState("QuoteForm");

  const activateComponent = (componentName : string) => {
    setActiveComponent(componentName);
  }

  return (

    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex-row gap-2">
        <QuoteProgress />
        <ProjectDetails 
        isActive = {activeComponent === "QuoteForm"}
        />
        <SearchAddress
        isActive = {activeComponent === "AddressInput"}
        />
        <div className="flex justify-center bg-gray-500 h-64">
          <p>Map area</p>
        </div>
        <MaterialSelection 
        isActive = {activeComponent === "MaterialSelection"}
        />
        </div>
      </div>
      
    </>
    
  )
}