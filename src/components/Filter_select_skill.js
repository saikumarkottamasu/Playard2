import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,CheckBox,ScrollView,SafeAreaView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item,Input} from 'native-base';



export default class Filter_select_skill extends React.Component {
static navigationOptions = {
       header: null,
    };
  constructor(props) 
  {
    super(props);
    this.state = 
            {            
              selected: "key1",
              selected2: "s1",
              switchOn1: false,
            };

  }

onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  onValueChange(value: string) {
    this.setState({
      selected2: value
    });
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
    change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

 render() 
 {
   return(
    < SafeAreaView style={{flex:1}}>
                  <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('filterIcon')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Activity Skill Level</Text>   
                                                      
                  </View>
                  <ScrollView>
                               
                  <View style={styles.contentBody}>
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked}
                                      onValueChange={() => this.setState({ checked: !this.state.checked })} />
                                <Text style={styles.accHeaderText2}>Beginner</Text>
                               
                            </View>
                      </View>
                      
                      
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked1}
                                      onValueChange={() => this.setState({ checked1: !this.state.checked1 })} />
                                <Text style={styles.accHeaderText2}>Amateur</Text>
                               
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked2}
                                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
                                <Text style={styles.accHeaderText2}>Intermediate</Text>
                               
                            </View>
                      </View>

                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked3}
                                      onValueChange={() => this.setState({ checked3: !this.state.checked3 })} />
                                <Text style={styles.accHeaderText2}>Advanced</Text>
                               
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked4}
                                      onValueChange={() => this.setState({ checked4: !this.state.checked4 })} />
                                <Text style={styles.accHeaderText2}>Professional</Text>
                               
                            </View>
                      </View>
                  </View>
                  </ScrollView>
                                          
                       <View style ={{flexDirection :'row',marginBottom :30,padding :20}}>
                            <View style={styles.signInBtn1}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Text style={styles.signInBtnText1}>Clear</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.signInBtn2}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Text style={styles.signInBtnText}>Done</Text>
                              </TouchableOpacity>
                           </View>
                      </View>

                 
            

    </SafeAreaView>
     
   );
 }
}
const styles = StyleSheet.create({
  cartHeader:
  {
    flexDirection:"row",
    backgroundColor:"#33cbf6",
    padding:15
  },
  signInBtn1:
  {   
    
    borderRadius:5,
    marginTop:40,
    borderWidth:1.5,
    borderColor :"#3DBEF5",
    width:'41%',
    alignItems :'center',

  },
   signInBtn2:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:'auto',
   
    alignItems :'center',
    
    
    width:'41%'
    

  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',

    justifyContent: 'center',
    padding:10,
    fontFamily:"TwCenMTStd"
  },
  signInBtnText1:
  {
    fontSize:20 ,
    color :"#3DBEF5",

    justifyContent: 'center',
    padding:10,
    fontFamily:"TwCenMTStd"
  },
  
  searchImg:
  {
    width:20,
    height:20,
  },
  rightImg:
  {
    width:10,
    height:10,
    marginTop:5,
    // padding:10,
    
    // backgroundColor:"pink"
  },

  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:20,
    textAlignVertical:"center",
  },
  resetText:
  {
    fontSize:15,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:'auto',
    textAlignVertical:"center",
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:15
  },
  accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:17,
    color:"#363f4d",
    marginLeft :-4,
  },
  accHeaderText2:
  {
    fontFamily:"TwCenMTStd",
    fontSize:17,
    color:"#363f4d",
    marginLeft :10,
    marginTop:-5
  
  },
  rightIconContainer:
  {
    marginLeft:'auto'
  },
  textWrapper:
  {
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#dadada",
  
    padding:12,
    borderRadius:5,
    marginBottom:-5

    
  },
  textWrapper2:
  {
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#dadada",
  
    padding:12,
    borderRadius:5,
    marginBottom:-5,
    alignItems :'center',
    paddingBottom :10
    
  },
  selectSport:
  {
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginBottom:5,
    color:"#7f7f7f"
  },
  contentBody:
  {
    padding:20
  },
  itemWrapper:
  {
    marginBottom:25
  },
  mobileText1:
  {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom:30,
    fontFamily:"TwCenMTStd",
  },
  signInBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:20,
    marginRight:20
  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"TwCenMTStd"
  },

});


