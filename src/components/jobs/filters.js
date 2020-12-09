import React, {useState} from 'react'
import Dropdown from './dropdown'
import styles from './filters.module.scss'
import { CATEGORIES, COMPANIES, ORDERS } from '../../utils/config'

const Filters = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [selectedOrder, setSelectedOrder] = useState([])
  const [checked, setChecked] = useState(false)

  const ChangeSelectedCategriesHandler = item => {
    setSelectedCategories(prevCategories => {
      if ([...prevCategories].indexOf(item) === - 1) {
        return [
          ...prevCategories,
          item
        ]
      }
      return [...prevCategories].filter(cat => cat !== item )
    })
  }

  const ChangeSelectedCopaniesHandler = item => {
    setSelectedCompanies(prevCopanies => {
      if ([...prevCopanies].indexOf(item) === - 1) {
        return [
          ...prevCopanies,
          item
        ]
      }
      return [...prevCopanies].filter(comp => comp !== item )
    })
  }

  const ChangeSelectedOrderHandler = item => {
    setSelectedOrder(item);
  }
  return (
    <div className={styles.filters}>
      <div className={styles.filters__dropdowns}>
        <Dropdown options={CATEGORIES} onChangeSelected={ChangeSelectedCategriesHandler} selectedItems={selectedCategories} title="Secteur" />
        <Dropdown options={COMPANIES} onChangeSelected={ChangeSelectedCopaniesHandler} selectedItems={selectedCompanies} title="Entreprise" />
        <Dropdown options={ORDERS} selectedItems={selectedOrder} onChangeSelected={ChangeSelectedOrderHandler} title="Trier par" />
      </div>
      <div className={styles.filters__switcher}>
        Recommandation
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name="toggleSwitch"
            id="toggleSwitch"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
          <label className="toggle-switch-label" htmlFor="toggleSwitch">
            <span className="toggle-switch-inner" />
            <span className="toggle-switch-switch" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters;