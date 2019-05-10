import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,SafeAreaView,
  Text,
  TextInput,CheckBox,ScrollView,
  View,TouchableOpacity,Image,
  AsyncStorage
} from 'react-native';
import {  Item, Input } from 'native-base';
import {Collapse,CollapseHeader,CollapseBody} from 'accordion-collapse-react-native';
import Icon from 'react-native-ionicons';

export default class Preffered_sports extends Component {
static navigationOptions = {
       header: null,
    };
  constructor(props) {
    super(props);
    this.state = {
      status:true,
    }
  }

  ShowHideBlueIconView = () =>{

  if(this.state.status == true)
  {
    this.setState({status: false})
  }
  else
  {
    this.setState({status: true})
  }
}
  render() {
    return (
      <SafeAreaView style={styles.container}>
            <ScrollView>
                  <Text style={styles.headerText}>Preferred Sports</Text>
                  <Text style={styles.subHeaderText}>dummy text of printing and typesetting industry.Lorem 
                        has been the indutry's standard dummy text</Text>
                 
                  

                  <View style={{flexDirection:"row"}}>
                      <TextInput
                            placeholder="Search by Sports"
                            style={styles.inputField}
                            
                          />  
                      <View style={styles.eyeView}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Image
                              style={styles.searchImg}
                              source={require('.././images/search-icon.png')} />
                                        
                        </TouchableOpacity > 
                      </View>
                  </View>
                  <View style={styles.accordionContainer}>
                   
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={styles.accHeaderText}>Popular Sports</Text>
                                <Image
                                    style={styles.checkedGreenImg}
                                    source={require('.././images/checked-icon.png')} />  
                              </View>
                              <View style={styles.iconContainer}>
                                <Image
                                    style={styles.dropdownImg}
                                    source={require('.././images/black-downarrow.png')} />  
                              </View>
                            </CollapseHeader>
                            <CollapseBody >
                              <ScrollView>
                                <View style={{flexDirection: 'row',marginLeft:'auto'}} >
                                    <CheckBox
                                      value={this.state.checked2}
                                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
                                    <Text style={styles.selectText}>Select All</Text>
                                </View>
                                 </ScrollView>
                                <View style={styles.accBody}>

                                      <View style={styles.inlineWrapper}>
                                            

                                                <View style={styles.itemWrapper}>
                                                    <TouchableOpacity onPress={this.ShowHideBlueIconView}>
                                                       <View style={{flexDirection:"row"}}>
                                                        <Image
                                                          style={styles.sportIconImg}
                                                          source={require('.././images/badminton.png')} /> 
                                                        <Text style={styles.bodyText}>Badminton</Text>
                                                      </View>
                                                    </TouchableOpacity>
                                                     <View>
                                                              {
                                                                    this.state.status ? <Text></Text> 
                                                                    : 
                                                                          <View style={styles.blueIcon}>
                                                                          </View>
                                                              }
                                                    </View>
                                                    
                                                </View>
                                            
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/cricket.png')} /> 
                                                  <Text style={styles.bodyText}>Cricket</Text>
                                            </View>
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/table-tennis.png')} /> 
                                                <Text style={styles.bodyText}>Table Tennis</Text>
                                                <View style={styles.blueIcon}>
                                                </View>
                                            </View>
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/running.png')} /> 
                                                  <Text style={styles.bodyText}>Running</Text>
                                                   <View style={styles.blueIcon}>
                                                  </View>
                                            </View>
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/foot-ball.png')} /> 
                                                  <Text style={styles.bodyText}>Football</Text>
                                            </View>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/tennis.png')} /> 
                                                  <Text style={styles.bodyText}>Tennis</Text>
                                                  <View style={styles.blueIcon}>
                                                </View>
                                            </View>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/basket-ball.png')} /> 
                                                  <Text style={styles.bodyText}>Basket Ball</Text>
                                            </View>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/cycling.png')} /> 
                                                  <Text style={styles.bodyText}>Cycling</Text>
                                                   <View style={styles.blueIcon}>
                                                  </View>
                                            </View>
                                            
                                      </View>
                                </View>
                              
                            </CollapseBody>
                      </Collapse>

                </View>
                  <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={styles.accHeaderText}>Team Sports</Text>
                                <Image
                                    style={styles.checkedGreenImg}
                                    source={require('.././images/checked-icon.png')} />  
                              </View>
                              <View style={styles.iconContainer}>
                                <Image
                                    style={styles.dropdownImg}
                                    source={require('.././images/black-downarrow.png')} />  
                              </View>
                            </CollapseHeader>
                            <CollapseBody >
                               <View style={{flexDirection: 'row',marginLeft:'auto'}} >
                                    <CheckBox
                                      value={this.state.checked2}
                                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
                                    <Text style={styles.selectText}>Select All</Text>
                                </View>
                                <View style={styles.accBody}>
                                      <View style={styles.inlineWrapper}>
                                           
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/cricket.png')} /> 
                                                  <Text style={styles.bodyText}>Cricket</Text>
                                            </View>
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/table-tennis.png')} /> 
                                                <Text style={styles.bodyText}>Table Tennis</Text>
                                                <View style={styles.blueIcon}>
                                                </View>
                                            </View>

                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/foot-ball.png')} /> 
                                                  <Text style={styles.bodyText}>Football</Text>
                                            </View>
                                           
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/basket-ball.png')} /> 
                                                  <Text style={styles.bodyText}>Basket Ball</Text>
                                            </View>
                                           
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                  <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={styles.accHeaderText}>Racquet Sports</Text>
                                <Image
                                    style={styles.checkedGreenImg}
                                    source={require('.././images/checked-icon.png')} />  
                              </View>
                              <View style={styles.iconContainer}>
                                <Image
                                    style={styles.dropdownImg}
                                    source={require('.././images/black-downarrow.png')} />  
                              </View>
                            </CollapseHeader>
                            <CollapseBody >
                               <View style={{flexDirection: 'row',marginLeft:'auto'}} >
                                    <CheckBox
                                      value={this.state.checked2}
                                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
                                    <Text style={styles.selectText}>Select All</Text>
                                </View>
                                <View style={styles.accBody}>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/badminton.png')} /> 
                                                <Text style={styles.bodyText}>Badminton</Text>
                                                <View style={styles.blueIcon}>
                                                </View>
                                            </View>
                                            
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/table-tennis.png')} /> 
                                                <Text style={styles.bodyText}>Table Tennis</Text>
                                                <View style={styles.blueIcon}>
                                                </View>
                                            </View>
                                            
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/tennis.png')} /> 
                                                  <Text style={styles.bodyText}>Tennis</Text>
                                                  <View style={styles.blueIcon}>
                                                 
                                                </View>
                                            </View>
                                            
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                  <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={styles.accHeaderText}>Fitness Sports</Text>
                                <Image
                                    style={styles.checkedGreenImg}
                                    source={require('.././images/checked-icon.png')} />  
                              </View>
                              <View style={styles.iconContainer}>
                                <Image
                                    style={styles.dropdownImg}
                                    source={require('.././images/black-downarrow.png')} />  
                              </View>
                            </CollapseHeader>
                            <CollapseBody >
                                <View style={{flexDirection: 'row',marginLeft:'auto'}} >
                                    <CheckBox
                                      value={this.state.checked2}
                                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
                                    <Text style={styles.selectText}>Select All</Text>
                                </View>
                                <View style={styles.accBody}>
                                      <View style={styles.inlineWrapper}>
                                           
                                            
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/running.png')} /> 
                                                  <Text style={styles.bodyText}>Running</Text>
                                                   <View style={styles.blueIcon}>
                                                  </View>
                                            </View>
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                          
                                            
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/cycling.png')} /> 
                                                  <Text style={styles.bodyText}>Cycling</Text>
                                                   <View style={styles.blueIcon}>
                                                  </View>
                                            </View>
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={styles.accHeaderText}>Recreation Sports</Text>
                                
                              </View>
                              <View style={styles.iconContainer}>
                                <Image
                                    style={styles.dropdownImg}
                                    source={require('.././images/black-downarrow.png')} />  
                              </View>
                            </CollapseHeader>
                            <CollapseBody >
                                <View style={{flexDirection: 'row',marginLeft:'auto'}} >
                                    <CheckBox
                                      value={this.state.checked2}
                                      onValueChange={() => this.setState({ checked2: !this.state.checked2 })} />
                                    <Text style={styles.selectText}>Select All</Text>
                                </View>
                                <View style={styles.accBody}>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/badminton.png')} /> 
                                                <Text style={styles.bodyText}>Yoga</Text>
                                               
                                            </View>
                                            
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/table-tennis.png')} /> 
                                                <Text style={styles.bodyText}>Swimming</Text>
                                                
                                            </View>
                                            
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/tennis.png')} /> 
                                                  <Text style={styles.bodyText}>Chess</Text>
                                                  
                                            </View>
                                            
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>


                <View style={styles.signInBtn}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.signInBtnText}>SAVE</Text>
                      </TouchableOpacity>
                </View>
         
        
       
            </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
container: {
    padding: 20,
    flex: 1,
    alignItems: 'stretch',
  },
headerText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:24,
    color:"#363f4d"
  },
subHeaderText:
  {
    fontFamily:"TwCenMTStd",
    color:"#999999",
    fontSize:16,
    marginTop:5,
    marginBottom:20
  },
accordionContainer:
  {
    marginTop:20,
    padding:10,
    borderColor:'#d7d7d7',
    borderWidth: 1,
    borderRadius:5
  },
accHeader:
 {
  flexDirection:"row", 
  alignItems:"center" 
 },
iconContainer:
  {
    marginLeft:'auto',
  },
accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:16,
    color:"#363f4d",
    marginLeft:5
  },
