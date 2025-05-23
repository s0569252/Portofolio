// Übersicht mit Lebensmittel, mit Sortierfunktion
import Header from './header';
import Footer from './footer';
import UpdatePopover from './updatepopover';
import React, { useEffect, useState } from 'react';
import { IonContent, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import { IonButton, IonPopover, IonItemSliding, IonRow, IonGrid, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';
import '../index.css';


function PageOverview() {

    const [items, setItems] = useState([]);
    const [popoverState, setPopoverState] = useState({});
    const [showPopover, setShowPopover] = React.useState(false);
    const [sortAscending, setSortAscending] = useState(true);
    // Ausgewähltes (übergebenes) Lebensmittel aus URL Parameter in Variable schreiben
    const urlParams = new URLSearchParams(window.location.search);
    const highlightedItem = urlParams.get('highlight');
    const [activePopoverItemId, setActivePopoverItemId] = useState(null);


    const togglePopover = (itemId) => {
        setActivePopoverItemId(itemId === activePopoverItemId ? null : itemId);
    };

    useEffect(() => {
        fetch('http://localhost:3001/api/fridge-items') // Adjust the URL to your API endpoint
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));


    }, []);

    const sortByDate = () => {
        const sortedItems = [...items].sort((a, b) => {
            if (sortAscending) {
                return new Date(a.expirationDate) - new Date(b.expirationDate);
            } else {
                return new Date(b.expirationDate) - new Date(a.expirationDate);
            }
        });
        setItems(sortedItems);
        setSortAscending(!sortAscending); // Toggle the sorting order for the next click
    };



    return (



        <IonPage>
            <Header name="Inhaltsübersicht" />
            <IonToolbar>
                <IonButton onClick={sortByDate} style={{ position: 'absolute', top: '0', right: '0', width: '45px', height: '45px' }}>
                    <IonImg src="/icons/sort.png" alt="sort-icon" />
                </IonButton>
            </IonToolbar>
            <IonContent style={{ '--background-image': `url(${'/background_green.png'})` }}>

                <IonList>
                    {items.map(item => (
                        <IonItemSliding key={item.id}>
                            <IonItem color={item.id.toString() === highlightedItem && 'primary'}>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel>
                                                {item.itemName} - Menge: {item.amount}{item.unit}
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel>
                                                Verfällt: {((dateString) => {
                                                    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                                    return new Date(dateString).toLocaleDateString('de-DE', options);
                                                })(item.expirationDate)}
                                                {/* {item.expirationDate} */}
                                            </IonLabel>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                                <IonButton onClick={() => togglePopover(item.id)}>Bearbeiten</IonButton>
                                <IonPopover
                                    isOpen={activePopoverItemId === item.id}
                                    onDidDismiss={() => setActivePopoverItemId(null)}
                                >
                                    <UpdatePopover item={item} />
                                    <IonButton onClick={() => { setActivePopoverItemId(null); window.location.reload() }}>Fertig</IonButton>
                                </IonPopover>
                            </IonItem>
                        </IonItemSliding>
                    ))}


                </IonList>
            </IonContent>
            <Footer />


        </IonPage>
    );

}
export default PageOverview;