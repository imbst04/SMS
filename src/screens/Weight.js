import React,
{useState} from "react";
import { View,
TouchableOpacity,
ImageBackground,
Text} from "react-native";
import img from '../assets/images/login.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import {styles} from '../assets/css/styles.js'
import { TextInput } from "react-native-web";

const Weight = () => {

  // Variable declaration as state
  const[vWeight, setWeight] = useState(0);
  const[mn, setMn] = useState(0);
  const[kg, setKg] = useState(0);
  const[ded, setDed] = useState(0);
  const[tWeight, setTWeight] = useState(0);

// click function to split the weight
  const handleClick = (value) =>{

    if((!vWeight)||(vWeight=='') || (vWeight == 0) || null){
      alert("Please enter some weight!");
      
    } else{

    const sCount = (vWeight.match(/-/g)||[]).length;
   if((!(vWeight.includes('-')))&& (vWeight >= 0)){
        if(vWeight<40){
          setMn(0);
          setKg(vWeight);
          setDed(0);
        }
        else{
          setMn(Math.floor(vWeight/40));
          setKg(vWeight%40);
          setDed(0);
        } //End of sub if Block
   }else if(sCount>2){ //Raise an alert if splitter is more than 2 times
     alert("Splitter can not be more than 2!.");
   }else if(sCount==2){ // it will set the deduction also if splitter is set 2 times
    setMn(vWeight.split('-')[0]);
    setKg(vWeight.split('-')[1]);
    setDed(vWeight.split('-')[2]); 

   }else if((sCount==1)&&(vWeight.split('-')[1]<40)){
    setMn(vWeight.split('-')[0]);
    setKg(vWeight.split('-')[1]);
    setDed(0);
  }else{
    alert("Please corret your KG");
  } // End of if Block
  } // end esle block

  
 }// End of Function
  
  // Retrun function to return the object
  return(
    // Image set as background 
    <ImageBackground source={img} style={styles.styleImage}
      >
        
       <View style={styles.container} 
       // Main container of the page
       >
          <View style={styles.submitButtonText}>
            <p 
            >
              Input: {vWeight} mn: {mn}  kg: {kg}  Ded: {ded}
            </p>
            

            {/* <Sae 
            // Input field for getting the date as weight from the user
              label={"Weight Entry"} // Label or placeholder of the field
              iconClass={FontAwesomeIcon} // Icon used in the field for decorum purpose
              
              onChangeText = {setWeight} //Weight is to be set to the vWeight variable by using setWeight of the state
              /> */}

            <TextInput 
            style={styles.submitButtonText}
            label={"Enter weight"} 
              placeholder={'Enter Weight'}
            // iconClass ={FontAwesomeIcon}
           
           onChangeText = {setWeight}
            >

            </TextInput>

      <TouchableOpacity
      // A button declared 
         style={styles.submitButton}
         // onPress a function create and called state as setWeight
         onPress ={handleClick}
      >
         <Text style={styles.submitButtonText}
         > Submit</Text>
      </TouchableOpacity>

          </View>
    </View>
    </ImageBackground>
  );

}

// Exporting the function or object
export default Weight;