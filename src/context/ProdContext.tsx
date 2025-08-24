
"use client";

import { ProdType } from '@/types/prod';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'



type prodContextType = {
  produit: ProdType[];
  setProduit: Dispatch<SetStateAction<prodContextType[]>>
}

// creation du context ici. a cree dans un fichier contexte et le transporter
export const ProdContext = createContext<prodContextType>({
  produit: [],
  setProduit: () => {}
})


// le provider
type Props = {
  children: React.ReactNode;

}

export default function ProdProvider({ children}: Props) {
  const [produit, setProduit] = useState<ProdType[]>([])
  return (
    <ProdContext.Provider value={{produit, setProduit}}>
      {children}
    </ProdContext.Provider>
  )
}