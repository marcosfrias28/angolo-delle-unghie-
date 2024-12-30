import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default function PrivacyPolicyReviews() {
  return (
    <PageWrapper>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Informativa sulla Privacy per le Recensioni
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-2">1. Introduzione</h2>
                <p>
                  La presente Informativa sulla Privacy descrive come
                  raccogliamo, utilizziamo e proteggiamo le informazioni
                  personali quando lasci recensioni sul nostro sito web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  2. Raccolta delle Informazioni
                </h2>
                <p>
                  Per le recensioni sul nostro sito web, raccogliamo e
                  utilizziamo le seguenti informazioni:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Il tuo nome</li>
                  <li>Il contenuto della tua recensione</li>
                </ul>
                <p className="mt-2">
                  Non raccogliamo altre informazioni personali per le
                  recensioni, a meno che tu non scelga di fornirle
                  volontariamente nel contenuto della tua recensione.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  3. Utilizzo delle Informazioni
                </h2>
                <p>Utilizziamo le informazioni raccolte per:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Pubblicare la tua recensione sul nostro sito web</li>
                  <li>
                    Gestire e moderare le recensioni per garantire la qualità
                    del contenuto
                  </li>
                  <li>Rispondere alle tue recensioni, se necessario</li>
                  <li>
                    Migliorare i nostri prodotti e servizi basandoci sul
                    feedback ricevuto
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  4. Condivisione delle Informazioni
                </h2>
                <p>
                  Le recensioni che lasci, incluso il tuo nome, saranno
                  pubblicamente visibili sul nostro sito web. Non vendiamo o
                  condividiamo queste informazioni con terze parti per scopi di
                  marketing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  5. Sicurezza dei Dati
                </h2>
                <p>
                  Adottiamo misure di sicurezza ragionevoli per proteggere le
                  tue informazioni personali da accessi non autorizzati o
                  alterazioni. Tuttavia, ricorda che le recensioni pubblicate
                  sono visibili a tutti i visitatori del sito.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  6. I Tuoi Diritti
                </h2>
                <p>
                  Hai il diritto di richiedere la modifica o la rimozione della
                  tua recensione. Puoi anche richiedere che il tuo nome sia
                  anonimizzato o rimosso dalla recensione.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  7. Modifiche a questa Informativa
                </h2>
                <p>
                  Possiamo aggiornare questa Informativa sulla Privacy di tanto
                  in tanto. Ti informeremo di eventuali modifiche pubblicando la
                  nuova Informativa sulla Privacy su questa pagina.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">8. Contattaci</h2>
                <p>
                  Se hai domande su questa Informativa sulla Privacy o desideri
                  esercitare i tuoi diritti riguardo alla tua recensione,
                  contattaci all&apos;indirizzo email: privacy@example.com
                </p>
              </section>

              <p className="text-sm text-gray-500 mt-6">
                Ultima modifica: {new Date().toLocaleDateString("it-IT")}
              </p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
