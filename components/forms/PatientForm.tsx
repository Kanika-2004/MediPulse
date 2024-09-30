"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patient.actions"

import user from "../../public/assets/icons/user.svg"
import email from "../../public/assets/icons/email.svg"

import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import Customformfield from "../Customformfield"
import SubmitButton from "../SubmitButton"
import { useRouter } from 'next/navigation';


export enum FormFieldType{
  INPUT='input',
  TEXTAREA='textarea',
  PHONE_INPUT='phoneInput',
  CHECKBOX='checkbox',
  DATE_PICKER= 'datePicker',
  SELECT= 'select',
  SKELETON='skeleton'
}
 

 
const PatientForm=()=>{
  const router = useRouter()
  const [isLoading, setisLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setisLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setisLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>


       <Customformfield
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc={user}
          iconAlt="user"
       />

      <Customformfield
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="email"
          placeholder="johndoe@gmail.com"
          iconSrc={email}
          iconAlt="email"
       />

<Customformfield
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          
       />
        
       
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm