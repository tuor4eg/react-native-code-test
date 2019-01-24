#  Ombori Project (React Native Code Test)

Ombori Project is a mobile application based on the React Native framework. It's purpose is to show list of people from [reqres.in](https://reqres.in/).

## Motivation

This app has been made to demonstrate programming skills, especially with the use of the React Native.

## Presentation

At the application startup the loading screen is shown: pulsing animation that lasts 3 seconds. Then main screen of application loads.

![Loading Screen](./screenshots/01_loadScreen.png)

Main screen contains the list of peolpe, fetched from [reqres.in](https://reqres.in/). 
While loading, the main screen sends requests to the URL and forms the list of people
Every item in the list contains person's avatar, first name and last name. 
When list reaches the end of the screen, the loading stops 

![Main Screen](./screenshots/02_mainScreen.png)

When user starts to scroll page, the loading continues, which is indicated by a bottom spinner.

![Main Screen Load](./screenshots/03_mainScreen_load.png)

If the app has loaded all of the data, and user try to scroll down, standard Android's semicircle-shape indicator shows that no more people can be loaded.

To refresh the list, user have to scroll up and swipe. The screen will become clear and the loading will start over.

## Technology

The application's written in React Native framework. It consists of five modules.
1. index.js - React Naive component, the main module, which imports all others and provides the logic of the application.
2. AnimationPulse.js - React Native component for rendering the loading screen. It contains animated seqence that uses the React Native Animated library.
3. Api.js - JavaScript module with API to connect to the destination server. This module provides lower level of abstraction in application's model.
4. UserList.js - React Native component for rendering the list of people. It consists of the title and the scrollable list view.
5. styles.js -  Module contains all styles, that app's components use.

## Linter

Before submitting this code, all of linter's notices was checked and fixed. The only error was about function "fetch". The applicant added this policy to .eslintrc:
```"javascript
globals": {
  "fetch": false
}
```
Fetch is not a React Native's standard function, so it causes linter's error. But it's JavaScript's function that works from the box well. So, it doesn't be declared.

## Author

The Ombori Project is made by [tuor4eg](https://github.com/tuor4eg). Thanks for your attention!