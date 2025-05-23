
import React, { useState } from 'react';
import { IonButton, IonList, IonItem, IonInput, IonLabel, IonToast } from '@ionic/react';
import '../index.css';


function UpdatePopover(props) {

    const [amount, setAmount] = useState('');
    const [showDeleteToast, setShowDeleteToast] = useState(false);
    const [showUpdateToast, setShowUpdateToast] = useState(false);
    const [deleteToastMessage, setDeleteToastMessage] = useState('');
    const [updateToastMessage, setUpdateToastMessage] = useState('');
    
    //Delete items from our database
    const removeItem = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:3001/api/delete-item/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Server error: ' + response.status);
            }

            const deletedItem = await response.json();
            console.log('Item deleted:', deletedItem);
            setDeleteToastMessage(`${props.item.itemName} gelöscht`);
            setShowDeleteToast(true); 
        } catch (error) {
            console.error('Error deleting item:', error);
            setDeleteToastMessage('Fehler beim Löschen des Artikels'); // Error message
            setShowDeleteToast(true);
        }
    };

    const deleteButton = () => {
        console.log("Delete button clicked");
        removeItem(props.item.id);
    };

    
    const handleAmountChange = (event) => {
        setAmount(event.detail.value);
    };
    
   
    //update items from our database
    const updateAmount = async (itemId) => {
        const updatedItemData = {
            itemId: props.item.id,
            itemName: props.item.itemName, 
            expirationDate: props.item.expirationDate, 
            isFrozen: props.isFrozen,
            amount: amount
          };

          
        try {
            const response = await fetch(`http://localhost:3001/api/update-item/${itemId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItemData) 
            });
    
            if (!response.ok) {
                throw new Error('Server error: ' + response.status);
            }
    
            const updatedItem = await response.json();
            console.log('Item updated:', updatedItem);
            setUpdateToastMessage(`${props.item.itemName} geändert`);
            setShowUpdateToast(true);
        } catch (error) {
            console.error('Error updating item:', error);
            setUpdateToastMessage('Fehler beim Aktualisieren des Artikels'); // Error message
            setShowUpdateToast(true);
        }
    };

    const updateButton = () => {

        console.log("Amount was updated");
        updateAmount(props.item.id, props.item.amount);
    }

    return <popover>
        <h1>Lebensmittel bearbeiten</h1>
        <div>
            <IonList>
                <IonItem>
                    <IonLabel>{props.item.itemName}</IonLabel>
                </IonItem>
                <IonItem>
                    <IonInput label="Menge" placeholder={props.item.amount} value={amount} onIonInput={handleAmountChange}></IonInput>
                </IonItem>
                <IonButton onClick={() => {deleteButton(); window.location.reload()}}>Löschen</IonButton>
                <IonToast
                                isOpen={showDeleteToast}
                                onDidDismiss={() => setShowDeleteToast(false)}
                                message={deleteToastMessage}
                                duration={1000} />
                <IonButton onClick={updateButton}>Menge aktualisieren</IonButton>
                <IonToast
                                isOpen={showUpdateToast}
                                onDidDismiss={() => setShowUpdateToast(false)}
                                message={updateToastMessage}
                                duration={1000} />
            </IonList>
        </div>
    </popover>
};



export default UpdatePopover;

