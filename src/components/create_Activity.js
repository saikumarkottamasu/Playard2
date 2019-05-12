import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,ScrollView,SafeAreaView,Image,View } from 'react-native';

export default class create_Activity extends React.Component {
static navigationOptions = {
       header: null,
    };
  constructor(props)
  {
    super(props);
    this.state =
            {
              selected: "key1",
              selected2: "s1",
              sportId: '',
              venueId: '',
              locality: '',
              activityDate: '',
              startTime: '',
              endTime: '',
              activityType: '',
              skillType: '',
              timeslot: '',
              notifyFriends: false,

            };

  }


  toggleNotifyFriends(){
    console.log("@@@@@@",!this.state.notifyFriends);
    this.setState({ notifyFriends: !this.state.notifyFriends });
  }
    change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

 render()
 {
   return(
    < SafeAreaView style={{flex:1}}>
                  <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Create Activity</Text>
                  </View>
          <ScrollView>

                  <View style={styles.contentBody}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('select_Sports')}>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Select Sport</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Eg: Cricket / Boxing</Text>
                                <View style={{marginLeft:"auto"}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />

                                </View>
                            </View>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('select_Location',{createActivity: this})}>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Area/ Location</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Locality or venue name</Text>
                                <View style={{marginLeft:"auto"}}>

                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />
                                </View>
                            </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('select_Date',{createActivity: this})}>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Date</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Select Date</Text>
                                <View style={{marginLeft:"auto"}}>

                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />

                                </View>
                            </View>
                      </View>
                           </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('select_Time',{createActivity: this})}>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Time</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Select flexible time slot</Text>
                                <View style={{marginLeft:"auto"}}>
                                            <View style={{}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />
                                            </View>
                                </View>
                            </View>
                      </View>
                     </TouchableOpacity>
                      <Text style={styles.selectSport}>Activity Type</Text>
                        <View style={styles.mobileText1}>
                                  <Picker
                                    selectedValue={this.state.activityType}
                                    onValueChange={(itemValue, itemIndex) =>{
                                      console.log("####",itemValue);
                                      if(itemValue != ""){
                                      this.setState({activityType: itemValue})}
                                    }
                                    }>

                                    <Picker.Item label="Select Activity Type" value="" itemStyle={{fontStyle:"TwCenMTStd"}}/>
                                    <Picker.Item label="Public" value="Public" />
                                    <Picker.Item label="Friends" value="Friends" />
                                  </Picker>
                        </View>
                        <Text style={styles.selectSport}>Skills Level</Text>
                        <View style={styles.mobileText1}>
                                  <Picker
                                    selectedValue={this.state.skillType}
                                    onValueChange={(itemValue, itemIndex) =>{
                                      console.log("itemValue!!",itemValue);
                                      if(itemValue != ""){
                                        console.log("@@@notnone###");
                                      this.setState({skillType: itemValue})
                                    }
                                    }
                                    }>

                                    <Picker.Item label="Select Skills Level" value="" itemStyle={{fontStyle:"TwCenMTStd"}}/>
                                    <Picker.Item label="Beginner" value="Beginner" />
                                    <Picker.Item label="Amateur" value="Amateur" />
                                    <Picker.Item label="Intermediate" value="Intermediate" />
                                    <Picker.Item label="Advanced" value="Advanced" />
                                    <Picker.Item label="Professional" value="Professional" />
                                  </Picker>
                        </View>
                        <View style={{flexDirection:"row"}}>
                                <Text style={styles.accHeaderText}>Notify friends</Text>
                                <View style={{marginLeft:"auto",}}>
                                    <Switch
                                         onValueChange = {this.toggleNotifyFriends.bind(this)}

                                          trackColor={{true: '#3DBEF5', false: '#D3D3D3'}}
                                          thumbColor="white"
                                         value = {this.state.notifyFriends}/>
                                </View>
                        </View>
                        <View style={styles.signInBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Text style={styles.signInBtnText}>Create Activity</Text>
                              </TouchableOpacity>
                        </View>


                  </View>
            </ScrollView>

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
  searchImg:
  {
    width:20,
    height:20,
  },
  rightImg:
  {
    width:15,
    height:15,
    // padding:10,
    // alignSelf: 'flex-start',
    // flex:1,
    // backgroundColor:"pink"
  },

  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:20,
    textAlignVertical:"center",
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:15
  },
  accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:17,
    color:"#363f4d",
  },
  rightIconContainer:
  {
    marginLeft:'auto'
  },
  textWrapper:
  {
    flexDirection:"row",
    borderBottomWidth:1,
    borderColor:"#dadada",
    paddingBottom:5,

  },
  selectSport:
  {
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginBottom:5,
    color:"#7f7f7f"
  },
  contentBody:
  {
    padding:20,
  },
  itemWrapper:
  {
    marginBottom:25
  },
  mobileText1:
  {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom:30,
    fontFamily:"TwCenMTStd",
    // backgroundColor:"pink"
  },
  signInBtn:
  {
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:20,
    marginRight:20
  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"TwCenMTStd"
  },

});
