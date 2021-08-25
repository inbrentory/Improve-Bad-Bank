function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [errors, setErrors]                      = useState({})     // this is a setter telling that 
  const [value, setValue]                        = useState({       // this is what we are collecting
      name:'',
      email:'',
      password:'',
      password2:'',
      amount:''
  });   

        const handleChange = e => {                             // this is where we change our input to match our data collector    
          setValue({
              ...value,
              [e.target.name] : [e.target.value]
          });
      };

      const addNewUser = () => {
          setInitialData(value);
          setStorage([...storage, [value]]);
      };

      const handleSubmit = e => {                             // this is to check if there is no errors, let submit all filled-in data 
          e.preventDefault(); 
          
          setErrors(validate(value));
          setInformCreate(true);
          addNewUser(value);
          
          console.log(value)
      }

      useEffect(
          () => {
            if (Object.keys(errors).length === 0 && informCreate) {
              callback();
            }
          },
          [errors, callback, informCreate]
        );


      function validate(value) {
      let errors = {};

      if (!value.name) {
        errors.name = 'Name required';
      }
      // } else if (!/^[A-Za-z]+/.test(value.name.trim())) {
      // errors.name = 'Enter a valid name';
      // }

      if (!value.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(value.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!value.password) {
        errors.password = 'Password is required';
      } else if (value.password.length < 1) {
        errors.password = 'Password needs to be 1 characters or more';
      }

      if (!value.password2) {
        errors.password2 = 'Password is required';
      } else if (value.password2 !== value.password) {
        errors.password2 = 'Passwords do not match';
      }

      if (!value.amount) {
        errors.amount = 'Initiate your account balance';
      }if (value.amount <= 99.99) {
        errors.amount = 'Initiate balance has to be greater than 100';
      }

      return errors;
    }

  return(<>

<div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type        ='text'
                            name        ='name'
                            placeholder ='Enter Name'
                            value       = {value.name}
                            onChange    = {handleChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <input 
                            type        ='email'
                            name        ='email'
                            placeholder ='Enter Email'
                            value       = {value.email}
                            onChange    = {handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div>
                            <input 
                            type        ='password'
                            name        ='password'
                            placeholder ='Enter Password'
                            value       = {value.password}
                            onChange    = {handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <div>
                            <input 
                            type        ='password'
                            name        ='password2'
                            placeholder ='Confirm Password'
                            value       = {value.password2}
                            onChange    = {handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div> 
                        <div>
                            <input 
                            type        ='number'
                            name        ='amount'
                            placeholder ='Initiate your account balance'
                            value       = {value.amount}
                            onChange    = {handleChange}
                            />
                            {errors.amount && <p>{errors.amount}</p>}
                        </div>
                        <div>
                            <button className="btn btn-warning">
                                sign up
                            </button>
                        </div>
                    </form>
                </div>

  </>);
}
