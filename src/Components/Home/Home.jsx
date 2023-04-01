import { useEffect, useState } from "react";
import Aside from "./Aside/Aside";
import Cards from "./Cards/Cards";
import { toast } from "react-hot-toast";

const Home = () => {
  const [bookedData, setBookedData] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const readTime = (number) => {
    let time = totalTime + number;
    setTotalTime(time);
  };
console.log(bookedData);
  const handleBookmark = (title) => {
    let bookmarkedItems = [];

    const bookmarked = localStorage.getItem("bookmarked");
    
    if (bookmarked) {
      bookmarkedItems = JSON.parse(bookmarked);
    }
    const alreadyBooked = bookmarkedItems.includes(title);
    if (!alreadyBooked) {
      bookmarkedItems.push(title);
      setBookedData(bookmarkedItems);
      toast.success("Bookmarked Successful");
    } else {
      toast.error("Already Bookmarked");
    }

    localStorage.setItem("bookmarked", JSON.stringify(bookmarkedItems));
  };

  

  

  return (
    <div className="grid gap-4 mt-4 grid-cols-3">
      <div className="col-span-2">
        <Cards readTime={readTime} handleBookmark={handleBookmark}></Cards>
      </div>
      <div className="col-span-1">
        <Aside bookedData={bookedData} totalTime={totalTime}></Aside>
      </div>
    </div>
  );
};

export default Home;
