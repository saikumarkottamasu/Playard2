import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,ScrollView,SafeAreaView,Image,View } from 'react-native';

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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Create Activity</Text>                                     
                  </View>
          <ScrollView>
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
                                            <View style={{}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />
                                            </View>                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <Text style={styles.selectSport}>Activity Type</Text>
                        <View style={styles.mobileText1}>                        
                                  <Picker
                                    selectedValue={this.state.selected}                                  
                                    onValueChange={(itemValue, itemIndex) =>
                                      this.setState({selected: itemValue})
                                    }>

                                    <Picker.Item label="Select Activity Type" value="key1" itemStyle={{fontStyle:"TwCenMTStd"}}/>
                                    <Picker.Item label="Public" value="key2" />
                                    <Picker.Item label="Friends" value="key3" />
                                  </Picker>
                        </View>
                        <Text style={styles.selectSport}>Skills Level</Text>                     
                        <View style={styles.mobileText1}>                        
                                  <Picker
                                    selectedValue={this.state.selected}                                  
                                    onValueChange={(itemValue, itemIndex) =>
                                      this.setState({selected: itemValue})
                                    }>

                                    <Picker.Item label="Select Skills Level" value="s1" itemStyle={{fontStyle:"TwCenMTStd"}}/>
                                    <Picker.Item label="Beginner" value="s2" />
                                    <Picker.Item label="Amateur" value="s3" />
                                    <Picker.Item label="Intermediate" value="s4" />
                                    <Picker.Item label="Advanced" value="s5" />
                                    <Picker.Item label="Professional" value="s6" />
                                  </Picker>
                        </View>
                        <View style={{flexDirection:"row"}}>
                                <Text style={styles.accHeaderText}>Notify friends</Text>
                                <View style={{marginLeft:"auto",}}>
                                    <Switch
                                         onValueChange = {this.onPress1}
                                          trackColor={{true: '#3DBEF5', false: '#D3D3D3'}}
                                          thumbColor="#3DBEF5"
                                         value = {this.state.switchOn1}/>
                                </View>
                        </View>
                        <View style={styles.signInBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Text style={styles.signInBtnText}>Create Activity</Text>
                              </TouchableOpacity>
                        </View>


                  </View>
            </ScrollView>  

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
    fontFamily:"TwCenMTStd",
    // backgroundColor:"pink"
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


