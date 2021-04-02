import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './dropdown'
import styles from './filters.module.scss'
import { CATEGORIES, TYPES, DATESOPTIONS, ORDERS } from '../../utils/config'

const Filters = props => {
  const [selectedCategories, setSelectedCategories] = useState(props.boardFilters?.categories?.map(category => category.value))
  const [selectedTypes, setSelectedTypes] = useState(props.boardFilters?.types?.map(type => type.value))
  const [selectedOrder, setSelectedOrder] = useState(ORDERS.filter(order => order.orderBy === props.boardFilters?.orderBy && order.sortBy === props.boardFilters?.sortBy)[0])
  const [selectedRangeDate, setSelectedRangeDate] = useState(DATESOPTIONS.filter(date => date.value === props.boardFilters?.date_range_min)[0])
  const isMounted = useRef(false);

  useEffect(() => {
    setSelectedCategories(props.boardFilters.categories.map(category => category.value))
    setSelectedTypes(props.boardFilters.types.map(type => type.value))
  }, [])

  useEffect(() => {
    if(props.scoringChecked) {
		  setSelectedOrder({ label: "Recommandation décroissante", sortBy: "scoring", orderBy: "desc" })
		} else {
		  setSelectedOrder({ label: "Recherche décroissante", sortBy: "searching", orderBy: "desc" })
		}
  }, [props.scoringChecked])

  useEffect(() => {
    if(isMounted.current) {
      props.fetchJobs({
        ...props.boardFilters,
        categories: selectedCategories.map(category =>  {
          return { name: 'line_of_business', value: category }
        }),
        types: selectedTypes.map(type =>  {
          return { name: 'contract', value: type }
        })
      })
    } else {
      isMounted.current = true;
    }
  }, [selectedCategories, selectedTypes])

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

  const ChangeSelectedTypesHandler = item => {
    setSelectedTypes(prevTypes => {
      if ([...prevTypes].indexOf(item) === - 1) {
        return [
          ...prevTypes,
          item
        ]
      }
      return [...prevTypes].filter(type => type !== item )
    })
  }

  const ChangeSelectedOrderHandler = item => {
    setSelectedOrder(item)
    props.fetchJobs({...props.boardFilters, orderBy: item.orderBy, sortBy: item.sortBy  })
  }


  const ChangeSelecedDateRangeHandler = item => {
    setSelectedRangeDate(item)
    props.fetchJobs({...props.boardFilters, date_range_min: item.value  })
  }

  return (
    <div className={styles.filters}>
      <div className={styles.filters__dropdowns}>
        <Dropdown options={CATEGORIES} onChangeSelected={ChangeSelectedCategriesHandler} selectedItems={selectedCategories} title="Categories" />
        <Dropdown options={TYPES} onChangeSelected={ChangeSelectedTypesHandler} selectedItems={selectedTypes} title="Contracts" />
        {/* <Dropdown options={DATESOPTIONS} selectedItems={selectedRangeDate} onChangeSelected={ChangeSelecedDateRangeHandler} title="Publié il y a" /> */}
        <Dropdown options={ORDERS} selectedItems={selectedOrder} onChangeSelected={ChangeSelectedOrderHandler} title={selectedOrder && selectedOrder.label || 'Trier par'} />
      </div>
    </div>
  )
}

export default Filters