import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'100vw'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'left'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Dive into the world of 
                <Text
                color={'blue.400'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Nomadism
                </Text>
               with our app
            </Text>
            <Stack direction={'row'}>
                <Button colorScheme='blue' color={'white'} variant='solid'>
                    Login
                </Button>
                <Button colorScheme='blue' color={'blue.400'} variant='outline'>
                    SignUp
                </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }