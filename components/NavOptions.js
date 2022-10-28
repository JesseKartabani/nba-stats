import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("TestScreen")}>
        <Icon name="arrowright" color="white" type="antdesign" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
