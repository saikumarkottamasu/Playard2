import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,ScrollView,FlatList,TouchableHighlight,Image,View, Switch,Keyboard} from 'react-native';
import FormData from 'FormData';
import Icon from 'react-native-ionicons';
import {   Item, Picker  } from 'native-base';


const ACCESS_TOKEN = 'access_token';

export default class signIn extends React.Component {
  static navigationOptions = {
       header: null,
    };
    constructor(props) 
    {
    super(props);   
    this.state = 
      { 
          showPassword: true,
          mobileNumber: '', 
          password:'',
          deviceType:'android',
          deviceToken:'Testing',
          regType:'direct',
          icEye: 'visibility-off', 
          selected: "key1"
        
        }
    }
  changePwdType = () => {
        let newState;
        if (this.state.showPassword)
         {
            newState = 
            {
                icEye: 'visibility',
                showPassword: false,
                password: this.state.password
            }
        } else 
        {
            newState = 
            {
                icEye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            }
        }
        this.setState(newState)
    };
  handlePassword = (password) => 
    {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password: password
        }
        this.setState(newState);
    };
     onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

pwdHideAndShow() {
    if (this.state.showPassword == false) {
      return (
        <Icon name='eye' size={24} color={'black'}  onPress={this.changePwdType}/>
      )
    } else if (this.state.showPassword == true) {
      return (
        <Icon name='eye-off' size={24} color={'black'}  onPress={this.changePwdType}/>

      )
    }
  }
  SignIn = () =>
    {
        let formData = new FormData();
        formData.append('mobileNumber', this.state.mobileNumber);
        formData.append('password', this.state.password);
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

        fetch("http://testingmadesimple.org/playard/api/service/login", data)
        .then(response => response.json())
        .then(responseJson => 
            {
              if(responseJson.status == ("1"))
              {
                  alert("Login Successfully");                  
                  this.props.navigation.navigate("Preffered_sports");
                       this.setState({
                                  mobileNumber: '',
                                  password:'',
                                 
                                })       
              }
              else if(responseJson.status == ("0"))
              {
                alert("Fields are missing");
              }
              else if(responseJson.status == ("2"))
              {
                alert("Mobile Number doesn't exists");
              }
              else if(responseJson.status == ("3"))
              {
                alert("Wrong Password");
              }
              else
              {
                            // alert("Form not submitted");
                            // this.props.navigation.navigate("Signup");
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
                      <View style={{marginBottom:60}}>
                            <Text style={styles.signInText}>SIGN IN WITH</Text>
                            <Text style={styles.signInText}>YOUR</Text>
                            <Text style={styles.signInText}>ACCOUNT</Text>
                      </View>
                      <View>
                       
                          <View style={styles.mobileWrapper}>
                              <View style={styles.mobileText1}>                        
                                  <Picker
                                    note
                                    mode="dropdown"                                   
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}>
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
                          <View style={{flexDirection:"row"}}>
                                 <TextInput
                                    placeholder="Password"
                                        placeholderTextColor="#A9A9A9" 

                                    style={styles.passwordField}
                                    secureTextEntry={this.state.showPassword}
                                    value={this.state.password}
                                    onChangeText={this.handlePassword}
                                  /> 
                                  <View style={styles.eyeView}>
                                        <TouchableOpacity onPress={this.changePwdType.bind(this)}>{this.pwdHideAndShow()}
                                    </TouchableOpacity>
                                  </View> 
                          </View>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('forgotPassword')}>  
                                  <Text style={styles.forgotText}>Forgot Password?</Text>
                          </TouchableOpacity>                
                          <View style={styles.signInBtn}>
                                    <TouchableOpacity onPress={this.SignIn} >
                                      <Text style={styles.signInBtnText}>SIGN IN</Text>
                                    </TouchableOpacity>
                          </View>                                                   
                    </View>
                </View>
                </ScrollView>
                <View style={styles.signInBtn2}>
                    <View style={styles.loginWrapper}>
                        <Text style={styles.signInBtnText2}>Not an Account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('signUp')}>
                            <Text style={styles.signInBtnText2}>  Sign Up</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
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
  forgotText:
  {
    fontSize:18,
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    marginTop:20,
    marginBottom:40
  },
  mobileWrapper:
  {
    flexDirection:"row",
    width:"100%",
    marginBottom:20
  },
  mobileText1:
  {
    borderColor: '#dadada',
    borderBottomWidth: 1,
    fontSize:18,
    fontFamily:"TwCenMTStd",
    width:"40%",
  },
  mobileText2:
  {
    borderColor: '#dadada',
    borderBottomWidth: 1,
    fontSize:18,
    width:"57%",
    fontFamily:"TwCenMTStd",
  }, 
  passwordField:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderBottomWidth: 1,
    fontFamily:"TwCenMTStd",
    width:"100%",
    marginBottom:20
  },
  eyeView:
  {
    marginLeft:'auto',
    marginTop:18,
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
  loginWrapper:
  {
    flexDirection:"row",
    justifyContent:"center",
    padding:15,
  },
  signInBtn2:
  {  
    backgroundColor:"#6740f2", 
  },
  signInBtnText2:
  {
    fontSize:16 ,
    color:'#fff',
    textAlign:"center",
    fontFamily:"TwCenMTStd"
  },
  
});