itemWrapper:
  {
    flexDirection:"row",
    marginTop:10,
    marginLeft:10,
    marginBottom:5,
    alignItems:"center"
  },
  accBody:
  {
  flexDirection:"row",
  },
itemWrapper2:
  {
    flexDirection:"row",
    marginTop:10,
    marginBottom:5,
    alignItems:"center"
  },
bodyText:
  {
    fontSize:14,
    fontFamily:"TwCenMTStd",
    marginLeft:5,
    textAlign:"center",
    color:"#999999"
  },
selectText:
  {
    fontSize:14,
    fontFamily:"TwCenMTStd",
    textAlign:"center",
    color:"#999999",
    marginTop:8
  },

inlineWrapper:
  {
    flexDirection:"column",
    width:"50%"
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
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  },
dropdownImg:
{
  width:15,
  height:15,
  marginRight:5
},
sportIconImg:
{
  width:15,
  height:15,
},
inputField:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderWidth: 1,
    borderRadius:5,
    fontFamily:"TwCenMTStd",
    marginTop:10,
    width:"100%",
    color:"#999999",
    paddingLeft:10,
    height:45
  },
  eyeView:
  {
    marginLeft:'auto',
    marginTop:22,
  },
  blueIcon:
{
  height:8,
  width:8,
  backgroundColor:"#33cbf6",
  borderRadius:50,
  marginLeft:5,
 
},
checkedGreenImg:
  {
    width:12,
    height:12,
    marginLeft:5
  },

});

