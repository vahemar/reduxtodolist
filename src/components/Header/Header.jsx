import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <Flex w='full' p={6} justify={'space-evenly'} gap={6} bg={'#14181F'}>
            <Button onClick={() => navigate('/')}>Home</Button>
            <Button onClick={() => navigate('/todo')}>Todo</Button>
        </Flex>
    );
}

export default Header;
