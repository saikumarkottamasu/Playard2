import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,TouchableHighlight,ScrollView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {    Picker  } from 'native-base';


export default class forgotPassword extends React.Component {
  static navigationOptions = {
       header: null,
    };
  constructor(props) 
  {
    super(props);
      this.state = 
            {
              mobileNumber: '', 
              deviceType:'android',
              deviceToken:'Testing',
              regType:'direct',
               selected: "key1"
            };

  }
    onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  forgot_pwd = async () => 
    {
        await AsyncStorage.setItem('@forgotpwd_number',this.state.mobileNumber)
        console.log(this.state.mobileNumber);
        
        let formData = new FormData();
        formData.append('mobileNumber', this.state.mobileNumber);
        formData.append('deviceType', this.state.deviceType);
        formData.append('deviceToken', this.state.deviceToken);
        formData.append('regType', this.state.regType);
        let data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "multipart/form-data",
            },
            body: formData
        }
        fetch("http://testingmadesimple.org/playard/api/service/forgotpassword", data)
        .then(response => response.json())
        .then(responseJson => 
         { 
                  if(responseJson.status == ("1"))
                   {
                      // alert("otp sent to your mobile number ");
                      this.props.navigation.navigate("Otp_reset");
                       this.setState({
                                  mobileNumber: '',                                 
                                })  
                    }
                    else if(responseJson.status == ("0"))
                    {
                        alert("Required fields are missing");
                    }
                    else if(responseJson.status == ("2"))
                    {
                        alert("Mobile Number doesn't exists with us");
                    }
                    else
                    {
                      alert("Your account have been suspened by admin,Please contact Admin to activate your account.");

                    }
                    
                   console.log('response:', responseJson)
          }

        )

        .catch(error => console.error(error));
        console.log(data)
        console.log(this.state)
    }

 render() 
 {
   return(
      <View style={{flex:1}}>
               <ScrollView>
                  <View style={styles.container}>
                      <View style={styles.backArrowView}>
                            <Icon name='arrow-back' size={24} color={'black'}  onPress={() => this.props.navigation.navigate('signIn')}
                            />
                      </View> 
                      <View style={{marginBottom:60}}>
                            <Text style={styles.signInText}>FORGOT</Text>
                            <Text style={styles.signInText}>PASSWORD</Text>
                      </View>
                      <Text style={styles.forgotText}>Please enter your registered mobile </Text>                
                      <Text style={styles.forgotText}> number and OTP will be send</Text>
                      <View style={styles.mobileWrapper}>
                              <View style={styles.mobileText1}>                        
                                    <Picker
                                      note
                                      mode="dropdown"
                                      
                                      selectedValue={this.state.selected}
                                      onValueChange={this.onValueChange.bind(this)}
                                    >
                                      <Picker.Item label="IND +91" value="key0" />
                                      <Picker.Item label="IND +91" value="key1" />
                                      <Picker.Item label="UK +44" value="key2" />
                                      
                                    </Picker>
                                </View>
                                <Text style={{width:"3%"}}></Text>
                                <TextInput
                                  placeholder="Mobile Number"
                                  keyboardType={'phone-pad'}
                                  style={styles.mobileText2}
                                  maxLength={10}
                                  onChangeText={(text) => this.setState({mobileNumber:text})}
                                  value={this.state.mobileNumber}
                                />
                      </View>
                                 
                      <View style={styles.signInBtn}>
                            <TouchableOpacity onPress={this.forgot_pwd}>
                                  <Text style={styles.signInBtnText}>SEND</Text>
                            </TouchableOpacity>
                      </View>
                    
                </View>
          </ScrollView>
               
      </View>
   );
 }
}
const styles = StyleSheet.create({
  container: 
  {
    padding:30 
  },
  signInText:
  {
    fontSize:25,
    color:"#363f4d",
    fontFamily:"TwCenMTStd-Bold",
  },
  backArrowView:
  {
    marginBottom:10
  },

  forgotText:
  {
    fontSize:18,
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    textAlign:"center",
    marginBottom:10
  },
  signInBtn:
  {   
    backgroundColor:"#33cbf6",
    borderRadius:5,
  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },
  mobileWrapper:
  {
    flexDirection:"row",
    width:"100%",
    marginTop:20,
    marginBottom:50
  },
  mobileText1:
  {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    fontFamily:"Lato-Medium",
    width:"40%",
  },
  mobileText2:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderBottomWidth: 1,
    width:"57%",
    fontFamily:"TwCenMTStd",
  }, 
  

});
