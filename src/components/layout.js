import React  from 'react'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -50, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 50, y: 0 },
}

const Layout = ({children}) => (
    <div>
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'spring', stiffness: 90, mass: 0.4 }}
        >
            {children}
        </motion.main>
    </div>
)

export default Layout
