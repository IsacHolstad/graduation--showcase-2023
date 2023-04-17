import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";


const handleClick = (event) => {
    event.currentTarget.disabled = true;
    console.log('hy')
  };

const  Form = () => {
  const {
    register,
    handleSubmit,
    control,
    submissionId,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm({
    defaultValues: {
      "name": "",
      "email": "",
      "course": "",
      "profile-img": "",
      "content": []
    }
  });
  const content = useFieldArray({ 
    control, 
    name: "content"
  });
  const onSubmit = (data) => console.log(data);
  
  if (submissionId) {
    return <p>Your submission has been sent! </p>;
  }

  const Urll = React.forwardRef(({ onChange, onBlur, name, check, label }, ref) => (
    <>
      <label>{label}</label>
      <input type="checkbox" key={'noe'} name={check} ref={ref} onChange={onChange} onBlur={onBlur}></input>
      <input type="url" key={'linked'} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      </input>
    </>
  ));
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Project Submission</h1>
      
      <div>
        <label>
          <span>Full name</span>
          <input
            {...register("name")}
            placeholder="Full name"
            type="text"
          />
        </label>
      </div>

      <div>
        <label>
          <span>Student Email</span>
          <input
            {...register("email", {
              required: true,
            })}
            aria-invalid={errors["email"] ? "true" : "false"}
            placeholder="Your @stud.noroff email"
            type="email"
          />
        </label>
        {errors["email"] && <p role="alert">{errors["email"]?.message}</p>}
      </div>

      <div>
        <label>
          <span>Course</span>
          <select
            {...register("course", {
              required: "Please select a course from the list",
            })}
            aria-invalid={errors["courset"] ? "true" : "false"}
          >
            <option value="Graphic Design">Graphic Design</option>
            <option value="Frontend">Frontend</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>
          {errors["what-s-your-project-about"] && <p role="alert">{errors["what-s-your-project-about"]?.message}</p>}
        </label>
      </div>
      
      <Urll label="Name" key={'link'} {...register("name")} />

     
      <div>
        <label>
          <span>Profile Image</span>
          <input
            {...register("profile-img", {
              required: "Please upload an image",
            })}
            aria-invalid={errors["profile-img"] ? "true" : "false"}
            type="file"
          />
        </label>
        {errors["profile-img"] && <p role="alert">{errors["profile-img"]?.message}</p>}
      </div>

      <div>
        {content.fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div>
                <label>
                  <span>Github</span>
                  <input
                    {...register(`content.${index}.github`)}
                    placeholder="URL to your GitHub profile"
                    type="url"
                  />
                </label>
              </div>
      
              <div>
                <label>
                  <span>LinkedIn</span>
                  <input
                    {...register(`content.${index}.linked-in`)}
                    placeholder="Link to your LinkedIn profile"
                    type="url"
                  />
                </label>
              </div>
      
              <div>
                <label>
                  <span>Portfolio</span>
                  <input
                    {...register(`content.${index}.portfolio`)}
                    placeholder="Link to your portfolio or personal site"
                    type="text"
                  />
                </label>
              </div>
      
              <div>
                <label>
                  <span>Figma</span>
                  <input
                    {...register(`content.${index}.figma`)}
                    placeholder="Link to your Figma profile or favourite project"
                    type="text"
                  />
                </label>
              </div>
      
              <div>
                <label>
                  <span>Instagram</span>
                  <input
                    {...register(`content.${index}.instagram`)}
                    placeholder="Link to your or an Instagram site you want to portray"
                    type="text"
                  />
                </label>
              </div>
      
              <div>
                <label>
                  <span>Other</span>
                  <input
                    {...register(`content.${index}.other`)}
                    placeholder="Other links you want to showcase"
                    type="text"
                  />
                </label>
              </div>
              <button type="button" onClick={() => content.remove(index)}>Delete</button>
            </div>
          )
        })}
        <button 
          type="button" 
          onClick={(event) => {
            content.append({
              ["github"]: "",
              ["linked-in"]: "",
              ["portfolio"]: "",
              ["figma"]: "",
              ["instagram"]: "",
              ["other"]: "",
            });handleClick(event);}
          }
        >
          Append
        </button>
      </div>

      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
}

export default Form;