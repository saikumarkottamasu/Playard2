import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,TouchableHighlight, Text, View,Button,Image,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';



export default class edit extends Component {
    static navigationOptions = {
       header: null,
    };
   render() {
    return (

      <View>
        <View style ={{flexDirection :'column'}}>
                  <View style={styles.cartHeader}>  
                    <View style={styles.profileView}>
                        <View style={[styles.iconContainer,{marginLeft:2}]}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>
                               <Image
                                style={styles.locationImg}
                                source={require('.././images/back-arrow-white.png')} />
                           </TouchableOpacity> 
                          </View>
                                
                    </View>
                    
                    <View style={{marginLeft:'auto',flexDirection:"row",alignItems :'center'}}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                               <Image
                                style={styles.locationImg}
                                source={require('.././images/white-close.png')} />
                           </TouchableOpacity>
                        </View>
                    </View>
                  </View>
            <View style ={{flexDirection :'row',margin:18,marginLeft:20}}>
                
                  <View style = {styles.redbox }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}> 
                      <Text style = {{textAlign:'center',marginTop :40,fontSize :24,color:"#363f4d",fontFamily:"TwCenMTStd"}}> Game Chat </Text>
                    
                      <Text style = {{textAlign:'center',color:'#999999',fontSize :12,fontFamily:"TwCenMTStd"}}>Conversation & more</Text>
                    </TouchableOpacity>
                  </View>
                  

                <View style = {styles.bluebox}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Gamebook')}> 
                         <Text style = {{textAlign:'center',marginTop :40,fontSize :24,color:"#363f4d",fontFamily:"TwCenMTStd"}}> Gamebook </Text>
                        <Text style = {{textAlign:'center',fontSize :12,color:'#999999',fontFamily:"TwCenMTStd"}}>Notes & Scrapbook</Text>
                   </TouchableOpacity>
                </View>
              
            </View>
             
            <View style ={{flexDirection :'row',margin:2,marginLeft:20}}>
              
                  <View style = {styles.redbox }>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('activity_edit')}> 
                        <Text style = {{textAlign:'center',marginTop :40,fontSize :24,color:"#363f4d",fontFamily:"TwCenMTStd",}}>Edit Activity </Text>
                        <Text style = {{textAlign:'center',fontSize :12,color:'#999999',fontFamily:"TwCenMTStd"}}>Change of plans</Text>
                    </TouchableOpacity>
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
  profileImg:{
    width:45,
    height:45,
    borderRadius:50
  },
  cartHeader:
  {
    flexDirection:"row",
    padding:10,
    height:63,
    backgroundColor:"#33cbf6"
  },
  cartHeader1:
  {
    flexDirection:"row",
    padding:10,
    height:63,
   
  },
  backImgView:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginLeft:10
  },
  iconImg:
  {
    width:60,
    height:60,
    borderRadius:50,  
  },
 profileView:
  {
    flexDirection:"row",  
  },
  profileText:
  {
    fontSize:18,
    fontFamily:"Lato-Heavy",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
  locationImg:
{
  width:20,
  height:20
},
  profileText1:
  {
    fontSize:13,
    fontFamily:"Lato-Heavy",
    opacity :0.5,
    marginLeft:0,
    textAlignVertical:"center",
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:8  
  },
  headerWrapper:
  {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    flex:1, 
    borderColor: '#dddd',
    borderBottomWidth: 3,
    paddingBottom:3
  },
  headerText:
  {
    fontSize: 14,
    marginLeft:5,
    fontFamily:"Lato-Medium",
    color:"white",    
  },
  upcomingWrapper:
  {
    flexDirection:"row",
    marginTop:10
  },
  upcomingText:
  {
    color:"black",
    fontSize:14,
    fontFamily:"Lato-Heavy",
    marginLeft:10
  },
    redbox: {
      
     width: 154,
      height: 120,
      
      borderWidth: 1.5,
       borderRadius: 3 ,
        borderColor :'#dadada',
      
   },
   bluebox: {
      width: 154,
      height: 120,
      
      borderWidth: 1.5,
      borderRadius: 3 ,
      borderColor :'#dadada',
      marginLeft :'auto',
    
    
   },
});


