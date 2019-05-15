import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,TouchableHighlight, Text, View,Button,Image,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';


export default class Mysports extends Component {
    static navigationOptions = {
       header: null,
    };
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Manage Players</Text>   
                     <View style ={{marginLeft :'auto'}}> 
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                           <Image
                          style={styles.userImg}
                          source={require('.././images/add-plyer.png')} />
                      </TouchableOpacity> 
                      </View>                                
                  </View>
              
              <View style={styles.textWrapper}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('managePlayers')}>
                      <Text style={styles.textview1}>Reserve(2)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                        <Text style={styles.textview}>Playing(2)</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                  <Text style={styles.textview}>Retired(2)</Text>
                  </TouchableOpacity>
                  

              </View>


              <View style={styles.listBody}>
                    
                    <View style={{flexDirection:"row",marginTop:-1}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Sivaparvathi</Text>
                                    <Text style={styles.underlineText}>Beginner</Text>
                                    <View style ={{flexDirection :'row',marginTop:10,marginBottom :8}}>
                                      
                                      <Text style={{color :'#999999',fontFamily:"TwCenMTStd",fontSize:14}}>Requested 3 hours ago, 13:01</Text>
                                    </View>
                                    
                                    <View style ={{flexDirection :'row',marginBottom:10}}>
                                          <View style={styles.signInBtn1}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                                <Text style={styles.signInBtnText1}>Accept to playing</Text>
                                                </TouchableOpacity>
                                              </View>
                                            <View style={styles.signInBtn2}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                              <Text style={styles.signInBtnText2}>Mark Retired</Text>
                                                </TouchableOpacity>
                                              </View>
                                            <View style={styles.signInBtn3}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                              <Text style={styles.signInBtnText3}>See Reputation</Text>
                                                </TouchableOpacity>
                                              </View>
                                     </View>
                              </View>
                              <View style={styles.goingContent}>
                                  <View style={{marginLeft:'auto'}}>
                                     <Text style={{color :"#363f4d",fontSize:12,fontFamily :"TwCenMTStd"}}>Rating in Last 5 Games</Text>                                                                                                                     
                                  </View>
                                  <View style ={{flexDirection :'row'}}>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd"}}>-</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'green'}}>5</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'#1C90DE'}}>4</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'red'}}>2</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'#999999'}}>1</Text>
                                  </View>
                              </View>

                    </View>
                    
            </View>

            <View style={styles.listBody}>
                    
                    <View style={{flexDirection:"row",marginTop:-1}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Sivaparvathi</Text>
                                    <Text style={styles.underlineText}>Beginner</Text>
                                    <View style ={{flexDirection :'row',marginTop:10,marginBottom :8}}>
                                      
                                      <Text style={{color :'#999999',fontFamily:"TwCenMTStd",fontSize:14}}>Requested 3 hours ago, 13:01</Text>
                                    </View>
                                    
                                    <View style ={{flexDirection :'row',marginBottom:10}}>
                                          <View style={styles.signInBtn1}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                                <Text style={styles.signInBtnText1}>Accept to playing</Text>
                                                </TouchableOpacity>
                                              </View>
                                            <View style={styles.signInBtn2}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                              <Text style={styles.signInBtnText2}>Mark Retired</Text>
                                                </TouchableOpacity>
                                              </View>
                                            <View style={styles.signInBtn3}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                              <Text style={styles.signInBtnText3}>See Reputation</Text>
                                                </TouchableOpacity>
                                              </View>
                                     </View>
                              </View>
                              <View style={styles.goingContent}>
                                  <View style={{marginLeft:'auto'}}>
                                     <Text style={{color :"#363f4d",fontSize:12,fontFamily :"TwCenMTStd"}}>Rating in Last 5 Games</Text>                                                                                                                     
                                  </View>
                                  <View style ={{flexDirection :'row'}}>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd"}}>-</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'green'}}>5</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'#1C90DE'}}>4</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'red'}}>2</Text>
                                      <Text style={{marginLeft :'auto',fontSize:14,fontFamily :"TwCenMTStd",color :'#999999'}}>1</Text>
                                  </View>
                              </View>

                    </View>
                    
            </View>

           


           



              
               
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
container:{

},
 textWrapper:
  {
    flexDirection:"row",
    padding:16,
    

  },
   textview1:
  {
    color:"#33cbf6",
    fontSize:15,
    fontFamily:"TwCenMTStd",
    marginLeft:20,
    marginRight :30
   
  },
  signInBtn1:
  {   
    backgroundColor:"#1C90DE",
    borderRadius:2,
    
    justifyContent :'center',
    marginTop:10,
    marginRight :10,padding:3,

  },
   signInBtn2:
  {   
    borderWidth :1,
    borderRadius:2,
  
  justifyContent :'center',
    borderColor :"#1C90DE",
    
    alignItems :'center',
    marginTop:10,
    marginRight :10 ,
    padding:3,   

  },
  signInBtn3:
  {   
    borderWidth :1
    ,
    borderRadius:2,
    justifyContent :'center',
    
    borderColor :"#1C90DE",
    padding :3,
    marginTop:10,
    
    marginLeft :31,

  },
  signInBtnText1:
  {
    fontSize:11 ,
    color:"#fff",

    justifyContent: 'center',
    
    fontFamily:"TwCenMTStd"
  },
  signInBtnText2:
  {
    fontSize:11,
    color :"#1C90DE",

    
    
    fontFamily:"TwCenMTStd"
  },
  signInBtnText3:
  {
    fontSize:11,
    color :"#1C90DE",

    
    
    fontFamily:"TwCenMTStd"
  },
  
  textview:
  {
    color:"#999999",
    fontSize:15,
    fontFamily:"TwCenMTStd",
    marginLeft:20,
    marginRight :25,

  },
searchImg:
  {
    width:20,
    height:20,
  },
  userImg:
  {
    width:20,
    height:20,

  },
profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:20,
    textAlignVertical:"center",
  },
 

goingImg:
{
  width:15,
  height:15,
  marginTop:4
},
profileImg:{
    width:45,
    height:45,
    borderRadius:50
  },
  cartHeader:
  {
    flexDirection:"row",
    backgroundColor:"#33cbf6",
    padding:15
  },
  
  
 profileView:
  {
    flexDirection:"row",  
  },
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
  
  upcomingWrapper:
  {
    flexDirection:"row",
    padding:20,
    marginLeft :15
  },
  

  
  listBody:
  {
    borderColor:"#C0C0C0",
    elevation:1,
    margin:3,
    padding:10,
    paddingBottom:6 ,
    marginBottom:10
  },
  
  goingText:
  {
    
    fontFamily:"TwCenMTStd",
    fontSize:10,
    marginLeft :5,
  },
  goingContent:
  {
    flexDirection:"column",
    marginLeft:'auto',

  },

  titleText:
  {
    color:"#363f4d",
    fontSize:18,
    fontFamily:"TwCenMTStd",
  },
  titleContent:
  {
    flexDirection:"column",
    marginLeft:10
  },
  underlineText:
  {
    color:"#33cbf6",
    fontFamily:"TwCenMTStd",
    fontSize:13,
    color :'skyblue',
    textDecorationLine: 'underline',

            borderBottomColor: 'gray',
  },

});


