import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Alert, Modal, Pressable, TextInput, ImageBackground} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

var DATA = [
  {
    id: 0,
    title: "Titre exemple",
    data: ["Description exemple"]
  },
]

function create_goal(title, desc){
  DATA.push({
    id: DATA.length,
    title: title,
    data: [desc]
  });

  Alert.alert('Created');
}

function edit_goal(id, newTitle, newDesc) {
  const index = DATA.findIndex(item => item.id === id);
  if (index !== -1) {
    DATA[index] = {
      ...DATA[index],
      title: newTitle,
      data: [newDesc]
    };
    Alert.alert('Updated');
  }
}

export default function App() {
  const [modalCreate, setmodalCreate] = useState(false);
  const [modalEdit, setmodalEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    const item = DATA.find(item => item.id === id);
    if (item) {
      setTitle(item.title);
      setDesc(item.data[0]);
      setEditingId(id);
      setmodalEdit(true);
    }
  };

  const handleEditSubmit = () => {
    if (editingId !== null) {
      edit_goal(editingId, title, desc);
      setmodalEdit(false);
      setTitle('');
      setDesc('');
      setEditingId(null);
    }
  };

  const handleDelete = () => {
    DATA.pop(
      id=editingId
    )
    Alert.alert("Goal deleted")
  }


  return (
    <ImageBackground source={require("./img/background.jpg")} resizeMode="cover" style={styles.image}>  
      <View style={styles.container}> 
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
            <Text style={styles.Text}>Goal</Text>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item, index, section}) => (
                  <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                    <Pressable
                      style={styles.button}
                      onPress={() => handleEdit(section.id)}
                    >
                      <Text>Edit</Text>
                    </Pressable>
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
                  onChangeText={setTitle}
                  value={title}
                />
                <TextInput 
                  style={styles.input} 
                  placeholder='Description'
                  onChangeText={setDesc}
                  value={desc}
                />
                <Pressable
                  style={[styles.button]}
                  onPress={() => {
                    create_goal(title, desc);
                    setTitle('');
                    setDesc('');
                    setmodalCreate(false);
                  }}>
                  <Text style={styles.button}>Create Goal</Text>
                </Pressable>
                <Pressable
                  style={[styles.button]}
                  onPress={() => {
                    setmodalCreate(false);
                    setTitle('');
                    setDesc('');
                  }}>
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
              setmodalEdit(false);
              setTitle('');
              setDesc('');
              setEditingId(null);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput 
                  style={styles.input} 
                  placeholder='Title' 
                  onChangeText={setTitle}
                  value={title}
                />
                <TextInput 
                  style={styles.input} 
                  placeholder='Description'
                  onChangeText={setDesc}
                  value={desc}
                />
                <Pressable
                  style={[styles.button]}
                  onPress={handleEditSubmit}>
                  <Text style={styles.button}>Edit Goal</Text>
                </Pressable>
                <Pressable
                  style={[styles.button]}
                  onPress={() => {
                    setmodalEdit(false);
                    setTitle('');
                    setDesc('');
                    setEditingId(null);
                  }}>
                  <Text style={styles.button}>Return</Text>
                </Pressable>
                <Pressable
                  style={[styles.button]}
                  onPress={() => {
                    handleDelete();
                    setTitle('');
                    setDesc('');
                    setmodalEdit(false);
                  }}>
                  <Text style={styles.button}>Delete</Text>
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
    </ImageBackground>
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
