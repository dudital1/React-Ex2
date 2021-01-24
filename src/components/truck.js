import React, { Component } from 'react';
import truck from '../images/mobel.svg';

const styles = {
    boxContainer: {
        position:'absolute',
        width: '40%',
        left: '0px', 
        bottom:'0px',
        top: '680px'
    },
    img: {
        width: '130%'
    }
};

class Truck extends Component {
    render() {
        return (
            <div style={styles.boxContainer}>
                <img src={truck} style={styles.img} alt="truck" />
            </div>
        )
    }
}
export default Truck;