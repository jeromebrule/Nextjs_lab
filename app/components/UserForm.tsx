"use client";

import {useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
  id: z.number(),
  userName: z.string().min(3),
  userEmail: z.string().email(),
  userPhone: z.string().min(10),
  userWebsite: z.string().url(),
  userCompanyName: z.string(),
});

interface ApiMessage {
  status: any;
}

interface Props {
  user: FormData;
}

type FormData = z.infer<typeof schema>;

const UserForm = ({user}: Props) => {
  const [status, setStatus] = useState<any>();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: user,
  });

  const onSubmit = (data: FieldValues) =>
    fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then(function (response) {
        setStatus(response.status);
        return response.json();
      })
      .catch(function (error) {
        console.log(error);
      });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
            <span className="label-text-alt">*</span>
          </label>
          <input
            {...register("userName")}
            id="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
            <span className="label-text-alt">*</span>
          </label>
          <input
            {...register("userEmail")}
            id="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.userEmail && <p>{errors.userEmail.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="phone" className="label">
            <span className="label-text">Phone Number</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            {...register("userPhone")}
            id="phone"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.userPhone && <p>{errors.userPhone.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="website" className="label">
            <span className="label-text">Website</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            {...register("userWebsite")}
            id="website"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.userWebsite && <p>{errors.userWebsite.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="companyName" className="label">
            <span className="label-text">Company Name</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            {...register("userCompanyName")}
            id="companyName"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {user.id ? "Update" : "Save"}
        </button>
        {status === 200 && (
          <div className="toast toast-end">
            <div className="alert alert-success">
              <span>Contact Updated.</span>
            </div>
          </div>
        )}
        {status === 400 && (
          <div className="toast toast-end">
            <div className="alert alert-error">
              <span>Please review the form.</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default UserForm;
