import './App.css';
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import StartHeader from './components/startHeader';
//import { Router as Link } from '@ionic/react-router';
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';
import { IonToast } from '@ionic/react';


const App = () => {

    const [items, setItems] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [highlightedValue, setHighlightedValue] = useState(null);

    const routeToItem = (itemId) => {
      setHighlightedValue(itemId);
      window.location.href = `/PageOverview?highlight=${itemId}`;
    };

    useEffect(() => {
      fetch('http://localhost:3001/api/fridge-items')
          .then(response => response.json())
          .then(data => {
              const sortedData = data.sort((a, b) => {
                  const currentDate = new Date();
                  const expDateA = new Date(a.expirationDate);
                  const expDateB = new Date(b.expirationDate);
                  const diffA = Math.abs(expDateA - currentDate);
                  const diffB = Math.abs(expDateB - currentDate);
                  return diffA - diffB;
              }).slice(0, 3); // Keep only the top 3 items

              setItems(sortedData);
          })
          .catch(error => console.error('Error fetching data:', error));
          
          setShowToast(true); // Show the toast 

    }, []);
 
  return (
    <IonPage>
      {/* Zeile mit Burger und Log In und Info Icons */}
      <StartHeader />
      <IonContent className="ion-padding" style={{ '--background-image': `url(${'/background_home.png'})` }}>
        <div className="centered-content">
          <div className="fridge-container">
            <IonTitle className="custom-title">Fridge Mate</IonTitle>
            <Link to="/PageStartMenue">
              <IonImg src="/icons/fridge.png" alt="Kühlschrank" />
            </Link>
          </div>
        </div>
      </IonContent>

      <IonCard id="infobox">
          <IonCardContent>
            Hallo! Herzlich willkommen in deinem FridgeMate!
          </IonCardContent>
        </IonCard>   
        {items.map((item, index) => (
        //  <IonContent key={item.id} style={{ height: '0', padding: '0'}}>
              <IonToast
                      key={item.id}
                      isOpen={showToast}
                      //onDidDismiss={() => setShowToast(false)}
                      duration={8000}
                      positionAnchor="infobox"
                      //positionAnchor={index === 0 ?'infobox' :`ion-overlay-${index}`}
                      message={`Du hast ${item.amount} ${item.unit} ${item.itemName} die am ${((dateString) => {
                        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                        return new Date(dateString).toLocaleDateString('de-DE', options);
                      })(item.expirationDate)} verfallen`}
                       //message="test"
                      buttons={[
                        {
                          text: `${item.itemName} Anzeigen`,
                          role: 'info',
                          handler: () => {
                            console.log('More Info clicked');
                            routeToItem(item.id);
                          },
                        },
                        {
                          text: 'Ignorieren',
                          role: 'cancel',
                        },
                      ]}   
                      layout="stacked"            
              >
              </IonToast>
              ))}    
    </IonPage>
  );
}

export default App;
