import React, { useRef } from 'react';
import useComponentDidMount from './useComponentDidMount';

const useComponenetWillMount = (func) => {
    const willMount = useRef(true);

    if (willMount.current) {
        func();
    }

    useComponentDidMount(() => {
        willMount.current = false;
    });
};

export default useComponenetWillMount;
