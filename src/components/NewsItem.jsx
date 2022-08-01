import './newsItem.css'

const NewsItem = ({title, descrpition, url, urlImage}) => {
  return (
    <div className='newas-app'>
      <div className="news-item">
        <img className='news-img' src={urlImage} alt= ""/>
        <h3><a href=""></a></h3>
        <p></p>
      </div>
    </div>
  )
}

export default NewsItem