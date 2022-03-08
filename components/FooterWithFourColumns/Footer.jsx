import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { links } from './_data'

const Footer = () => (
  <Box bg="bg-surface" >
    <Container maxW='7xl' as="footer" role="contentinfo">
      <Stack
        justify="space-between"
        align="start"
        direction={{
          base: 'column',
          lg: 'row',
        }}
        py={{
          base: '12',
          md: '16',
        }}
        spacing="8"
      >
        <Stack
          spacing={{
            base: '6',
            md: '8',
          }}
          align="start"
        >
          <Img src='logo.png' maxH='32px'/>
          {/* <Text color="muted">Create beautiful websites remarkably fast.</Text> */}
        </Stack>
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
          }}
          gap="8"
          width={{
            base: 'full',
            lg: 'auto',
          }}
        >
          {links.map((group, idx) => (
            <Stack
              key={idx}
              spacing="4"
              minW={{
                lg: '40',
              }}
            >
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Text key={idx} as="a" variant="link" href={link.href}>
                    {link.label}
                  </Text>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} VinUni. All Right Reserved. Privacy Policy
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
)

export default Footer