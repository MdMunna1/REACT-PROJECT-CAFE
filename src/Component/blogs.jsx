import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";

export default function BlogsDetaLoad({ bookMarkdeta,addTime}) {
  const [deta, setDeta] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((deta) => setDeta(deta));
  }, []);
  return (
    <>
      <div>
        {deta.map((all) => (
          <Blog addTime={addTime}  bookMarkdeta={bookMarkdeta} blog={all} />
        ))}
      </div>
    </>
  );
}
