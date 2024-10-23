"use client"
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";

const schema = yup.object().shape({
        firstName:yup.string().required().min(3),
        lastName: yup.string().required().min(3),
        phone: yup.string().required().max(17).min(11),
        address: yup.string().required().min(12).max(300)    
});


export default function UpdateProfile () {

    const { handleSubmit,handleChange,handleBlur,errors,values,touched} = useFormik({
        initialValues: {firstName:"", lastName:"", phone:"", address:""},
        onSubmit: () =>{
            console.log("form was submitted");
            
        },
        validationSchema: schema
    })
    console.log(values.firstName);
    

    return (
        <main className="min-h-screen flex justify-center px-2 md:px-16 lg:px-20 py-16 bg-gray-200">
           <div className="w-full md:w-[400px] p-4 rounded-md bg-gray-50">
                <blockquote className="flex items-center gap-2">
                    <FaUserEdit className="text-2xl" />
                    <span className="block text-2xl">update profile</span>
                </blockquote>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-3">
                        <TextField 
                        type="text"
                        variant="outlined"
                        id="firstName"
                        label="first name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg.akor"
                        className="w-full"
                        />
                        {touched.firstName && errors.firstName ? <span className="text-xs text-red-500">{errors.firstName}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField 
                        type="text"
                        variant="outlined"
                        id="lastName"
                        label="last name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg.akor"
                        className="w-full"
                        />
                        {touched.lastName && errors.lastName ? <span className="text-xs text-red-500">{errors.lastName}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField 
                        type="tel"
                        variant="outlined"
                        id="phone"
                        label="phone number"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg.akor"
                        className="w-full"
                        />
                        {touched.phone && errors.phone ? <span className="text-xs text-red-500">{errors.phone}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField
                        multiline
                        rows={4} 
                        type="text"
                        variant="outlined"
                        id="address"
                        label="address number"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg.akor"
                        className="w-full"
                        />
                        {touched.address && errors.address ? <span className="text-xs text-red-500">{errors.address}</span> : null}
                    </div>

                    <Button type="submit" variant="outlined">update profile</Button>
                </form>
           </div>
        </main>
    )
}