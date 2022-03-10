import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaPlayCircle } from 'react-icons/fa'
import { SampleLogo } from './SampleLogo'
import { Testimonial } from './Testimonial'

const Feature = (props) => {
  const { title, children } = props
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text >{children}</Text>
    </Stack>
  )
}

const TeachingExcellenceAwards = () => {
  return (
    <Box as="section" py="24" bg='gray.50'>
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
        <Grid
          templateColumns={{
            base: '1fr',
            md: '480px 1fr',
          }}
          gap="64px"
        >
          <Box>
            <Heading size="3xl" fontWeight="extrabold">
              TEACHING  <Text as='marker' color='#CD3C3F'>EXCELLENCE</Text> AWARDS
            </Heading>
            <Text mt="6" mb="8" fontSize="lg">
            The Teaching Excellence Awards will recognize the outstanding impact of individuals and teams from around the country who promote excellence in teaching and student centric learning.
            <br/>
            <br/>
            We will provide a platform to share teaching approaches and what makes them innovative, effective and sustainable. We will celebrate their contribution and success in an Awards Ceremony
            </Text>
            <Button size="lg" bg='#CD3C3F' color='white' 
              _hover={{bg: 'none', color: '#CD3C3F', border:'2px #CD3C3F solid'}}  
              minH="14" rightIcon={<BiRightArrowAlt />}>
              Nominate now
            </Button>
            <Testimonial
              author="Guy Kawasaki"
            >
              &ldquo; If you have to put someone on a pedestal, put teachers. They are society&apos;s heroes &rdquo;
            </Testimonial>
          </Box>
          <Box>
            <Center
              bg={mode('white', 'gray.700')}
              shadow="lg"
              minH={{
                base: '320px',
                lg: '480px',
              }}
              rounded="lg"
              bgPos='center'
              bgImage="url('https://vinuni.edu.vn/wp-content/uploads/2021/05/TIEN9754-e1621244791429-670x560.jpg')"
            >
              {/* Replace this with your screenshot */}
              {/* <Box as={FaPlayCircle} fontSize="90px" color="gray.300" /> */}
            </Center>
            <SimpleGrid
              rounded="lg"
              mt="10"
              p={{
                base: '10',
                lg: '0',
              }}
              columns={{
                base: 1,
                lg: 2,
              }}
              spacing="6"
            >
              <Feature>
              Up to five (5) teachers and two (2) teacher teams will be awarded teaching excellence awards. Award recipients receive $500 towards their professional development fund.
              </Feature>
              <Feature>
              We invite award nominations from educators, students, and school/college administrators
              </Feature>
              <Feature>
              A diverse and balanced selection committee will review all nominations. Review criteria and process will be announced, and all proceedings will be documented.
              </Feature>
              <Feature>
              All nominations must be received by April 15, 2022.
              </Feature>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default TeachingExcellenceAwards
