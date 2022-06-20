import React from 'react'
import Categories from '../components/categories'
export async function getStaticProps() {
  const baseURL = "https://api.themoviedb.org/3";
  const APIKEY = "fe18b7ed47310bf8e2e2948829289900";

  // Fetch data from external API
  const res = await fetch(
    `${baseURL}/discover/movie?api_key=${APIKEY}&language=en-US&with_genres=10749`
  );
  const data = await res.json(res.data);

  // Pass data to the page via props
  return { props: { data } };
}
function Romance({data}) {
  return (
    <Categories  data={data.results}/>
  )
}

export default Romance