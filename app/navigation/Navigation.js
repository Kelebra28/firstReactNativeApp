import React from 'react';
import { Icon } from 'react-native-elements'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RestaurantsScreenStacks from './RestaurantsStacks';
import BestRestaurantsScreenStacks from './BestRestaurantStack';
import SearchScreenStacks from './SearchStacks';
import SessionScreenStacks from './SessionStacks';


const NavigationStacks = createBottomTabNavigator({
       Restaurants : {
           screen : RestaurantsScreenStacks,
           navigationOptions : () => ({
               tabsBarLabel : "Restaurants",
               tabBarIcon : ({ tintColor }) => (
                   <Icon type="material-community" name="compass-outline" size={22} color={tintColor}/>
               ) 
           })
       } ,
       Top : {
        screen : BestRestaurantsScreenStacks,
        navigationOptions : () => ({
            tabsBarLabel : "Restaurants",
            tabBarIcon : ({ tintColor }) => (
                <Icon type="material-community" name="compass-outline" size={22} color={tintColor}/>
            ) 
        })
    },
    Search : {
        screen : SearchScreenStacks,
        navigationOptions : () => ({
            tabsBarLabel : "Restaurants",
            tabBarIcon : ({ tintColor }) => (
                <Icon type="material-community" name="magnify" size={22} color={tintColor}/>
            ) 
        })
    },
    MyAccount : {
        screen : SessionScreenStacks,
        navigationOptions : () => ({
            tabsBarLabel : "My Account",
            tabBarIcon : ({ tintColor }) => (
                <Icon type="material-community" name="home-outline" size={22} color={tintColor}/>
            ) 
        })
    }
    },
    {
        initialRouteName : "MyAccount",
        order : ["Top","Restaurants", "Search", "MyAccount"],
        tabBarOptions : {
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680"
        }
    }    
    );

export default createAppContainer(NavigationStacks)