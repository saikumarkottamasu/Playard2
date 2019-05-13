import { createStackNavigator,createAppContainer } from 'react-navigation';

import signUp from './signUp';
import signIn from './signIn';
import Otp from './Otp';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';
import Profile from './Profile';
import Otp_reset from './Otp_reset';
import Preffered_sports from './Preffered_sports';
import create_Activity from './create_Activity';
import select_Sports from './select_Sports';
import select_Location from './select_Location';
import select_Date from './select_Date';
import select_Time from './select_Time';

import activity_view from './activity_view';
import send_query from './send_query';
import join_activity from './join_activity';
import see_all from './see_all';

import Conversations from './Conversations';
import Chat from './Chat';
import Members from './Members';
import venue_Details from './venue_Details';
import see_Map from './see_Map';
import Venues from './Venues';
import search_Venue from './search_Venue';
import Notifications from './Notifications';

import Splashscreen from './Splashscreen';

 const Navigator = createStackNavigator
(	{

		signUp: { screen: signUp },
		signIn:{screen: signIn},
		Otp: {screen: Otp},
		forgotPassword: {screen: forgotPassword},
		Profile: { screen: Profile },
		Otp_reset: { screen: Otp_reset },
		resetPassword: {screen: resetPassword},
		Preffered_sports: {screen: Preffered_sports},
		create_Activity: {screen: create_Activity},
		select_Sports: {screen: select_Sports},
		select_Location: {screen: select_Location},
		select_Date: {screen: select_Date},
		select_Time: {screen: select_Time},
		activity_view: {screen: activity_view},
		send_query: {screen: send_query},
		join_activity: {screen: join_activity},
		see_all: {screen: see_all},
		Conversations: {screen: Conversations},
		Chat: {screen: Chat},
		Members: {screen: Members},
		venue_Details: {screen: venue_Details},
		see_Map: {screen: see_Map},
		Venues: {screen: Venues},
		search_Venue: {screen: search_Venue},
		Notifications: {screen: Notifications},

		Splashscreen: { screen: Splashscreen },
	},
	{
    	initialRouteName: 'signUp',
  	}

);

export default  createAppContainer(Navigator);
