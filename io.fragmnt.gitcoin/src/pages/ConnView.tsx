import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonCard, IonContent, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/react';

const ConnView: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Connections</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Powered by plugins on the Trinity/ElastOS platform, AppName connects x and y with z.</p>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardTitle>Follow us on Telegram</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>https://t.me/elastosbrowser</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ConnView;
