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
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton,
} from '@ionic/react';
import { briefcaseOutline, locationOutline } from 'ionicons/icons';

// Sample job data
const jobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        location: 'New York, NY',
        description: 'Build and maintain web interfaces using React and Ionic.',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'CloudBase Ltd.',
        location: 'Remote',
        description: 'Develop scalable APIs with Node.js and MongoDB.',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        company: 'Creative Minds',
        location: 'San Francisco, CA',
        description: 'Design user-centered web and mobile app interfaces.',
    },
];

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Jobs</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                {jobs.map((job) => (
                    <IonCard key={job.id}>
                        <IonCardHeader>
                            <IonCardTitle>
                                <IonIcon icon={briefcaseOutline} style={{ marginRight: '8px' }} />
                                {job.title}
                            </IonCardTitle>
                            <IonCardSubtitle>{job.company}</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <p>
                                <IonIcon icon={locationOutline} style={{ marginRight: '6px' }} />
                                {job.location}
                            </p>
                            <p>{job.description}</p>
                            <IonButton expand="block" color="secondary">
                                Apply Now
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Home;