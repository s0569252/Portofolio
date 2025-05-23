//Repeztplanungs-Dummy, wird im nächsten Sprint implementiert
import React from 'react';
import Header from './header';
import Footer from './footer';
import { IonPage, IonList, IonItem } from '@ionic/react';


function Recipes() {



        return (
        <IonPage>
            <Header name="Rezeptplanung"/>
            <h1 style={{ marginLeft: '10px' }}>Heute kannst du Folgendes kochen:</h1>
            <IonList>
                <IonItem>Nudelauflauf mit Tofu</IonItem>
                <IonItem>Tomatensalat</IonItem>
            </IonList>
            <Footer/>


        </IonPage>
        // Navbar


        // Menue

        // bottomNavbar
        );
    }

export default Recipes;
