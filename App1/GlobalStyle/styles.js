import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Modal: {
      width:150,
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      width: 350,
      height: 450,
      padding: 50,
      paddingBottom: 100,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalInput: {
      backgroundColor: "Black"
    },
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 10,
    },
    item: {
      backgroundColor: '#696969',
      padding: 20,
      marginVertical: 8,
      borderRadius: 5,
    },
    header: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      fontSize: 32
    },
    title: {
      fontSize: 24,
      color: "white",
    },
    Text: {
      fontSize: 40,
      margin: 10,
      textAlign: "center",
      textDecorationLine: "underline"
    },
    bottom_nav_bar: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: 40,
      justifyContent: "center"
    },
    button: {
      fontSize: 20,
      color:"white",
      margin:10,
      padding: 5,
      borderRadius: 5,
      textDecorationLine: "underline",
      backgroundColor: '#B0B0B0'
    },
    input: {
      fontSize: 20,
      borderRadius: 10,
      margin: 10,
      padding: 10,
      width: '100%',
      backgroundColor: '#f0f0f0',
      borderWidth: 1,
      borderColor: '#ccc',
      color: '#000',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
  });
  