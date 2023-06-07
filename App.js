import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Home from "./Home";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 60}}>Aspire Chat</Text>
            {/*<Text>Open up App.js to start working on your app!</Text>*/}
            <Home/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
