import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { MainComponent, InvalidationComponent } from '../components';
import { Inter } from "next/font/google"
/*
import _ from "../../index.js"
console.log(_.toString())
*/

export const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  var location = window.location;
  var parent = window.parent;

  return (
    <>
      <main>
        {location === parent.location ? <MainComponent /> : <InvalidationComponent />}
      </main>
    </>
  )
}
