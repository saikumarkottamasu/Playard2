import React, {Component} from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,ScrollView,FlatList,TouchableHighlight,Image,View, Switch,Keyboard} from 'react-native';
import { Item, Input } from 'native-base';
import Icon from 'react-native-ionicons';
import FormData from 'FormData';
import Hr from "react-native-hr-component";
import AsyncStorage from '@react-native-community/async-storage';
import {    Picker  } from 'native-base';


export default class signUp extends Component<Props> {
  static navigationOptions = {
       header: null,
    };
  constructor(props)
  {
    super(props);
    this.SignUp = this.SignUp.bind(this);
    this.state =
            {
              showPassword: true,
              name: '',
              mobileNumber: '',
              email: '',
              password:'',
              deviceType:'android',
              deviceToken:'Testing',
              regType:'direct',
              icEye: 'visibility-off',
              selected: "key1"
            };

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
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }


  SignUp = async () =>
    {

        await AsyncStorage.setItem('mobilenumber',this.state.mobileNumber)
        await AsyncStorage.setItem('password',this.state.password)
        console.log(this.state.mobileNumber);

        const {name,email,mobileNumber,password} = this.state;
        let reg = /^[a-zA-Z0-9 ](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9 ]){3,76}[a-zA-Z0-9 ]*$/;
        let reg1 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        let reg2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let reg3 = /^.*(?=.{6,20})(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!@#$%]+$/

        if(name=="")
        {
          this.setState({field:'Please enter Name'})
        }
        else if(reg.test(name) === false)
        {
            this.setState({field:':#?@&%/ are not allowed and should enter 3-76 characters in the name'})
            return false;
        }

        else if(mobileNumber=="")
        {
          this.setState({field:'Please enter Mobile Number'})
        }
        else if(reg1.test(mobileNumber) === false)
        {
            this.setState({field:'Mobile Number should contain 10 digits'})
            return false;
        }
        else if(email=="")
        {
          this.setState({field:'Please enter Email Id'})
        }
        else if(reg2.test(email) === false)
        {
            this.setState({field:'Please enter valid Email Id'})
            return false;
        }
        else if(password=="")
        {
          this.setState({field:'Please enter Password'})
        }
        else if(reg3.test(password) === false)
        {
            this.setState({field:'Password should contain at least one numeric digit,one alphabet and length of 6-20'})
            return false;
        }

        else
        {
          this.setState({field:''})
        }
              let formData = new FormData();
              formData.append('name', this.state.name);
              formData.append('mobileNumber', this.state.mobileNumber);
              formData.append('email', this.state.email);
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
              fetch("http://testingmadesimple.org/playard/api/service/signup", data)
              .then(response => response.json())
              .then(responseJson =>
               { if(responseJson.status == ("1"))
                         {
                            console.log('number is',mobileNumber)
                            this.props.navigation.navigate("Otp");
                            this.setState({
                                  name: '',
                                  mobileNumber: '',
                                  email: '',
                                  password:'',

                                })
                          }

                          else if(responseJson.status == ("2"))
                          {
                              alert("Failed");
                          }
                          else if(responseJson.status == ("3"))
                          {
                              alert("Mobile number already exists,Please try with another");
                          }
                          else if(responseJson.status == ("4"))
                          {
                              alert("Email Id already exists with us");
                          }
                          else{
                            // alert("Form not submitted");
                            // this.props.navigation.navigate("Signup");
                          }
                         console.log('response:', responseJson)
                }

              )

              .catch(error => console.error(error));
              console.log(data)


    }

  render() {
    return (

        <View style={{flex:1}}>
               <ScrollView>
                  <View style={styles.container}>
                      <View style={{marginBottom:20}}>
                            <Text style={styles.signInText}>SIGN UP </Text>
                            <Text style={styles.signInText}>YOUR</Text>
                            <Text style={styles.signInText}>ACCOUNT</Text>
                      </View>
                      <View>
                          <TextInput
                            placeholder="Name"
                            style={styles.inputField}
                            onChangeText={(text) => this.setState({name:text})}
                            value={this.state.name}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.mobileNumber.focus(); }}
                            blurOnSubmit={false}
                          />
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
                                  ref={(input) => { this.mobileNumber = input; }}
                                  returnKeyType = { "next" }
                                  onSubmitEditing={() => { this.email.focus(); }}
                                  blurOnSubmit={false}
                                />


                          </View>
                          <TextInput
                                placeholder="Email ID"
                                style={styles.inputField}
                                onChangeText={(text) => this.setState({email:text})}
                                value={this.state.email}
                                ref={(input) => { this.email = input; }}
                                returnKeyType = { "next" }
                                onSubmitEditing={() => { this.password.focus(); }}
                                blurOnSubmit={false}
                          />
                          <View style={{flexDirection:"row"}}>
                                 <TextInput
                                    placeholder="Password"
                                    style={styles.passwordField}
                                    secureTextEntry={this.state.showPassword}
                                    value={this.state.password}
                                    onChangeText={this.handlePassword}
                                    ref={(input) => { this.password = input; }}
                                  />
                                  <View style={styles.eyeView}>
                                    <TouchableOpacity onPress={this.changePwdType.bind(this)}>{this.pwdHideAndShow()}
                                    </TouchableOpacity>

                                  </View>
                          </View>
                        <Text style={styles.errorText}>{this.state.field}</Text>
                        <View style={styles.signInBtn}>
                                  <TouchableOpacity onPress={this.SignUp} >
                                    <Text style={styles.signInBtnText}>SIGN UP</Text>
                                  </TouchableOpacity>
                        </View>
                        <View style={styles.confirmWrapper}>
                              <Hr lineColor="#ddd" width={1} text="OR" textStyles={{fontFamily:"TwCenMTStd",fontSize:16,color:"#363f4d",marginLeft:5,marginRight:5}}  />
                        </View>


                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <View style={{margin:10}}>
                                <Icon name="logo-facebook"
                                  Icon size={60} type='font-awesome' color='#3C5A99'
                                />
                            </View>
                            <View style={{margin:10}}>
                                <Icon name="logo-google"
                                  Icon size={60} type='font-awesome' color='#DD4B39'
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.signInBtn2} onPress={() => this.props.navigation.navigate('signIn')}>
                    <View style={styles.loginWrapper}>
                        <Text style={styles.signInBtnText2}>Already have an Account?</Text>
                        <View>
                            <Text style={styles.signInBtnText2}>  Login</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
inputField:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderBottomWidth: 1,
    fontFamily:"TwCenMTStd",
    marginBottom:10
  },
errorText:
  {
    marginLeft:'auto',
    marginRight:20,
    color:"red",
    fontFamily:'TwCenMTStd'
  },
  signInText:
  {
    fontSize:25,
    color:"#363f4d",
    fontFamily:"TwCenMTStd-Bold",
  },
  mobileWrapper:
  {
    flexDirection:"row",
    width:"100%",
    marginBottom:10
  },
 mobileText1:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderBottomWidth: 1,
    fontFamily:"TwCenMTStd",
    width:"40%",
  },

  mobileText2:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderBottomWidth: 1,
    fontFamily:"TwCenMTStd",
    width:"57%",

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
    marginTop:20,
    marginBottom:20
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

  alignItems:'center',

  },
  signInBtn2:
  {
    backgroundColor:"#7e5bef"
  },
  signInBtnText2:
  {
    fontSize:16 ,
    color:'#fff',
    textAlign:"center",
    fontFamily:"TwCenMTStd",
    bottom : 0,
  },
});
