import Header from "../components/Header"
import LittleInputs from "../components/LittleInputs"
import NewInput from "../components/NewInput"
import TodoDone from "../components/TodoDone"

import {u} from '../services/apiService'



export default function App() {

    u.getPostListItems('123')

    const todoItemsArr = [
        {
            id: 0,
            text: 'Buy groceries for next week',
            isDone : false
        },
        {
            id: 1,
            text: 'Renew Car insurance',
            isDone: false
        },
        {
            id: 2,
            text: 'Sign up for online course',
            isDone: false
        },
    ]



    return (
        <div>
            <Header />
            <NewInput />
            <LittleInputs />
            <TodoDone todoItemsArr={todoItemsArr} />
        </div>
    )
}