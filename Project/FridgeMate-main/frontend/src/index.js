import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PageStartMenue from './components/PageStartMenue';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageAddFood from './components/PageAddFood';
import PageOverview from './components/PageOverview';
import ShoppingList from './components/ShoppingList';
import Recipes from './components/Recipes';
import { setupIonicReact } from '@ionic/react';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


setupIonicReact();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IonApp>
    <IonReactRouter>
    <IonRouterOutlet>
          <Route path="/" exact component={App} />
          <Route path="/PageStartMenue" exact component={PageStartMenue} />
          <Route path="/PageAddFood" exact component={PageAddFood} />
          <Route path="/PageOverview" exact component={PageOverview} />
          <Route path="/ShoppingList" exact component={ShoppingList} />
          <Route path="/Recipes" exact component={Recipes} />


          {/* Other routes here */}
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
