import { useState } from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import Fade from '../components/Fade'
import Nav from '../components/Nav'
import Img from '../components/Img'
import BottomBanner from '../components/BottomBanner'
import Projects from '../components/Projects'
import ProjectSummary from '../components/ProjectSummary'

const PageHead = () => {
  return(
    <Head>
      <title>@jawblia</title>
      <meta name="@jawblia" content="Julia Bell"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
  )
}

export default function Home() {
  const [banner, setBanner] = useState(null);
  const [img, setImg] = useState(false); 

  return (
    <>
      <PageHead/>
      <div className="home">
          <div className="home_top">
              <Nav img={img} setImg={setImg} setBanner={setBanner}/>
          </div>
          <div className="home_middle">
            <Card banner={banner} setImg={setImg} setBanner={setBanner}/>
          </div>
         <div className="home_bottom">
           <Fade enter={img} short>
              <Img setImg={setImg}/>    
            </Fade>
         </div>
          <BottomBanner banner={banner} setBanner={setBanner}/>
      </div>
      <ProjectSummary/>
    </>
  )
}

/**
  <Fade enter={img} short>
              <Img/>
            </Fade>
 */
