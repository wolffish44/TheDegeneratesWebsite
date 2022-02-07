import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Col, Row} from "antd";
import dynamic from "next/dist/next-server/lib/dynamic";
import Utility from "../src/components/utility";
import Utilities from "../src/components/utilities";
import Button from "../src/components/button";
import PageFrame from "../src/components/structure/pageframe";
import { FaDiscord ,FaTwitter} from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import PictureTitle from "../src/components/picturetitle";


const LandingPage = dynamic(
    () => import("../src/components/landing.jsx"),
    { ssr: false })

export default function Home() {
  return (
<div>
    <PageFrame backgroundImage={"Naamloos.png"} height={1000}>
        <LandingPage>
 
        </LandingPage>
        <Button 
        link="https://discord.gg/eXUdVGX5"
        icon={<FaDiscord style={{position:"relative",top:4, fontSize:"40px",left:"-10px", color:"black"}}></FaDiscord>}
        name="Discord">
        </Button>
        <Button 
        link="https://twitter.com/The_DegensNFT"
        icon={<AiOutlineTwitter style={{position:"relative",top:4, fontSize:"40px",left:"-10px", color:"black"}}></AiOutlineTwitter>}
        name="Twitter">
        </Button>

    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/the_mint.png"} height={558}>
        <PictureTitle
            width ={129}
            height ={67}
            imageURL={"title_texts/the_top.png"} text={"MINT"}
            lineHeight = {"60px"}

        />
    </PageFrame>
    <PageFrame backgroundImage={"wallpaper/utilities_wallpaper.png"} height={2500}>
        <PictureTitle
            width ={318}
            height ={60}
            lineHeight={"52px"}
            imageURL={"title_texts/title_benefits.png"} text={"AND UTILITIES"} />
        <Utilities ></Utilities>
    </PageFrame>

    <></>

    <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }

  * {
    box-sizing: border-box;
  }
`}</style>



</div>

  )
}

