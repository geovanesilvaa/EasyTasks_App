import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
  },
  areaInput: {
    marginTop: 20,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 47,
    width: '86%',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    borderColor: '#888',
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  btn: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default styles;
