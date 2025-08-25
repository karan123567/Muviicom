// app/privacy-policy/page.jsx

"use client";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="relative h-auto min-h-screen w-full">
      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/asset/priavcy&policy.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-gray-200 px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-fuchsia-700">
            Privacy Policy
          </h1>

          <section className="space-y-6 text-lg">
            <p>
              At <span className="font-semibold text-white">Muvii</span>, your
              privacy is our priority. This Privacy Policy outlines how we
              collect, use, and protect your information.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                1. Information We Collect
              </h2>
              <p>
                We may collect anonymous usage data such as pages visited and
                interaction patterns to improve user experience. If you sign up
                or interact with our community features, we may collect your
                name, email address, and preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                We use your information to personalize your experience, improve
                our services, and communicate important updates.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                3. Cookies
              </h2>
              <p>
                We use cookies to enhance your experience on Muvii. You can
                disable cookies in your browser settings if you prefer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                4. Third-Party Services
              </h2>
              <p>
                We may use third-party tools like Google Analytics for better
                insights. These tools may have their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                5. User Rights
              </h2>
              <p>
                You can request to update or delete your personal data anytime
                by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                6. Data Security
              </h2>
              <p>
                We take security seriously and follow industry standards to
                protect your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this policy occasionally. The latest version will
                always be available here with an updated date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fuchsia-700 mb-2">
                8. Contact Us
              </h2>
              <p>
                If you have any questions or concerns, feel free to contact us
                at{" "}
                <a
                  href="mailto:support@muvii.app"
                  className="text-blue-400 underline"
                >
                  muviiteam@muvii.app
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


