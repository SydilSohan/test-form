"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const BackButton = (props: Props) => {
  const router = useRouter();

  return (
    <ArrowLeft
      type="button"
      onClick={() => router.back()}
      size={12}
      className="h-10 w-10"
    />
  );
};

export default BackButton;
