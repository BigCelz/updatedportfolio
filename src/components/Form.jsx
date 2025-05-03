import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mdkgkppo");

  return (
    <section className="w-full px-4 py-24 bg-gray-100 min-h-screen">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-20">
        {state.succeeded ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold text-lg mb-6">Thanks for your message!</p>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Send me a message
            </h2>

            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 w-full outline-none"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 w-full outline-none"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="border border-gray-300 rounded-lg p-3 w-full outline-none"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                disabled={state.submitting}
                type="submit"
                className="bg-orange-500 text-white rounded-lg p-3 font-semibold hover:bg-orange-600 transition w-full"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Form;

