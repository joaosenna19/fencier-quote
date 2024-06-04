"use client"

import QuoteProgress from "@/components/QuoteProgress"
import Header from "@/components/Header"
import React, {useState} from "react"
import ProjectDetails from "@/components/ProjectDetails"
import MaterialSelection from "@/components/OptionSelection"
import SearchAddress from "@/components/SearchAddress"
import GoogleMaps from "@/components/GoogleMaps"

export default function Component() {

  const [activeComponent, setActiveComponent] = useState("ProjectDetails");

  const getActiveComponent = () => {

  }

  return (

    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-row my-10 ml-6 gap-10">
          <QuoteProgress />
            <ProjectDetails 
            isActive = {activeComponent === "ProjectDetails"}
            />
            <SearchAddress
            isActive = {activeComponent === "SearchAddress"}
            />
            <GoogleMaps 
            isActive = {activeComponent === "GoogleMaps"}
            />
            <MaterialSelection 
            isActive = {activeComponent === "MaterialSelection"}
            />
        </div>
      </div>
      
    </>
    
  )
}