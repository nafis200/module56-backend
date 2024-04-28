
const Apk = () => {

    
    fetch('http://localhost:5005')
    .then(res=>res.json())
    .then(data => console.log(data))

    return (
        <div>
            <h2 className="text-2xl">hellow</h2>
            
        </div>
    );
};

export default Apk;