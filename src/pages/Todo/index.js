import { Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, checkboxFunction, confirmTodo, editTodo, removeTodo } from '../../store/slices/TodoSlice';
import { useForm } from 'react-hook-form';

const Todo = () => {
    const { register, handleSubmit, reset } = useForm()
    const [inputValue, setInputValue] = useState('')
    const state = useSelector((state) => state.todo)
    console.log(state)
    const dispatch = useDispatch()
    const submit = (item) => {
        dispatch(addTodo(item))
        reset()
    }

    return (
        <Flex w={'full'} p={12} justify={'center'}>
            <Flex borderRadius={'15px'} direction={'column'} p={6} color={'white'} w={'full'} maxW={'500px'} justify={'center'} align={'center'} bg={'#14181F'}>
                <Text fontWeight={600} fontSize={'30px'}>To Do List</Text>
                <form onSubmit={handleSubmit(submit)}>
                    <Flex align={'center'} pt={12} w={'full'} gap={6} >
                        <Input {...register('todo', { required: true })} color={'white'} placeholder='Write your To-Do here..' />
                        <Button type='submit'>Add To Do</Button>
                    </Flex>
                </form>
                <Flex pt={10} gap={4} w={'full'} align={'center'} justify={'center'} direction={'column'}>
                    {
                        state?.map((item) => (
                            <Flex key={item.id} w={'full'} gap={4} justify={'center'} align={'center'}>
                                <Checkbox checked={item.checked} onChange={() => dispatch(checkboxFunction(item.id))} />
                                <Input textDecoration={item.checked ? 'line-through' : 'none'} defaultValue={item.todo} disabled={item.edit} onChange={(e) => setInputValue(e.target.value)} color={'white'} />
                                <Button pl={6} pr={6} onClick={() => dispatch(editTodo(item.id))}>Edit</Button>
                                <Button pl={6} pr={6} onClick={() => dispatch(confirmTodo({ inputValue, id: item.id }))}>Confirm</Button>
                                <Button pl={6} pr={6} onClick={() => dispatch(removeTodo(item.id))}>Delete</Button>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Todo;
