// import React from "react";
// import { Formik, Form, ErrorMessage, Field, FieldArray } from "formik";
// import * as Yup from "yup";
// import "./Teacherform.css";
// import Button from "@material-ui/core/Button";
// import SaveIcon from "@material-ui/icons/Save";

// const TeacherForm = () => {
//   const initialValues = {
//     teacherId: "",
//     teacherName: "",
//     teacherPhoto: "",
//     teacherPhone: "",
//     teacherAddress: "",
//     altName: "",
//     altPhone: "",
//     altRelation: "",
//     classes: [
//       {
//         classId: "",
//         className: "",
//         subjects: [{ subjectId: "", subjectName: "" }],
//       },
//     ],
//   };
//   const validationSchema = Yup.object({
//     teacherId: Yup.string().required("required"),
//     teacherName: Yup.string().required("required"),
//     teacherPhoto: Yup.string().required("required"),
//     teacherPhone: Yup.number().required("required"),
//     teacherAddress: Yup.string().required("required"),
//     altName: Yup.string().required("required"),
//     altPhone: Yup.number().required("required"),
//     altRelation: Yup.string().required("required"),
//     classes: Yup.array(
//       Yup.object({
//         classId: Yup.string().required("required"),
//         className: Yup.string().required("required"),
//         subjects: Yup.array(
//           Yup.object({
//             subjectId: Yup.string().required("required"),
//             subjectName: Yup.string().required("required"),
//           })
//         ),
//       })
//     ),
//   });

//   const onSubmit = (values) => {
//     console.log("values", values);
//   };
//   return (
//     <div className="teacherForm">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         <Form>
//           <div className="formField">
//             <label htmlFor="teacherId">Teacher ID </label>
//             <Field type="text" name="teacherId" id="teacherId" />
//             <ErrorMessage name="teacherId">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="teacherName">Teacher Name </label>
//             <Field type="text" name="teacherName" id="teacherName" />
//             <ErrorMessage name="teacherName">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="teacherPhoto">Teacher Photo </label>
//             {/* <Field type="text" name="teacherPhoto" id="teacherPhoto" /> */}
//             <Field type="file" name="teacherPhoto" id="teacherPhoto" />
//             <ErrorMessage name="teacherPhoto">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="teacherPhone">Teacher Phone </label>
//             <Field type="number" name="teacherPhone" id="teacherPhone" />
//             <ErrorMessage name="teacherPhone">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="teacherAddress">Teacher Address </label>
//             <Field type="text" name="teacherAddress" id="teacherAddress" />
//             <ErrorMessage name="teacherAddress">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="altName">Emergency Contact Person </label>
//             <Field type="text" name="altName" id="altName" />
//             <ErrorMessage name="altName">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="altPhone">Emergency Contact Number </label>
//             <Field type="number" name="altPhone" id="altPhone" />
//             <ErrorMessage name="altPhone">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div className="formField">
//             <label htmlFor="altRelation">Emergency Contact Relation </label>
//             <Field type="text" name="altRelation" id="altRelation" />
//             <ErrorMessage name="altRelation">
//               {(error) => {
//                 return <small className="red">{error}</small>;
//               }}
//             </ErrorMessage>
//           </div>

//           <div>
//             <label htmlFor="classes">Class </label>
//             <FieldArray name="classes" id="classes">
//               {(renderProps) => {
//                 const { push, remove, form } = renderProps;
//                 const { values } = form;
//                 const { classes } = values;
//                 console.log("....", classes);
//                 return (
//                   <div>
//                     {classes.map((singleClass, index) => {
//                       return (
//                         <div key={index}>
//                           <div className="formField">
//                             <label htmlFor={`classes[${index}].classId`}>
//                               Class ID{" "}
//                             </label>
//                             <Field
//                               type="text"
//                               name={`classes[${index}].classId`}
//                             />
//                             <ErrorMessage name={`classes[${index}].classId`}>
//                               {(error) => {
//                                 return <small className="red">{error}</small>;
//                               }}
//                             </ErrorMessage>
//                           </div>
//                           <div className="formField">
//                             <label htmlFor={`classes[${index}].className`}>
//                               Class Name{" "}
//                             </label>
//                             <Field
//                               type="text"
//                               name={`classes[${index}].className`}
//                             />
//                             <ErrorMessage name={`classes[${index}].className`}>
//                               {(error) => {
//                                 return <small className="red">{error}</small>;
//                               }}
//                             </ErrorMessage>
//                           </div>

//                           <FieldArray name={`classes[${index}].subjects`}>
//                             {(props) => {
//                               //   console.log(props);
//                               const { push, remove, form } = props;
//                               const { values } = form;
//                               const { classes } = values;

