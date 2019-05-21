import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,ScrollView,SafeAreaView,Image,View, Alert, ActivityIndicator } from 'react-native';
var GLOBAL = require('.././config/global.js');
import AsyncStorage from '@react-native-community/async-storage';

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
              spinnerVisibility: false,
              loadingMessage: '',

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

  spinnerComponent() {
        if(this.state.spinnerVisibility){
        return (
          <View style={{ flex: 1, position: 'absolute', top: 0, left: 0,right: 0, bottom: 0, alignItems: "center", justifyContent: "center"}}>
              <View style={{ flexDirection: 'row', overflow: 'hidden',borderRadius: 16, backgroundColor: "grey" }}>
                  <ActivityIndicator color='#ffffff' style={{ padding: 4}} visibility={true} animating={this.state.spinnerVisibility} />
                  {
                      this.state.loadingMessage != '' ?
                          <Text style={{ fontSize: 16, color: '#FFFFFF',padding: 4, marginRight: 4 }}>{this.state.loadingMessage}</Text> :
                          null
                  }
              </View>
          </View>
        );
      }
      }

createActivity(){
  let formData = new FormData();
  if(GLOBAL.user_id == ''){
    Alert.alert(
      'Error',
      'Please Login or Signup to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else if(this.state.sportId == ''){
    Alert.alert(
      'Error',
      'Please select a game to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else if(this.state.venueId == '' || this.state.locality == ''){
    Alert.alert(
      'Error',
      'Please select a venue or location to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else if(this.state.startTime == '' || this.state.endTime == ''){
    Alert.alert(
      'Error',
      'Please select a time slot to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else if(this.state.activityDate == '' ){
    Alert.alert(
      'Error',
      'Please select a date  to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else if(this.state.activityType == '' ){
    Alert.alert(
      'Error',
      'Please select activity type  to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else if(this.state.skillType == '' ){
    Alert.alert(
      'Error',
      'Please select a skill type  to create activity',
      [
        {text: 'ok'}
      ],
      { cancelable: true }
    )
  }
  else {
    let notify = 0
    if(this.state.notifyFriends){
      notify = 1
    }
    this.setState({spinnerVisibility: true, loadingMessage: 'Creating activity, Please wait...'})
    formData.append('userId', GLOBAL.user_id);
    formData.append('sportId', this.state.sportId);
    formData.append('venueId', this.state.venueId);
    formData.append('activityDate', this.state.activityDate);
    formData.append('startTime', this.state.startTime);
    formData.append('endTime', this.state.endTime);
    formData.append('activityType', this.state.activityType);
    formData.append('skillType', this.state.skillType);
    formData.append('timeslot', this.state.timeslot);
    formData.append('notifyFriends', notify);
    formData.append('locality', this.state.locality);
    console.log("@@@@formData",formData);
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "multipart/form-data",
        },
        body: formData
    }
    fetch("http://testingmadesimple.org/playard/api/service/createActivity", data)
    .then(response => response.json())
    .then(responseJson =>
     {
            this.setState({spinnerVisibility: false})
            if(responseJson.status == ("1"))
               {
                 Alert.alert(
                   'Success',
                   'Successfully Created the activity',
                   [
                     {text: 'okay', onPress: () =>  {this.props.navigation.navigate('Profile')}},
                   ],
                   { cancelable: true }
                 )
                }
                else{
                  GLOBAL.sport = ''
                Alert.alert(
                  'Error',
                  'Failed to create activity, Please try again...',
                  [
                    {text: 'ok'}
                  ],
                  { cancelable: true }
                )
              }
      }

    )

    .catch(error => this.setState({spinnerVisibility: false}));
  }



}
 render()
 {
   console.log("#$$$$$$$$",GLOBAL.sport);
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('select_Sports',{createActivity: this})}>
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
                              <TouchableOpacity onPress={() => this.createActivity()}>
                                    <Text style={styles.signInBtnText}>Create Activity</Text>
                              </TouchableOpacity>
                        </View>


                  </View>
                {this.spinnerComponent()}
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
