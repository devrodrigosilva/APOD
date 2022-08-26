import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme'; 
import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import { Home } from './src/ui/screens/Home/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold })

  //splashScreen
  // if(isLoading){
  //   return <AppLoading />
  // }

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}