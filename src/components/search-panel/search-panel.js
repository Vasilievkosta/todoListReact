import React, { Component } from 'react';

export default class SearchPanel extends Component {
    render() {
        const search = 'search';
        const searchStyle = { fontSize: '18px' }
        return (<input style={searchStyle} placeholder={search} />);
    }
};

