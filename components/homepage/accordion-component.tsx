import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { StandardHeader } from "../generic/standard-header";

const domandeERisposteEstetista = [
  {
    question: "Quali servizi offri?",
    answer:
      "Offriamo una gamma completa di servizi per unghie, tra cui manicure, pedicure, applicazione di gel e acrilico, nail art e trattamenti di bellezza per mani e piedi.",
  },
  {
    question: "Quanto dura una manicure?",
    answer:
      "Una manicure di base dura generalmente tra 30 e 45 minuti, mentre le manicure più elaborate o con nail art possono richiedere più tempo.",
  },
  {
    question: "Posso prenotare un appuntamento online?",
    answer:
      "Sì, puoi prenotare un appuntamento online tramite il nostro sito web. È facile e veloce!",
  },
  {
    question: "Quali prodotti utilizzi?",
    answer:
      "Utilizziamo solo prodotti di alta qualità e marchi rinomati per garantire la sicurezza e la salute delle tue unghie.",
  },
  {
    question: "Cosa devo fare prima di un appuntamento?",
    answer:
      "Ti consigliamo di arrivare con unghie pulite e senza smalto. Se hai delle preferenze specifiche per il design, porta delle immagini come riferimento.",
  },
  {
    question: "Cosa succede se non posso più venire all'appuntamento?",
    answer:
      "Ti chiediamo gentilmente di avvisarci con almeno 24 ore di anticipo per annullare o riprogrammare il tuo appuntamento.",
  },
  {
    question: "Le unghie finte danneggiano le unghie naturali?",
    answer:
      "Se applicate e rimosse correttamente, le unghie finte non danneggeranno le unghie naturali. È importante seguire le istruzioni del tecnico per la cura.",
  },
  {
    question: "Offrite trattamenti per la cura delle mani e dei piedi?",
    answer:
      "Sì, offriamo trattamenti idratanti e nutrienti per mani e piedi, che includono scrub, massaggi e maschere.",
  },
];

export function FaqsSection() {
  return (
    <div className="flex flex-col w-full relative">
      <StandardHeader
        position="center"
        description="Se hai dei dubbi che non trovi in questa lista, Contattami nella sezione in fondo."
        className={cn(
          `my-2 font-semibold text-center tracking-tight`,
          `title-tailwind-class mx-5`
        )}
      >
        Domande frequenti (FAQs)
      </StandardHeader>
      <div className={cn("w-full max-w-[70%] lg:max-w-[50%]", "mx-auto")}>
        <Accordion type="single" collapsible className="w-full mt-2">
          {domandeERisposteEstetista.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
