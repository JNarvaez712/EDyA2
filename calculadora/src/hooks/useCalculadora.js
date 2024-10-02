import {useState} from 'react';

const useCalculadora = () => {
    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState(0);

    const handleButtonClick = (value) => {
        if (value === '=') {
            try{
                const sanitizedInput = input.replace(/÷/g, '/').replace(/x/g, '*');
                setResultado(eval(sanitizedInput)); // eval se usa para operaciones basicas
            } catch (error) {
                setResultado('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResultado('');
        } else if (value === '←'){
            setInput(input.slice(0, -1))
        } else {
            setInput(input + value);
        }
    };

    return {
        input,
        resultado,
        handleButtonClick
    }
}
export default useCalculadora