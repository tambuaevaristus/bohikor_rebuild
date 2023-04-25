import { StyleSheet, Text } from 'react-native'
import React from 'react';
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

export default function Card(props) {
  return (
    <NativeBaseProvider>
        <Box  my="1" borderColor="black" borderWidth="1" mx="1" px="3" py="3">
            <Text>{props.text}</Text>
            <Button isLoading isLoadingText='submiting'>Button</Button>
        </Box>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})