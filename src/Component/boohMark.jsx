export default function BookMark({ deta }) {
  console.log(deta);
  if (deta.length > 0) {
    return (
      <>
    
        {deta.map((all) => (
          <h3 className="p-2 font-semibold text-xl shadow-md border mb-1">
            {all}
          </h3>
        ))}
      </>
    );
  }
}
