import React, {useState} from "react";
export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [result, setResult] = useState('');

    //用 json 傳資料
    var data={
        name: name,
        email: email,
        pass: pass
    }
    let item={name, email, pass};
    let url="http://localhost:3030/users";
    const handleSubmit = (e) => {
        e.preventDefault() // 阻止表單送出
        console.log(item)
        fetch(url, {
            method: "POST",
             headers:{
                "request-date":`${ new Date().toUTCString() }`,
                "Content-Type":"application/json"
             },
             body: JSON.stringify(data)
        })  
        .then(res => res.json())
        .then(res => { setResult(res.data.user);})
        console.log(result); 
    }

    return(
        <div>
        <form className='form-container' >
            <div className = 'AlignRight'>
                <label htmlFor="name" className='col-form-label'>name: </label><br/>
                <label htmlFor='email' className='col-form-label' >email: </label><br/>
                <label htmlFor='password' className='col-form-label'>password: </label><br/>
            </div>
            <div>
                <input value={name} onChange={(e)=>setName(e.target.value)} type='name' id='name' name = 'name'></input><br/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id='email' name='email'></input><br/>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' id='password' name='password'></input><br/>
                <button type='submit' onClick={handleSubmit}>Signup</button>
                <div>{(result=='')?"":JSON.stringify(result)}</div>
            </div>               
            
        </form>
        </div>
    )
}