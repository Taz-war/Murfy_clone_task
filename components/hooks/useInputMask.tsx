// useInputMask.tsx
import { useEffect, useRef } from 'react';
import Inputmask from 'inputmask';

const useInputMask = (mask: string) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            const im = new Inputmask(mask);
            im.mask(inputRef.current);
        }
    }, [mask]);

    return inputRef;
};

export default useInputMask;
