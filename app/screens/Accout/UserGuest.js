import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-elements'
import { withNavigation } from 'react-navigation'


const UserGuest = (props) => {

    const {navigation} = props;

    return(
       <ScrollView style={styles.viewBody} centerContent={true}>
           <Image
            source={require('../../../assets/img/original.jpeg')}
            style={styles.image}
            resizeMode="contain"
           />
           <Text style={styles.title}>Check your Profile </Text>
           <Text style={styles.description}>If you want to have access to all the privileges, log in plase</Text>
           <View style={styles.viewBtn}>
            <Button
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title="Go to profile"
                onPress={() => navigation.navigate("Login")} 
            />
           </View>
       </ScrollView>
    )
};

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        marginBottom: 20
    },
    viewBtn: {
        flex: 1,
        alignItems: "center"
    },
    btnStyle: {
        borderRadius: 10,
        backgroundColor: "#00a680"
    },
    btnContainer: {
        width: "70%" 
    }

})


export default withNavigation(UserGuest);

