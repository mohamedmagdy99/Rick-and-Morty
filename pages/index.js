import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Cards from '../components/Cards';
import cardStyles from '../components/Cards.module.css';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
import Header from '@/components/header';
const Pagination = dynamic(() => import('@/components/pagintion'), {
  ssr: false
})
 function Home({}) {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState({
    info: { pages: 0, count: '' },
    results: []
  });
  const { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setFetchedData(data)
      })
  }, [api])
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
      <Header />
        <div className={cardStyles.row}>
          {results.map((chareacter) =>
            <Cards 
              imageSrc={chareacter.image}
              name={chareacter.name}
              status={chareacter.status} 
              species={chareacter.species}
              type={chareacter.type}
              gender={chareacter.gender}
              location={chareacter.location.name}
              key={chareacter.id}/>
          )} 
        </div>
        <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
      </main>
    </>
  )
}
export default Home;