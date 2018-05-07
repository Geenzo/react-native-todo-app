import React from 'react';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';

const styles = {
  viewStyle: {
    marginTop: 30, 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10
  },
  inputStyle: {
    height: 40,
    width: '100%',
    borderColor: "#3D5576",
    borderWidth: 1
  },
  header: {
    fontSize: 30,
    color: '#3D5576',
    fontWeight: 'bold'
  },
  mainView: {
    backgroundColor: '#D68D38',
    flex: 1
  },
  todoButton: {
    color: '#3D5576'
  },
  todoItem: {
    fontSize: 24,
    color: 'white'
  }
}

class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    let newTodo = this.state.text
    let arr = this.state.todo
    arr.push(newTodo)
    this.setState({todo: arr, text: ""})
  }
  deleteTodo = (t) => {
    let arr = this.state.todo
    let pos = arr.indexOf(t)
    arr.splice(pos, 1)
    this.setState({todo: arr})
  }
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todoItem} 
            onPress={(t)=>this.deleteTodo(t)}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.mainView}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Todo Lists</Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button 
            title="Add Todo"
            style={styles.todoButton}
            onPress={this.addTodo}
          />
          <View style={{marginTop: 70}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}



export default App;