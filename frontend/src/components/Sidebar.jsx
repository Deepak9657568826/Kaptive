
import React from 'react';
import { Box, VStack, Text, Button } from '@chakra-ui/react';


const Sidebar = () => {

  return (
    <Box w="200px" bg="purple.700" color="white" p="4">
      <Text fontSize="2xl" fontWeight="bold">PLSE</Text>
      <VStack align="start" mt="4" spacing="4">
        <Button variant="ghost" colorScheme="whiteAlpha" color='white'>Charts</Button>
        <Button variant="ghost" colorScheme="whiteAlpha" color='white'>Tables</Button>
        <Button variant="ghost" colorScheme="whiteAlpha" color='white'>Reports</Button>
        <Button variant="ghost" colorScheme="whiteAlpha" color='white'>Forecast</Button>
      </VStack>
      <Box mt="350px" >
      <Box>
        <Box> </Box>
        <Text>Deepak Wayzode</Text>
        </Box>
        <Button  mt={"20px"}variant="link" color="white">Logout</Button>
      </Box>
    </Box>
  );
};

export  {Sidebar};
