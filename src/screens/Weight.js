import React,
{useState} from "react";
import { View,
TouchableOpacity,
ImageBackground,
Text, 
Alert} from "react-native";
import img from '../assets/images/login.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import {styles} from '../assets/css/styles.js'

const Weight = () => {

  // Variable declaration as state
  const[vWeight, setWeight] = useState(0);
  const[mn, setMn] = useState(0);
  const[kg, setKg] = useState(0);
  const[ded, setDed] = useState(0);

// click function to split the weight
  const handleClick = (value) =>{
    const sCount = (vWeight.match(/-/g)||[]).length;
   
    if(!(vWeight.includes('-'))){
    if(vWeight<40){
      setMn(0);
      setKg(vWeight);
      setDed(0);
    }
    else{
      setMn(Math.floor(vWeight/40));
      setKg(vWeight%40);
      setDed(0);
    }
   }else if(sCount>2){
     alert("Splitter can not be more than 2!.");
   }
   else if(sCount==2){
    setMn(vWeight.split('-')[0]);
    setKg(vWeight.split('-')[1]);
    setDed(vWeight.split('-')[2]); 

   }else if((sCount==1)&&(vWeight.split('-')[1]<40)){
    setMn(vWeight.split('-')[0]);
    setKg(vWeight.split('-')[1]);
    setDed(0);
  }else{
    alert("Please corret your KG");
  }
  }
  
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
            <button onClick={() => setWeight(vWeight + 1)}>
              Click me
            </button>

            <Sae 
            // Input field for getting the date as weight from the user
              label={"Weight Entry"} // Label or placeholder of the field
              iconClass={FontAwesomeIcon} // Icon used in the field for decorum purpose
              onChangeText = {setWeight} //Weight is to be set to the vWeight variable by using setWeight of the state
              />

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