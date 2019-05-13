import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class Venues extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
             	<View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Profile')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Venues</Text>
                      <View style={{marginLeft:'auto'}}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('search_Venue')}>                  
                              <Image
                                  style={styles.searchImg}
                                  source={require('.././images/search-icon-white.png')} />
                          </TouchableOpacity>
                      </View>   
              	</View>
            <ScrollView>
              	<View style={styles.contentBody}>
              			
              	</View>
            </ScrollView>
                  <View style={styles.tagVenueBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('venue_Details')}>
                                    <Text style={styles.tagVenueBtnText}>See Details</Text>
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
tagVenueBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginBottom:20,
    marginLeft:30,
    marginRight:30,
  },
 tagVenueBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"TwCenMTStd"
  },

});


