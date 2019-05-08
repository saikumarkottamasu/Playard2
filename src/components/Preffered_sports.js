import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,SafeAreaView,
  Text,
  TextInput,CheckBox,
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
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
       
                  <Text style={styles.headerText}>Preferred Sports</Text>
                  <Text style={styles.subHeaderText}>dummy text of printing and typesetting industry.Lorem 
                        has been the indutry's standard dummy text</Text>
                 
                  <Item regular style={styles.searchBar}>
                        <Input placeholder="Search by Sports" style={styles.searchText}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                          <Image
                          style={styles.searchImg}
                          source={require('.././images/search-icon.png')} />
                                        
                        </TouchableOpacity >

                  </Item>
                  <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View>
                                <Text style={styles.accHeaderText}>Popular Sports</Text>
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
                                            </View>
                                            <View style={styles.itemWrapper}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/running.png')} /> 
                                                  <Text style={styles.bodyText}>Running</Text>
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
                                            </View>
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View>
                                <Text style={styles.accHeaderText}>Team Sports</Text>
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
                                                  source={require('.././images/basket-ball.png')} /> 
                                                <Text style={styles.bodyText}>Basket Ball</Text>
                                            </View>
                                            
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/foot-ball.png')} /> 
                                                  <Text style={styles.bodyText}>Football</Text>
                                            </View>
                                                                                                                                                                              
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View>
                                <Text style={styles.accHeaderText}>Racquet Sports</Text>
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
                                            </View>
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                           
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/tennis.png')} /> 
                                                  <Text style={styles.bodyText}>Tennis</Text>
                                            </View>
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                  <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View>
                                <Text style={styles.accHeaderText}>Fitness Sports</Text>
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
                                            </View>
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/cycling.png')} /> 
                                                  <Text style={styles.bodyText}>Cycling</Text>
                                            </View>
                                            
                                      </View>
                                </View>
                            </CollapseBody>
                      </Collapse>
                </View>
                  <View style={styles.accordionContainer}>
                      <Collapse>                    
                            <CollapseHeader style={styles.accHeader}>
                              <View>
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
                                                  source={require('.././images/running.png')} /> 
                                                  <Text style={styles.bodyText}>Running</Text>
                                            </View>
                                      </View>
                                      <View style={styles.inlineWrapper}>
                                            <View style={styles.itemWrapper2}>
                                                <Image
                                                  style={styles.sportIconImg}
                                                  source={require('.././images/cycling.png')} /> 
                                                  <Text style={styles.bodyText}>Cycling</Text>
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
  },
searchBar:
  {
    borderWidth:1,
    borderColor:"#d7d7d7",
    marginTop:20,
    borderRadius:5
  },
searchText:
  {
    fontSize:18,
    color:"#999999",
    fontFamily:"TwCenMTStd"
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
     marginLeft:15
  },
  accBody:
  {
  flexDirection:"row",
  },
itemWrapper2:
  {
    flexDirection:"row",
    marginLeft:30,
    marginTop:10
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
}
});

