// Ansicht zum Lebensmittel hzfg
import Header from './header';
import Footer from './footer';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';
import { IonToast, IonCheckbox, IonContent, IonSelectOption, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonButton } from '@ionic/react';
import '../index.css';




function PageAddFood() {

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');


    // Validation schema for the form
    const ItemSchema = Yup.object().shape({
        itemName: Yup.string().required('Item name is required'),
        expirationDate: Yup.date().required('Expiration date is required'),
        amount: Yup.number().positive('Amount must be a positive number'),
        unit: Yup.string().matches(/^(g|kg|l|ml|lb|St.)$/, 'Unit is not valid'),
        isFrozen: Yup.boolean()

    });

    // Define the onSubmit function
    const onSubmit = async (values, actions) => {

        try {
            const response = await fetch('http://localhost:3001/api/add-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error('Server error: ' + response.status);
            }

            const newItem = await response.json();
            console.log('Item added:', newItem);
            // Here you might want to redirect or update the UI accordingly
            setToastMessage(`${values.itemName} hinzugefügt`);
            setShowToast(true); // Show the toast
            actions.resetForm(); // Reset the form after successful submission
        } catch (error) {
            console.error('Error adding item:', error);
            // Handle errors, e.g., show user feedback
            setToastMessage('Fehler beim Hinzufügen des Lebensmittels'); // Error message
            setShowToast(true);
        }


    };

    return (
        <IonPage>
            <Header name="Hinzufügen"/>
            <IonContent style={{ '--background-image': `url(${'/background_blue.png'})` }}>
                {/* <h1 style={{ marginLeft: '10px' }}>Lebensmittel hinzufügen</h1> */}
                <Formik
                    initialValues={{
                        itemName: '',
                        expirationDate: '',
                        amount: '',
                        unit: '',
                        isFrozen: false
                    }}
                    validationSchema={ItemSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched, handleChange, values, setFieldValue }) => (
                        <Form>
                            <IonItem>
                                <IonLabel position="stacked">Name</IonLabel>
                                <IonInput
                                    name="itemName"
                                    clearInput={true}
                                    placeholder="Name des Lebensmittels"
                                    onIonChange={handleChange}
                                    value={values.itemName} />
                                {errors.itemName && touched.itemName ? <div>{errors.itemName}</div> : null}
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Verfallsdatum</IonLabel>
                                <IonInput
                                    type="date"
                                    name="expirationDate"
                                    clearInput={true}
                                    onIonChange={handleChange}
                                    value={values.expirationDate} />
                                {errors.expirationDate && touched.expirationDate ? <div>{errors.expirationDate}</div> : null}
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Menge</IonLabel>
                                <IonInput
                                    type="number"
                                    name="amount"
                                    clearInput={true}
                                    onIonChange={handleChange}
                                    value={values.amount} />
                                {errors.amount && touched.amount ? <div>{errors.amount}</div> : null}
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Einheit</IonLabel>
                                <IonSelect name="unit" onIonChange={e => setFieldValue('unit', e.detail.value)} value={values.unit}>
                                    <IonSelectOption value="g">g</IonSelectOption>
                                    <IonSelectOption value="kg">kg</IonSelectOption>
                                    <IonSelectOption value="ml">ml</IonSelectOption>
                                    <IonSelectOption value="l">l</IonSelectOption>
                                    <IonSelectOption value="St.">St.</IonSelectOption>
                                </IonSelect>
                                {errors.unit && touched.unit ? <div>{errors.unit}</div> : null}
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Froster</IonLabel>
                                <IonCheckbox
                                    name="isFrozen"
                                    onIonChange={e => setFieldValue('isFrozen', e.detail.checked)}
                                    checked={values.isFrozen} />
                            </IonItem>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                 <IonButton type="submit">Füge Lebensmittel hinzu</IonButton>
                             </div>
                            <IonToast
                                isOpen={showToast}
                                onDidDismiss={() => setShowToast(false)}
                                message={toastMessage}
                                duration={1500} />

                        </Form>
                    )}
                </Formik>
            </IonContent>
            <Footer />
        </IonPage>
    );
}

export default PageAddFood;