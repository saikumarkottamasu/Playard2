import React, { Component } from 'react';
import { View, Text, FlatList,SafeAreaView,TouchableOpacity,Image, StyleSheet,ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

export default class notification_Invitation extends Component {
  static navigationOptions = {
       header: null,
    };    
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=4`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  

  
  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Profile')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Notifications</Text>
                </View>
                <View style={styles.upcomingWrapper}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Notifications')}>
                            <Text style={styles.updateText}>Updates</Text>
                      </TouchableOpacity>
                  <Text style={styles.invitationText}>Invitation</Text>
                               
              </View>

               
                      <View style={styles.contentView}>
                            <View style={styles.profileContent}>
                                       
                                        <Image source={require('.././images/user-icon.png')} style={styles.profileImg} />
                                        <View style={styles.titleContent}>
                                              <Text style={styles.titleText}>Samatha Reddy sent a join request for your cricket activity</Text>
                                              <Text style={styles.areaText}>2 hours ago,1.26PM</Text>

                                        </View>
                                        <View style={styles.goingContent}>                                 
                                            <Image
                                                style={styles.rightImg}
                                                source={require('.././images/black-rightarrow.png')}
                                            />
                                        </View>
                              </View>                              
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
    padding:15,
  },
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:20,
    textAlignVertical:"center",
  },
 searchImg:
  {
    width:20,
    height:20,
  },
  profileContent:
  {
    flexDirection:"row",
    marginTop:10,
    // alignItems: 'center', 

    width:"100%"
  },
  contentView:
  {
     borderWidth:0.65,
    borderColor:"#dadada",  
    paddingLeft:10,
    paddingRight:10,
    elevation:1,
    marginBottom:10,
     marginLeft:10,
    marginRight:10
  },
 
  profileImg:{
    width:35,
    height:35,
    borderRadius:50
  },
  titleText:
  {
    color:"#363f4d",
    fontSize:18,
    fontFamily:"TwCenMTStd",
  },
  titleContent:
  {
    flexDirection:"column",
    marginLeft:10,
    width:"75%",
  },
  goingText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
   
  },
  goingContent:
  {
    marginLeft:'auto',
   marginTop:10
  },
  rightImg:
  {
    width:18,
    height:18
  },
  areaText:
  {
    color:"#999999",
    fontFamily:"TwCenMTStd",
    fontSize:16,
    marginBottom:10,
    marginTop:3
  },

upcomingWrapper:
  {
    flexDirection:"row",
    marginTop:10,
    marginLeft:50,
    marginBottom:10
  },
  invitationText:
  {
    color:"#33cbf6",
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginLeft:50
  },
   updateText:
  {
    color:"#999999",
    fontSize:16,
    fontFamily:"TwCenMTStd",
  },

});
