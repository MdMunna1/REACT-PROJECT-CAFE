function ReadTime({time}) {
    console.log(time)
    return ( <>
    <h1 className="bg-red-50 border rounded-md text-purple-600 font-semibold py-3">Spent time on read : {time} min</h1>
    </> );
}

export default ReadTime;