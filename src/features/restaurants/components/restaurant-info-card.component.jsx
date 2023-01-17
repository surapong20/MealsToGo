import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "react-native";

const RastaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurentCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ ...restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://tiermaker.com/images/templates/genshin-impact-food-24-1154603/11546031642848436.png",
    ],
    address = "100 some random streets",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RastaurantCard elevation={5}>
      <RestaurentCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title> 
        <Address>{address}</Address>
      </Info>
    </RastaurantCard>
  );
};
