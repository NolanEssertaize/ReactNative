import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Button, Alert ,Modal, Pressable, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

var DATA = []

function create_goal(title, desc){
  DATA.push({
    title: title,
    data: [desc]
  });
  title = null
  desc = null
  Alert.alert('Created');
}

export default function App() {
  const [modalCreate, setmodalCreate] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const titleEdit = "";
  const descEdit = "";
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top']}>
        <Text style={styles.Text}>Goal</Text>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
                <Pressable
                style={styles.button}
                onPress={() => setmodalEdit(!modalEdit)}
                >
                <Text>Edit</Text></Pressable>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </SafeAreaProvider>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalCreate}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setmodalCreate(!modalCreate);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput 
              style={styles.input} 
              placeholder='Title' 
              onChangeText={(text) => setTitle(text)}
              ></TextInput>

              <TextInput 
              style={styles.input} 
              placeholder='Description'
              onChangeText={(text) => setDesc(text)}
              ></TextInput>

              <Pressable
                style={[styles.button]}
                onPress={() => create_goal(title, desc)}>
                <Text style={styles.button}>Create Goal</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={() => setmodalCreate(!modalCreate)}>
                <Text style={styles.button}>Return</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEdit}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setmodalCreate(!modalEdit);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput 
              style={styles.input} 
              placeholder='Title' 
              onChangeText={(text) => setTitle(text)}
              ></TextInput>

              <TextInput 
              style={styles.input} 
              placeholder='Description'
              onChangeText={(text) => setDesc(text)}
              ></TextInput>

              <Pressable
                style={[styles.button]}
                onPress={() => create_goal(title, desc)}>
                <Text style={styles.button}>Edit Goal</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={(item, i) => console.log("item: ",item," i : ", i)}>
                <Text style={styles.button}>Return</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.bottom_nav_bar}>
        <Pressable
          style={[styles.button]}
          onPress={() => setmodalCreate(true)}>
          <Text style={styles.button}>Create Goal</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
    fontSize: 32,
    backgroundColor: '#fff',
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
    padding: 5,
    borderRadius: 5,
    textDecorationLine: "underline",
    backgroundColor: '#B0B0B0'
  },
  input: {
    fontSize: 20,
    borderRadius: 10,
    margin: 10,  
  }
});
