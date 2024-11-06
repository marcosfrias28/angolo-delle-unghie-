import AdminAppointments from "@/components/appointments/admin-appointments";
import { getUser } from "@/lib/db/queries";
import { User } from "@/lib/db/schema";
import { redirect } from "next/navigation";

async function App() {
  const user = (await getUser()) as User;

  if (!user) {
    redirect("/login");
  }

  return <AdminAppointments user={user} />;
}

export default App;
