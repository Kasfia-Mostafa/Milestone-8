
const SimpleForm = () => {

const handleSubmit = e => {
  e.preventDefault();
  console.log(e.target.Name.value)
  console.log(e.target.Email.value)
  console.log(e.target.Phone.value)
  console.log('form submit')
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;