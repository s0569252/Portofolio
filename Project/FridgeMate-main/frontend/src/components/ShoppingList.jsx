//Einkaufslisten-Dummy, wird im nächsten Sprint implementiert
import React from 'react';
import Header from './header';
import Footer from './footer';
import { IonPage, IonList, IonItem } from '@ionic/react';


function ShoppingList() {

        return (
        <IonPage>
            <Header name="Einkaufliste"/>
            <h1 style={{ marginLeft: '10px' }}>Deine Einkaufsliste</h1>
            <IonList>
                <IonItem>Tomaten</IonItem>
                <IonItem>Tofu</IonItem>
                <IonItem>Brausetabletten</IonItem>
            </IonList>
            <Footer/>


            </IonPage>
        // Navbar


        // Menue

        // bottomNabvar
        );
    }

export default ShoppingList;