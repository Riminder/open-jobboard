import React, {useState} from 'react'
import Dropdown from './dropdown'
import styles from './filters.module.scss'
import { categories, companies, orders } from '../../mock/filters'

const Filters = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [selectedOrder, setSelectedOrder] = useState([])

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
        <Dropdown options={categories} onChangeSelected={ChangeSelectedCategriesHandler} selectedItems={selectedCategories} title="Secteur" />
        <Dropdown options={companies} onChangeSelected={ChangeSelectedCopaniesHandler} selectedItems={selectedCompanies} title="Entreprise" />
        <Dropdown options={orders} selectedItems={selectedOrder} onChangeSelected={ChangeSelectedOrderHandler} title="Trier par" />
      </div>
      <div className={styles.filters__switcher}>
        <label>Activer la recommandation</label>
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default Filters;