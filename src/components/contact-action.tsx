"use client";

import { useRouter } from "next/navigation";
import React from "react";


type Props = {
     contact: contactType
};

export default function ContactAction({contact}: Props) {
    const route = useRouter()
    const handleNavigate = () =>{
        route.push(`/contact/${contact.id}`)
    }
  return (
    <div className="flex items-center space-x-2">
      {/* <Button variant="primary">Detail</Button>
      <Button variant="danger">supprimer</Button> */}
      <button onClick={handleNavigate} className="bg-gray-400 p-2">Detail</button>
      <button className="p-2 bg-red-500 text-white">supprimer</button>
      
    </div>
  );
}
