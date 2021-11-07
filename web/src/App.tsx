import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  HStack,
  IconButton,
  Flex,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ContentRequest, HomePage, MyDashboard, TeamDashboard} from "./routes"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink,
} from "react-router-dom";



const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  return (
  <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
    <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
      <IconButton
        size={'lg'}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={'Open Menu'}
        display={{ md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack spacing={8} alignItems={'center'}>
        <HStack
          as={'nav'}
          spacing={8}
          display={{ base: 'none', md: 'flex' }}>
          <RouteLink to="/">Home </RouteLink>
          <RouteLink to="/content-request">Content Request </RouteLink>
          <RouteLink to="/my-dashboard">My Dashboard </RouteLink>
        </HStack>
      </HStack>
    </Flex>
    {isOpen ? (
      <Box pb={4} display={{ md: 'none' }}>
        <Stack as={'nav'} spacing={4}>
          <RouteLink to="/">Home </RouteLink>
          <RouteLink to="/content-request">Content Request </RouteLink>
          <RouteLink to="/my-dashboard">My Dashboard </RouteLink>
          <RouteLink to="/team-dashboard">Team Dashboard </RouteLink>
        </Stack>
      </Box>
    ) : null}
  </Box>
)};

export const App = () => {
  return (<>
  <ChakraProvider theme={theme}>
    <Router>
      <NavBar />
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/content-request" element={ <ContentRequest /> } > </Route>
        <Route path="/my-dashboard" element = { <MyDashboard /> }> </Route>
        <Route path="/team-dashboard" element = { <TeamDashboard /> }> </Route>
      </Routes>
      </Grid>
    </Router>

  </ChakraProvider>
  </>
)}
