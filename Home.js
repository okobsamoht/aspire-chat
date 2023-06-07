import {Text, TouchableOpacity, View} from "react-native";

export default function Home(){
    return <View>
        <Text>bienvenue!</Text>
        <View>
            <TouchableOpacity style={{backgroundColor:"silver", padding:15, margin:15}}>
                <Text>Inscription</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor:"silver", padding:15, margin:15}}>
                <Text>Connexion</Text>
            </TouchableOpacity>
        </View>
    </View>
}