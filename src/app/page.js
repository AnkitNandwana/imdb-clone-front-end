
const API_KEY= process.env.API_KEY;
import Result from "@/components/Result";

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fectchTrending';
  // const res = await fetch(
  //   `https://api.themoviedb.org/3${
  //     genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  //   }?api_key=${API_KEY}&language=en-US&page=1`
  // )
  const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2a623312')
  const data= await res.json();
  if(!res.ok){
    throw new Error('Failed to Fetch')
  }
  // const response = data.results
  console.log(data)
  return ( 
   <div >
    <Result results = {[data]}/>   
   </div>
  );
}
