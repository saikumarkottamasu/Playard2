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

		Splashscreen: { screen: Splashscreen },	
	},
	{
    initialRouteName: 'signUp',
  	}

);

export default  createAppContainer(Navigator);

