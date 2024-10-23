import { useState } from "react";
import "./App.css";
import BlogsDetaLoad from "./Component/blogs";
import Navber from "./Component/navber";
import BookMark from "./Component/boohMark";
import ReadTime from "./Component/ReadTime";

function App() {
  let [time, setTime] = useState(0);
  let [titel, setTitel] = useState([]);
  function bookMarkdeta(titelDeta) {
    let newTitel = [...titel, titelDeta];
    setTitel(newTitel);
  }
  // * time function
  function addTime(readTime) {
    let newTime = time + readTime;
    setTime(newTime);
  }
  console.log(time);

  return (
    <>
      <div className="w-full ">
        <header className="w-11/12 mx-auto my-5">
          <Navber />
        </header>
        <main className="w-11/12 mx-auto sm:grid gap-3 sm:grid-cols-12">
          {/* blog section */}
          <section className="sm:col-span-8">
            <BlogsDetaLoad addTime={addTime} bookMarkdeta={bookMarkdeta} />
          </section>
          {/* bukmark section section */}
          <section className=" col-span-4">
            <ReadTime time={time}/>
            <h1 className="py-2 font-semibold">
              BookMark Length : {titel.length}
            </h1>

            <BookMark deta={titel} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
