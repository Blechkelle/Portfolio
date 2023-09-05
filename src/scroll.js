import {useScroll} from "framer-motion";
import {useState} from "react";

export default function getScrollPosition() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [scrollPosition, setScrollPosition] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {scrollY} = useScroll()
    scrollY.onChange(event => setScrollPosition(event))
    return scrollPosition
}

export function getScrolledDown() {
    if(getScrollPosition() <= 20) return false
    return true
}

export function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}