//                               return classes[index].subjects.map(
//                                 (subject, innerIndex) => {
//                                   return (
//                                     <div key={innerIndex}>
//                                       <div className="formField">
//                                         <label
//                                           htmlFor={`classes[${index}].subjects[${innerIndex}]`}
//                                         >
//                                           Subject ID
//                                         </label>
//                                         <Field
//                                           name={`classes[${index}].subjects[${innerIndex}].subjectId`}
//                                           id={`classes[${index}].subjects[${innerIndex}].subjectId`}
//                                         />
//                                         <ErrorMessage
//                                           name={`classes[${index}].subjects[${innerIndex}].subjectId`}
//                                         >
//                                           {(error) => {
//                                             return (
//                                               <small className="red">
//                                                 {error}
//                                               </small>
//                                             );
//                                           }}
//                                         </ErrorMessage>
//                                       </div>
//                                       <div className="formField">
//                                         <label
//                                           htmlFor={`classes[${index}].subjects[${innerIndex}].subjectName`}
//                                         >
//                                           Subject Name
//                                         </label>
//                                         <Field
//                                           name={`classes[${index}].subjects[${innerIndex}].subjectName`}
//                                         />
//                                         <ErrorMessage
//                                           name={`classes[${index}].subjects[${innerIndex}].subjectName`}
//                                         >
//                                           {(error) => {
//                                             return (
//                                               <small className="red">
//                                                 {error}
//                                               </small>
//                                             );
//                                           }}
//                                         </ErrorMessage>
//                                       </div>
//                                       <Button
//                                         variant="contained"
//                                         color="secondary"
//                                         type="button"
//                                         onClick={() =>
//                                           push({
//                                             subjectId: "",
//                                             subjectName: "",
//                                           })
//                                         }
//                                       >
//                                         Add Subject
//                                       </Button>

//                                       <Button
//                                         variant="contained"
//                                         color="secondary"
//                                         type="button"
//                                         onClick={() => remove(innerIndex)}
//                                       >
//                                         Remove Subject
//                                       </Button>
//                                     </div>
//                                   );
//                                 }
//                               );
//                             }}
//                           </FieldArray>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             type="button"
//                             onClick={() =>
//                               push({
//                                 classId: "",
//                                 className: "",
//                                 subjects: [{ subjectId: "", subjectName: "" }],
//                               })
//                             }
//                           >
//                             Add Class
//                           </Button>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             button="button"
//                             onClick={() => remove(index)}
//                           >
//                             Remove Class
//                           </Button>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 );
//               }}
//             </FieldArray>
//           </div>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             startIcon={<SaveIcon />}
//             type="submit"
//           >
//             Save
//           </Button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default TeacherForm;

