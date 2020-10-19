import React,{useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import {useContacts} from '../../contexts/ContactsProvider'
export default function NewContactModal({closeModal}) {
const idRef=useRef();
const nameRef=useRef();
const {createContact}=useContacts()

const handleSubmit=(e)=>{
    e.preventDefault()
    createContact(idRef.current.value,nameRef.current.value)
    closeModal()
}
    return (  
        <>
        <Modal.Header closeButton>Create new contact</Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" ref={idRef} required />
                <Form.Label>name</Form.Label>
                <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
         <Button type="submit" >Create</Button>
        </Form>
        </Modal.Body>
        </>
    )
}

