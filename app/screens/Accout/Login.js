import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {withNavigation} from 'react-navigation'

const Login = (props) => {
    const {navigation} = props

    return(
        <ScrollView>
        <Image
            source={require('../../../assets/img/chicorita.png')}
            style={styles.logo}
            resizeMode="contain"
        />
        <View style={styles.viewContainer}>
            <Text>Form Login</Text>
           <CreateAccount navigation={navigation}/>
        </View>
        <Divider style={styles.divider}/>
        <View>
            <Text>Login with FB</Text>
        </View>
        </ScrollView>
    );
    
};

const CreateAccount = (props) => {

    const {navigation} = props

    return(
        <Text style={styles.textRegister} >
            You dont have a Accout{" "}
            <Text 
                style={styles.btnRegister}
                onPress={() => navigation.navigate("Register")}
            >
                Registrate
            </Text>
        </Text>

    )
}

const styles = StyleSheet.create({
    logo:{
        width: "100%",
        height: 150,
        marginTop: 20
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#00a680"
    }
})

export default withNavigation(Login);