/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import { TextField } from 'react-native-material-textfield';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView
  } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state={
      count:0,
      todoInput: "",
      todoList: []
    };
  }

  addTodo = () => {
    todoInput = this.state.todoInput
    todoList = this.state.todoList
    this.setState({
      todoInput: ""})

    this.setState({
      todoList: todoList.concat(todoInput)
    })

    console.log(this.state.todoList)
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={true}/>
        <Text style={styles.title}> To Do </Text>
        <View style={styles.listBackground}>
          <View style={styles.listContainer}>
            <View style={styles.inputTodoBar}>
              <TextInput style={styles.inputField} value={this.state.todoInput}
                placeholder="Input Todo"
                underlineColorAndroid="#38ba79"
                onChangeText={(text) => {this.setState({todoInput: text})}}
                onSubmitEditing={() => {this.addTodo()}}/>
              <TouchableOpacity style={styles.addButtonTodo} type="clear" onPress={this.addTodo}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollList}>
              {this.state.todoList.map((element, index) => {
                return(<Text style={styles.todo}>
                  {element}
                </Text>)
                })

              }

            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#58FAAC",
    alignItems: "center",
  },

  title: {
    flex:1,
    color: "white",
    fontSize:40,
    marginTop:30,
    fontWeight :"500",
    marginBottom:0,
    paddingBottom:0,
  },



  listBackground: {
      flex:11,
      // top:0,x`
      marginTop:0,
      paddingTop:0,
      backgroundColor: "white",
      width: "90%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
  },

  listContainer: {
    flex:1,
    flexDirection: "column",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
  },

  inputTodoBar: {
    flexDirection: "row",
    backgroundColor: "white",
    flexDirection: "row",
    width:"100%",
    height: 50,
  },

  scrollList: {
    flex:10,
    flexDirection:"column",
    marginTop:10,
    paddingTop:0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },

  inputField: {
    width: "75%",
    height: "100%",
    borderColor: "gray",
    justifyContent: "center",
    margin:0,
    paddingLeft:10,
  },

  addButtonTodo: {
    width: "25%",
    height: "75%",
    borderRadius: 20,
    justifyContent: "center", // 가로축 가운데 정렬
    alignItems: "center", // 세로축 가운데 정렬
    backgroundColor: "#F2F2F2",

  },

  buttonText: {
    fontSize: 15,
    color: "#000",
  },

  todo: {
    flex:1,
    width: "100%",
    fontSize: 20,
    textAlign: "center"

  },

});
