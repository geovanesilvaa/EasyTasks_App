import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 50,
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  fabButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});

export default styles;
