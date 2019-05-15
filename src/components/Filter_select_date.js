import React from 'react';
import { StyleSheet, Text,TextInput,SafeAreaView ,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Calendar} from 'react-native-calendars';

export default class Filter_select_date extends React.Component {
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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('filterIcon')}>                  
                          <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Date</Text>                                     
              </View>
          <ScrollView>
                  <Calendar
                    onDayPress={this.onDayPress}
                    style={styles.calendar}
                    hideExtraDays
                    markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'green'}}}
                  />

        </ScrollView>
         <View style ={{flexDirection :'row',marginBottom :30,padding :20}}>
                  <View style={styles.signInBtn1}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Text style={styles.signInBtnText1}>Clear</Text>
                            </TouchableOpacity>
                  </View>
                  <View style={styles.signInBtn2}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Text style={styles.signInBtnText}>Done</Text>
                              </TouchableOpacity>
                  </View>
        </View>
                           
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
  signInBtn1:
  {   
    
    borderRadius:5,
    marginTop:40,
    borderWidth:1.5,
    borderColor :"#3DBEF5",
    width:'41%',
    alignItems :'center',

  },
   signInBtn2:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:'auto',
   
    alignItems :'center',
    
    
    width:'41%'
    

  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',

    justifyContent: 'center',
    padding:10,
    fontFamily:"TwCenMTStd"
  },
  signInBtnText1:
  {
    fontSize:20 ,
    color :"#3DBEF5",

    justifyContent: 'center',
    padding:10,
    fontFamily:"TwCenMTStd"
  },
  
});


