import Image from "next/image";
import { redirect } from "next/navigation";

import { getUser } from "@/lib/actions/patient.actions";

import RegisterForm from "@/components/forms/RegisterForm";
// import { getPatient, getUser } from "@/lib/actions/patient.actions";

import logo from '../../../../public/assets/icons/logo-full.svg'
import registericon from '../../../../public/assets/images/register-img.png'

const Register = async ({ params: { userid } }: SearchParamProps) => {
  const user = await getUser(userid);
//   const patient = await getPatient(userid);

//   if (patient) redirect(`/patients/${userid}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={logo}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src={registericon}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;