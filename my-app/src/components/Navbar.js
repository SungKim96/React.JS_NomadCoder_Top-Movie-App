import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Group_obj, Group_key_arr } from '../atom/NavList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.css';

function Navbar() {
  const [search, setSearch] = useState('');
  // Event when you touch the Search bar
  const searchClick = (event) => {
    setSearch(event.target.value);
  };

  return (
    // It's the Navigation bar - always above the container
    <div className={styles.container}>
      {/* Page name */}
      <div className={styles.pageName}>
        <Link to={'/'}>TopCinema</Link>
      </div>
      {/* Group links */}
      <div className={styles.GroupLink}>
        {Group_key_arr.map((key) => {
          return (
            <div className={styles.Link} key={key}>
              <div className={styles.Link_sep}>
                <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
              </div>
            </div>
          );
        })}
        {/* Search bar */}
        <div className={styles.searchBar}>
          <div>
            <form>
              {/* Search text */}
              <input
                type="text"
                placeholder="Search Movie"
                value={search}
                onChange={searchClick}
                onMouseOut={() => {
                  setSearch('');
                }}
              ></input>
              {/* Search button */}
              <Link to={`/search/${search}`}>
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
