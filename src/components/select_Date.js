import React from 'react';
import { StyleSheet, Text,TextInput,ProgressBarAndroid,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';


export default class select_Date extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <View>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>                  
                          <View style={styles.iconContainer}>
                                  <Icon name='arrow-back' size={22} color={'white'} />
                          </View>
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Date</Text>                                     
              </View>                   
    </View>
     
   );
 }
}
const styles = StyleSheet.create({
   cartHeader:
 {
    flexDirection:"row",
    backgroundColor:"#33cbf6"
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

});


