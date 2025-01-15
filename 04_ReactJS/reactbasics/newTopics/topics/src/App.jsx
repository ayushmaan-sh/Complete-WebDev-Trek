import React from "react"
import Card from "./components/Card"

export default function App() {

  return (
    <>
    <div className="bg-yellow-300 mb-4">
     <h1 className="text-green-500 p-6 rounded-xl text-2xl">Cromone Greens Pvt. Ltd.</h1>
    </div>

    <h1 className="text-green-500 text-2xl mb-4 ml-4">Top Choosed Products</h1>
    <div className="flex">
    <Card productone="DCDB 1 in 1 out 600v" />
    <Card producttwo="ACDB 32A single Phase"/>
    <Card productthree="DCDB 1 in 1 out 600v"/>
    <Card productfour="ACDB 32A single Phase"/>
    </div>
    
    </>
  )
}
