import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,TouchableHighlight,ScrollView,SafeAreaView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item,Input,Picker} from 'native-base';
import SwitchToggle from 'react-native-switch-toggle';


export default class create_Activity extends React.Component {
static navigationOptions = {
       header: null,
    };
  constructor(props) 
  {
    super(props);
    this.state = 
            {            
              selected: "key1",
              switchOn1: false,
            };

  }

onValueChange(value: string) {
    this.setState({
      selected: value
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
    < SafeAreaView >
                  <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>                  

                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Create </Text>                                     
                  </View>
                  <View style={styles.contentBody}>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Select Sport</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Eg: Cricket / Boxing</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('select_Sports')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Area/ Location</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Locality or venue name</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('select_Location')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Date</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Select Date</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('select_Date')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Time</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Select flexible time slot</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('select_Time')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <Text style={styles.selectSport}>Activity Type</Text>
                      <View style={styles.mobileText1}>                        
                                  <Picker
                                    note
                                    mode="dropdown"                                    
                                    selectedValue={this.state.selected}
                                    style={{ fontFamily:'Lato-Medium',fontSize:20}}
                                    onValueChange={this.onValueChange.bind(this)}
                                  >
                                    <Picker.Item label="Select Activity Type" value="key0" />
                                    <Picker.Item label="Beginner" value="key1" />
                                    <Picker.Item label="Amateur" value="key2" />
                                    <Picker.Item label="Intermediate" value="key3" />
                                    <Picker.Item label="Advanced" value="key4" />
                                    <Picker.Item label="Professional" value="key5" />
                                    
                                  </Picker>
                        </View>
                        <Text style={styles.accHeaderText}>Notify friends</Text>
                        <View style={{marginLeft:"auto",}}>
                           
                        </View>

                        <View style={styles.signInBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Text style={styles.signInBtnText}>Create Activity</Text>
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
  searchImg:
  {
    width:20,
    height:20,
  },
  rightImg:
  {
    width:15,
    height:15,
  },

  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
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
  },
  rightIconContainer:
  {
    marginLeft:'auto'
  },
  textWrapper:
  {
    flexDirection:"row",
    borderBottomWidth:1,
    borderColor:"#dadada",
    paddingBottom:5,
    
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
    fontFamily:"Lato-Medium",
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


