import { useRef, useEffect } from "react";


export const useUnmount = (fn) => {
    const ref = useRef(fn);
    ref.current = fn;
    useEffect(() => () => ref.current(), []);
}