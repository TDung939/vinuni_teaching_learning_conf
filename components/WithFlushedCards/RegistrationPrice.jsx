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

const RegistrationPrice = () => {
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
            size="2xl"
            letterSpacing="tight"
            fontWeight="extrabold"
            textAlign={{
              base: 'start',
              md: 'center',
            }}
          >
            Find the perfect plan for you
          </Heading>
          <Text
            mt="4"
            fontSize="xl"
            textAlign={{
              base: 'left',
              md: 'center',
            }}
            color={mode('gray.600', 'gray.400')}
          >
            For growing teams and businesses
          </Text>
          <DurationSwitcher mt="10" />
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
            colorScheme="blue"
            name="Basic"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$10"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
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
            name="Plus"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$50"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
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
            name="Plus"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$50"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
          />
        </Flex>
        
      </Box>
    </Box>
  )
}

export default RegistrationPrice