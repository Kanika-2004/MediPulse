import { Button } from "@/components/ui/button";
import Image from "next/image";

import logo from "../public/assets/icons/logo-full.svg"
import onboarding from "../public/assets/images/onboarding-img.png"
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import { PasskeyModal } from "@/components/PasskeyModal";

export default function Home({searchParams}: SearchParamProps) {

const isAdmin= searchParams.admin==='true'

 return(
  <div className="flex h-screen max-h-screen">
    {isAdmin && <PasskeyModal/>}
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">

        <Image 
          src={logo}
          height={1000}
          width={1000}
          alt="logo"
          className="mb-12 h-10 w-fit"
        />

        <PatientForm/>

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 CarePulse
          </p>

          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
          
        </div>

      </div>
    </section>

    <Image
      src={onboarding}
      alt="patien"
      height={1000}
      width={1000}
      className="side-img max-w-[50%]"
    />

  </div>
 );
}
