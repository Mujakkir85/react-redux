import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';


const CakeContainer = (props) => {
    return (
        <div>
            <h2>number of cake {props.numOfCake}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCake: state.numberOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);