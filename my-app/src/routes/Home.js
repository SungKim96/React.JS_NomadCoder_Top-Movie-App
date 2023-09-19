import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Slide from '../components/Slide';
import { Group_obj, Group_key_arr } from '../atom/NavList';

function Home() {
  return (
    <div>
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                <Link
                  to={`/page/${Group_obj[group]}/1`}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                  }}
                >
                  <div className={styles.titleImg}></div>
                  <div>
                    <span>{group}</span>
                  </div>
                </Link>
              </div>
            </div>
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`}
            />
          </div>
        );
      })}
      <div className={styles.footer}></div>
    </div>
  );
}

export default Home;
