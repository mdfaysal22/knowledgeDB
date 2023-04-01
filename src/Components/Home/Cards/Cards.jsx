import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = ({handleBookmark, readTime}) => {
  const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  
  
  return (
    <div>

        {
            data?.boss?.map(singleData => <Card key={singleData.id} readTime={readTime} handleBookmark={handleBookmark} singleData={singleData}></Card>)
        }
    </div>
  );
};

export default Cards;
