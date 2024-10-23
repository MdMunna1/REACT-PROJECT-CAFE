import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog, bookMarkdeta,addTime }) {
  let {
    id,
    courseThumbnail,
    authorName,
    authorImageAvatar,
    title,
    postDate,
    readingTime,

    hasTag,
  } = blog;
  // console.log(blog);
  return (
    <>
      <div className="mb-12">
        <img
          className="w-full h-96 object-cover rounded-md"
          src={courseThumbnail}
          alt="Loading"
        />
        {/* deta section */}
        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-5 items-center">
            <img
              className="h-8 rounded-full"
              src={authorImageAvatar}
              alt="Loading"
            />
            <div>
              <h1 className="text-xl">{authorName}</h1>
              <h1 className="text-xs">{postDate}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span> Read Time {readingTime} min</span>
            <button onClick={()=> bookMarkdeta(title)} className="text-violet-500">
              <FaBookmark />
            </button>
          </div>
        </div>
        {/* end */}
        <h1 className="text-2xl font-semibold py-2 ">{title}</h1>
        {/* has tag section */}
        {hasTag.map((all) => (
          <span className="mr-2 text-sm">#{all}</span>
        ))}
        {/* last */}
        <button onClick={()=>addTime(readingTime)} className="my-3 underline text-sm text-violet-800 block">
          Mark as read
        </button>
      </div>
    </>
  );
}
