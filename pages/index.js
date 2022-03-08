import { Box } from '@chakra-ui/react'
import AgendaThemes from '../components/AgendaThemes/AgendaThemes'
import Footer from '../components/FooterWithFourColumns/Footer'
import Hero from '../components/HeroWithVideo/Hero'
import Partnership from '../components/LogoGridWithTiles/App'
import NavbarWithSubmenu from '../components/NavbarWithSubmenu/NavbarWithSubmenu'
import Newsletter from '../components/Newsletter'
import ScheduleComponent from '../components/Schedule/Schedule'
import Speakers from '../components/SpeakersWithCentredLayout/Speakers'

export default function Home() {
  return (
    <Box>
      <NavbarWithSubmenu />
      <Hero />
      <AgendaThemes />
      {/* <ScheduleComponent /> */}
      <Speakers />
      <Partnership />
      <Newsletter />
      <Footer />
    </Box>
  )
}
