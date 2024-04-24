
import React from 'react';

const Apk = () => {

    
    fetch('https://module-56-2-27osuso4q-nafis2000s-projects-efe39630.vercel.app')
    .then(res=>res.json())
    .then(data => console.log(data))

    return (
        <div>
            <h2 className="text-2xl">hellow</h2>
            
        </div>
    );
};

export default Apk;