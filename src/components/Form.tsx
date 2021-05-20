import { GlobalContext } from "../context/GlobalContext";
import React, {useContext, FormEvent, useState } from 'react';

const Form = () => {

   const { saveUser } = useContext(GlobalContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // saveUser({ firstName, lastName, email, password });
    };
    return (
        <div id="form-page">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form action="">
                        <div className="form-group my-2">
                            <input type="text"
                            className='form-control'
                            placeholder='First Name'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input type="text"
                            className='form-control'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input type="text"
                            className='form-control'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group my-2">
                            <input type="password"
                            className='form-control'
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            />
                        </div>

                        <button className='btn btn-primary btn-block'>Save!</button>
                    </form>
                </div>
            </div>

        </div>
    )

};

export default Form;