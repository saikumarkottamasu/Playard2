import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,CheckBox,ScrollView,SafeAreaView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item,Input} from 'native-base';



export default class filterIcon extends React.Component {
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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Mysports')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Filter</Text>   
                      <Text style={styles.resetText}>Reset</Text>                                   
                  </View>

          
                  <View style={styles.contentBody}>
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Sports</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Filter_select_sports')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>

                      <View style={styles.itemWrapper}>
                            
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Time</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Filter_select_time')}>
                                            <View style={{}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />
                                            </View>                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                            
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Dates</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Filter_select_date')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Skill</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('Filter_select_skill')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>

                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked1}
                                      onValueChange={() => this.setState({ checked1: !this.state.checked1})} />
                                <Text style={styles.accHeaderText2}>Activities with Playard Booking</Text>
                               
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             
                            <View style={styles.textWrapper2}>
                                <CheckBox
                                      style={{marginTop:-5,marginLeft :-7}}
                                      value={this.state.checked}
                                      onValueChange={() => this.setState({ checked: !this.state.checked })} />
                                <Text style={styles.accHeaderText2}>Activities with Playard Booking</Text>
                               
                            </View>
                      </View>


                        
                        <View style={styles.signInBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                    <Text style={styles.signInBtnText}>Show Results</Text>
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


