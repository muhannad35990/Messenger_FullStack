import React from 'react'
import { useConversations } from '../../contexts/ConversationsProvider'
import OpenConversation from '../OpenConversation/OpenConversation'
import SideBar from '../SideBar/SideBar'

export default function Dashborad({id}) {
    const {selectedConversation}=useConversations()
    return (
        <div className="d-flex" style={{height:'100vh'}}>
        <SideBar id={id}/>
       {selectedConversation && <OpenConversation/>}
        </div>
      
    )
}
