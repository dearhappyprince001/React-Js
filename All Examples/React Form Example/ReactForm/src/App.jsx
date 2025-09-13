import { useForm } from "react-hook-form";

function App() {
  //Create a form using useForm Hook.
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input
            {...register("first Name", {
              required: true,
              minLength: { value: 3, message: "Min Length at least 3" },
              maxLength: { value: 6, message: "Max Length at most 6" },
            })}
          />
        </div>
      </form>
    </div>
  );
}
