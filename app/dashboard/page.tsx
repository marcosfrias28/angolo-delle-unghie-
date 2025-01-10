import StandardHeading from "@/components/generic/standard-heading";
import ReviewCard from "@/components/homepage/review-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionWrapper } from "@/components/wrapper/section-wrapper";
import { getReviews } from "@/lib/actions/reviews";
import { getUser } from "@/lib/db/queries";
import { Review, User } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

async function App() {
  const user = (await getUser()) as User;
  const reviews = (await getReviews()) as Review[];

  if (!user) {
    redirect("/login");
  }
  console.log(reviews);
  const isAdmin = user.role === "admin";

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

      {isAdmin ? <AdminDashboard reviews={reviews} /> : <CostumerDashboard />}
    </SectionWrapper>
  );
}

export default App;

const CostumerDashboard = () => {
  return (
    <Tabs className="flex flex-col items-center justify-center">
      <TabsList defaultValue="idle" color="rgb(228, 183, 180)">
        <TabsTrigger value="all">Le mie recensioni</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <h1>Tutte le recensioni</h1>
      </TabsContent>
    </Tabs>
  );
};

const AdminDashboard = ({ reviews }: { reviews: Review[] }) => {
  return (
    <Tabs className="flex flex-col items-center justify-center">
      <TabsList defaultValue="idle" color="rgb(228, 183, 180)">
        <TabsTrigger value="all">Tutte</TabsTrigger>
        <TabsTrigger value="idle">In Attesa</TabsTrigger>
        <TabsTrigger value="accepted">Accettate</TabsTrigger>
        <TabsTrigger value="rejected">Non accettate</TabsTrigger>
      </TabsList>
      <TabsContent
        className={cn(
          "grid",
          "gap-y-10 gap-x-5",
          "max-md:grid-cols-1 lg:grid-cols-2",
          "grid-rows-auto"
        )}
        value="all"
      >
        {reviews.map((review) => (
          <ReviewCard {...review} key={review.id} />
        ))}
      </TabsContent>
      <TabsContent value="idle">
        <h1>Recensioni in attesa</h1>
      </TabsContent>
      <TabsContent value="accepted">
        <h1>Recensioni accettate</h1>
      </TabsContent>
      <TabsContent value="rejected">
        <h1>Recensioni non accettate</h1>
      </TabsContent>
    </Tabs>
  );
};
