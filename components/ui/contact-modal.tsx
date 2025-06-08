"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ContactFormData } from "@/lib/types";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { services } from "@/config";

interface ContactModalProps {
  phoneNumber?: string;
  instagramUsername?: string;
  buttonText?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ContactModal({
  phoneNumber = "393480463822",
  instagramUsername = "angolodelleunghie_",
  buttonText = "Contattami su Whatsapp",
  className,
  children,
}: ContactModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<ContactFormData>({
    mode: "onChange",
  });

  const watchName = watch("name") || "";
  const watchMessage = watch("message") || "";

  const onSubmit = (data: ContactFormData) => {
    const serviceName =
      services.find((s) => s.value === data.service)?.name || data.service;

    // Format message for WhatsApp
    const formattedMessage = encodeURIComponent(
      `Nome: ${data.name}\nServizio: ${serviceName}\nMessaggio: ${data.message}`
    );

    // Try opening WhatsApp first
    window.open(
      `https://wa.me/${phoneNumber}?text=${formattedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );

    // Set a timeout to check if WhatsApp didn't open
    setTimeout(() => {
      const instagram = `https://instagram.com/${instagramUsername}`;
      window.open(instagram, "_blank", "noopener,noreferrer");
    }, 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "bg-[#B76E79] hover:bg-[#E6BCB3] text-white hover:text-[#B76E79] transition-colors",
            className
          )}
        >
          <FaWhatsapp className="mr-2 h-4 w-4" />
          {children ? children : buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-[#f7f7f7]">
        <DialogHeader>
          <DialogTitle className="text-[#B76E79]">
            Parliamo del tuo trattamento
          </DialogTitle>
          <DialogDescription className="text-black">
            Compila il form per essere reindirizzat@ su WhatsApp, dove potrai
            contattarmi direttamente. Se WhatsApp non è disponibile, verrai
            reindirizzat@ al mio profilo Instagram.
          </DialogDescription>
          <a
            className="flex flex-nowrap items-center gap-2 group text-roseGold-light dark:text-black"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.instagram.com/angolodelleunghie_"
          >
            <FaInstagram
              size={30}
              className="group-hover:text-rose transition-colors"
            />
            Instagram
          </a>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <div className="relative">
              <Input
                {...register("name")}
                placeholder="Il tuo nome"
                required
                className={cn(
                  "border-[#E6BCB3] focus:ring-[#B76E79] focus:border-[#B76E79] dark:bg-neutral-900",
                  errors.name
                    ? "border-red-500"
                    : watchName.length >= 3
                    ? "border-green-500"
                    : ""
                )}
              />
              <span className="absolute right-2 top-2 text-xs text-gray-400">
                {watchName.length}/50
              </span>
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Select
              value={watch("service")}
              required
              onValueChange={(value) =>
                setValue("service", value, { shouldValidate: true })
              }
            >
              <SelectTrigger
                className={cn(
                  "border-[#E6BCB3] focus:ring-[#B76E79] focus:border-[#B76E79] dark:bg-neutral-900",
                  errors.service
                    ? "border-red-500"
                    : watch("service")
                    ? "border-green-500"
                    : ""
                )}
              >
                <SelectValue placeholder="Seleziona un servizio" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem
                    key={service.value}
                    value={service.value}
                    className="cursor-pointer hover:bg-[#E6BCB3] hover:text-[#B76E79]"
                  >
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Textarea
                {...register("message")}
                placeholder="Il tuo messaggio"
                required
                className={cn(
                  "min-h-[100px] border-[#E6BCB3] focus:ring-[#B76E79] focus:border-[#B76E79] pr-16 dark:bg-neutral-900",
                  errors.message
                    ? "border-red-500"
                    : watchMessage.length >= 10
                    ? "border-green-500"
                    : ""
                )}
              />
              <span className="absolute right-2 top-2 text-xs text-gray-400">
                {watchMessage.length}/500
              </span>
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={!isValid}
            className={cn(
              "w-full transition-colors",
              isValid
                ? "bg-[#B76E79] hover:bg-[#E6BCB3] text-white hover:text-[#B76E79]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            )}
          >
            Invia Messaggio
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
