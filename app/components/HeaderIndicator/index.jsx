import styles from '../../styles/HeaderIndicator.module.css'

export default function HeaderIndicator({ header }) {
    return <span className={styles.headerIndicator}>{header}</span>
}