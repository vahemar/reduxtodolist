import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, todo: 'go to store', checked: false, edit: true },
        { id: 2, todo: 'go for a walk with dog', checked: false, edit: true },
    ],
    reducers: {
        addTodo(state, { payload }) {
            const data = {id: Math.random(), ...payload, checked: false, edit: true, }
            state.push(data)
        },
        removeTodo(state, { payload }) {
            state = state.filter((item) => item.id !== payload)
            return state
        },
        editTodo(state, { payload }) {
            state = state.map((item) => {
                if (item.id === payload) {
                    item.edit = false
                }
                return item
            })
        },
        checkboxFunction(state, { payload }) {
            state = state.map((item) => {
                if (item.id === payload) {
                    item.checked = !item.checked
                }
                return item
            })
        },
        confirmTodo(state, { payload }) {
            state = state.map((item) => {
                if (item.id === payload.id) {
                    item.todo = payload.inputValue
                }
                return item
            })
        }
    }
})

export const { addTodo, removeTodo, editTodo, checkboxFunction, confirmTodo } = TodoSlice.actions
export default TodoSlice.reducer