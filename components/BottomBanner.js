import { useEffect, useState } from 'react'
import Fade from './Fade'
import useTimeout from '../utils/useTimeout'
import styles from '../styles/Banner.module.scss'

const time = 1500;

const Leo = ({ setBanner }) => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);
  
      useTimeout(() => {
        setHasTimeElapsed(true);
      }, time);
  
      useEffect(() => {
        hasTimeElapsed && setBanner(null);
    }, [hasTimeElapsed]);

    return(<h1>yes...she's a leo😈🔥🌞</h1>)
  }

const Copied = ({ setBanner }) => {
    const [hasTimeElapsed, setHasTimeElapsed] = useState(false);
  
      useTimeout(() => {
        setHasTimeElapsed(true);
      }, time);
  
      useEffect(() => {
        hasTimeElapsed && setBanner(null);
    }, [hasTimeElapsed]);
  
    return (<h1>email copied to clipboard 💾⛓🖇</h1>)
}

const BottomBanner = ({setBanner, banner}) => {
    return (
        <Fade enter={!!(banner)}>
        <div className={styles.banner}>
          {(function() {
              switch (banner) {
                case 'stars':
                  return (<Leo setBanner={setBanner}/>);
                case 'email':
                  return (<Copied setBanner={setBanner}/>);
              }
            })()}
        </div>
      </Fade>
    );
  };

  export default BottomBanner;