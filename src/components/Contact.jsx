import { useMemo, useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const projectOptions = useMemo(
    () => ["Service", "Industrial", "IT", "Finance", "Startup", "Other"],
    []
  );

  const budgetOptions = useMemo(
    () => ["10-20K", "20-50K", "50-100K", "Other"],
    []
  );

  const [projectTypes, setProjectTypes] = useState([]); // multi select
  const [budget, setBudget] = useState("20-50K"); // single select

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState({ type: "", text: "" }); // success | error
  const [loading, setLoading] = useState(false);

  const toggleProject = (val) => {
    setProjectTypes((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const isValidEmail = (value) => {
    // "tural" getməsin -> mütləq @ və domain olsun
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Bütün xanaları doldurun." });
      return;
    }

    if (!isValidEmail(email)) {
      setStatus({
        type: "error",
        text: "Email düzgün deyil. Məs: name@example.com",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          projectTypes,
          budget,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus({
          type: "error",
          text: data?.message || "Xəta baş verdi. Yenidən yoxlayın.",
        });
        return;
      }

      setStatus({
        type: "success",
        text: data?.message || "Mesaj qəbul olundu.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setProjectTypes([]);
      setBudget("20-50K");
    } catch (err) {
      setStatus({ type: "error", text: "Serverə qoşulmadı. API işləyir?" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container contact__container">
        <div className="contact__card">
          <h2 className="contact__title">
            Hey! <span>Tell us all the things</span> 👋
          </h2>

          <form className="contact__form" onSubmit={onSubmit}>
            <p className="contact__label">My project is…</p>

            <div className="contact__chips">
              {projectOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`chip ${
                    projectTypes.includes(opt) ? "is-active" : ""
                  }`}
                  onClick={() => toggleProject(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <label className="contact__field">
              <span>Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="contact__field">
              <span>Your email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="contact__field">
              <span>Your message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={6}
                required
              />
            </label>

            <p className="contact__label">Project Budget</p>

            <div className="contact__chips">
              {budgetOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`chip ${budget === opt ? "is-active" : ""}`}
                  onClick={() => setBudget(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            {status.text ? (
              <div className={`contact__alert ${status.type}`}>
                {status.text}
              </div>
            ) : null}

            <button
              className="contact__submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Request"} <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
