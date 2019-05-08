import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,Button,TouchableHighlight,ScrollView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import { mobileNumberKey} from './Constants';
import AsyncStorage from '@react-native-community/async-storage';

export default class Otp_reset extends React.Component {
  static navigationOptions = {
       header: null,
    };
  constructor(props) 
  {
    super(props);
      this.state = 
            {
              myKey: '',
              otp : "",
              otp1:'', 
              otp2:'', 
              otp3:'', 
              otp4:'', 
              otp5:'', 
              otp6:'', 
              deviceType:'android',
              deviceToken:'Testing',
              regType:'direct',
              clearInput:false
            };

  }

async getKey() {
    try {
      const value = await AsyncStorage.getItem('@forgotpwd_number');
      this.setState({myKey: value});
      } 
      catch (error) 
      {
      console.log("Error retrieving data" + error);
    }
  }
  componentDidMount(){
    this.getKey();
}

        verifyotp = (e) =>
          {
             
              const {otp1,otp2,otp3,otp4,otp5,otp6}=this.state;
              var mainOtp = otp1.concat(otp2,otp3,otp4,otp5,otp6);
              this.setState({otp : mainOtp},() => {console.log(this.state.otp)});

              let formData = new FormData();
              formData.append('mobileNumber', this.state.myKey);
              formData.append('otp',mainOtp);
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
              fetch("http://testingmadesimple.org/playard/api/service/verifyotp", data)
              .then(response => response.json())
              .then(responseJson => 
               { 
                        if(responseJson.status == ("1"))
                         {                                                       
                            this.props.navigation.navigate("resetPassword");
                            this.setState({
                                  otp1: '',
                                  otp2:'',
                                  otp3:'',
                                  otp4:'',
                                  otp5:'',
                                  otp6:''
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
                            alert("Wrong OTP");
                          }                          
                         console.log('response:', responseJson)
                }

              )

              .catch(error => console.error(error));
              console.log(data)
              // console.log(this.state)

              
          }
  resendotp(){
              let formData = new FormData();
              formData.append('mobileNumber', this.state.myKey);             
              let data = {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      "Content-Type": "multipart/form-data",
                  },
                  body: formData
              }
              fetch("http://testingmadesimple.org/playard/api/service/resendotp", data)
              .then(response => response.json())
              .then(responseJson => 
               { 
                        if(responseJson.status == ("1"))
                         {                           
                            alert("Resended OTP Successfully");
                                              
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
                            alert("Failed to send");
                          }                          
                         console.log('response:', responseJson)
                }

              )

              .catch(error => console.error(error));
              console.log(data)

  }

 render() 
 {
   return(
      <View style={{flex:1}}>
               <ScrollView>
                  <View style={styles.container}>
                      <View style={styles.backArrowView}>
                            <Icon name='arrow-back' size={24} color={'black'}  onPress={() => this.props.navigation.navigate('')}
                            />
                      </View> 
                      <View style={{marginBottom:60}}>
                            <Text style={styles.signInText}>OTP</Text>
                            <Text style={styles.signInText}>VERIFICATION</Text>
                      </View>
                      <Text style={styles.forgotText}>Sent a Verification code to verify</Text>                
                      <Text style={styles.forgotText}>your mobile number</Text>                     
                      <View style={styles.sentWrapper}>
                                <Text style={styles.forgotText}>Send to </Text>
                                <Text style={styles.forgotText}>{this.state.myKey}</Text>                
                       </View>
                      
                                        
                      <View style={styles.otpArray}>
                            <TextInput
                              style={styles.otpText}
                              keyboardType={'phone-pad'}
                              maxLength={1}
                              returnKeyType = { "next" }
                              ref={(input) => { this.otp1 = input; }}
                              onChangeText={(text1) => 
                                  {
                                   this.setState({otp1:text1})
                                   if(text1 && text1.length == 1){
                                    this.otp2.focus();
                                  }
                                  }
                              }                                     
                              value={this.state.otp1}
                              onSubmitEditing={() => { this.otp2.focus(); }}
                              blurOnSubmit={false}
                            />

                            <TextInput
                              ref={(input) => { this.otp2 = input; }}
                              style={styles.otpText}
                              keyboardType={'phone-pad'}
                              onChangeText={(text1) => 
                                  {
                                   this.setState({otp2:text1})
                                   if(text1 && text1.length == 1){
                                    this.otp3.focus();
                                  }
                                  else{
                                    this.otp1.focus();
                                  }
                                  }
                              }                                  
                              maxLength={1}
                              value={this.state.otp2}
                              returnKeyType = { "next" }
                              blurOnSubmit={false}

                            />
                            <TextInput
                              ref={(input) => { this.otp3 = input; }}
                              style={styles.otpText}
                              maxLength={1}
                              keyboardType={'phone-pad'}
                              onChangeText={(text1) => 
                                  {
                                   this.setState({otp3:text1})
                                   if(text1 && text1.length == 1){
                                    this.otp4.focus();
                                  }
                                  else{
                                    this.otp2.focus();
                                  }
                                  }
                              }                              
                              value={this.state.otp3}
                              returnKeyType = { "next" }
                              blurOnSubmit={false}
                            />
                            <TextInput
                              ref={(input) => { this.otp4 = input; }}
                              style={styles.otpText}
                              keyboardType={'phone-pad'}
                              maxLength={1}
                              onChangeText={(text1) => 
                                  {
                                   this.setState({otp4:text1})
                                   if(text1 && text1.length == 1){
                                    this.otp5.focus();
                                  }
                                  else{
                                    this.otp3.focus();
                                  }
                                  }
                              }                                     
                              value={this.state.otp4}
                              returnKeyType = { "next" }
                              blurOnSubmit={false}
                            />
                            <TextInput
                              ref={(input) => { this.otp5 = input; }}
                              style={styles.otpText}
                              keyboardType={'phone-pad'}
                              maxLength={1}
                              onChangeText={(text1) => 
                                  {
                                   this.setState({otp5:text1})
                                   if(text1 && text1.length == 1){
                                    this.otp6.focus();
                                  }
                                  else{
                                    this.otp4.focus();
                                  }
                                  }
                              }                                  
                              value={this.state.otp5}
                              returnKeyType = { "next" }
                              blurOnSubmit={false}
                            />
                            <TextInput
                              ref={(input) => { this.otp6 = input; }}
                              returnKeyType = { "done" }
                              style={styles.otpText}
                              maxLength={1}
                              keyboardType={'phone-pad'}
                              onChangeText={(text1) => 
                                  {
                                   this.setState({otp6:text1})
                                   if(text1 && text1.length == 1){
                                  }
                                  else{
                                    this.otp5.focus();
                                  }                                 
                                  }
                              } 
                              value={this.state.otp6}
                              onSubmitEditing={()=>{this.verifyotp()}}

                            />
                      </View>
                      <View style={styles.resendWrapper}>  
                          <Text style={styles.forgotText}>Didn't get code yet?</Text>
                          <TouchableOpacity onPress={()=>{this.resendotp()}}>
                                <Text style={[styles.forgotText,{ color:"#3DBEF5",marginLeft:8}]}>Resend</Text>                             
                          </TouchableOpacity>
                      </View>
                      
                      <Text style={[styles.forgotText,{ color:"black",marginBottom:50}]}>+91 {this.state.myKey} is not your Number?</Text>                             
                      <View style={styles.signInBtn}>
                            <TouchableOpacity>
                                  <Text style={styles.signInBtnText}>Enter your mobile number</Text>
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
    textAlign:"center"
  },
  sentWrapper:
  {
    marginTop:15,
    marginBottom:20,
    flexDirection:"row",
    justifyContent:"center"
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
  resendWrapper:
  {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  otpArray:
  {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:"center",
    marginBottom:20                               
  },
  otpText:
  {
    height: 40,
    width:35, 
    borderColor: '#3DBEF5',
    borderBottomWidth: 2,
    color:"#3DBEF5" ,
    fontSize:14,
    fontFamily:"TwCenMTStd",
    paddingLeft:12,
    marginLeft:7

  },
  inputField:
  {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    fontFamily:"TwCenMTStd",
    marginBottom:20
  },

});