import {
  Box,
  Button,
  Center,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'
const Hero = () => {
  return (
    <Box as="section" pt="16" pb="24">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
        >
          <Box
            flex="1"
            maxW='xl'
          >
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color='#CD3C3F'
              letterSpacing="wide"
            >
              12 - 14 May 2022
            </Text>
            <Heading
              as="h1"
              size="3xl"
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Teaching & Learning  <Text as='marker' color='#CD3C3F'> Conference </Text>
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button size="lg" minW="210px" bg='#CD3C3F' color='white' 
              _hover={{bg: 'none', color: '#CD3C3F', border:'2px #CD3C3F solid'}} 
              height="14" px="8">
                Get Started
              </Button>
              <Button
                size="lg"
                bg="white"
                color="gray.900"
                _hover={{
                  bg: 'gray.50',
                }}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<Box as={HiPlay} fontSize="2xl" />}
              >
                Watch Latest Event
              </Button>
            </Stack>
            {/* <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Already have an account store?{' '}
              <Link href="#" textDecoration="underline">
                Log in
              </Link>
            </Text> */}
          </Box>
          <Box
            pos="relative"
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}
          >
            <Center
            h='100%'
            >
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              objectFit="cover"
              src="hero.png"
              alt="Screening talent"
            />
            </Center>
           
            <Img
              pos="absolute"
              src='hero_background.svg'
              w="100%"
              h="100%"
              top="-4"
              left="-4"

            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero