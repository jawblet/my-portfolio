import { useState, useEffect } from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import Fade from '../components/Fade'
import styles from '../styles/Home.module.scss'
import useTimeout from "../utils/useTimeout";

const Nav = () => {
  return(
  <div className={styles.nav}>
              <h2 className={styles.nav_link}>Resume</h2>
              <h2 className={styles.nav_link}>Projects</h2>
           </div>
  )
}

const Copied = ({ setBanner, banner }) => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);

    useTimeout(() => {
      setHasTimeElapsed(true);
    }, 1500);

    useEffect(() => {
      hasTimeElapsed && setBanner(null);
  }, [hasTimeElapsed]);

  return (
      <h1 className={styles.leo}>email copied to clipboard 🤠😈🔥</h1>
  )
}

export default function Home() {
  const [banner, setBanner] = useState(null);

  console.log(banner);
  return (
    <>
      <Head>
        <title>@jawblia</title>
        <meta name="@jawblia" content="jawblia's website" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={styles.home}>
          <Card banner={banner} setBanner={setBanner}/>
          <Fade enter={!!(banner)}>
          {(function() {
              switch (banner) {
                case 'stars':
                  return (
                  <h1 className={styles.leo}>yes...she's a leo 🤠😈🔥</h1>);
                case 'email':
                  return (<Copied banner={banner} setBanner={setBanner}/>);
                default:
                  return <></>;
              }
            })()}
          </Fade>
      </div>
    </>
  )
}
