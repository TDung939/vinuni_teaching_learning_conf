import { chakra, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
const DesktopNavLink = React.forwardRef((props, ref) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      ref={ref}
      display="inline-block"
      px="4"
      py="6"
      fontWeight="semibold"
      aria-current={active ? 'page' : undefined}
      color={mode('gray.600', 'gray.400')}
      transition="all 0.2s"
      {...rest}
      _hover={{
        color: '#CD3C3F',
      }}
    />
  )
})
DesktopNavLink.displayName = 'DesktopNavLink'

export const MobileNavLink = (props) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      aria-current={active ? 'page' : undefined}
      w="full"
      display="flex"
      alignItems="center"
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  )
}
export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}
