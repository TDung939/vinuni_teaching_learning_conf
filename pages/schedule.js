import { Box, Button, Flex, List, ListIcon, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
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
                 <Timeline time='7:30-9:00' title='Vendor Showcase'/>
                 <Timeline time='9:00-9:45' title='Keynote address (45 mins)'/>
                 <Timeline time='10:00-11:00' title='Parallel Sessions: Case Studies in Innovative Learning Activities in Vietnam'>
                    <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        HASS Case Studies
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        STEME Case Studies
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        BUSINESS Case Studies
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        MEDICINE Case Studies
                      </ListItem>
                    </List>
                  </Timeline>
                 <Timeline time='11:15-12:15' title='Parallel Sessions: Using Immersive Technologies to Drive Learning'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Game and simulation based learning
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Virtual Reality in Teaching
                      </ListItem>
                    </List>
                   </Timeline>
                 <Timeline time='13:00-14:00' title='Parallel Sessions: Social Connections and Storytelling in Teaching'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Social Media to Aid Learning
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Teaching through Storytelling
                      </ListItem>
                    </List>
                  </Timeline>
                 <Timeline time='14:00-14:50' title='Parallel sessions (50 mins)'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Panel Discussion 1: The Shifting Role of the Teacher and Student in Today&apos;s Classroom
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        VinUni Campus and Learning Spaces Tour
                      </ListItem>
                    </List>
                  </Timeline>
                  <Timeline time='14:00-14:50' title='Parallel sessions (50 mins)'>
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
                  <Timeline time='14:00-14:50' title='Parallel sessions (50 mins)'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Panel Discussion 3: So you want to go for postgraduate education? Now what?
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Simulation Center and Anatomy Lab tour and sample class
                      </ListItem>
                    </List>
                  </Timeline>
                 <Timeline time='17:00-18:00' title='Social Hour'/>
                </Box>
              </TabPanel>
              <TabPanel>
              <Box>
                 <Timeline time='7:30-9:00' title='Vendor showcase. Teaching Award nominee showcase.'/>
                 <Timeline time='9:00-9:50' title='Keynote speech'/>
                 <Timeline time='10:00-11:00' title='Parallel Sessions: K through 12 education in Vietnam: innovative approaches, trends, support models'>
                    <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        International partnerships in K-12 education
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Challenges in Rural high school education
                      </ListItem>
                    </List>
                  </Timeline>
                 <Timeline time='11:00-12:00' title='Parallel Sessions:'>
                    <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Experiential Learning in virtual/remote environment
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Flipping the classroom approaches, best practices, cautions
                      </ListItem>
                    </List>
                   </Timeline>
                 <Timeline time='13:00-14:00' title='Parallel sessions (60 mins): Reducing Stress and Fear in the Learning Environment'>
                 <List>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Overcoming Fear in Assessments
                      </ListItem>
                      <ListItem fontSize='md'>
                        <ListIcon as={MdCheckCircle} color='#CD3C3F' />
                        Inclusive teaching: principles and best practices
                      </ListItem>
                    </List>
                   </Timeline>
                 <Timeline time='14:00-15:00' title='Course proposal presentations'/>
                 <Timeline time='15:00-16:00' title='Teaching Award Nominee showcase'/>
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