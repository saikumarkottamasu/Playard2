import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,ScrollView,SafeAreaView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item,Input} from 'native-base';
import {Collapse,CollapseHeader,CollapseBody} from 'accordion-collapse-react-native';





export default class modify_Activity extends React.Component {
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
              switchOn2 :false,
              value :'',
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
   onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Cricket</Text>
                      <View style ={{marginLeft :'auto'}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/delete-activity.png')} />
                      </TouchableOpacity>
                      </View>
                  </View>
          <ScrollView>
                  <View style={styles.contentBody}>
                      
                      <View style={{flexDirection :'row',marginBottom :23}}>
                             <Text style={styles.selectSport}>Basic Details</Text>
                            <Text style={styles.activityText}>Activity Instructions</Text>
                            
                      </View>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Game Skill Level</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Rasoolpura-Intermediate</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>
                                            <View style={{}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/orange-close.png')} />
                                            </View>                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <Text style={styles.selectSport}>Select Skill Level</Text>

                       



                        
                         <View style={{flexDirection :'row',marginBottom :23}}>
                              <Text style={styles.selectSport}>Total Players (Including you)</Text>
                             
                              <Text style={styles.playersText}>            22            </Text> 

                            
                        </View>                    
                          
                        <View style={{flexDirection:"row",marginBottom :23}}>
                                <Text style={styles.selectSport}>Bring your own equipement</Text>
                                <View style={{marginLeft:"auto",}}>
                                    <Switch
                                         onValueChange = {this.onPress1}
                                          trackColor={{true: '#3DBEF5', false: '#D3D3D3'}}
                                          thumbColor="#3DBEF5"
                                         value = {this.state.switchOn1}/>
                                </View>
                        </View>

                        <View style={{flexDirection:"row",marginBottom :9}}>
                                <Text style={styles.selectSport}>Cash Shared</Text>
                                <View style={{marginLeft:"auto",}}>
                                    <Switch
                                         onValueChange = {this.onPress2}
                                          trackColor={{true: '#3DBEF5', false: '#D3D3D3'}}
                                          thumbColor="#3DBEF5"
                                         value = {this.state.switchOn2}/>
                                </View>
                        </View>

                       <View>

                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Additional Instructions"
                                placeholderTextColor="#7f7f7f"
                                numberOfLines={4}
                                multiline={true}
                                maxLength = {1024}
                                value={this.state.value}
                                onChangeText={(value) => this.setState({value})}
                              />

                       </View>



            </View>
            </ScrollView>  
                        <View style={styles.signInBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>
                                    <Text style={styles.signInBtnText}>Create Activity</Text>
                              </TouchableOpacity>
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
  
 

   textArea:
  {
    borderColor: '#dadada',
    fontSize:16,
    elevation:1,
    borderRadius:5,
    color:"#7f7f7f",
    textAlignVertical: 'top',
    borderWidth: 0.65,
    fontFamily:"TwCenMTStd",
    marginBottom:5,
    paddingLeft:10
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
    marginBottom :5,
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
    marginBottom:6,
    color:"#7f7f7f"
  },

  playersText:
  {
    fontSize:16,
    fontFamily:"TwCenMTStd",
   borderBottomWidth:1,
    color:"#363f4d",
    marginLeft :'auto',
    borderColor:"#dadada",
   
    

  },
   activityText:
  {
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginBottom:5,
    color:"#33cbf6",
    marginLeft :50

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
    marginBottom:40,
    marginLeft:40,
    marginRight:40
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


