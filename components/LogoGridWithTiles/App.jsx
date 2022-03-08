import {
  Center,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import * as logos from './Logos'

const Partnership = () => (
  <Container
    py={{
      base: '12',
      md: '16',
    }}
    maxWidth='7xl'
  >
    <Stack spacing="8">
      <Text
        fontSize={{
          base: 'md',
          md: 'lg',
        }}
        fontWeight="medium"
        color="muted"
        textAlign="center"
      >
        In partnering with
      </Text>
      <SimpleGrid
        gap={{
          base: '4',
          md: '6',
        }}
        columns={{
          base: 2,
          md: 3,
        }}
      >
        {Object.entries(logos).map(([name, Logo]) => (
          <Center
            key={name}
            bg="bg-surface"
            py={{
              base: '4',
              md: '8',
            }}
            boxShadow={mode('sm', 'sm-dark')}
            borderRadius="lg"
          >
            <Logo
              h={{
                base: '8',
                md: '10',
              }}
              maxW="180px"
              fill="emphasized"
            />
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)

export default Partnership