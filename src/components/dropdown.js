import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './filters.module.scss'
import { Checkbox } from 'react-input-checkbox';
import 'react-input-checkbox/lib/react-input-checkbox.min.css';



const ItemOptions = ({ item, selected = false, onChangeSelected = () => {} }) => {
  return (
    <Checkbox 
      theme="fancy-checkbox"
      value={selected}
      onChange={onChangeSelected} 
    >
      test
    </Checkbox>
  )
}

const Dropdown = props => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__label}>{props.title}</div>
      <OutsideClickHandler>
        <ul className={styles.dropdown__menu}>
          {/* {props.options.map((option, index) => (
            <li className={styles.dropdown__menu-option} key={`option-${index}`}> */}
              <ItemOptions
                item={'text'}
                selected={true}
              />
            {/* </li>
          ))} */}
        </ul>
      </OutsideClickHandler>
    </div>
  )
}

export default Dropdown;