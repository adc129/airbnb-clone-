import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult.js"
;
function SearchPage() {
  return(
    <div className='searchPage'>
      <div
        className='searchPage__info'>
        <p> 62 stays • 26 july to 30 july • 2 guests </p>
        <h1> Stays nearby </h1>
        <Button
        variant="outlined">Cancellation
        Flexibility</Button>
        <Button
        variant="outlined">Type of
        Place</Button>
        <Button
        variant="outlined">Price</
        Button>
        <Button
        variant="outlined">Rooms and
        beds</Button>
        <Button
        variant="outlined">More
        filters</Button>

        </div>
        <SearchResult
        img="https://hips.hearstapps.com/gearpatrol/gearpatrol/wp-content/uploads/2015/02/Airbnb-Gear-Patrol-Lead-Full-2.jpg"
        location="Cabin in Colorado"
        title="Stay at this spacious ski cabin located near Telluride "
        description="3 guests 5 bedroom 5 bed 3 shared bathrooms Kitchen Wifi Free parking Washing/Dryer Machine"
        star={4.0}
        price="$100 / night"
        tOtal="$538" />
        <SearchResult
        img="https://cdn.homedit.com/wp-content/uploads/2011/09/los-angeles-ca-downtown-loft5.jpg"
        location="Loft in downtown Los Angeles, California"
        title="Stay at this cozy loft within walking distance of Hollywood Boulevard "
        description="1 guest 2 bedroom 2 bed 1 shared bathrooms Kitchen Wifi Free parking Washing/Dryer Machine"
        star={4.56}
        price="$25 / night"
        tOtal="$100" />
    </div>
  )
}
export default SearchPage
