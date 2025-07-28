import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Terms & Conditions - Alburaq Cargo LLC",
  description: "Read Alburaq Cargo LLC's terms and conditions. Understand our service agreements, user responsibilities, and company policies.",
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Alburaq Cargo LLC services, you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Service Description
              </h2>
              <p className="text-gray-600 mb-6">
                Alburaq Cargo LLC provides logistics and delivery services
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Last-mile delivery services</li>
                <li>Supply chain management</li>
                <li>Leasing solutions</li>
                <li>Storage facilities</li>
                <li>Temperature-controlled delivery</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. User Responsibilities
              </h2>
              <p className="text-gray-600 mb-6">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for illegal purposes</li>
                <li>Pay all fees and charges in a timely manner</li>
                <li>Maintain the security of your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Payment Terms
              </h2>
              <p className="text-gray-600 mb-6">
                Payment for services must be made in advance or as agreed upon
                in writing. We accept various payment methods including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Credit and debit cards</li>
                <li>Bank transfers</li>
                <li>Cash on delivery (where applicable)</li>
                <li>Digital payment platforms</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Delivery Terms
              </h2>
              <p className="text-gray-600 mb-6">
                Delivery times are estimates and may vary based on:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Distance and location</li>
                <li>Weather conditions</li>
                <li>Traffic conditions</li>
                <li>Package size and weight</li>
                <li>Service level selected</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Liability and Insurance
              </h2>
              <p className="text-gray-600 mb-6">
                Our liability is limited to the actual value of the goods or the
                cost of repair, whichever is less. We recommend obtaining
                additional insurance for high-value items.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Prohibited Items
              </h2>
              <p className="text-gray-600 mb-6">
                The following items are prohibited from our services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Illegal substances or contraband</li>
                <li>Hazardous materials</li>
                <li>Perishable items (unless temperature-controlled)</li>
                <li>Fragile items without proper packaging</li>
                <li>Items exceeding size or weight limits</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Intellectual Property
              </h2>
              <p className="text-gray-600 mb-6">
                All content on our website and materials are owned by Alburaq
                Cargo LLC and are protected by copyright and other intellectual
                property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Termination
              </h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to terminate or suspend access to our
                services immediately, without prior notice, for any reason
                whatsoever.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Governing Law
              </h2>
              <p className="text-gray-600 mb-6">
                These terms shall be governed by and construed in accordance
                with the laws of the United Arab Emirates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                11. Changes to Terms
              </h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                12. Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>Email:</strong> contact@alburaqcargo.com
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
