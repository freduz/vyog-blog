import('./banner.component.style.scss')
const Banner = () => {
    return (
        <div className="banner__container">
          <div className="banner-content"> 
           <h2 className='banner-heading'><span className='vog-head'>Vogue</span> <span className='vog-tail'> Stories</span> </h2>
            <p>Being normal is always boring and the joy of dressing is really an art</p>
            </div>
        </div>
    )
}

export default Banner