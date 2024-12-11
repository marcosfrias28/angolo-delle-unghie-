"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { submitReview } from "@/lib/actions/reviews";
import { StarRating } from "./star-rating";
import { AnimatePresence, motion } from "framer-motion";

export function ReviewForm() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.set("rating", rating.toString());
    const result = await submitReview(formData);

    if (result.error) {
      setError(result.error);
    } else {
      event.currentTarget.reset();
      setRating(0);
      router.refresh();
    }

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto">
      <div>
        <Label>Valutazione</Label>
        <StarRating rating={rating} onRatingChange={setRating} />
      </div>
      <div>
        <Label htmlFor="body">La tua recensione</Label>
        <Textarea
          className="text-black dark:text-white"
          id="body"
          name="body"
          required
        />
      </div>
      <AnimatePresence>
        {!isAnonymous && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Label htmlFor="name">Nome (opzionale)</Label>
            <Input
              className="text-black dark:text-white"
              type="text"
              id="name"
              name="name"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="isAnonymous"
          name="isAnonymous"
          checked={isAnonymous}
          onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
        />
        <Label htmlFor="isAnonymous">Invia in modo anonimo</Label>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" disabled={isSubmitting || rating === 0}>
        {isSubmitting ? "Invio in corso..." : "Invia recensione"}
      </Button>
    </form>
  );
}
