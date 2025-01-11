import AdminDashboard from "@/components/dashboard/admin-dashboard";
import StandardHeading from "@/components/generic/standard-heading";
import { SectionWrapper } from "@/components/wrapper/section-wrapper";
import { getReviews } from "@/lib/actions/reviews";
import { Review, User } from "@/lib/db/schema";
import { redirect } from "next/navigation";
import { getUser } from "../(auth)/actions";
import CostumerDashboard from "@/components/dashboard/costumer-dashboard";

async function App() {
  const user = (await getUser()) as User;
  const reviews = (await getReviews()) as Review[];

  if (!user) {
    redirect("/login");
  }
  const isAdmin = user.role === "admin";
  const userReviews = reviews.filter((rev) => rev.user_id === user.id);

  return (
    <SectionWrapper>
      <StandardHeading
        title={
          isAdmin
            ? "Pannello di Amministrazione - Recensioni"
            : "Le tue recensioni"
        }
        description={
          isAdmin
            ? "Questo pannello ti permette di visualizzare e gestire le recensioni dei tuoi clienti."
            : "Visualizza e gestisci le recensioni lasciate"
        }
        position="center"
      />

      {isAdmin ? (
        <AdminDashboard reviews={reviews} />
      ) : (
        <CostumerDashboard initialReviews={userReviews} />
      )}
    </SectionWrapper>
  );
}

export default App;
