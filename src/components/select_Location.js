import React from 'react';
import { StyleSheet, Text,TextInput,ProgressBarAndroid,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item, Input } from 'native-base';


export default class select_Location extends React.Component {
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
                      <Text style={styles.profileText}>Select Location</Text>                                     
              </View>
              <View style={styles.contentBody}>
                    <View style={{flexDirection:"row"}}>
                        <Icon name='compass' size={22} color={'black'} />
                        <Text style={styles.accHeaderText}>Detect Current Location</Text>
                    </View>
                    <Item regular style={styles.searchBar}>
                        <Input placeholder="Search by Locality/ Venue Name" style={styles.searchText}/>
                       
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                          <Image
                          style={styles.searchImg}
                          source={require('.././images/search-icon.png')} />
                                        
                        </TouchableOpacity >
                    </Item>
                    <Text style={styles.addressText}>Cafe Coffee Day- The Launge Road 12,Banjara hills,Hyderabad</Text>
                    <Text style={styles.addressText}>Cream Shakes,Opposite to Ratnadeep Super Market,Road 12,Banjara Hills,Hyderabad</Text>
                    <Text style={styles.addressText}>The Biryani Box,Sridha Anushka Pride,Road 12,Banjara Hills,Hyderabad</Text>

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
  accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:17,
    color:"#363f4d",
    marginLeft:5
  },
  contentBody:
  {
    padding:10
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
    fontSize:16,
    color:"#999999",
    fontFamily:"TwCenMTStd"
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
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  }
});


