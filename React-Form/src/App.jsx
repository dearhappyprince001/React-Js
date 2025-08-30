//React form  is a library that helps in handling forms in React applications.
// It provides a simple and efficient way to manage form state, validation, and submission.
//To install react-hook-form use use the command:
// ---> npm install react-hook-form
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  //create a form using useForm hook.

  //register function is used to register the input fields.

  //handleSubmit function is used to handle the form submission.

  //watch function is used to watch the input fields.

  //formState is used to get the form state like errors, isSubmitting etc.

  //errors is used to get the errors of the input fields.

  //isSubmitting is used to check if the form is being submitted.

  //Note: For Styling purpose we need to add classes in the input fields and error messages.

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  //function to handle form submission with printing the form data to the console like firstName, middleName, lastName values.
  function onSubmit(data) {
    console.log("Submitting the form", data);
  }

  //function to handle form submission with a delay of 5 seconds to simulate an API call it prints he data with a delay of 5 seconds to the console like firstName, middleName, lastName values.
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          {/* To register the input field with validation rules We use register function. */}
          <input
            className={errors.firstName ? "input-error" : ""} //Add a class for the purpose of styling the input field in case of an error.
            {...register("firstName", {
              required: true,
              minLength: { value: 3, message: "Min Length at least 3" }, //create a object with value and message for minLength and maxLength validation rules.
              maxLength: { value: 6, message: "Max length at most 6" },
            })}
          />
          {/* Handling error message if there is an error in the firstName field and add a className for styling purpose. */}
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label>Middle Name:</label>
          <input {...register("middleName")} />
        </div>
        <br />
        <div>
          <label>Last Name:</label>
          <input
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Last Name is not as per the rules",
              }, //we can also use pattern validation rule to validate the input field with regular expression.
            })}
          />

          {/* Handling error message if there is an error in the lastName field and for styling we add a className. */}
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>
        <br />
        {/* Submit button is disabled when the form is being submitted to prevent multiple submissions during the delay of 5 Sec */}
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
