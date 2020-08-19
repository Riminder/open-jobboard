import React from 'react';
import styles from './searchBox.module.scss';

const SearchBox = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.search__control}>
        <label className={styles.label}>Lieu(x) désiré(s)</label>
        <input type="text" className={styles.input} placeholder="Saisir une ville" />
      </div>
      <div className={styles.search__control}>
        <label className={styles.label}>Mes compétences</label>
        <input type="text" className={styles.input} placeholder="Ajouter une compétence" />
      </div>
      <div className={styles.search__control}>
        <label className={styles.label}>Métier(s) souhaité(s)</label>
        <input type="text" className={styles.input} placeholder="Ajouter un métier" />
      </div>
      <div className={styles.search__control}>
        <label className={styles.label}>Mes langues</label>
        <input type="text" className={styles.input} placeholder="Ajouter une langue" />
      </div>
    </div>
  )
}

export default SearchBox;