import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './DurationSwitch'
import { PricingCard } from './PricingCard'

const RegistrationModel = () => {
  return (
    <Box as="section" py="24">
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
        <Flex
          direction="column"
          align={{
            base: 'flex-start',
            md: 'center',
          }}
          maxW="2xl"
          mx="auto"
        >
          <Heading
            as="h1"
            size="xl"
            letterSpacing="tight"
            fontWeight="extrabold"
            textAlign={{
              base: 'start',
              md: 'center',
            }}
          >
            PARTNERSHIPS
          </Heading>
          {/* <Text
            mt="4"
            fontSize="xl"
            textAlign={{
              base: 'left',
              md: 'center',
            }}
            color={mode('gray.600', 'gray.400')}
          >
            For growing teams and businesses
          </Text> */}
          {/* <DurationSwitcher mt="10" /> */}
        </Flex>

        <Flex
          direction={{
            base: 'column',
            lg: 'row',
          }}
          maxW={{
            base: '560px',
            lg: 'unset',
          }}
          mx="auto"
          mt="10"
          bg={mode('white', 'gray.700')}
          rounded="xl"
        >
          <PricingCard
            flex="1"
            colorScheme="red"
            name="Universities and High Schools in Vietnam"
            description="Faculty and student Co-Lead or co- facilitate sessions"
          />
          <Box
            w={{
              base: 'unset',
              lg: '1px',
            }}
            minH="0"
            h={{
              base: '1px',
              lg: 'unset',
            }}
            bg={mode('gray.100', 'gray.600')}
          />
           <PricingCard
            flex="1"
            colorScheme="red"
            name="Educational Service Providers"
            description="We invite Edutech providers to put up booths at the conference venue. Product demos are allowed."
          />
          <Box
            w={{
              base: 'unset',
              lg: '1px',
            }}
            minH="0"
            h={{
              base: '1px',
              lg: 'unset',
            }}
            bg={mode('gray.100', 'gray.600')}
          />
           <PricingCard
            flex="1"
            colorScheme="red"
            name="Not for Profit organizations"
            description="Participate in panels, share educational support programs"
          />
        </Flex>
        
      </Box>
    </Box>
  )
}

export default RegistrationModel