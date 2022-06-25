import { Box, Flex } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
    <footer>
        <Flex justify='space-around'>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </Flex>
        <label>© Copyright 2021 - Todos los derechos reservados</label>
    </footer>
  )
}

export default Footer