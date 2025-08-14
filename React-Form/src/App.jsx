import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko simulate krte hai
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            {...register("firstName", {
              required: true,
              minLength: { value: 3, message: "Min Length at least 3" },
              maxLength: { value: 6, message: "Max length at most 6" },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
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
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <br />
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
