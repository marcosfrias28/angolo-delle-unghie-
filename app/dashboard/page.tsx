import AdminAppointments from "@/components/appointments/admin-appointments";
import StandardHeading from "@/components/generic/standard-heading";
import AboutMe from "@/components/homepage/about-me";
import { SectionWrapper } from "@/components/wrapper/section-wrapper";
import { getUser } from "@/lib/db/queries";
import { User } from "@/lib/db/schema";
import { redirect } from "next/navigation";

async function App() {
  // const user = (await getUser()) as User;

  // if (!user) {
  //   redirect("/login");
  // }

  return (
    <SectionWrapper>
      <StandardHeading
        title="Conosciamoci meglio!"
        description="Prima di tutto, ti racconto di me."
        position="center"
      />
      <AboutMe />
    </SectionWrapper>
  );
}

export default App;
