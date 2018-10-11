import * as React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    public render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <a>SEARCH</a>
            </div>
        );
    }
}