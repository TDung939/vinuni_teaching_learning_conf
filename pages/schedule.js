import { Box, Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Footer from '../components/FooterWithFourColumns/Footer'
import NavbarWithSubmenu from '../components/NavbarWithSubmenu/NavbarWithSubmenu'

export default function Home() {
  return (
    <Box>
      <NavbarWithSubmenu />
      <Box as="section" pt="32" pb="24"  pos='relative'>
        <Box maxW='7xl' mx='auto'  px={{
            base: '6',
            md: '8',
          }}>
          <Tabs colorScheme='red'>
            <TabList >
              <Tab>Thursday, May 12</Tab>
              <Tab>Friday, May 13</Tab>
              <Tab>Saturday, May 14</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                 <Timeline time='7:30-9:00' title='Breakfast'/>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'/>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

const Timeline = ({time, title}) => {
  return (
    <Flex mb='8'>
      <Button _hover={{}} color='white' bg='#CD3C3F' rounded='lg' fontSize='xs' mr='8'>
        {time}
      </Button>
      <Box py='2' px='8' w='100%' border='2px #E2E8F0 solid' rounded='lg' fontSize='xs'>
        <Text fontWeight='semibold'>{time}</Text>
        <Text fontWeight='bold' fontSize='md'>{title}</Text>
      </Box>
    </Flex>
  )
}