import { useEffect, useState } from "react";
import axios from "axios";


const NewsList = () => {

  const [hits, setHits] = useState([]);

  useEffect(() => {
    const getHits = async () => {
      const res = await axios.get('https://hn.algolia.com/api/v1/search?query=dev')
      console.log(res);
      setHits(res.data.hits)
    }

    getHits();
  },[]);

  return (
    <div>
      <h1 className="titleNews">News List</h1>
      <article className="container">
        {
        hits?.map((hit) => (
          <div className="container"
          key={hit.id}
          >
            <article>
            <h2>{hit.author}</h2>
            <p>{hit.title}</p>
            
            </article>
            
          </div>
          
        ))
        }
      </article>
      </div>
  )
}

export default NewsList