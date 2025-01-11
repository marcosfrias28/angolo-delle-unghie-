"use client";

import { useState } from "react";
import { Review } from "@/lib/db/schema";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { moderateReview } from "@/lib/actions/reviews";
import TabContentWrapper from "../wrapper/tab-content-wrapper";

const AdminDashboard = ({ reviews: initialReviews }: { reviews: Review[] }) => {
  const [reviews] = useState(initialReviews);
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  const handleSelection = (reviewId: string) => {
    setSelectedReviews((prev) =>
      prev.includes(reviewId)
        ? prev.filter((id) => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const handleBulkAction = async (action: "accept" | "reject") => {
    await moderateReview({ reviewsId: selectedReviews, action });
    setSelectedReviews([]);
    window.location.reload();
  };

  return (
    <Tabs
      defaultValue="all"
      className="flex flex-col items-center justify-center max-w-screen-lg mx-auto"
    >
      <TabsList>
        <TabsTrigger value="all">Tutte</TabsTrigger>
        <TabsTrigger value="idle">In Attesa</TabsTrigger>
        <TabsTrigger value="accepted">Accettate</TabsTrigger>
        <TabsTrigger value="rejected">Non accettate</TabsTrigger>
      </TabsList>

      <TabContentWrapper
        value="all"
        reviews={reviews}
        handleSelection={handleSelection}
        selectedReviews={selectedReviews}
      />

      <TabContentWrapper
        value="idle"
        reviews={reviews.filter((r) => r.status === "idle")}
        handleSelection={handleSelection}
        selectedReviews={selectedReviews}
      />
      <TabContentWrapper
        value="accepted"
        reviews={reviews.filter((r) => r.status === "accepted")}
        handleSelection={handleSelection}
        selectedReviews={selectedReviews}
      />
      <TabContentWrapper
        value="rejected"
        reviews={reviews.filter((r) => r.status === "rejected")}
        handleSelection={handleSelection}
        selectedReviews={selectedReviews}
      />

      <div className="flex items-center justify-center gap-5 flex-nowrap">
        <Button
          onClick={() => handleBulkAction("accept")}
          disabled={selectedReviews.length === 0}
          variant="ringHover"
          className={cn(
            "bg-rose dark:bg-rose/50 text-white",
            selectedReviews.length === 0 && "text-black pointer-events-none"
          )}
        >
          Accetta selezionati
        </Button>
        <Button
          onClick={() => handleBulkAction("reject")}
          disabled={selectedReviews.length === 0}
          variant="destructive"
        >
          Rifiuta selezionati
        </Button>
      </div>
    </Tabs>
  );
};

export default AdminDashboard;
