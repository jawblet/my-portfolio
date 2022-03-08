import { useEffect, useState } from 'react'
import Fade from './Fade'
import useTimeout from '../utils/useTimeout'
import styles from '../styles/Banner.module.scss'

const Leo = () => {
    return(<h1>yes...she's a leo😈🔥🌞</h1>)
  }

const Copied = ({ setBanner, banner }) => {
    const [hasTimeElapsed, setHasTimeElapsed] = useState(false);
  
      useTimeout(() => {
        setHasTimeElapsed(true);
      }, 3000);
  
      useEffect(() => {
        hasTimeElapsed && setBanner(null);
    }, [hasTimeElapsed]);
  
    return (
        <h1>email copied to clipboard 💾⛓🖇</h1>
    )
}

const BottomBanner = ({setBanner, banner}) => {
    return (
        <Fade enter={!!(banner)}>
        <div className={styles.banner}>
          {(function() {
              switch (banner) {
                case 'stars':
                  return (<Leo/>);
                case 'email':
                  return (<Copied banner={banner} setBanner={setBanner}/>);
              }
            })()}
        </div>
      </Fade>
    );
  };

  export default BottomBanner;