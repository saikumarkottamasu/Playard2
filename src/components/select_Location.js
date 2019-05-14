import React from 'react';
import { StyleSheet, Text,TextInput,SafeAreaView ,TouchableOpacity,ScrollView,TouchableHighlight,Image,View, FlatList, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item, Input } from 'native-base';


export default class select_Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues:[],
      isLocalityVenueSelected: false,
      dummy:['akvd', 'begumpet'],
      spinnerVisibility: false,
      searchText: '',
      noresultsFound: false
    };
  }

static navigationOptions = {
       header: null,
    };

getLocationsAndVenues(){
  this.setState({spinnerVisibility: true, loadingMessage: 'Getting locations , Please wait...'})
  let formData = new FormData();
  formData.append('search', this.state.searchText);
  let data = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          "Content-Type": "multipart/form-data",
      },
      body: formData
  }
  fetch("http://testingmadesimple.org/playard/api/service/venues", data)
  .then(response => response.json())
  .then(responseJson =>
   {

        if(responseJson['status']== 1){
            this.setState({venues:responseJson['venues'], spinnerVisibility: false, isLocalityVenueSelected: true, noresultsFound: false})
        }
        else if(responseJson['status']== 2){
            this.setState({spinnerVisibility: false, venues:[], noresultsFound: true})
        }
        else{
          this.setState({spinnerVisibility: false, isLocalityVenueSelected: false})
          this.displayError()
        }
    }

      )
    }

displayError() {
  this.setState({ spinnerVisibility: false });
  Alert.alert(
    'Error',
    'Sorry, something went wrong: Please try again later...',
    [
      { text: 'OK' },
    ],
    { cancelable: false }
  )
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

setVenu(item){
  this.props.navigation.state.params.createActivity.setState({locality:item.localityId, venueId: item.venueId},()=>{this.props.navigation.navigate('create_Activity')})

}
venueConfirmation(item){
  console.log("@@##",item);
  let text='You have selected...'
  text=JSON.stringify(item.localityName+' '+ item.name)
  Alert.alert(
    'Confirmation',
    'Are you sure wants to confirm the selected location?',
    [
      {text: 'Yes', onPress: () =>  this.setVenu(item)},
      {text: 'No'}
    ],
    { cancelable: true }
  )
}
renderRow(item){
return(
  <TouchableOpacity onPress={() => this.venueConfirmation(item)} style={{borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: '#dadada', padding: 10}}>
  <Text>
  {item.localityName}, {item.name}
  </Text>
  </TouchableOpacity>
)
}
emptyLayout(){
  if(this.state.noresultsFound){
return(
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text>No results found</Text>
  </View>
)}
else {
  return(
    <View>
    </View>
  )
}
}
 render()
 {
   return(
    <SafeAreaView >
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Location</Text>
              </View>
              <View style={styles.contentBody}>
                    <View style={{flexDirection:"row",marginTop:10}}>
                          <Image
                              style={styles.locationImg}
                              source={require('.././images/detect-location.png')} />

                        <Text style={styles.accHeaderText}>Detect Current Location</Text>
                    </View>
                     <View style={{flexDirection:"row",margin:10}}>
                            <TextInput
                                  placeholder="Search by Locality/ Venue Name"
                                  style={styles.inputField}
                                  onChangeText={(text) => {
                                      if(text.length>0){
                                        this.setState({isLocalityVenueSelected: true})
                                      }
                                      else{
                                        this.setState({isLocalityVenueSelected: false, venues: []})

                                      }
                                      this.setState({searchText:text})}}

                                  value={this.state.searchText}
                                  returnKeyType = { "done" }
                                  onSubmitEditing={() => {
                                  if(this.state.searchText.length>0){
                                  this.getLocationsAndVenues()} }}
                                />
                            <View style={styles.eyeView}>
                                <TouchableOpacity onPress={() => {
                                  if(this.state.searchText.length>0){
                                  this.getLocationsAndVenues()}}}>
                                    <Image
                                    style={styles.searchImg}
                                    source={require('.././images/search-icon.png')} />

                              </TouchableOpacity >
                      </View>
                  </View>
                  {!this.state.isLocalityVenueSelected?
                    <View>
                    <Text style={styles.addressText}>Cafe Coffee Day- The Launge Road 12,Banjara hills,Hyderabad</Text>
                    <Text style={styles.addressText}>Cream Shakes,Opposite to Ratnadeep Super Market,Road 12,Banjara Hills,Hyderabad</Text>
                    <Text style={styles.addressText}>The Biryani Box,Sridha Anushka Pride,Road 12,Banjara Hills,Hyderabad</Text>
                    </View>
                    :
                    <View>
                    <FlatList
                    data={this.state.venues}
                    ListEmptyComponent={() => this.emptyLayout()}
                      renderItem={({ item }) => this.renderRow(item)}
                    extraData={this.state}
                  />
                  </View>
                  }
              </View>

                {this.spinnerComponent()}
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
  accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:17,
    color:"#363f4d",
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
    width:18,
    height:18,
    marginRight:10
  },
  locationImg:
  {
    width:22,
    height:22,
    marginRight:5,
    marginLeft:10
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

});