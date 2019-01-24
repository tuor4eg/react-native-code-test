#  Ombori Project (React Native Code Test)

Ombori Project is a React Native written mobile application. It's purpose is to show list of people from [reqres.in](https://reqres.in/).

## Motivation

This app has to demonstrate level of applicant's knowledge of React Native and his common programming skills.

## Presentation

When the app starts, at first, it demonstrate loading screen. It represents pulsing animation, that lasts 3 sec. Then main screen of application loads.

![Loading Screen](./screenshots/01_loadScreen.png)

Main screen shows the list of fetched peolpe [reqres.in](https://reqres.in/). 
When main screen loads it begins to request destination URL and display people. 
Every item in the list shows person's avatar, first name and last name. 
When list is out of phone screen's limit, the loading stops. 

![Main Screen](./screenshots/02_mainScreen.png)

Wher user starts to scroll page, the loading continues. It marks by spinning indicator at the bottom of the screen.

![Main Screen Load](./screenshots/03_mainScreen_load.png)

If the app has loaded all of data, and user try to scroll down, standard Andriod's semicircle-shape indicator shows that no more people can be loaded.

## Technology

The application's written in React Native framework. It consists of five modules.
1. index.js - React Naive component, the main module, which import all others and provide the logic of application.
2. AnimationPulse.js - React Native component for rendering the loading screen. It contains animated seqence that uses the React Native Animated library.
3. Api.js - JavaScript module with API to connect to destination server. This module provides lower level of abstraction in application's model.
4. UserList.js - React Native component for rendering list of people. It consists of title and scrollable list view.
5. styles.js -  Module contains all styles, that app's components use.

## Linter

Before submitting this code, all of linter's notices was checked and fixed. The only error was about function "fetch". The applicant added this policy to .eslintrc:
```"javascript
globals": {
  "fetch": false
}
```
Fetch is not a React Native's standard function, so it causes linter's error. But it's JavaScript's function that works from the box well. So, it hasn't be declared.

## Author

The Ombori Project's made by [tuor4eg](https://github.com/tuor4eg). Thanks for your attention!