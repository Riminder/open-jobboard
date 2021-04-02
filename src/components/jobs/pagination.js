import React, { useState, useEffect, useRef } from 'react'
import styles from './pagination.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'


const Filters = props => {
  const [page, setPage] = useState(props.meta.page)
  const [maxPage, setmaxPage] = useState(props.meta.maxPage)
  const isMounted = useRef(false);

  useEffect(() => {
    if(isMounted.current) {
      props.fetchJobs({...props.boardFilters, page})
    } else {
      isMounted.current = true;
    }
  }, [page])
  let keysList = [...Array(maxPage).keys()];
  let slicedKeysList = [];
  if (page < 4) {
    slicedKeysList = keysList.slice(0, 5);

  } else {
    slicedKeysList = keysList.slice(page - 2, page + 5);
  }
  const paginationHtml = slicedKeysList.map(p => {
    let className = [styles.paginationItem];
    if (page === p + 1 ) {
      className.push(styles.active)
    }
    return (<li key={p} onClick={() => setPage(p+1)} className={className.join(' ')}>{p+1}</li>)
  })
  let nextClass = page === maxPage ? [styles.paginationItem, styles.disabled].join(' ') : styles.paginationItem
  let prevClass = page === 1 ? [styles.paginationItem, styles.disabled].join(' ') : styles.paginationItem
  return (
    <div className={styles.pagination}>
      <span className={prevClass} onClick={() => setPage(1)}>
        <FontAwesomeIcon  icon={faAngleDoubleLeft} />
      </span>
      <span className={prevClass} onClick={() => setPage(prevPage => prevPage - 1)}>
        <FontAwesomeIcon  icon={faAngleLeft} />
      </span>
      <ul className={styles.pagination__list}>
        {paginationHtml}
      </ul>
      <span className={nextClass}>
        <FontAwesomeIcon  icon={faAngleRight} onClick={() => setPage(prevPage => prevPage + 1)} />
      </span>
      <span className={nextClass}>
        <FontAwesomeIcon  icon={faAngleDoubleRight} onClick={() => setPage(maxPage)}/>
      </span>
    </div>
  )
}

export default Filters;