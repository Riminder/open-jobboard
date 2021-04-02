import React, { useState, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Checkbox } from 'react-input-checkbox'

import styles from './dropdown.module.scss'
import 'react-input-checkbox/lib/react-input-checkbox.min.css'



const ItemOptions = ({ item, selected, onChangeSelected = () => {} }) => {
  return (
    <Checkbox 
      theme="fancy-checkbox"
      value={selected}
      onChange={onChangeSelected}
    >
      {item.label ? item.label : item}
    </Checkbox>
  )
}

const Dropdown = props => {
  const { selectedItems, onChangeSelected } = props;
  const [activeState, setActiveState] = useState(false)
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown__label}
        onClick={ () => 
          !activeState && window.setTimeout(() => {
            setActiveState(prevActiveState => !prevActiveState)
          }, 10)
        }
        role="button"
        tabIndex="0"
      >
        {props.title} <FontAwesomeIcon className="icon-right" icon={activeState ? faChevronUp : faChevronDown} />

      </div>
      {activeState && (
        <div className={styles.dropdown__menu}>
          <OutsideClickHandler
            onOutsideClick={ () => 
              window.setTimeout(() => {
                setActiveState(prevActiveState => !prevActiveState)
              }, 10)
            }
          >
            <ul className={styles.dropdown__menu_list}>
              {props.options.map((option, index) => {
                let selected = false;
                if (typeof option === 'string') {
                  selected = selectedItems.indexOf(option) !== - 1 ? true : false
                } else {
                  selected = JSON.stringify(selectedItems) === JSON.stringify(option) ? true : false
                }
                
                return (
                  <li
                    // className={styles.dropdown__menu-option}
                    key={`option-${index}`}>
                    <ItemOptions
                      item={option}
                      selected={selected}
                      onChangeSelected={() => onChangeSelected(option)}
                    />
                  </li>
                )
              })}
            </ul>
          </OutsideClickHandler>
        </div>
      )}
    </div>
  )
}

export default Dropdown;