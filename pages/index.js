import { Box } from '@chakra-ui/react'
import Footer from '../components/FooterWithFourColumns/Footer'
import Hero from '../components/HeroWithVideo/Hero'
import Partnership from '../components/LogoGridWithTiles/App'
import NavbarWithSubmenu from '../components/NavbarWithSubmenu/NavbarWithSubmenu'
import Newsletter from '../components/Newsletter'
import ScheduleComponent from '../components/Schedule/Schedule'
import Speakers from '../components/SpeakersWithCentredLayout/Speakers'
import TeachingExcellenceAwards from '../components/TestimonialWithVideo/TeachingExcellenceAwards'
import AgendaThemes from '../components/TwoByTwoFeatures/AgendaThemes'
import RegistrationPrice from '../components/WithFlushedCards/RegistrationPrice'

export default function Home() {
  return (
    <Box>
      <NavbarWithSubmenu />
      <Hero />
      <AgendaThemes />
      <TeachingExcellenceAwards/>
      {/* <RegistrationPrice/> */}
      {/* <Speakers />
      <Partnership /> */}
      <Newsletter />
      <Footer />
    </Box>
  )
}
