import {StyleSheet} from 'react-native'

const styles =  StyleSheet.create({

container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 23,
   
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


});

export {styles}