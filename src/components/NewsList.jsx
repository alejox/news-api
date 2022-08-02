import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";


const NewsList = () => {

  const [hits, setHits] = useState([]);

  useEffect(() => {
    const getHits = async () => {
      const res = await axios.get('https://hn.algolia.com/api/v1/search?query=dev')
      setHits(res.data.hits)
    }

    getHits();
  },[]);

  return (
      <div>
        {hits.map(hit => {
          return(
            <NewsItem
            title={hit.title}
            url={hit.url}
            />
          )
        })}
      </div>
  )
}

export default NewsList