const Greet = ()=>{
    let myName = "KsRawat";
    const now = new Date();
    
    return (
        <div>
            <h1>Namste {myName}!!</h1>
            <p>Today's Date is: {now.getDate()}</p>
        </div>
    )
}

export default Greet;