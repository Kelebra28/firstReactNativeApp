import {createStackNavigator} from 'react-navigation-stack';
import BestRestaurantsScreen from '../screens/BestRestaurants';


const BestRestaurantsScreenStacks = createStackNavigator({
    BestRestaurants : {
    screen : BestRestaurantsScreen, 
    navigationOptions : () => ({
    title : 'Top Restaurants'
    })
    }
});

export default BestRestaurantsScreenStacks;