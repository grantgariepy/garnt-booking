import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square200/239729295.webp?k=dd6df486c5da0781a15fb95f3e91af269f19f22199ef80a0beeafa6b8ab0192e&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Hotel Astoria Palace</span>
          <span className="fpCity">Copacabana, Rio de Janeiro</span>
          <span className="fpPrice">Starting at $77</span>
          <div className="fpRating">
              <button>8.4</button>
              <span>Very Good</span>
          </div>  
        </div>
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square200/159312994.webp?k=3959e95e7cce7f9eca8732f6e7fa8c4640cbff34e870b35f90035a2fc9f6b395&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Exeter Hotel</span>
          <span className="fpCity">Reykjavik, Iceland</span>
          <span className="fpPrice">Starting at $238</span>
          <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
          </div>  
        </div>
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square200/139731961.webp?k=daf9a6686fde00af1acf2bbfa21e11ecb988a967e41dfe0d84bd94bea2385593&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Edelweiss Motel</span>
          <span className="fpCity">Paihia, New Zealand</span>
          <span className="fpPrice">Starting at $77</span>
          <div className="fpRating">
              <button>8.4</button>
              <span>Very Good</span>
          </div>  
        </div>
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square200/22299322.webp?k=e2ef2799d2e9b1eaad4a95ee9168413f9136818cb0511ef48a67c2e9224104e4&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Le Windsor, Jungle Art Hotel</span>
          <span className="fpCity">Nice, France</span>
          <span className="fpPrice">Starting at $237</span>
          <div className="fpRating">
              <button>8.2</button>
              <span>Very Good</span>
          </div>  
        </div>
        
    </div>
  )
}

export default FeaturedProperties