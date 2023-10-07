import Container from 'react-bootstrap/Container';
import { Navbar, Form } from 'react-bootstrap';

import { FaPencil } from 'react-icons/fa6'
import { FaBoxArchive } from 'react-icons/fa6'
import { useState } from 'react';

export default function TodoDone({ todoItemsArr }) {


    const [sect, setSect] = useState(false)

    const [str, setStr] = useState('')

    const [itemId, setitemId] = useState(null)

    const [arr, setArr] = useState(todoItemsArr)


    const changeSectType = (id) => {

        if (sect) {

            for (let i in todoItemsArr) {
                if (todoItemsArr[i].id === id) {
                    todoItemsArr[i].text = str
                    break
                }
            }


            
            setSect(false)
            setitemId(null)
            setStr('')

        } else {
            setitemId(id)
            setSect(true)
        }
    }

    const deleteItem = (id) => {

        for (let i in todoItemsArr) {
            if (todoItemsArr[i].id === id) {
                todoItemsArr.splice(i, 1)
                break
            }
        }

        setArr([...todoItemsArr])

    }


    const todoData = arr.map((val) => {
        return (
            <div key={val.id}>
                <Navbar className="bg-body-tertiary" style={{ width: '900px', marginTop: '100px', marginLeft: '300px' }}>
                    <Container>
                        <Form.Check
                            inline
                            label={
                                !sect ? val.text
                                    :
                                    val.id === itemId ?
                                        < div >
                                            <input onChange={(e) => setStr(e.target.value)} type='text' />
                                        </div>
                                        : val.text

                            }


                            name="group1" />

                        <Navbar.Brand href="#home">



                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <div >
                                <div >
                                    <div onClick={() => changeSectType(val.id)}>
                                        <FaPencil />

                                    </div>
                                    <div onClick={() => deleteItem(val.id)}>
                                        <FaBoxArchive />
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    })

    return (
        <div>
            {todoData}



        </div>
    )
}
