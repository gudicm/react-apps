import { IonIcon } from '@ionic/react';
import React from "react";

const WrapperRating: React.FC = () => {
    return (
        <div className="rating-wrapper">
            {Array.from({ length: 5 }, (_, index) => index).map((index) => {
                    return <IonIcon name="star" key={index} role="img" className="md hydrated" />
                  } )}
        </div>
    );
};

export default WrapperRating;