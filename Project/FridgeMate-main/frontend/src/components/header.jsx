// Überschrift, Avatar-Logo, Fragezeichen
import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { IonToolbar, IonImg, IonRow, IonCol, IonTitle, IonHeader } from '@ionic/react';
import '../index.css';


function Header(props) {
    return <IonHeader>
        <IonToolbar>
            
            <IonRow className="ion-align-items-center">
            <IonCol className="ion-text-center">
                <IonTitle style={{marginTop: '10px'}}>{props.name}</IonTitle> 
            </IonCol>
                <IonCol size="10%" className="ion-text-end">
                    <a href="/">
                        <IonImg src="/icons/avatar.png" alt="avatar-icon" className="icon" style={{ width: '44px', height: '44px' }}></IonImg>
                    </a>
                </IonCol>
                <IonCol size="10%" className="ion-text-end">
                    <a href="/">
                        <IonImg src="/icons/question.png" alt="avatar-icon" className="icon" style={{ width: '40px', height: '40px' }}></IonImg>
                    </a>
                </IonCol>
            </IonRow>
        </IonToolbar>
    </IonHeader>
}

export default Header;
