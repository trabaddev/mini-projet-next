import { createContext, Dispatch, SetStateAction } from "react"


type contactContextType = {
    contact: contactType[],
    setContact:  Dispatch<SetStateAction<contactType[]>>
}

export const ContactContext =  createContext<contactContextType>({
    contact: [],
    setContact: () => {}
})