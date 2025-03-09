"use client";

import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { useForm } from "react-hook-form";
import {registerSchema, RegisterSchema} from "@/lib/schemas/RegisterSchema"
import { zodResolver} from "@hookform/resolvers/zod"
import Image from "next/image";



export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema)
  });
  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
    
  };
  //   const onSubmit = (data1:"1") => {console.log(data1)};
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-300 flex justify-center items-center">
      <Card className="w-2/5 mx-auto">
        <div className="flex justify-center bg-pink-300">
            <Image 
                src="/cupidle_soft_pink.png" 
                alt="Cupidle Logo"
                width={200} 
                height={50} 
                className="object-contain"
              />
              </div>
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-default">
            <div className="text-3xl font-bold">
              <h1 className="text-neutral-900">Register to Cupidle</h1>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
            <Input
                defaultValue=""
                label="Name"
                variant="bordered"
                className="text-neutral-900 font-bold"
                {...register("Name")}
                isInvalid={!!errors.Name}
                errorMessage={errors.Name?.message as string}
              />
              <Input
                defaultValue=""
                label="Email"
                variant="bordered"
                className="text-neutral-900 font-bold"
                {...register("Email")}
                isInvalid={!!errors.Email}
                errorMessage={errors.Email?.message as string}
              />
<div className="relative">
              <Input
                defaultValue=""
                label="Password"
                variant="bordered"
                type={showPassword ? "text" : "password"}
                className="text-neutral-900 font-bold"
                {...register("Password")}
                isInvalid={!!errors.Password}
                errorMessage={errors.Password?.message as string}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Button color="default" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}



