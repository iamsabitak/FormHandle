import React from "react";
// Controller 
import { useForm, useFieldArray} from "react-hook-form"; 

function Fieldarray() {
    // reset, trigger, setError
  const { register, control, handleSubmit} = useForm(
    {
      // defaultValues: {}; you can populate the fields by this attribute
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`test.${index}.firstName`)} />
            <input {...register(`test.${index}.lastName`)} />

            {/* <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            /> */}

            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}

export default Fieldarray;
