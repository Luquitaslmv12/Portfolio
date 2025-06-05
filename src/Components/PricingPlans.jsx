import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Básico",
    price: "$100",
    features: ["Landing simple", "1 sección", "Responsive"],
    color: "bg-white",
  },
  {
    name: "Empresarial",
    price: "$250",
    features: ["Web completa", "5 secciones", "Formularios", "Responsive"],
    color: "bg-blue-100",
  },
  {
    name: "Pro",
    price: "$500",
    features: ["Sitio a medida", "Admin Panel", "Animaciones", "Hosting incluído"],
    color: "bg-yellow-100",
  },
];

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [50, -50]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    x.set(posX - rect.width / 2);
    y.set(posY - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY }}
      className="rounded-2xl p-6 shadow-xl cursor-pointer transition-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default function PricingPlans() {
  return (
    <section className="py-16 px-4 " id="planes">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Planes de Servicio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <TiltCard key={i}>
              <div className={`h-full ${plan.color} rounded-2xl p-6`}>
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}