import { useState, useEffect } from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import Fade from '../components/Fade'
import Nav from '../components/Nav'
import Resume from '../components/Resume'
import styles from '../styles/Home.module.scss'
import useTimeout from "../utils/useTimeout"
import Img from '../components/Img'

const Leo = () => {
  return(<h1>yes...she's a leo😈🔥🌞</h1>
  )
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
      <h1 className={styles.leo}>email copied to clipboard 💾⛓🖇</h1>
  )
}

export default function Home() {
  const [banner, setBanner] = useState(null);
  const [img, setImg] = useState(false); 

  console.log(banner);
  return (
    <>
      <Head>
        <title>@jawblia</title>
        <meta name="@jawblia" content="jawblia's website" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={styles.home}>
          <Nav img={img} setImg={setImg}/>
          <Card banner={banner} setBanner={setBanner}/>
          <Fade enter={!!(banner)}>
            <div className={styles.banner}>
              {(function() {
                  switch (banner) {
                    case 'stars':
                      return (<Leo/>);
                    case 'email':
                      return (<Copied banner={banner} setBanner={setBanner}/>);
                    default:
                      return <></>;
                  }
                })()}
            </div>
          </Fade>
         <Fade enter={img} short>
           <Img/>
         </Fade>
      </div>
      <Resume/>
    </>
  )
}
