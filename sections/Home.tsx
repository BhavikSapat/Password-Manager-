"use client";

import { useMemo, useState } from "react";
import { pass_data } from "@/app/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  ShieldCheck,
  CreditCard,
  Clock3,
  Search,
  Plus,
  Download,
  Upload,
  Lock,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
} from "recharts";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8 p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>

          <p className="text-muted-foreground mt-2">
            Manage your passwords securely from one place.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Total Cards</CardTitle>

            <CreditCard />
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">{pass_data.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Security</CardTitle>

            <ShieldCheck />
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">92%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Last Login</CardTitle>

            <Clock3 />
          </CardHeader>

          <CardContent>
            <p className="text-xl font-semibold">Today</p>

            <p className="text-muted-foreground">10:45 PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Protected</CardTitle>

            <Lock />
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">{pass_data.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Tips</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>✅ Use unique passwords</li>

                <li>✅ Enable Two-Factor Authentication</li>

                <li>✅ Update passwords regularly</li>

                <li>✅ Never share passwords</li>

                <li>✅ Use strong combinations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div></div>
      </div>
    </div>
  );
} // "use client";

// import Image from "next/image";
// import { pass_data } from ".././app/data";
// import { FileCodeIcon } from "lucide-react";
// import {
//   Attachment,
//   AttachmentActions,
//   AttachmentContent,
//   AttachmentDescription,
//   AttachmentGroup,
//   AttachmentMedia,
//   AttachmentTitle,
// } from "@/components/ui/attachment";
// import { Bar, BarChart } from "recharts";

// import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
// export default function Home() {
//   return (
//     <div className="flex">
//       <div className="p-8 mx-auto">
//         <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
//         <AttachmentDemo />
//       </div>
//       <div className="my-auto p-10 border border-3 rounded-lg h-full">
//         <h1 className="font-bold">Statistics</h1>
//         <ChartExample />
//         <h3 className="font-bold text-center">Current cards status</h3>
//       </div>
//     </div>
//   );
// }

// const images = [
//   {
//     name: "Google",
//     meta: "Main · 840 KB",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXVeLWXRVMGe5uQjDyc4mfqYJ098iucGh1fY5fMgiMTtE6tAOi-iXJT0&s=10",
//     alt: "Workspace",
//   },
//   {
//     name: "Whatsapp",
//     meta: "XYZ · 1.1 MB",
//     src: "https://img.magnific.com/premium-vector/vector-whatsapp-social-media-logo_1093524-447.jpg?semt=ais_hybrid&w=740&q=80",
//     alt: "Desk",
//   },
//   {
//     name: "Instagram",
//     meta: "XYZ · 940 KB",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfDHLEBApWX-CTjkTIzClXtIv-pFgjTbgHaKrqL-d-vjsHrqh78EW6r1w&s=10",
//     alt: "Office",
//   },
//   {
//     name: "Twitter",
//     meta: "Main · 840 KB",
//     src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/960px-X_logo.jpg",
//     alt: "Workspace",
//   },
//   {
//     name: "Whatsapp",
//     meta: "XYZ · 1.1 MB",
//     src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
//     alt: "Desk",
//   },
//   {
//     name: "Instagram",
//     meta: "XYZ · 940 KB",
//     src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
//     alt: "Office",
//   },
// ];

// export function AttachmentDemo() {
//   return (
//     <div className=" flex w-full max-w-md flex-col gap-3 py-12">
//       <AttachmentGroup>
//         {images.map((image) => (
//           <Attachment key={image.name} orientation="vertical">
//             <AttachmentMedia variant="image">
//               {" "}
//               <img src={image.src} alt={image.name} />
//             </AttachmentMedia>
//             <AttachmentContent>
//               <AttachmentTitle>{image.name}</AttachmentTitle>
//               <AttachmentDescription>{image.meta}</AttachmentDescription>
//             </AttachmentContent>
//           </Attachment>
//         ))}
//       </AttachmentGroup>
//       <Attachment className="w-full">
//         <AttachmentMedia>
//           <FileCodeIcon />
//         </AttachmentMedia>
//         <AttachmentContent>
//           <AttachmentTitle>Total Cards</AttachmentTitle>
//           <AttachmentDescription>{pass_data.length}</AttachmentDescription>
//         </AttachmentContent>
//         <AttachmentActions></AttachmentActions>
//       </Attachment>
//       <Attachment className="w-full">
//         <AttachmentMedia>
//           <FileCodeIcon />
//         </AttachmentMedia>
//         <AttachmentContent>
//           <AttachmentTitle>Know how to save your passwords</AttachmentTitle>
//           <AttachmentDescription>With Pass Manager</AttachmentDescription>
//         </AttachmentContent>
//         <AttachmentActions></AttachmentActions>
//       </Attachment>
//       <Attachment className="w-full">
//         <AttachmentMedia>
//           <FileCodeIcon />
//         </AttachmentMedia>
//         <AttachmentContent>
//           <AttachmentTitle>Privacy Policy</AttachmentTitle>
//           <AttachmentDescription>With Pass Manager</AttachmentDescription>
//         </AttachmentContent>
//         <AttachmentActions></AttachmentActions>
//       </Attachment>
//     </div>
//   );
// }

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig;

// export function ChartExample() {
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//       <BarChart accessibilityLayer data={chartData}>
//         <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//         <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//       </BarChart>
//     </ChartContainer>
//   );
// }
