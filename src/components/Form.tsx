import { GlobalContext } from "../context/GlobalContext";
import React, {useContext, FormEvent, useState } from 'react';

const Form = () => {

   const { saveUser } = useContext(GlobalContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    console.log(saveUser);

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
                        </form>
                        <button className='btn btn-primary btn-block' onClick={handleSubmit}>Save!</button>
                    
                    <div className="row d-flex justify-content-center mt-3">
                    {success ? (
              <div>
                  <div className='col-sm-4 alert alert-success text-center' role='alert'>
                  You've successfully added a new user!
                  </div>
              </div>
          ) : (
              ''
          )}
        </div>
                </div>
            </div>

        </div>
    )

};

export default Form;