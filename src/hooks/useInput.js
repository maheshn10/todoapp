import { useState } from 'react';

export default function useInput(val){
    const[value,setValue] = useState(val)

    return {value, onChange:e=>setValue(e.target.value)};
}