import React from 'react'
import { ICard } from '../../interfaces/ICard';
import { Card } from "flowbite-react";

const CardComponent:React.FC<ICard> = ({content}) => {
  return (
    <Card>
        {content}
    </Card>
  )
}

export default CardComponent;