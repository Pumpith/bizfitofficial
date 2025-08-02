
import Image, { ImageLoader } from "next/image";
import { useEffect, useState } from "react";

const logo = "/images/logo/logo.png"
const imageLoader: ImageLoader = ({ src }) => {
  return `${src}`;
};

export default function Navbar() {

  return (
    <>
      <nav className="layout_main_container logo_wrapper">
        <div className="logo">
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={logo}
            alt={"Bizfit"}
            width={169}
            height={20}
            layout="fixed"
          />
        </div>

        <div className="social">
          <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={"/images/icons/instagram.png"}
            alt={"Bizfit"}
            width={28}
            height={28}
            layout="fixed"
          />
          </div>
          <div> <Image
            unoptimized={true}
            loader={imageLoader}
            src={"/images/icons/facebook.png"}
            alt={"Bizfit"}
            width={28}
            height={28}
            layout="fixed"
          /></div>
          <div> <Image
            unoptimized={true}
            loader={imageLoader}
            src={"/images/icons/youtube.png"}
            alt={"Bizfit"}
            width={28}
            height={28}
            layout="fixed"
          /></div>
          <div>
          <Image
            unoptimized={true}
            loader={imageLoader}
            src={"/images/icons/tiktok.png"}
            alt={"Bizfit"}
            width={28}
            height={28}
            layout="fixed"
          />
          </div>
        </div>

      </nav>
    </>
  );
}
