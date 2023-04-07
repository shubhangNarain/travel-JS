import React from 'react'

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
  Card,
  HStack
} from '@chakra-ui/react';

import CardComponent from '../components/CardComponent'

export default function CardSection() {
  const data = [
    {
      title: 'Boost your conversion rate',
    },
    {
      title: 'How to use search engine optimization to drive traffic to your site',
    },
    {
      title: 'Improve your customer experience',
    },
  ];

  const CardList = () => {
    return data.map((item) => <CardComponent title={item.title} />)
  }
  
  return (
    <HStack><CardList/></HStack>
  )
}
