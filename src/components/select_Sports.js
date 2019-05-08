import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';


export default class select_Sports extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <View>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>                  
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Sports</Text>                                     
              </View>                
    </View>
     
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
 searchImg:
  {
    width:20,
    height:20,
  },
});


var dataDump =[
  {
    "feedback": 
    {
      "subject":"Enter Subject",
      "message":"Enter Message here minimum 150 characters",
      
    },
  }

]