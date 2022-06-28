import React from 'react'
import {SpinnerCircularSplit} from 'spinners-react'
import {SpinnerWrapper} from "./Spinner.css";

type SpinnerPropsType = {
    isLoading: boolean;
}

export const Spinner: React.FC<SpinnerPropsType> = ({isLoading = false}) => {
    return isLoading ? (<SpinnerWrapper>
        <SpinnerCircularSplit enabled={true} size={100} thickness={150} color={'#FF1D36'}/>
    </SpinnerWrapper>) : <></>
}