import { Box, Button, Flex, Img, List, ListIcon, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
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
              <Tab _focus={{ boxShadow: "none", }}>Thursday, May 12</Tab>
              <Tab _focus={{ boxShadow: "none", }}>Friday, May 13</Tab>
              <Tab _focus={{ boxShadow: "none", }}>Saturday, May 14</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>
                 <Timeline time='17:00-20:00' title='Welcome reception, welcome speeches'>
                    <Img my='4' draggable='false' rounded='2xl' src='welcome.jpeg'/> 
                   </Timeline>

                </Box>
              </TabPanel>
              <TabPanel>
              <Box>
                 <Timeline time='7:30-9:00'>
                 <Text fontWeight='bold' fontSize='md'>Breakfast</Text>
                 <Text mt='2' fontWeight='bold' fontSize='md'>Vendor Showcase</Text>
                 <Text mt='2' fontWeight='bold' fontSize='md'>Poster presentation</Text>
                   </Timeline>
                 <Timeline time='9:00-9:45' title='Keynote address (45 mins)'/>
                 <Timeline time='10:00-10:45' title='Parallel Sessions: Case Studies in Active & Learning Approaches'/>
                    
                 <Timeline time='11:15-12:15' title='Parallel Sessions: Using Immersive Technologies to Drive Learning'/>

                 <Timeline time='12:15-13:00' title='Lunch and Vendor Showcase'/>
                
                 <Timeline time='13:00-13:45' title='Parallel Sessions: Entrepreneurship Education Student Partnerships in Creating Learning Experiences'/>

                 <Timeline time='14:00-14:45' title='Parallel sessions'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Student Panel Discussion 1: How do we learn
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        VinUni Campus and Learning Spaces Tour
                      </ListItem>
                    </List>
                  </Timeline>
                  <Timeline time='15:00-15:45' title='Parallel sessions'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Panel Discussion 2: The Skills and Competencies for a 21st century college graduate
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        VinUni Campus and Learning Spaces Tour
                      </ListItem>
                    </List>
                  </Timeline>
                  <Timeline time='16:00-16:45' title='Parallel sessions'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Panel Discussion 3: Entrepreneurship Education
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Simulation Center and Anatomy Lab tour and sample class
                      </ListItem>
                    </List>
                  </Timeline>
                 <Timeline time='17:00-19:00' title='Award Recipient Showcase & Social Hour'/>
                </Box>
              </TabPanel>
              <TabPanel>
              <Box>
                 <Timeline time='7:30-9:00'>
                 <Text fontWeight='bold' fontSize='md'>Breakfast</Text>
                 <Text mt='2' fontWeight='bold' fontSize='md'>Vendor Showcase</Text>
                 <Text mt='2' fontWeight='bold' fontSize='md'>Poster Session</Text>
                   </Timeline>
                 <Timeline time='9:00-9:50' title='Keynote speech'/>
                 <Timeline time='10:00-10:45' title='Parallel Sessions: K through 12 education in Vietnam: innovative approaches, trends, support models'/>
                 <Timeline time='11:00-11:45' title='Parallel Sessions: Case Studies in Experiential and Service Learning'/>
                 <Timeline time='12:00-13:00' title='Lunch'/>
                 <Timeline time='13:00-14:00' title='Parallel sessions (60 mins): Inclusive Teaching Practices in the Classroom and Performance Assessments'/>
                 <Timeline time='14:00-14:45' title='Student Panel 2: Topic TBD'/>
                 <Timeline time='15:00-16:00' title='Parallel Sessions (or Panel Discussion): Industry and Community Partnerships to Enhance Learning'/>
                 <Timeline time='16:00-17:00' title='Award Presentations'/>
                 <Timeline time='17:00-18:00' title='Social Hour'/>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

const Timeline = (props) => {
  return (
    <Flex mb='8'>
      <Button _hover={{}} color='white' bg='#CD3C3F' rounded='lg' fontSize='xs' mr='8'>
        {props.time}
      </Button>
      <Box py='2' px='8' w='100%' border='2px #E2E8F0 solid' rounded='lg' fontSize='xs'>
        {/* <Text fontWeight='semibold'>{props.time}</Text> */}
        <Text fontWeight='bold' fontSize='md'>{props.title}</Text>
        {props.children}
      </Box>
    </Flex>
  )
}