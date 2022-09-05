import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainer = () => {

    const numberofCake = useSelector(state => state.numberOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cake {numberofCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy hooks cake</button>

        </div>
    );
};

export default HooksCakeContainer;