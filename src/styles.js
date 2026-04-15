import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
    maxWidth: 1280,
    marginHorizontal: 'auto', 
    padding: 32, 
    alignItems: 'center', 
    backgroundColor: '#c541b5'
  },
  card: {
    padding: 32, // 2em ~ 32px
    backgroundColor: '#c541b5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,

    marginVertical: 10,
  },
  readTheDocs: {
    color: '#888',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});