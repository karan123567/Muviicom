export const metadata = {
  title: "Terms & Conditions | Muvii",
  description: "Please read the terms and conditions before using Muvii.",
};

export default function TermsPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/asset/terms.png"
          alt="Terms background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-500 text-center mb-10">
          Terms & Conditions
        </h1>

        <section className="space-y-6 text-sm sm:text-base text-gray-200">
          <p>
            Welcome to <strong>Muvii</strong>! These terms and conditions outline the rules and
            regulations for the use of our platform.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not
            continue to use Muvii if you do not agree to all of the terms stated on this page.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">2. Use of the Website</h2>
          <p>
            Muvii offers a platform to discover movies, shows, anime, and more based on your mood
            and preferences. You agree to use the platform only for lawful purposes and not to
            exploit any of its features maliciously.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">3. Intellectual Property</h2>
          <p>
            All content on Muvii, including logos, design elements, and recommendations, are owned
            by us unless otherwise stated. You may not republish or redistribute any content without
            explicit permission.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">4. Limitation of Liability</h2>
          <p>
            While we strive for accurate recommendations and uninterrupted service, we do not
            guarantee the completeness or reliability of any content. Muvii is not liable for any
            losses or damages from using our service.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">5. Third-Party Links</h2>
          <p>
            Our platform may include links to external websites. We are not responsible for the
            content or privacy policies of those sites.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">6. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of the site after
            changes means you accept the new terms.
          </p>

          <h2 className="text-xl font-semibold text-purple-500">7. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, feel free to contact us
            via the Help section in our footer.
          </p>
        </section>

        <p className="mt-12 text-sm text-center text-gray-400">
          Last updated: July 27, 2025
        </p>
      </div>
    </div>
  );
}

