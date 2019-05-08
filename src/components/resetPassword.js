import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,TouchableHighlight,ScrollView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class resetPassword extends React.Component {
  static navigationOptions = {
       header: null,
    };
  constructor(props) 
  {
    super(props);
      this.state = 
            {
              numberKey: '',
              password: '',
              confirmPassword: '',
              deviceType:'android',
              deviceToken:'Testing',
              regType:'direct',
            };

  }
  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@forgotpwd_number');
      this.setState({numberKey: value});
      } 
      catch (error) 
      {
      console.log("Error retrieving data" + error);
    }
  }
  componentDidMount(){
    this.getKey();
}

reset_pwd = () => {
    const { password, confirmPassword } = this.state;
     let reg3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
       if(password=="")
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
    if (password !== confirmPassword) {
        alert("Passwords doesn't match");
    } 
    else {

     
        let formData = new FormData();
        formData.append('mobileNumber', this.state.numberKey);
        formData.append('password', this.state.confirmPassword);
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
        fetch("http://testingmadesimple.org/playard/api/service/resetpassword", data)
        .then(response => response.json())
        .then(responseJson => 
         { 
                  if(responseJson.status == ("1"))
                   {
                      alert("Reset Password successfully");
                      this.props.navigation.navigate("signIn");
                       this.setState({
                                  password: '',
                                  confirmPassword: '',                                 
                                })  
                    }
                    else if(responseJson.status == ("2"))
                    {
                        alert("Failed");
                    }
                    else if(responseJson.status == ("3"))
                    {
                        alert("Mobile Number doesn't exists with us");
                    }
                    else
                    {
                      // alert("Wrong Otp");

                    }
                    
                   console.log('response:', responseJson)
          }

        )

        .catch(error => console.error(error));
        console.log(data)
        console.log(this.state)
    }
}
  

 render() 
 {
   return(
      <View style={{flex:1}}>
               <ScrollView>
                  <View style={styles.container}>
                     
                      <View style={{marginBottom:60}}>
                            <Text style={styles.signInText}>RESET</Text>
                            <Text style={styles.signInText}>PASSWORD</Text>
                      </View>

                      <TextInput
                            placeholder="Enter new password"
                            style={styles.inputField}
                            onChangeText={(text) => this.setState({password:text})}
                            returnKeyType = { "next" }
                            value={this.state.password}
                            onSubmitEditing={() => { this.confirmPassword.focus(); }}
                            blurOnSubmit={false}
                      /> 
                      <TextInput
                            ref={(input) => { this.confirmPassword = input; }}
                            placeholder="Re-enter password"
                            style={styles.inputField}
                            onChangeText={(text) => this.setState({confirmPassword:text})}
                            returnKeyType = { "done" }
                            value={this.state.confirmPassword}
                      /> 
                      <Text style={styles.errorText}>{this.state.field}</Text>                

                      <View style={styles.signInBtn}>
                            <TouchableOpacity onPress={()=>{this.reset_pwd()}}>
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
  inputField:
  {
    borderColor: '#dadada',
    borderBottomWidth: 1,
    fontSize:18,
    fontFamily:"TwCenMTStd",
    marginBottom:20
  },
  signInBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:50
  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },
  errorText:
  {
    marginLeft:'auto',
    marginRight:20,
    color:"red",
    fontFamily:'Lato-Medium'
  },


});
