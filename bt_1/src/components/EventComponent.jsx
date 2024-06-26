function EventComponent() {

    const handleClick=(event) =>{
        console.log("Event: ",event.tarrget);
    };

    const handleChange = (event) =>{
        console.log("Event: ",event.tarrget.value);
    }
    return ( 
        <div>
            <button onClick={handleClick}>Click Me</button>
            <input type="text" onChange={handleChange}></input>
        </div>
     );
}

export default EventComponent;