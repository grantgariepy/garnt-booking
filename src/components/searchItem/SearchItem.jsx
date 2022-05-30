import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/83327389.jpg?k=911f379853eb82e23dc74c03c67e20366f12114945d588de0a67bc01e133b77f&o=&hp=1" 
        alt="" 
        className="siImg" 
        />
        <div className="siDesc">
        <h1 className="siTitle">Petit Hotel Hostatgeria La Victoria</h1>
        <span className="siDistance">9-minute walk from the beach</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
        Hotel with Air conditioning
        </span>
        <span className="siFeatures">
        2 full beds
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span className="siWordRating">Excellent</span>
            <button>9.2</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$59</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div> 
        </div>
    </div>
  )
}

export default SearchItem