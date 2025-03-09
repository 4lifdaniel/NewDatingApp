"use client";

import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import {loginSchema, LoginSchemaAlif} from "@/lib/schemas/LoginSchema"
import { zodResolver} from "@hookform/resolvers/zod"



export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaAlif>({
    resolver: zodResolver(loginSchema)
  });
  const onSubmit = (data: LoginSchemaAlif) => {
    console.log(data);
    
  };
  //   const onSubmit = (data1:"1") => {console.log(data1)};
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Card className="w-2/5 mx-auto">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-default">
            <div className="text-3xl font-bold">
              <h1 className="text-neutral-900">Please login</h1>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                defaultValue=""
                label="Email"
                variant="bordered"
                className="text-neutral-900 font-bold"
                {...register("Email")}
                isInvalid={!!errors.Email}
                errorMessage={errors.Email?.message as string}
              />

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
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
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



