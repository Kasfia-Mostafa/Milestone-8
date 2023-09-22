// import "./App.css";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";
// import StateFullForm from "./Components/StateFullForm/StateFullForm";
// import ReusableForm from "./Components/ReusableForm/ReusableForm";
import Grandpa from "./Components/Grandpa/Grandpa";

function App() {
  // const handleSignSubmit = (data) => {
  //   console.log("Sign up data", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("Update", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>



      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
