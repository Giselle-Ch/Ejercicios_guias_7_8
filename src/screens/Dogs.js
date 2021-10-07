import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

const App = () => {
    return(
        <>
            <ScrollView style={styles.section}>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.dog} 
                        source={require('../img/american_bulldog.png')} 
                    />
                    <View>
                        <Text style={styles.dogName}>American Bulldog</Text>
                        <Text style={styles.dogCountry}>United States</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.dog} 
                        source={require('../img/bearded_collie.jpg')} 
                    />
                    <View>
                        <Text style={styles.dogName}>Bearded Collie</Text>
                        <Text style={styles.dogCountry}>Scotland</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.dog} 
                        source={require('../img/boston_terrier.jpg')} 
                    />
                    <View>
                        <Text style={styles.dogName}>Boston Terrier</Text>
                        <Text style={styles.dogCountry}>United States</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.dog} 
                        source={require('../img/canadian_eskimo.jpg')} 
                    />
                    <View>
                        <Text style={styles.dogName}>Canadian Eskimo</Text>
                        <Text style={styles.dogCountry}>Canada</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.dog} 
                        source={require('../img/irish_terrier.jpg')} 
                    />
                    <View>
                        <Text style={styles.dogName}>Irish Terrier</Text>
                        <Text style={styles.dogCountry}>Ireland</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    section: {
        flexBasis: '49%',
        backgroundColor: '#0B2545'
    },

    sectionItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        paddingHorizontal: 7,
        paddingVertical: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#8DA9C4',
        borderRadius: 5
    },

    dog: {
        height: 100,
        width: '40%',
        marginVertical: 5
    },

    dogName: {
        fontSize: 20,
        marginTop: 30,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },

    dogCountry: {
        fontSize: 18,
        fontStyle: 'italic',
        marginHorizontal: 10
    }
});

export default App;