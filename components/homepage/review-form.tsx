"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { StarRating } from "./star-rating";
import { AnimatePresence, motion } from "framer-motion";
import useReviewForm from "@/hooks/use-review-form";
import cookie from "js-cookie";
import { ReviewData, submitReview } from "@/lib/actions/reviews";
import { User } from "@/lib/db/schema";
import Link from "next/link";
import { Link1Icon } from "@radix-ui/react-icons";

interface ReviewForm {
  user: User | null;
}

export function ReviewForm({ user }: ReviewForm) {
  const {
    state: { rating, isAnonymous, name, body, isSubmitting, error },
    setBody,
    setName,
    setRating,
    setError,
    setIsAnonymous,
  } = useReviewForm();

  const [isAccepted, setIsAccepted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");
    setIsAccepted(consentCookie === "accepted");
  }, []);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData) as unknown as ReviewData;
    const result = await submitReview({ ...newData, rating });
    if (result.error) {
      setError(result.error);
    } else if (result.message) {
      setMessage(result.message);
      setName("");
      setBody("");
      setRating(0);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-full mx-auto flex flex-col"
    >
      <div className="flex flex-nowrap gap-1">
        <StarRating rating={rating} onRatingChange={setRating} />
        <span>*</span>
      </div>
      <div>
        <Label htmlFor="body">La tua recensione *</Label>
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
      {!user && (
        <>
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
                <Label htmlFor="name">Nome</Label>
                <Input
                  onChange={(e) => handleWrittingName(e.target.value)}
                  className="text-black dark:text-white"
                  type="text"
                  min={3}
                  max={50}
                  id="name"
                  name="name"
                  value={name}
                />
                <span className="text-white">{name.length}/50</span>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
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
      <span className="text-white dark:text-gray-500 flex flex-nowrap gap-2">
        <span className="text-white">*</span> Obbligatorio.
      </span>
      <Button type="submit" disabled={isSubmitting || rating === 0}>
        {isSubmitting ? "Invio in corso..." : "Invia recensione"}
      </Button>
      {!user && (
        <span className="text-white dark:text-gray-500 flex flex-nowrap gap-2">
          Vuoi salvare e gestire le tue recensioni?
          <Link
            href="/login"
            className="underline text-blue-500 flex flex-nowrap items-center gap-1"
          >
            Accedi
            <Link1Icon width={20} height={20} />
          </Link>
        </span>
      )}
    </form>
  );
}
