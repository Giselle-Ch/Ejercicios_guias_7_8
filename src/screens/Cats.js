import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

const App = () => {
    return(
        <>
            <ScrollView style={styles.section}>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.cat} 
                        source={require('../img/maine_coon.jpg')} 
                    />
                    <View>
                        <Text style={styles.catName}>Maine Coon</Text>
                        <Text style={styles.catCountry}>United States</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.cat} 
                        source={require('../img/munchkin.png')} 
                    />
                    <View>
                        <Text style={styles.catName}>Munchkin</Text>
                        <Text style={styles.catCountry}>United States</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.cat} 
                        source={require('../img/ragdoll.jpg')} 
                    />
                    <View>
                        <Text style={styles.catName}>Ragdoll</Text>
                        <Text style={styles.catCountry}>United States</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.cat} 
                        source={require('../img/fold_escoces.jpg')} 
                    />
                    <View>
                        <Text style={styles.catName}>Scottish Fold</Text>
                        <Text style={styles.catCountry}>United Kingdom</Text>
                    </View>
                </View>
                <View style={styles.sectionItem}>
                    <Image 
                        style={styles.cat} 
                        source={require('../img/siames.png')} 
                    />
                    <View>
                        <Text style={styles.catName}>Siamese</Text>
                        <Text style={styles.catCountry}>Thailand</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    section: {
        flexBasis: '49%',
        backgroundColor: '#774E24'
    },

    sectionItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        paddingHorizontal: 7,
        paddingVertical: 5,
        margin: 5,
        backgroundColor: '#dcab6be7',
        borderRadius: 5
    },

    cat: {
        height: 100,
        width: '40%',
        marginVertical: 5
    },

    catName: {
        fontSize: 20,
        marginTop: 30,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },

    catCountry: {
        fontSize: 18,
        fontStyle: 'italic',
        marginHorizontal: 10
    }
});

export default App;