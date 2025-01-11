"use client";

import { Review } from "@/lib/db/schema";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { moderateReview } from "@/lib/actions/reviews";
import { useState } from "react";
import { Button } from "../ui/button";
import TabContentWrapper from "../wrapper/tab-content-wrapper";

interface CostumerDashboard {
  initialReviews: Review[];
}

const CostumerDashboard = ({ initialReviews }: CostumerDashboard) => {
  const [reviews] = useState(initialReviews);
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  const handleSelection = (reviewId: string) => {
    setSelectedReviews((prev) =>
      prev.includes(reviewId)
        ? prev.filter((id) => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const handleDeleteSelected = async () => {
    await deleteReviews({ reviewsId: selectedReviews, action });
    setSelectedReviews([]);
    window.location.reload();
  };

  return (
    <Tabs
      defaultValue="all"
      className="flex flex-col items-center justify-center gap-5"
    >
      <TabsList defaultValue="idle" color="rgb(228, 183, 180)">
        <TabsTrigger value="all">Le mie recensioni</TabsTrigger>
      </TabsList>
      <TabContentWrapper
        value="all"
        reviews={reviews}
        handleSelection={handleSelection}
        selectedReviews={selectedReviews}
      />

      {reviews.length > 0 && (
        <Button
          onClick={handleDeleteSelected}
          disabled={selectedReviews.length < 1}
          variant="destructive"
        >
          Elimina le recensioni selezionate
        </Button>
      )}
    </Tabs>
  );
};

export default CostumerDashboard;
