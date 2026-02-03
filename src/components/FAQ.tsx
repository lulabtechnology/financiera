export default function FAQ() {
  const faqs = [
    {
      q: "¿Revisan APC?",
      a: "Podemos considerar información crediticia como parte de la evaluación. Lo importante es revisar tu caso completo y orientarte con opciones realistas.",
    },
    {
      q: "¿Cuánto tarda?",
      a: "Depende del caso y de qué tan rápido estén los documentos. Buscamos moverte rápido y con claridad desde el primer contacto.",
    },
    {
      q: "¿Qué necesito?",
      a: "Lo básico suele ser identificación y comprobantes de ingreso. En requisitos verás una guía por categoría.",
    },
    {
      q: "¿Atienden fines de semana?",
      a: "La atención principal es de lunes a viernes en horario laboral. Si escribes fuera de horario, respondemos apenas estemos disponibles.",
    },
    {
      q: "¿Aprobación garantizada?",
      a: "No. Toda solicitud está sujeta a evaluación. Nuestro compromiso es asesorarte con transparencia y acompañarte en el proceso.",
    },
    {
      q: "¿Cómo me contactan?",
      a: "Te contactamos por WhatsApp. Por eso es importante que tu número y datos estén correctos al escribirnos.",
    },
  ];

  return (
    <section id="preguntas" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-black md:text-3xl">Preguntas frecuentes</h2>
          <p className="mt-3 text-black/70">Respuestas rápidas para que tengas el panorama claro.</p>
        </div>

        <div className="mt-8 grid gap-3">
          {faqs.map((f, idx) => (
            <details key={idx} className="card rounded-3xl p-5">
              <summary className="cursor-pointer text-sm font-semibold text-black">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-black/70">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-xs text-black/55">
          *Sujeto a evaluación. No garantizamos aprobación.
        </p>
      </div>
    </section>
  );
}
