import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

// declare the component
function SushiContainer(props) {
  // use state, allow for callback
  const [sushis, setSushis] = useState([])
  // add counter
  const [currCount, updateCount] = useState(0)

  // make api call on pageload
  useEffect(() => {
    fetch(`http://localhost:3001/sushis`)
      .then(response => response.json())
      .then(sushisArray => {
        // pass in entire array
        setSushis(sushisArray)
      })
  }, [])

  // have the initial state of the app show 4 sushis
  // when 'show more is clicked' add 4 sushis to the list shown

  // create list of sushis to render
  // use the count to set when to start and end after 4 have been rendered
  const sushisList = sushis.map((sushiObject, index) => {
    // use currCount in if statement
    // check if index is greater than or equal to currCount
    // AND index is less than currCount + 4
    return <Sushi />;
  })

  return (
    <div className="belt">
      {/* render sublist of sushi elements */}
      {sushisList}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
