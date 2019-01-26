/**
 * Application's styles
 * https://github.com/tuor4eg/
 *
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';

const colors = {
  title: '#F1F1F1',
  separator: '#D2D2D2',
  innerCircle: '#5AC81E',
  middleCircle: '#E6FAB4',
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  loadWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.title,
    height: 56,
    borderBottomWidth: 1,
    borderColor: colors.separator,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 88,
  },
  cellText: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingRight: 16,
  },
  titleText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    flex: 1,
  },
  flatListItem: {
    paddingLeft: 16,
    paddingRight: 24,
  },
  separator: {
    height: 1,
    backgroundColor: colors.separator,
    marginLeft: 16,
  },
  roundImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  innerCircle: {
    width: 30,
    backgroundColor: colors.innerCircle,
    height: 30,
    borderRadius: 15,
    position: 'absolute',
  },
  middleCircle: {
    width: 90,
    backgroundColor: colors.middleCircle,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default styles;
