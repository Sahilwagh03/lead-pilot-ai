"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import AICallSimulation from "@/components/dashboard/ai-call-simulation";

export default function DemoForm() {
  const [calling, setCalling] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");

  const endCall = () => {
    setCalling(false);
    setName("");
    setPhone("");
    setLanguage("");
  }

  return (
    <>
      {calling ? (
        <AICallSimulation endCall={endCall} />
      ) : (
        <div className="min-h-[84vh] max-w-md mx-auto flex justify-center items-center rounded-2xl shadow-sm">
          <div className="w-full h-full space-y-5">
            <h2 className="text-2xl font-semibold text-center">Demo Call</h2>
            {/* Name */}
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-9"
              />
            </div>

            {/* Phone Number with +91 */}
            <div className="space-y-2">
              <Label>Phone Number</Label>

              <div className="flex">
                {/* Prefix */}
                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-sm text-muted-foreground">
                  +91
                </div>

                {/* Input */}
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  className="rounded-l-none h-9"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Language Select */}
            <div className="space-y-2">
              <Label>Language</Label>

              <Select onValueChange={setLanguage}>
                <SelectTrigger className="w-full h-9!">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="marathi">Marathi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit */}
            <Button
              className="w-full"
              disabled={!name || !phone || !language}
              onClick={() => {
                console.log({ name, phone, language });
                setCalling(true);
              }}
            >
              Start Demo Call
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
