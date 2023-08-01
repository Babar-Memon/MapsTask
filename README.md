# Venues Demo

This is a task project to show venue details.<br>
Every marker on the map displays a location that can be selected to have its details viewed.

## Prerequisites

- [Node.js >=16.0.0 <17.0.0 Active LTS](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Expo-cli >= 6 ](https://expo.dev/)

## Base dependencies

- [react-native-maps](https://github.com/react-native-maps/react-native-maps) for map display.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) for state management and networking.
- [react-redux](https://redux.js.org/) for state management.
- [@gorhom/bottom-sheet](https://gorhom.github.io/react-native-bottom-sheet/) to display card sheet for venue details
- [pinar](https://github.com/kristerkari/pinar) for carousel ease.
- [react-native-rating-element](https://github.com/ui-ninja/react-native-rating-element) for star rating display.
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/) for gesture handling in react native.
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) for animation.

## Run Development App

- Ensure you have [expo development environment setup](https://reactnative.dev/docs/next/environment-setup?guide=quickstart)
- Go to your project's root folder and run `npm install` or `yarn install`.

### Android

- Open a simulator or open [Expo Go](https://expo.dev/client) in your physical device.
- Run `npm run android` or `yarn android`.

Note: If you chose to run on physical device, you have to scan the QR code that in generated in the server terminal with the Expo Go app.

### IOS

#### Important: You need a Mac system or iOS device to run the app on iOS

- Run `npm run ios` or `yarn ios` if you have an iOS simulator opened
- Run `npm start` or `yarn start` then scan the QR code from the terminal with your iOS device with the camera app.

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `hooks`: This folder contains all hooks that are used in the app.
  - `constants`: Folder to store any kind of constant that the app needs.
  - `components`: Folder to store any common component that is used through the app.
      - `Component`: Each component be stored inside its folder and inside it a file for its code and a seperate one for styles.
        - `index.tsx`
        - `styles.tsx`
      - `shared`: This folder contains components that can be shared universally among screens or other components.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen would be stored inside its folder and inside it a file for its code and a separate one for the styles.
      - `index.tsx`
      - `styles.ts`
  - `store`: Folder to initialize store and connect reducers.
      - `slices`: Global state with the help of redux toolkit.
  - `services`: Folder to put all the network services that are used with redux toolkit query.
- `App.js`: Main component that starts your whole app.
