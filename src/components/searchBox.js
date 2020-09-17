import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
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
        <div className={styles.creatables}>
          <ul className={styles.choices}>
            {
              props.skills.enabled.map(skill => {
                return (
                  <li className={styles.choice}><span>{skill.name}</span><FontAwesomeIcon className="icon-left" icon={faTimes} /></li>
                )
              })
            }
          </ul>
          <ul className={styles.choices}>
              {
                props.skills.disabled.map(skill => {
                  return (
                    <li className={[styles.choice, styles.disabled].join(' ')}>{skill.name}<FontAwesomeIcon className="icon-left" icon={faPlus} /></li>
                  )
                })
              }
          </ul>
        </div>
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