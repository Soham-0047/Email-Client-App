import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setFilter } from '../actions/filteractions'
import './appstyle/filteroption.css'


const Filteroptions = () => {

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (newfilter) => {
    dispatch(setFilter(newfilter));
    console.log(newfilter)
  };
  return (
    <main>

      <nav id="filter-nav">
         <label>Filter by:</label>

      <section className="nav-btn">
      <button
        onClick={() => handleFilterChange('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('favorites')}
        className={filter === 'favorites' ? 'active' : ''}
      >
        Favorites
      </button>
      <button
        onClick={() => handleFilterChange('read')}
        className={filter === 'read' ? 'active' : ''}
      >
        Read
      </button>
      <button
        onClick={() => handleFilterChange('unread')}
        className={filter === 'unread' ? 'active' : ''}
      >
        Unread
      </button>
         </section>
     
      </nav>

     
    </main>
  )
}

export default Filteroptions