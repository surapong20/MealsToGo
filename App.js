import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


export default function App() {
  let [oswaldfontsLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latofontsLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldfontsLoaded || latofontsLoaded) {
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurantsScreen/>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>  
    </>
  );
}


