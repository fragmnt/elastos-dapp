import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import React from 'react';
import './HomeView.css';

class HomeView extends React.Component {
  render() {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          {/* <img src="../static/placeholders/shapes.svg" alt="" /> */}
          <IonCardHeader>
            <IonCardTitle>Welcome to Signal!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This starter project comes with simple tabs-based layout for apps that are going to primarily use a Tabbed UI.

              Take a look at the src/app/pages/ directory to add or change tabs, update any existing page or create new pages.

              A default header-bar-component has been created to show you how to use custom UI components. That components also makes use of Trinity's AppService plugin as a sample.
            </p>
          </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
    );
  }
}

export default HomeView;
