"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { User } from "lucide-react";

type User = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const Login = () => {
  const [tab, setTab] = useState("signIn");
  const { register, handleSubmit, reset } = useForm<User>({
    shouldUnregister: true,
  });
  const onSubmit = (data: User) => {
    alert("New user added : " + JSON.stringify(data, null, 2));
    reset();
  };
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-5">
      <div className="mx-auto w-full max-w-md py-5 px-10 border border-slate-40 rounded-lg py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4">
            <Tabs
              defaultValue="signIn"
              className="w-full"
              onValueChange={(e) => setTab(e)}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signIn">Sign In</TabsTrigger>
                <TabsTrigger value="signUp">Sign Up</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Separator />
          <FieldGroup className="pt-4">
            <FieldSet>
              <FieldLegend className="mx-auto">
                {tab === "signIn" ? "Login" : "Create new Account"}
              </FieldLegend>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    type="text"
                    {...register("name")}
                    placeholder="Bhavik Sapat"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder="bhavik@gmail.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    type="password"
                    {...register("password")}
                    placeholder="•••••••"
                    required
                  />
                  {/* <FieldDescription>Enter correct password.</FieldDescription> */}
                </Field>
                {tab === "signIn" ? null : (
                  <Field>
                    <FieldLabel>Confirm Password</FieldLabel>
                    <Input
                      type="password"
                      {...register("confirmPassword")}
                      placeholder="•••••••"
                      required
                    />
                    {/* <FieldDescription>Enter correct password.</FieldDescription> */}
                  </Field>
                )}
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />

            <Field orientation="horizontal" className="justify-center">
              <Button type="submit" className="px-10">
                {tab === "signIn" ? "Sign In" : "Sign Up"}
              </Button>
              <Button variant="outline" type="button" className="px-10">
                Clear
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default Login;

// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldSet,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import "../../App.css";
// import { Button } from "@/components/ui/button";
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { UserSchema1 } from "@/types/schema";
// import { z } from "zod";
// import { useState } from "react";
// // import { Link } from "react-router-dom";
// import { Dashboard } from "./Dashboard";
// import { MyContext } from "@/context/MyContext";

// type FormValue = z.infer<typeof UserSchema1>;

// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormValue>({ resolver: zodResolver(UserSchema1) });

//   const [isClicked, setIsClicked] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const onSubmit: SubmitHandler<FormValue> = (data) => {
//     setName(data.username);
//     setEmail(data.email);
//     console.log(`New Entry : ${JSON.stringify(data, null, 2)}`);
//     setIsClicked(true);
//     alert(
//       `New account created\nUsername : ${data["username"]}\nEmail : ${data["email"]}`,
//     );
//     reset();
//   };

//   if (isClicked) {
//     return (
//       <MyContext.Provider value={{ name, email }}>
//         <Dashboard />
//       </MyContext.Provider>
//     );
//   }

//   return (
//     <div className="flex-1 w-full flex items-center justify-center">
//       <div className="w-full max-w-xs">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FieldSet>
//             <FieldGroup>
//               <h2 className="text-2xl font-bold text-center">
//                 Create an Account
//               </h2>
//               <Field>
//                 <FieldLabel>Username</FieldLabel>
//                 <Input
//                   {...register("username")}
//                   type="text"
//                   placeholder="Bhavik Sapat"
//                 />
//                 <FieldDescription>
//                   Choose a unique alphanumeric username.
//                 </FieldDescription>
//                 {errors.username && (
//                   <FieldDescription className="error-msg">
//                     {errors.username.message}
//                   </FieldDescription>
//                 )}
//               </Field>
//               <Field>
//                 <FieldLabel>Email</FieldLabel>
//                 <Input
//                   {...register("email")}
//                   type="email"
//                   placeholder="bhavik@gmail.com"
//                 />
//                 {errors.email && (
//                   <FieldDescription className="error-msg">
//                     {errors.email.message}
//                   </FieldDescription>
//                 )}
//               </Field>
//               <Field>
//                 <FieldLabel>Password</FieldLabel>
//                 <FieldDescription>
//                   Must be at least 8 characters long.
//                 </FieldDescription>
//                 <Input
//                   {...register("password")}
//                   type="password"
//                   placeholder="••••••••"
//                 />
//                 {errors.password && (
//                   <FieldDescription className="error-msg">
//                     {errors.password.message}
//                   </FieldDescription>
//                 )}
//               </Field>
//               <Field>
//                 <FieldLabel>Confirm Password</FieldLabel>
//                 <Input
//                   {...register("confirmPassword")}
//                   type="password"
//                   placeholder="••••••••"
//                 />
//                 {errors.confirmPassword && (
//                   <FieldDescription className="error-msg">
//                     {errors.confirmPassword.message}
//                   </FieldDescription>
//                 )}
//               </Field>
//               <Button type="submit">Submit</Button>
//             </FieldGroup>
//           </FieldSet>
//         </form>
//       </div>
//     </div>
//   );
// }
