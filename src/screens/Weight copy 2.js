import React, {Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,
ImageBackground }  from 'react-native'
import img from '../assets/images/login.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

class Weight extends Component{
  state = {
    vWeight: ''
  }

  handleWeight = (text) =>{
    this.setState({vWeight: text})
  }

  btnPress = (vWeight) =>{
    alert('Weight: ' + vWeight)
  }

  render(){
    return(

      <ImageBackground source={img} style={styles.styleImage}
      >

      <View style={styles.container}>
        <TextInput style = {styles.input}
      
        placeholder = "Weight"
        placeholderTextColor = "#9a73ef"
        autoCpitalize = "none"
        onChangeText = {this.handleWeight} />


        <TouchableOpacity
        style={styles.submitButton}
        onPress = {
          () => this.btnPress(this.state.vWeight)
        }>
          <Text style={styles.submitButtonText}> Submit</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    )
  }
}

export default Weight

const styles = StyleSheet.create({
  container:{
    paddingTop: 23
  },

  styleImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 40,
  },


input:{
  margin: 15,
  height: 40,
  borderColor: "$7a42f4",
  borderWidth: 1
},
submitButton:{
  backgroundColor: '#7a42f4',
  padding: 10,
  margin: 15,
  height: 40,
},

submitButtonText:{
  color:'white'
}

})


