import * as yup from "yup"; 

const ValidationSchema = yup.object({

  
  name: yup
  .string()
  .min(3, "Must be at least 3 characters")
  .required("Name is required")
  .matches(
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/,
    "Cannot contain special characters or numbers"
  ),
    linkedin: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .url('Must be url')
      .matches('linkedin', 'Add linkedin'),
    
      github: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .url('Must be url')
      .matches('github', 'Add github'),
  
      portfolio: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .url('Must be url'),
  
      figma: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .url('Must be url')
      .matches('figma', 'Add figma'),
  
      other: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .url('Must be url'),

      course: yup
      .string()
      .required('Choose a course')
      .test('text_true', '', function(value){
          
          if(value === '-- Choose a course --'){
            console.log(value)
              // setting the error message using the value's length
              return this.createError({ message: `You have to pick a course` })
          }
          return true
        })
  })
 
  
  export default ValidationSchema;