import {useState} from 'react'

export const useSetInputValue = (value=0) => {
    const [inputValue, setInputValue] = useState(value);


    const onChangeInputValue = ({target})=>{
        const value = parseInt(target.value);
        if(value > 1 ){
            setInputValue(value);
        }else{
            setInputValue(1);
        }
      }

    return {
        inputValue,
        setInputValue,
        onChangeInputValue,
    };
};
