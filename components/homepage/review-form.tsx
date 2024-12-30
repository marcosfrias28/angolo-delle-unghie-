"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { submitReview } from "@/lib/actions/reviews";
import { StarRating } from "./star-rating";
import { AnimatePresence, motion } from "framer-motion";
import useReviewForm from "@/hooks/use-review-form";
import cookie from "js-cookie";
import Link from "next/link";

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

  const [isAccepted, setIsAccepted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");
    setIsAccepted(consentCookie === "accepted");
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isAccepted) {
      cookie.set("cookieConsent", "accepted", { expires: 365 });
    }
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

  async function handleWrittingReview(value: string) {
    if (value.length < 500) {
      setBody(value);
    } else {
      setBody(value.slice(0, 500));
    }
  }

  async function handleWrittingName(value: string) {
    if (value.length < 50) {
      setName(value);
    } else {
      setName(value.slice(0, 50));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto">
      <div>
        <StarRating rating={rating} onRatingChange={setRating} />
      </div>
      <div>
        <Label htmlFor="body">La tua recensione</Label>
        <Textarea
          className="text-black dark:text-white [field-sizing:content] resize-none"
          id="body"
          name="body"
          onChange={(e) => handleWrittingReview(e.target.value)}
          value={body}
          maxLength={500}
          minLength={10}
          required
        />
        <span className="text-white">{body.length}/500</span>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="isAnonymous"
          name="isAnonymous"
          checked={isAnonymous}
          onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
        />
        <Label htmlFor="isAnonymous">Invia in modo anonimo</Label>
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
              onChange={(e) => handleWrittingName(e.target.value)}
              className="text-black dark:text-white"
              type="text"
              min={3}
              max={50}
              id="name"
              name="name"
              value={name}
              required
            />
            <span className="text-white">{name.length}/50</span>
          </motion.div>
        )}
      </AnimatePresence>
      {!isAccepted && (
        <Label className="text-yellow-400">
          ⚠️ Se mandi una recensione, Accetti la nostra
          <a
            className="underline mx-1 text-white"
            href="/privacy"
            target="_blank"
          >
            privacy e policy
          </a>
          automaticamente.
        </Label>
      )}
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
