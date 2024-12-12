"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { submitReview } from "@/lib/actions/reviews";
import { StarRating } from "./star-rating";
import { AnimatePresence, motion } from "framer-motion";
import useReviewForm from "@/hooks/use-review-form";

export function ReviewForm() {
  const {
    state: { rating, isAnonymous, name, body, isSubmitting, error },
    setBody,
    setName,
    setRating,
    setIsAnonymous,
    setIsSubmitting,
    setError,
  } = useReviewForm();

  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.set("rating", `${rating}`);
    setIsSubmitting(true);

    const result = await submitReview(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setMessage(result?.message || "");
      setRating(0);
      setBody("");
      setName("");
      setIsAnonymous(false);
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
          className="text-black dark:text-white [field-sizing:content] resize-none"
          id="body"
          name="body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          maxLength={50}
          minLength={10}
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
              onChange={(e) => setName(e.target.value)}
              className="text-black dark:text-white"
              type="text"
              id="name"
              name="name"
              value={name}
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
      {message ? (
        <p className="text-green-500">{message}</p>
      ) : (
        <p className="text-red-500">{error}</p>
      )}
      <Button type="submit" disabled={isSubmitting || rating === 0}>
        {isSubmitting ? "Invio in corso..." : "Invia recensione"}
      </Button>
    </form>
  );
}
