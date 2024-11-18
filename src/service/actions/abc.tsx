import React, { useState } from 'react';

const abc = () => {
    const [edus,setEdus] = useState([
        {name:"ssc",result,address,year},
        {name:"hsc",result,address,year},
    ])
    const addMore = () =>{
        const temp = [...edus];
        temp.push({name:"",result:"",address,year})
        setEdus(edus)
    }
    
    return (
        <div>
            edus.map(el=><div>
                <input value={el.namw} />
                <input value={el.age} />
                <input value={el.result} />
            </div>)
            <button>add</button>
        </div>
    );
};

export default abc;