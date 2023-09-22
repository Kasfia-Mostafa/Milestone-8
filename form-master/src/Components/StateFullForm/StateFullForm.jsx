import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6){
      setError("Password Must Be 6 Characters or Longer")
    }
    else{
      setError('');
      console.log(name, email, password, error);
    }
  };
  
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value)
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
          value={name}
          onChange={handleName}
          type="text" name="name" />
          <br />
          <input onChange={handleEmailChange} type="email" name="email" id="" />
          <br />
          <input
            onChange={handlePasswordChange}
            required
            type="password"
            name="password"
          />
          <br />
          <input type="submit" value="Submit" />
          {
            error && <p>{error}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default StateFullForm;
