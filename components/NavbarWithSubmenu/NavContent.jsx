import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  useColorModeValue as mode,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'

import { NavLink } from './NavLink'
import { NavMenu } from './NavMenu'
import { Submenu } from './Submenu'
import { ToggleButton } from './ToggleButton'
import { links } from './_data'
import Link from 'next/link'

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Link href='/' passHref>
        <Box as="a" rel="home" mx="auto">
          <Img src='logo.png' maxH='32px'/>
        </Box>
        </Link>
        <Box
          visibility={{
            base: 'hidden',
            sm: 'visible',
          }}
        >
          <Button as="a" bg='none'
        color='#CD3C3F'
        border='2px #CD3C3F solid'>
            Register now
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          ),
        )}
        <Button bg='none'
        color='#CD3C3F'
        border='2px #CD3C3F solid' w="full" size="lg" mt="5">
          Register now
        </Button>
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props) => {
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Link href='/' passHref>
        <Box as="a" href="#" rel="home">
          <Img src='logo.png' maxH='24px'/>
          <Heading as='marker' mt='2' fontSize='xs'>TEACHING AND LEARNING CONFERENCE 2022</Heading>
        </Box>
      </Link>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>    
      <Button 
        bg='none'
        color='#CD3C3F'
        border='2px #CD3C3F solid'
        fontWeight="bold"
        disabled
      >
        Register now
      </Button>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
