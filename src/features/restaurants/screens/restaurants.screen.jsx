import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState } from "react";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
  background-color: light;
`;

const RastarantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: lightgreen;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RastarantListContainer>
        <RestaurantInfoCard />
      </RastarantListContainer>
    </SafeArea>
  );
};
