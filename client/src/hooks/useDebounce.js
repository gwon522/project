import { useEffect, useState } from 'react';

//회원 가입, 로그인 글작성등등 최적화 위해서 디바운스 사용
const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => {
            clearTimeout(timeoutHandler);
        };
    }, [value, delay]);

    return debounce;
};

export default useDebounce;
