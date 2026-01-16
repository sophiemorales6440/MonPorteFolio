import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ani8i5a",   // Remplace par ton Service ID EmailJS
        "template_8qxavoa",  // Remplace par ton Template ID EmailJS
        form.current,
        "Z3-K96bRYFHghMHeW"    // Remplace par ta Public Key EmailJS
      )
      .then(
  (result) => {
    console.log("SUCCESS:", result);
    setStatus("success");
    form.current?.reset();
  },
  (error) => {
    console.error("EMAILJS ERROR:", error);
    alert(JSON.stringify(error, null, 2));
    setStatus("error");
  }
);

      
  };

  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-br from-purple-50 to-pink-50 flex justify-center"
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-purple-100">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 animate-fadeIn">
          Contactez-moi
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Remplis le formulaire ci-dessous pour m'envoyer un message.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Ton nom"
            required
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Ton email"
            required
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            name="message"
            placeholder="Ton message"
            required
            rows={5}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
          />
          <button
            type="submit"
            className="mt-2 bg-purple-600 text-white py-3 rounded-xl shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300 font-semibold"
          >
            Envoyer
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 font-medium text-center animate-fadeIn">
            Message envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-medium text-center animate-fadeIn">
            Une erreur est survenue. Réessaie.
          </p>
        )}
      </div>
    </section>
  );
}
