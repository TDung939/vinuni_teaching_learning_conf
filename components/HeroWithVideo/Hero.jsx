import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiCalendar, HiPlay } from 'react-icons/hi'
import Link from 'next/link'
const Hero = () => {
  return (
    <Box as="section" pt="32" pb="24"  pos='relative' bg='gray.50'>
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
              fontSize='lg'
              fontWeight="bold"
              color='#CD3C3F'
              letterSpacing="wide"
            >
              12-14 MAY 2022, VINUNIVERSITY CAMPUS
            </Text>
            <Heading
              as="h1"
              size="xl"
              mt="4"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              VINUNIVERSITY TEACHING AND LEARNING CONFERENCE 2022
            </Heading>
            <Heading
              as="h1"
              size="lg"
              mt="4"
              color='#CD3C3F'
              letterSpacing="tight"
            >
              Co-Creating Learning for the Future
            </Heading>
            <Text color='gray.600' mt="4" fontSize="lg" fontWeight="medium">
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
              <Link href='/schedule' passHref>
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
                  leftIcon={<Box as={HiCalendar} fontSize="2xl" />}
                >
                  See the Schedule
                </Button>
              </Link>
            </Stack>
            {/* <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Already have an account store?{' '}
              <Link href="#" textDecoration="underline">
                Log in
              </Link>
            </Text> */}
          </Box>
           <Box
        pos={{ lg: 'absolute' }}
        insetY={{ lg: '0' }}
        insetEnd={{ lg: '0' }}
        bg="gray.50"
        w={{ base: 'full', lg: '50%' }}
        height={{ base: '96', lg: 'full' }}
        sx={{
          clipPath: { lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src="https://vinuni.edu.vn/wp-content/uploads/2020/07/DJI_0146.jpg"
          alt="VinUniversity"
        />
      </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero