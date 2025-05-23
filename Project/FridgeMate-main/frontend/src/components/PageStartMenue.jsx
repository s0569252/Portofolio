import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { IonContent, IonPage } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import {
    IonAvatar,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOptions,
    IonItemOption,
    IonItemSliding,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import { pin, share, trash } from 'ionicons/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../index.css';


class PageStartMenue extends Component {

    state = {}

    render() {

        return (

            <IonPage>
                <Header name="Startmenü" />

                <IonContent className="ion-padding" style={{ '--background-image': `url(${'/background_home.png'})` }}>

                    <IonList inset={true}>
                        <IonItemSliding>
                            <Link to="/PageAddFood">
                                <IonItem button={true}>
                                    <IonAvatar aria-hidden="true" slot="start">
                                        <img alt="gemuese-icon" src="/icons/gemuse.png" />
                                    </IonAvatar>
                                    <IonLabel>Lebensmittel hinzufügen</IonLabel>

                                </IonItem>
                            </Link>

                            <Link to="/PageOverview">
                                <IonItem button={true}>
                                    <IonAvatar aria-hidden="true" slot="start">
                                        <img alt="clock-icon" src="/icons/wall-clock.png" />
                                    </IonAvatar>
                                    <IonLabel>Lebensmittel-Übersicht</IonLabel>

                                </IonItem>
                            </Link>
                            <Link to="/Recipes">
                                <IonItem button={true}>
                                    <IonAvatar aria-hidden="true" slot="start">
                                        <img alt="rezept-icon" src="/icons/rezeptbuch.png" />
                                    </IonAvatar>
                                    <IonLabel>Rezepte</IonLabel>

                                </IonItem>
                            </Link>

                            <Link to="/ShoppingList">
                                <IonItem button={true}>
                                    <IonAvatar aria-hidden="true" slot="start">
                                        <img alt="to-do-icon" src="/icons/to-do-list.png" />
                                    </IonAvatar>
                                    <IonLabel>Einkaufsliste</IonLabel>

                                </IonItem>
                            </Link>
                            
                        </IonItemSliding>

                    </IonList>
                </IonContent>
                <Footer />
            </IonPage>
        );
    }
}
export default PageStartMenue;