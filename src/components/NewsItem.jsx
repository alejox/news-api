const NewsItem = ({ title, url }) => {

  let num = Math.random(1);
  return (
    <div className='card_p d-flex container'>
      <img src={`https://picsum.photos/150/100?random=${num}`} alt='img' className="rounded-4 m-3" />

      <div className='card border-0' style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <a href={url} target='_blank' className='btn btn-primary'>
            Ver detalle
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
