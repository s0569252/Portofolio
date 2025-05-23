// Icons mit Links zu Hauptfunktionen
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { IonFooter, IonToolbar, IonImg, IonRow, IonCol } from '@ionic/react';
import '../index.css';


class Footer extends Component {
    render() {
        return (
            <IonFooter>
                <IonToolbar>
                    <IonRow>
                        <IonCol>
                            <Link to="/PageAddFood">
                                <IonImg src="/icons/gemuse.png" alt="gemuese-icon" className="icon"></IonImg>
                            </Link>
                        </IonCol >

                        <IonCol>                          <Link to="/PageOverview">

                            <IonImg src="/icons/wall-clock.png" alt="clock-icon" className="icon"></IonImg>
                        </Link>

                        </IonCol>


                        <IonCol>
                        <Link to="/Recipes">
                            <IonImg src="/icons/rezeptbuch.png" alt="rezeptbuch-icon" className="icon"></IonImg>
                        </Link>
                        </IonCol>

                        <IonCol>
                        <Link to="/ShoppingList">
                            <IonImg src="/icons/to-do-list.png" alt="to-do-list-icon" className="icon"></IonImg>
                            </Link>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonFooter>
        );
    }
}

export default Footer;

