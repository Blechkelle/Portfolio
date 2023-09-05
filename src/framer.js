export const containerElement = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {staggerChildren: 0.05}
    }
};
export const itemElement = {
    hidden: {y: 100, opacity: 0},
    show: {y: 0, opacity: 1, transition: {type: "spring", stiffness: 100, mass: 1, damping: 20}}
};