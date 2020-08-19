import React from 'react'
import Dropdown from '../components/dropdown'
import styles from './filters.module.scss'

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filters__dropdowns}>
        <Dropdown title="Secteur" />
        <Dropdown title="Entreprise" />
        <Dropdown title="Trier par" />
      </div>
      <div className={styles.filters__switcher}>
        <label>Activer la recommandation</label>
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default Filters;