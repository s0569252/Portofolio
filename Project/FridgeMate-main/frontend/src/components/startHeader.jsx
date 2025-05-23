import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonImg, IonRow, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';
import { IonRouterLink } from '@ionic/react-router';
import '../index.css';

class StartHeader extends Component {
  state = {}

  render() {
    return (
      <IonHeader>
        <IonToolbar>
          <IonRow size="90%" className="ion-justify-content-between ion-align-items-center">
            <IonCol>
              <a href="/">
                <IonImg src="/icons/navigation-bar.png" alt="navigation-bar" className="icon" style={{ width: '40px', height: '40px' }} />
              </a>
            </IonCol>
            <IonCol size="10%" className="ion-text-end">
              <a href="/">
                <IonImg routerLink="/" src="/icons/question.png" alt="question-icon" className="icon" style={{ width: '40px', height: '40px' }} />
              </a>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default StartHeader;
