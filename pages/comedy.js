import React from 'react';
import Categories from '../components/categories'
export async function getStaticProps() {
  const baseURL = "https://api.themoviedb.org/3";


  // Fetch data from external API
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${process.env.APIKEY}&language=en-US&with_genres=35`
  );
  const data = await res.json(res.data);

  // Pass data to the page via props
  return { props: { data } };
}
function Comedy({data}) {
  return (
    <Categories  data={data.results}/>
  )
}

export default Comedy