"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { UploadCloud, FileText } from "lucide-react";

export default function CreateCampaignModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const [campaignName, setCampaignName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // 🔥 Reset function
  const resetForm = () => {
    setCampaignName("");
    setFile(null);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    multiple: false,
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);

        // 💡 When closing → reset
        if (!val) {
          resetForm();
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-lg rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Create New Campaign</DialogTitle>
        </DialogHeader>

        {/* Campaign Name */}
        <div className="space-y-2">
          <Label>Campaign Name</Label>
          <Input
            placeholder="Enter campaign name"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label>Upload Excel File</Label>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition
              ${
                isDragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-muted-foreground/25"
              }
            `}
          >
            <input {...getInputProps()} />

            <div className="flex flex-col items-center gap-2">
              <UploadCloud className="h-8 w-8 text-muted-foreground" />

              {file ? (
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4" />
                  <span>{file.name}</span>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Drag & drop your Excel file here, or click to browse
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="p-3">
          <Button
            className="w-full cursor-pointer"
            disabled={!campaignName || !file}
            onClick={() => {
              console.log({ campaignName, file });
              resetForm();
              setOpen(false);
            }}
          >
            Start Reaching Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}