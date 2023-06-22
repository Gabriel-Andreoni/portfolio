"use client"
import styles from '../../styles/HeaderIndicator.module.css'
import { motion } from 'framer-motion'

export default function HeaderIndicator({ header }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 0.8 }}

            className={styles.headerIndicator}>
            {header}
        </motion.span>
    )
}