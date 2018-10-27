import * as React from 'react';
import './Track.css';

class Track extends React.Component {
    public render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/* track name will go here */}</h3>
                    <p>{/* track artist will go here */} | {/* track album will go here */}</p>
                </div>
                {this.renderAction}
            </div>
        );
    }

    public renderAction() {
        const isRemoval = true; // temp until I have data to set this property
        if (isRemoval) {
            return <a className="Track-action">-</a>;
        } else if (!isRemoval) {
            return <a className="Track-action">+</a>;
        } else {
            return '';
        }
    }
}

export default Track;