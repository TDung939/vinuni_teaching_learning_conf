import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

const Newsletter = () => (
  <Container
    maxW='full'
    py={{
      base: '16',
      md: '24',
    }}
  >
    <Box
      bg="bg-surface"
      py={{
        base: '10',
        md: '16',
      }}
      px="6"
      borderRadius="lg"
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        align="center"
      >
        <Stack
          spacing={{
            base: '4',
            md: '5',
          }}
          textAlign="center"
        >

            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color='#CD3C3F'
              letterSpacing="wide"
            >
              Get notified now
            </Text>
          <Heading
            size='3xl'
          >
            Be the first to hear from us
          </Heading>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="muted"
          >
            Join our mailing list and be the first to hear about the latest event news
          </Text>
        </Stack>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          width="full"
          maxW={{
            md: 'lg',
          }}
          spacing="4"
        >
          <FormControl>
            <Input type="email" size="lg" placeholder="Enter your email" />
          </FormControl>
          <Button  
          bg='#CD3C3F'
          color='white'
          size="lg"
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Container>
)

export default Newsletter