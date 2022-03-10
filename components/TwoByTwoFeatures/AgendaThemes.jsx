import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FcAssistant, FcBusiness, FcButtingIn, FcCustomerSupport, FcDoughnutChart, FcInspection, FcInternal, FcManager, FcMultipleDevices, FcOk, FcPrivacy, FcRadarPlot, FcTimeline } from 'react-icons/fc'
import { CTAButton } from './CTAButton'
import { Feature } from './Feature'

const AgendaThemes = () => (
  <Box
  >
  <Box
    as="section"
    maxW="7xl"
    mx="auto"
    py="12"
    px={{
      base: '6',
      md: '8',
    }}
  >


    <Heading
      textAlign='center'
      size="xl"
      lineHeight="short"
      fontWeight="extrabold"
      mt='8'
    >
      THE CONFERENCE THEMES
    </Heading>
    <Text
      size="xs"
      textAlign='center'
      mt='8'
      textTransform="uppercase"
      fontWeight="bold"
      color='#CD3C3F'
      letterSpacing="wide"
    >
      EXPLORE  Themes
    </Text>

    <SimpleGrid
      mt='12'
      columns={{
        base: 1,
        md: 2,
      }}
      spacingX="10"
      spacingY={{
        base: '8',
        md: '24',
      }}
    >
      <Feature title="Co-Creating Learning Experiences through Student Partnership" icon={<FcManager />}>
        {/* At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus. */}
      </Feature>
      <Feature title="Entrepreneurship Education" icon={<FcTimeline />}>
        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore. */}
      </Feature>
      <Feature title="Active & Experiential Learning" icon={<FcDoughnutChart />}>
        {/* At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus. */}
      </Feature>
      <Feature title="Technology to Build Learning Connections" icon={<FcMultipleDevices />}>
        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore. */}
      </Feature>
      <Feature title="Leave No Child Behind: Inclusive Teaching Practices" icon={<FcRadarPlot />}>
        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore. */}
      </Feature>
      <Feature title="Industry and Community Partnerships to Enhance Learning" icon={<FcBusiness />}>
        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore. */}
      </Feature>
    </SimpleGrid>
  </Box>
  </Box>
)

export default AgendaThemes