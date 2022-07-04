import { Text } from '@chakra-ui/react'
import React from 'react'

const ItineraryCardTitle = ({title}) => {
  return (
    <div className='card-title'>
       <Text className='text' fontSize="1rem">{title}</Text>
    </div>)
   
}

export default ItineraryCardTitle