export default function Benefits() {
  const cards = [
    {
      title: "Respuesta rápida",
      desc: "Te orientamos desde el primer mensaje: qué aplica para ti y qué preparar.",
      icon: "/icons/speed.svg",
    },
    {
      title: "Asesoría humana",
      desc: "Una persona te acompaña para mantener todo claro y simple.",
      icon: "/icons/support.svg",
    },
    {
      title: "Proceso simple",
      desc: "Pasos concretos, sin vueltas. Si falta algo, te lo decimos directo.",
      icon: "/icons/clear.svg",
    },
    {
      title: "Evaluación responsable",
      desc: "Sin prometer aprobación: revisamos tu caso y te damos opciones reales.",
      icon: "/icons/secure.svg",
    },
  ];

  return (
    <section id="beneficios" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Beneficios que sí importan</h2>
          <p className="mt-3 text-black/70">
            Comunicación clara, guía práctica y seguimiento humano.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="card rounded-3xl p-5">
              <div className="flex items-center gap-3">
                <img src={c.icon} alt="" className="h-7 w-7 opacity-75 invert" />
                <h3 className="text-sm font-semibold text-black">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-black/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
