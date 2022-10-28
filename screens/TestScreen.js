import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

const TestScreen = () => {
  return (
    <SafeAreaView>
      <Text>TestScreen</Text>
      <NavOptions />
    </SafeAreaView>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
