import React from 'react';
 import Login from './components/Login/Login'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
 import Dashborad from './components/Dashborad/Dashborad'
import ContactsProvider from './contexts/ContactsProvider'
import ConversationsProvider from './contexts/ConversationsProvider'
import { SocketProvider } from './contexts/SocketProvider';
function App() {
  const  [id, setId]=useLocalStorage('id');
  return (
 <SocketProvider id={id}>
  <ContactsProvider>
    <ConversationsProvider id={id}>
      {id?<Dashborad id={id}/>:<Login onIdsubmit={setId}/>}
    </ConversationsProvider>
  </ContactsProvider>
  </SocketProvider>
  );
}
export default App;
