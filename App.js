import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "lightblue" }}>
          <Text>list1</Text>
        </View>
      </View>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 20,
    backgroundColor: "lightgreen",
  },
});
