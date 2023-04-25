import React from "react";
import {
  // Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View,
  TextArea,
  Pressable,
  Image, 
  Button,
  useDisclose,
  Actionsheet,

} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform,Text } from "react-native";
import Card from "./components/Card";


export default function App() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return (
    <NativeBaseProvider >
       <Box bg="primary.600" py="4" my="40" mx="2" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%">
        <HStack justifyContent="space-between" >
          <Box justifyContent="space-between" >
            <VStack space="2">
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3">
              <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
        </HStack>
      </Box>
<Card text="hello"/>
      <Center>
      <Button onPress={onOpen}>Actionsheet</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content _dragIndicatorWrapper={{
        bg: 'blue.500',
        py: '4'
      }}>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: 'gray.300'
          }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
    </NativeBaseProvider>
  );
}

