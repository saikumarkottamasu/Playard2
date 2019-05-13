import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class see_Map extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
             	<View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('venue_Details')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Sri Saibaba Cricket Stadium</Text>
              	</View>
              	<View style={styles.contentBody}>
              			 <Image
                          style={styles.mapImg}
                          source={require('.././images/map.png')} />
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
    // padding:10
  },
 searchImg:
  {
    width:20,
    height:20,
  },

});


