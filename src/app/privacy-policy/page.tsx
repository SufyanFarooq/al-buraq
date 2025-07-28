import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Privacy Policy - Alburaq Cargo LLC",
  description: "Learn how Alburaq Cargo LLC collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> March 2023
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when
                you create an account, place an order, contact us, or subscribe
                to our newsletter. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information</li>
                <li>Order history and preferences</li>
                <li>Communication records</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support</li>
                <li>Send order confirmations and updates</li>
                <li>Improve our services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Information Sharing
              </h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>With your explicit consent</li>
                <li>
                  To trusted third-party service providers who assist us in
                  operating our business
                </li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Data Security
              </h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data transmission</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Your Rights
              </h2>
              <p className="text-gray-600 mb-6">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Cookies and Tracking
              </h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your browsing
                experience, analyze website traffic, and understand where our
                visitors are coming from.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Contact Us
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@alburaqcargo.com
                  <br />
                  <strong>Address:</strong> Al Salam Tower, 10th Floor Office
                  R10, Abu Dhabi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
