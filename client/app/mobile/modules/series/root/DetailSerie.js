import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Info from './detailSerie/Info';
import Seassons from './detailSerie/Seassons';
import Actors from './detailSerie/Actors';

const DetailSerie = ({ props: { serie } }) => 
    <ScrollView style={ styles.detailPage }>
        <Info serie={ serie } />
        <Seassons seassons={ serie.seassons } />
        <Actors actors={ serie.actors } />
    </ScrollView>

export default DetailSerie;

const styles = StyleSheet.create({
    detailPage: {
        flex: 1,
        padding: 10
    }
});