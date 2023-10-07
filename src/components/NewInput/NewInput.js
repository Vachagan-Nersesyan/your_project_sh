import './newinput.css'
import {Form, InputGroup, Button, NavDropdown } from 'react-bootstrap';
import {FaCalendarDays} from 'react-icons/fa6'


export default function NewInput(){
    return(
        <div style={{display: 'flex' , justifyContent : 'center' ,width: '100%',marginBottom:'100px'}}>
           <InputGroup className='mb-3 ml-5' style={{width:'60%', text:'center'}}>
            <Form.Control
                placeholder="Add item"
                aria-label="Recipient's username with two button addons"
            />
            <Button>
                <NavDropdown title={<FaCalendarDays />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
            </Button>
            <Button variant="outline-secondary">ADD</Button>
        </InputGroup>
        </div>
        
    )
}