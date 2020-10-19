import React,{useRef} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {v4 as  uuidv4 } from "uuid"
export default function Login({onIdsubmit}) {
    const idRef=useRef();
    function handlesubmit(e)
    {
        e.preventDefault();
        onIdsubmit(idRef.current.value);

    } 
    function createNewId()
    {
        onIdsubmit(uuidv4())
    }
    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
         <Form onSubmit={handlesubmit} className="w-100" > 
             <Form.Group>
                 <Form.Label>Enter your Id</Form.Label>
                 <Form.Control type="text" ref={idRef} required></Form.Control>
             </Form.Group>
             <Button type="submit" className="mr-2">Login</Button>
             <Button onClick={createNewId} variant="secondary">create new Id</Button>
         </Form>
        </Container>
    )
}
