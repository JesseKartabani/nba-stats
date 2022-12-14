import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.arrowContainer}>
        {/* Navigate back arrow */}
        <TouchableOpacity
          style={styles.arrowLeft}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrowleft" color="white" type="antdesign" />
        </TouchableOpacity>

        {/* Navigate forward arrow */}
        <TouchableOpacity
          style={styles.arrowRight}
          onPress={() => navigation.navigate("Player Career Stats")}
        >
          <Icon name="arrowright" color="white" type="antdesign" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  arrowLeft: {
    marginRight: 40,
  },
});
