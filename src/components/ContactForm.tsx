
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/locales";

const ContactForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "ai-agents",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        interest: "ai-agents",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="glass-card p-8 border border-white/10 max-w-xl w-full mx-auto transition-all hover:shadow-none animate-fade-in">
      <h3 className="text-2xl font-bold mb-6 font-space">{t.getInTouch}</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-ovnilab-darkPurple/50 border border-white/10 text-ovnilab-text focus:ring-2 focus:ring-ovnilab-teal/50 focus:border-ovnilab-teal transition-all"
              placeholder={t.yourName}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-ovnilab-darkPurple/50 border border-white/10 text-ovnilab-text focus:ring-2 focus:ring-ovnilab-teal/50 focus:border-ovnilab-teal transition-all"
              placeholder={t.yourEmail}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            {t.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-ovnilab-darkPurple/50 border border-white/10 text-ovnilab-text focus:ring-2 focus:ring-ovnilab-teal/50 focus:border-ovnilab-teal transition-all"
            placeholder={t.yourCompany}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="interest" className="block text-sm font-medium">
            {t.interestedIn}
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-ovnilab-darkPurple/50 border border-white/10 text-ovnilab-text focus:ring-2 focus:ring-ovnilab-teal/50 focus:border-ovnilab-teal transition-all"
          >
            <option value="ai-agents">{t.aiAgents}</option>
            <option value="business-automation">
              {t.businessProcessAutomation}
            </option>
            <option value="marketing-automation">
              {t.marketingAutomation}
            </option>
            <option value="custom-solution">{t.customAISolutions}</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-ovnilab-darkPurple/50 border border-white/10 text-ovnilab-text focus:ring-2 focus:ring-ovnilab-teal/50 focus:border-ovnilab-teal transition-all resize-none"
            placeholder={t.tellUs}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full flex items-center justify-center transition-all duration-300"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {t.sending}
            </>
          ) : (
            t.sendMessage
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
