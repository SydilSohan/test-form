import MainForm from "@/components/forms/MainForm";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CarFront, CircleIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackButton from "./BackButton";
import { Main } from "next/document";

export default function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | null;
  };
}) {
  const view = searchParams.step;
  return (
    <main className="flex flex-col  row-start-2  sm:items-start px-8 py-4 sm:max-w-screen-md mx-auto lg:max-w-screen-xl">
      <Image
        src={"/logo.png"}
        alt="logo"
        height={30}
        width={140}
        className="object-contain hidden lg:block fixed top-4 left-3"
      />
      <div className="flex justify-between items-center gap-8 flex-1 w-full lg:hidden">
        <BackButton />
        <Progress className="h-4 w-full" value={!view ? 33 : 66} />
      </div>
      {!view && !searchParams.vehicle ? (
        <MainForm />
      ) : (
        <Vehicle selectedVehicle={searchParams.vehicle || ""} />
      )}
    </main>
  );
}

function Vehicle({ selectedVehicle }: { selectedVehicle?: string }) {
  function fetchMockData() {
    return {
      vehicles: [
        {
          id: 1,
          make: "Tesla",
          model: "Model S",
          year: 2015,
          vin: "1HGBH41JXMN109186",
        },
        {
          id: 2,
          make: "Tesla",
          model: "Model Y",
          year: 2021,
          vin: "1HGBH41JXMN109180",
        },
      ],
    };
  }

  const vehicleData = fetchMockData();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between max-w-screen-md mx-auto  lg:items-center lg:pt-40 lg:gap-40">
      <div className="lg:w-1/2">
        <Button
          className="flex gap-2 justify-start h-14 w-[190px] text-xl text-yellow-200 mt-4 uppercase"
          style={{ borderRadius: "50px" }}
        >
          <CarFront />
          <h1> Vehicle </h1>
        </Button>

        <h2 className="font-bold text-3xl my-4">
          Select your vehicle for free health check.
        </h2>
      </div>
      <div className="flex flex-col gap-2 w-full flex-1">
        {vehicleData.vehicles.map((vehicle) => (
          <Link
            key={vehicle.id}
            scroll={false}
            href={"/?" + new URLSearchParams({ vehicle: vehicle.vin })}
          >
            <div
              className={`flex gap-4 items-center bg-white p-4 rounded-xl  justify-between w-full  ease-linear transition-all duration-200 ${
                selectedVehicle === vehicle.vin
                  ? "opacity-100 border-1 border-solid border-primary"
                  : "opacity-50"
              }`}
            >
              <div className="">
                <h3 className="font-bold text-sm">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-xs text-slate-400"> {vehicle.vin}</p>
              </div>
              <div>
                {selectedVehicle === vehicle.vin ? (
                  <CircleIcon />
                ) : (
                  <ArrowRight />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="hidden lg:flex fixed bottom-8 w-[95vw] mx-auto items-center  gap-2 m-4 left-4 ">
      <BackButton />
      <Progress className="h-4 w-full" value={33} />
      {children}
    </div>
  );
}
