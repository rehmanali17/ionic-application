import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon
} from '@ionic/react';
import { informationCircleOutline, businessOutline, callOutline, mailOutline } from 'ionicons/icons';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonIcon icon={informationCircleOutline} style={{ marginRight: '8px' }} />
                            Our Company
                        </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <p>
                            We are a leading platform connecting job seekers with companies. Our mission is to make job hunting simple, transparent, and effective.
                        </p>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonIcon icon={businessOutline} style={{ marginRight: '8px' }} />
                            Contact Us
                        </IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <p>
                            <IonIcon icon={callOutline} style={{ marginRight: '6px' }} />
                            +1 (123) 456-7890
                        </p>
                        <p>
                            <IonIcon icon={mailOutline} style={{ marginRight: '6px' }} />
                            support@jobplatform.com
                        </p>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default About;