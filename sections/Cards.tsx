"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2, Globe, Plus } from "lucide-react";
import { useState } from "react";
import { pass_data } from ".././app/data";

export default function Cards() {
  const [show, setShow] = useState<number | null>(null);
  return (
    <>
      <div className="px-4">
        <div className="flex">
          <div className="head  text-xl text-left py-5 font-bold uppercase">
            <h1>Password Cards</h1>
          </div>
          <div className="my-auto ml-auto px-5">
            <Button variant={"secondary"} className="px-5 py-2">
              Search
              <Plus className="h-5 w-5 text-primary" />
            </Button>
            <Button variant={"secondary"} className="px-5 py-2">
              Add
              <Plus className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7  ">
          {pass_data.map((item, index) => (
            <Card
              key={index}
              className="group rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md "
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new URL(item.link).hostname}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShow(show === index ? null : index)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-1 font-medium">{item.email}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Password
                    </p>
                    <p className="mt-1 font-mono tracking-widest">
                      {show === index
                        ? item.pass
                        : "•".repeat(item.pass.length)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
