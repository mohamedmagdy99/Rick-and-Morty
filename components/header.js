import Image from "next/image"
import style from "./header.module.css"
export default function Header(){
       return(
              <div className={style.header}>
                     <Image src="/icon3.png" width="250" height="250" alt="rick"/>
                     <h1>Rick and Morty, all characters</h1>
              </div>
       )
};