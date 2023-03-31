import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = ({bookmarked}) => {
  const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  
  const handleBookmark = (title) => {
    
    const alreadyBooked = bookmarked.includes(title);
    if(!alreadyBooked){
        bookmarked.push(title);
    }else{
        window.alert("Already Booked")
    }
    
    
    console.log(bookmarked, alreadyBooked);
  }
  return (
    <div>

        {
            data?.boss?.map(singleData => <Card key={singleData.id} handleBookmark={handleBookmark} singleData={singleData}></Card>)
        }
    </div>
  );
};

export default Cards;
