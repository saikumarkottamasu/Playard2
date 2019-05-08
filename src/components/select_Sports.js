import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,SafeAreaView ,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Collapse,CollapseHeader,CollapseBody} from 'accordion-collapse-react-native';


export default class select_Sports extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView >
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Sports</Text>                                     
              </View>
              <View style={styles.contentBody}>
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
  contentBody:
  {
    padding:10
  },
 searchImg:
  {
    width:20,
    height:20,
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
    marginRight:20
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
  dropdownImg:
{
  width:15,
  height:15,
  marginRight:5
},
inlineWrapper:
  {
    flexDirection:"column",
   
  },
sportIconImg:
{
  width:15,
  height:15,
},
bodyText:
  {
    fontSize:14,
    fontFamily:"TwCenMTStd",
    marginLeft:5,
    textAlign:"center",
    color:"#999999"
  },

});


