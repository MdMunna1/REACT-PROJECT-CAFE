import profile from "../assets/images/profile.png";
export default function Navber() {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 py-4">
        <h1 className="text-xl font-semibold">Knowledge Cafe</h1>
        <img className="h-9" src={profile} alt="" />
      </div>
    </>
  );
}