import React from "react";
import {
  Formik,
  Form,
  ErrorMessage,
  Field,
  FieldArray,
  setFieldValue,
} from "formik";
import * as Yup from "yup";
import "./Teacherform.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const TeacherForm = () => {
  const initialValues = {
    teacherId: "",
    teacherName: "",
    teacherPhoto: "",
    teacherPhone: "",
    teacherAddress: "",
    altName: "",
    altPhone: "",
    altRelation: "",
    classes: [
      {
        classId: "",
        className: "",
        subjects: [{ subjectId: "", subjectName: "" }],
      },
    ],
  };
  const validationSchema = Yup.object({
    teacherId: Yup.string().required("required"),
    teacherName: Yup.string().required("required"),
    teacherPhoto: Yup.mixed().required("required"),
    teacherPhone: Yup.number().required("required"),
    teacherAddress: Yup.string().required("required"),
    altName: Yup.string().required("required"),
    altPhone: Yup.number().required("required"),
    altRelation: Yup.string().required("required"),
    classes: Yup.array(
      Yup.object({
        classId: Yup.string().required("required"),
        className: Yup.string().required("required"),
        subjects: Yup.array(
          Yup.object({
            subjectId: Yup.string().required("required"),
            subjectName: Yup.string().required("required"),
          })
        ),
      })
    ),
  });

  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <div className="teacherForm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="formField">
              <label htmlFor="teacherId">Teacher ID </label>
              <Field type="text" name="teacherId" id="teacherId" />
              <ErrorMessage name="teacherId">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="teacherName">Teacher Name </label>
              <Field type="text" name="teacherName" id="teacherName" />
              <ErrorMessage name="teacherName">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="teacherPhoto">Teacher Photo </label>
              {/* <Field type="text" name="teacherPhoto" id="teacherPhoto" /> */}
              <input
                type="file"
                name="teacherPhoto"
                id="teacherPhoto"
                onChange={(e) =>
                  setFieldValue("teacherPhoto", e.target.files[0])
                }
              />
              <ErrorMessage name="teacherPhoto">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="teacherPhone">Teacher Phone </label>
              <Field type="number" name="teacherPhone" id="teacherPhone" />
              <ErrorMessage name="teacherPhone">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="teacherAddress">Teacher Address </label>
              <Field type="text" name="teacherAddress" id="teacherAddress" />
              <ErrorMessage name="teacherAddress">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="altName">Emergency Contact Person </label>
              <Field type="text" name="altName" id="altName" />
              <ErrorMessage name="altName">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="altPhone">Emergency Contact Number </label>
              <Field type="number" name="altPhone" id="altPhone" />
              <ErrorMessage name="altPhone">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div className="formField">
              <label htmlFor="altRelation">Emergency Contact Relation </label>
              <Field type="text" name="altRelation" id="altRelation" />
              <ErrorMessage name="altRelation">
                {(error) => {
                  return <small className="red">{error}</small>;
                }}
              </ErrorMessage>
            </div>

            <div>
              <label htmlFor="classes">Class </label>
              <FieldArray name="classes" id="classes">
                {(renderProps) => {
                  const { push, remove, form } = renderProps;
                  const { values } = form;
                  const { classes } = values;

                  return (
                    <div>
                      {classes.map((singleClass, index) => {
                        return (
                          <div key={index}>
                            <div className="formField">
                              <label htmlFor={`classes[${index}].classId`}>
                                Class ID{" "}
                              </label>
                              <Field
                                type="text"
                                name={`classes[${index}].classId`}
                              />
                              <ErrorMessage name={`classes[${index}].classId`}>
                                {(error) => {
                                  return <small className="red">{error}</small>;
                                }}
                              </ErrorMessage>
                            </div>
                            <div className="formField">
                              <label htmlFor={`classes[${index}].className`}>
                                Class Name{" "}
                              </label>
                              <Field
                                type="text"
                                name={`classes[${index}].className`}
                              />
                              <ErrorMessage
                                name={`classes[${index}].className`}
                              >
                                {(error) => {
                                  return <small className="red">{error}</small>;
                                }}
                              </ErrorMessage>
                            </div>

                            <FieldArray name={`classes[${index}].subjects`}>
                              {(props) => {
                                //   console.log(props);
                                const { push, remove, form } = props;
                                const { values } = form;
                                const { classes } = values;

                                return classes[index].subjects.map(
                                  (subject, innerIndex) => {
                                    return (
                                      <div key={innerIndex}>
                                        <div className="formField">
                                          <label
                                            htmlFor={`classes[${index}].subjects[${innerIndex}]`}
                                          >
                                            Subject ID
                                          </label>
                                          <Field
                                            name={`classes[${index}].subjects[${innerIndex}].subjectId`}
                                            id={`classes[${index}].subjects[${innerIndex}].subjectId`}
                                          />
                                          <ErrorMessage
                                            name={`classes[${index}].subjects[${innerIndex}].subjectId`}
                                          >
                                            {(error) => {
                                              return (
                                                <small className="red">
                                                  {error}
                                                </small>
                                              );
                                            }}
                                          </ErrorMessage>
                                        </div>
                                        <div className="formField">
                                          <label
                                            htmlFor={`classes[${index}].subjects[${innerIndex}].subjectName`}
                                          >
                                            Subject Name
                                          </label>
                                          <Field
                                            name={`classes[${index}].subjects[${innerIndex}].subjectName`}
                                          />
                                          <ErrorMessage
                                            name={`classes[${index}].subjects[${innerIndex}].subjectName`}
                                          >
                                            {(error) => {
                                              return (
                                                <small className="red">
                                                  {error}
                                                </small>
                                              );
                                            }}
                                          </ErrorMessage>
                                        </div>
                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          type="button"
                                          onClick={() =>
                                            push({
                                              subjectId: "",
                                              subjectName: "",
                                            })
                                          }
                                        >
                                          Add Subject
                                        </Button>

                                        <Button
                                          variant="contained"
                                          color="secondary"
                                          type="button"
                                          onClick={() => remove(innerIndex)}
                                        >
                                          Remove Subject
                                        </Button>
                                      </div>
                                    );
                                  }
                                );
                              }}
                            </FieldArray>
                            <Button
                              variant="contained"
                              color="primary"
                              type="button"
                              onClick={() =>
                                push({
                                  classId: "",
                                  className: "",
                                  subjects: [
                                    { subjectId: "", subjectName: "" },
                                  ],
                                })
                              }
                            >
                              Add Class
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              button="button"
                              onClick={() => remove(index)}
                            >
                              Remove Class
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              type="submit"
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TeacherForm;
