import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
    return (
        <Flex w={'full'} justify={'center'} p={8} >
            <Text fontSize={'50px'} fontWeight={600} fontFamily={'PT Sans'}>Welcome Home!</Text>
        </Flex>
    );
}

export default Home;
