import { Box, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'

const NavbarWithSubmenu = () => {
  return (
    <Box pos='fixed' w='full' zIndex='3'>
    <Box boxShadow='0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'>
      <Box as="header" bg={mode('white', 'gray.800')}  position="relative" zIndex="10">
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <NavContent.Mobile
            display={{
              base: 'flex',
              lg: 'none',
            }}
          />
          <NavContent.Desktop
            display={{
              base: 'none',
              lg: 'flex',
            }}
          />
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default NavbarWithSubmenu
