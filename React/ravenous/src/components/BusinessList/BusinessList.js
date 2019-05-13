import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


class BusinessList extends Component {
    state = {}
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => {
                    return (
                        <Business business={business} />
                    )
                })}>
            </div>

        );
    }
}

export default BusinessList;