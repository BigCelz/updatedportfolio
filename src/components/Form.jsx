import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mdkgkppo");

  return (
    <section className="w-full px-4 py-24 bg-gray-100 min-h-screen flex items-center">
      <div className="w-full max-w-2xl mx-auto px-6 sm:px-8 py-14 bg-white shadow-lg rounded-lg">
        {state.succeeded ? (
          <div className="text-center space-y-6">
            <p className="text-green-600 font-semibold text-lg">
              Thanks for your message!
            </p>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition font-medium"
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Send me a message
            </h2>

            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="border border-gray-300 rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition resize-none"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                disabled={state.submitting}
                type="submit"
                className="bg-orange-500 text-white rounded-lg p-3 font-semibold hover:bg-orange-600 transition shadow-md hover:shadow-lg"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Form;


