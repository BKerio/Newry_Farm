import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  Send, 
  User, 
  Mail, 
  MessageSquare, 
  Phone, 
  CheckCircle,
  Loader2
} from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7ngjqao", //  EmailJS Service ID
        "template_3ai7sh9", // EmailJS Template ID
        {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        },
        "dkOuRFyiVG6XXk34v" // EmailJS Public Key (User ID)
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      console.error("Email sending failed:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 w-full relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "phone", "message"].map((field) => (
                <div key={field} className="relative">
                  <label
                    className={`absolute left-10 transition-all duration-300 ${
                      focusedField === field || formState[field as keyof typeof formState]
                        ? "-top-6 text-sm text-green-600"
                        : "top-3 text-gray-400"
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "name" && <User className="absolute top-3 left-3 text-gray-400" size={20} />}
                  {field === "email" && <Mail className="absolute top-3 left-3 text-gray-400" size={20} />}
                  {field === "phone" && <Phone className="absolute top-3 left-3 text-gray-400" size={20} />}
                  {field === "message" && <MessageSquare className="absolute top-3 left-3 text-gray-400" size={20} />}
                  {field === "message" ? (
                    <textarea
                      name={field}
                      required
                      value={formState[field as keyof typeof formState]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-200 focus:border-green-500 outline-none transition-colors duration-300 bg-transparent resize-none h-32"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required={field !== "phone"}
                      value={formState[field as keyof typeof formState]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-200 focus:border-green-500 outline-none transition-colors duration-300 bg-transparent"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 mr-2" />}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
