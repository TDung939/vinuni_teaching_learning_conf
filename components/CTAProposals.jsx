import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'

const CTAProposals = () => (
  <Container
    py={{
      base: '16',
      md: '24',
    }}
    maxW='7xl'
  >
    <Box
      bg="bg-surface"
      boxShadow='2xl'
      borderRadius="xl"
      px={{
        base: '6',
        lg: '16',
      }}
      py={{
        base: '10',
        lg: '16',
      }}
    >
      <Stack
        spacing="8"
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justify="space-between"
      >
        <Stack spacing="4" maxW="2xl">
          <Heading size="xl">Call for Proposals</Heading>
          {/* <Text
            color="muted"
            fontSize={useBreakpointValue({
              base: 'lg',
              lg: 'xl',
            })}
          >
            With this beautiful and responsive React components you will realize your next project
            in no time.
          </Text> */}
        </Stack>
        <Stack
          spacing="3"
          direction={{
            base: 'column',
            sm: 'row',
          }}
          justify={{
            base: 'start',
          }}
        >
          <Button size="lg" minW="210px" bg='#CD3C3F' color='white' 
              _hover={{bg: 'none', color: '#CD3C3F', border:'2px #CD3C3F solid'}} 
              height="14" px="8">
                Submit a Proposal
              </Button>
              <Link href='#' passHref>
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
                >
                  More info
                </Button>
              </Link>
        </Stack>
      </Stack>
    </Box>
  </Container>
)

export default CTAProposals