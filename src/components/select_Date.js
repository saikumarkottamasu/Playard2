import React from 'react';
import { StyleSheet, Text,TextInput,SafeAreaView ,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Calendar} from 'react-native-calendars';

export default class select_Date extends React.Component {
static navigationOptions = {
       header: null,
    }; 

  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }    
 render() 
 {
   return(
    <SafeAreaView  style={{flex:1}}>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>                  
                          <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Date</Text>                                     
              </View>

        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'green'}}}
        />
                           
    </SafeAreaView >
     
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
   searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  },

calendar: {
    borderWidth: 1,
    elevation:1,
    margin:15,
    marginTop:40,
    borderColor: '#dadada',

  },
});


