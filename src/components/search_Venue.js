import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class search_Venue extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
             	<View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Venues')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Search Venue</Text>
                        
              	</View>
              	<View style={styles.contentBody}>
              			   <View style={{flexDirection:"row",margin:10}}>
                            <TextInput
                                  placeholder="Search by Venue Name"
                                  style={styles.inputField}
                                  

                                  returnKeyType = { "done" }
                                  


                                />
                            <View style={styles.eyeView}>
                               
                                    <Image
                                    style={styles.searchImg}
                                    source={require('.././images/search-icon.png')} />

                             
                            </View>
                      </View>
                      <Text style={styles.addressText}>Hotfut Begumpet</Text>
                      <Text style={styles.addressText}>Hotfut Begumpet</Text>
                      <Text style={styles.addressText}>Hotfut Begumpet</Text>


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
    marginLeft:20,
    textAlignVertical:"center",
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
  },
searchImg:
  {
    width:18,
    height:18,
    marginRight:10
  },
    addressText:
  {
    fontSize:15,
    textAlign:"left",
    color:"#999999",
    fontFamily:"TwCenMTStd",
    borderColor: '#dadada',
    borderBottomWidth: 1,
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    paddingBottom:15

  },

});


