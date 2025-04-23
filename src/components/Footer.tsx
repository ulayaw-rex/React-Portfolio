import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://hook.us2.make.com/aju7qkrltyd9f13afhen13amx2ebtrkh",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("✓ Confirmation sent!");
        setEmail("");
      } else {
        setMessage("✗ Something went wrong.");
      }
    } catch {
      setMessage("✗ Unable to send email.");
    }

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 4000);
  };

  return (
    <footer className="bg-dark text-light py-4 border-top border-secondary shadow-sm position-relative">
      {/* Toast Notification */}
      <div
        className={`position-absolute top-0 start-50 translate-middle-x mt-2 px-4 py-2 rounded-pill text-center small bg-black border border-light transition ${
          showMessage ? "opacity-100" : "opacity-0"
        }`}
        style={{
          zIndex: 10,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          color: "#ccc",
        }}
      >
        {message}
      </div>

      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        {/* Social Icons */}
        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com/ulayaw.rex"
            target="_blank"
            rel="noreferrer"
            className="text-light d-flex align-items-center justify-content-center rounded-circle border border-light p-2 hover-opacity"
            style={{ width: 40, height: 40 }}
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/ulayaw.rex/"
            target="_blank"
            rel="noreferrer"
            className="text-light d-flex align-items-center justify-content-center rounded-circle border border-light p-2 hover-opacity"
            style={{ width: 40, height: 40 }}
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center gap-2 flex-wrap justify-content-center"
        >
          <input
            type="email"
            placeholder="Enter your email here"
            className="form-control bg-black text-light border-secondary rounded-pill px-3"
            style={{ width: "250px", maxWidth: "80%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-outline-light rounded-pill px-4"
          >
            Contact Me
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
