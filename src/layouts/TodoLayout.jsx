import { Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header/Header';

const TodoLayout = ({children}) => {
    return (
        <Flex w={'full'} direction={'column'}>
            <Header />
            {children}
        </Flex>
    );
}

export default TodoLayout;
