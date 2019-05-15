import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,TouchableHighlight, Text, View,Button,Image,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';



export default class Gamebook extends Component {
    static navigationOptions = {
       header: null,
    };
   render() {
    return (

      <View>
        <View style ={{flexDirection :'column'}}>
                  <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('edit')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Gamebook</Text>                                     
              </View>

            <View style ={{flexDirection :'row',margin :20}}>
                
                  <View style = {styles.box }>
                  
                    
                      <Text style = {{fontSize :22,fontFamily:"TwCenMTStd",color :'#363f4d'}}> Personal Note</Text>
                    
                      <Text style = {{fontSize :15,fontFamily:"TwCenMTStd",marginLeft:5,color :'#999999'}}>Search by Venue Name</Text>
                      
                  </View>                 
            </View>

           

            <View style ={{flexDirection :'row',margin :20,marginTop :-5}}>
                    
                  
                    <View style={styles.container}>
                    
                          <Text style = {{fontSize :18,fontFamily:"TwCenMTStd",marginLeft:8,color:'#999999'}}>Good manners</Text>
                        <Text style = {{fontSize :13,fontFamily:"TwCenMTStd",marginLeft:10,color:'#999999'}}>17 Apr</Text>
                    </View>
                    <Image style={styles.goingImg} source={require('.././images/gray-close.png')} />
             
                  </View>

            <View style ={{flexDirection :'row',margin :20,marginTop :-5}}>
                    
                  
                    <View style={styles.container}>
                    
                          <Text style = {{fontSize :18,fontFamily:"TwCenMTStd",marginLeft:8,color:'#999999'}}>Hello</Text>
                        <Text style = {{fontSize :13,fontFamily:"TwCenMTStd",marginLeft:10,color:'#999999'}}>17 Apr</Text>
                    </View>
                    <Image style={styles.goingImg} source={require('.././images/gray-close.png')} />
             
                  </View>

            <View style ={{flexDirection :'row',margin :20,marginTop :-5}}>
                    
                  
                    <View style={styles.container}>
                    
                          <Text style = {{fontSize :18,fontFamily:"TwCenMTStd",marginLeft:8,color:'#999999'}}>About you</Text>
                        <Text style = {{fontSize :13,fontFamily:"TwCenMTStd",marginLeft:10,color:'#999999'}}>17 Apr</Text>
                    </View>
                    <Image style={styles.goingImg} source={require('.././images/gray-close.png')} />
             
                  </View>

             <View style ={{flexDirection :'row',margin :20,marginTop :-5}}>
                    
                  
                    <View style={styles.container}>
                    
                          <Text style = {{fontSize :18,fontFamily:"TwCenMTStd",marginLeft:8,color:'#999999'}}>Good looking player</Text>
                        <Text style = {{fontSize :13,fontFamily:"TwCenMTStd",marginLeft:10,color:'#999999'}}>17 Apr</Text>
                    </View>
                    <Image style={styles.goingImg} source={require('.././images/gray-close.png')} />
             
                  </View>


            </View>


  
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
container:{
  flexDirection:'column',
  width :'100%',
  height :'100%',
  borderWidth :1.5,
  borderColor:'#dadada',
  borderRadius :4,
  padding:4,
  paddingBottom:10,

},
profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
searchImg:
  {
    width:20,
    height:20,
    marginRight:10,
    marginTop:10
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
  
  goingImg:
{
  width:15,
  height:15,
  marginLeft :'auto',
  marginRight :10,
  marginTop :20
  
  
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
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:8  
  },
  
    redbox: {
      width :'100%',
      height :'100%',
      borderWidth: 1.5,
       borderRadius: 3 ,
      borderColor :'#dadada',
      flexDirection :'column',

      
   },
   box: {
      width :'100%',
      height :'100%',
      padding :10,
      borderWidth: 1.5,
       borderRadius: 3 ,
        borderColor :'#dadada',
      
   },
   locationImg:
{
  width:20,
  height:20
},
   
   
});


