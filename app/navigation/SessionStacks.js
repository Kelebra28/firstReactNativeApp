import {createStackNavigator} from 'react-navigation-stack';
import MySessionScren from '../screens/Accout/MySession';
import LoginScreen from '../screens/Accout/Login';
import RegisterScreen from '../screens/Accout/Register';



const SessionScreenStacks = createStackNavigator({
    MyAccount : {
    screen : MySessionScren, 
    navigationOptions : () => ({
    title : 'My Account'
        })
    },
    Login: {
        screen: LoginScreen, 
        navigationOptions : () => ({
            title : 'Login'
                })
            },
    Register: {
        screen: RegisterScreen, 
        navigationOptions : () => ({
            title : 'Register'
                })
            },
});

export default SessionScreenStacks