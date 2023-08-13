"use client";

import { useEffect, useState } from "react";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export default function ImageUpload(props: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col w-full space-y-4">
      <CldUploadButton
        options={{
          maxFiles: 1,
        }}
        uploadPreset="n6njgyif"
        onUpload={(result: any) => props.onChange(result.info.secure_url)}
      >
        <div className="flex flex-col justify-center items-center space-y-2 p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition">
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="Upload"
              src={props.value || "/placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
}
