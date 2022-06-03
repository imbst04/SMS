import React, {Component} from 'react'
import { View, 
  Text,
  TouchableOpacity, 
  ImageBackground }  from 'react-native'
import img from '../assets/images/login.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import {styles} from '../assets/css/styles.js'

/// this is used with class extended with react component
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
        <Sae 
        label={"Weight Entry"}
        iconClass={FontAwesomeIcon}
        onChangeText = {this.handleWeight}
        />


        <TouchableOpacity
        style={styles.submitButton}
        onPress = {
          () => this.btnPress(this.state.vWeight)
        }>
          <Text style={styles.submitButtonText}> Submit</Text>
        </TouchableOpacity>

      
        <View >
        <table>
          <tr><th>Sr#</th><th>MAN</th> <th>KG</th></tr>

        </table>

        </View>
        </View>


      </ImageBackground>
    )
  }
}

export default Weight
/*
const styles = StyleSheet.create({
  container:{
    paddingTop: 23
  },

 /* styleImage: {
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
  //backgroundColor: '#7a42f4',
  backgroundColor: 'blue',
  padding: 10,
  margin: 15,
  height: 40,
  borderRadius: 10,
},

submitButtonText:{
 // color:'white'
 color: '#7affff',
 
}

})
*/

