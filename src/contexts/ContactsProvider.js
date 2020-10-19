import React,{useContext, createContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactContext=createContext()

export function useContacts()
{
    return useContext(ContactContext)
}

export default function ContactsProvider({children}) {
 const [contacts, setContacts] = useLocalStorage('contacts',[])
function createContact(id,name){
    setContacts(prevValue=>[...prevValue,{id,name}]) 
}
  return (<ContactContext.Provider value={{contacts,createContact}}>
    {children}
  </ContactContext.Provider>)
}

