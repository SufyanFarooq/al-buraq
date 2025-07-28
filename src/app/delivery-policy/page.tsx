import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Delivery Policy - Alburaq Cargo LLC",
  description: "Learn about Alburaq Cargo LLC's delivery policy. Understand our service areas, timeframes, and delivery process.",
};

export default function DeliveryPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Delivery Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our delivery processes, timelines, and service
              standards
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
                1. Service Areas
              </h2>
              <p className="text-gray-600 mb-6">
                We provide delivery services across the United Arab Emirates,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Dubai (All Emirates)</li>
                <li>Abu Dhabi</li>
                <li>Sharjah</li>
                <li>Ajman</li>
                <li>Umm Al Quwain</li>
                <li>Ras Al Khaimah</li>
                <li>Fujairah</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Delivery Timeframes
              </h2>
              <p className="text-gray-600 mb-6">
                Our standard delivery timeframes are:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Same Day Delivery:</strong> Orders placed before
                    2:00 PM (subject to availability)
                  </li>
                  <li>
                    <strong>Next Day Delivery:</strong> Orders placed after 2:00
                    PM or for next business day
                  </li>
                  <li>
                    <strong>Express Delivery:</strong> 2-4 hours (premium
                    service)
                  </li>
                  <li>
                    <strong>Standard Delivery:</strong> 1-3 business days
                  </li>
                  <li>
                    <strong>Economy Delivery:</strong> 3-5 business days
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Delivery Process
              </h2>
              <p className="text-gray-600 mb-6">
                Our delivery process includes:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 mb-8">
                <li>
                  <strong>Order Confirmation:</strong> You&apos;ll receive
                  confirmation within 1 hour
                </li>
                <li>
                  <strong>Pickup Scheduling:</strong> We&apos;ll contact you to
                  schedule pickup
                </li>
                <li>
                  <strong>Real-time Tracking:</strong> Track your package
                  throughout the journey
                </li>
                <li>
                  <strong>Delivery Notification:</strong> Receive updates on
                  delivery status
                </li>
                <li>
                  <strong>Proof of Delivery:</strong> Digital signature and
                  photo confirmation
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Package Requirements
              </h2>
              <p className="text-gray-600 mb-6">
                To ensure safe delivery, packages must meet these requirements:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>
                  <strong>Weight Limit:</strong> Maximum 50kg per package
                </li>
                <li>
                  <strong>Size Limit:</strong> Maximum 150cm in any dimension
                </li>
                <li>
                  <strong>Packaging:</strong> Properly sealed and labeled
                </li>
                <li>
                  <strong>Fragile Items:</strong> Must be marked and properly
                  cushioned
                </li>
                <li>
                  <strong>Temperature-sensitive:</strong> Special handling
                  available
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Delivery Attempts
              </h2>
              <p className="text-gray-600 mb-6">
                We will make up to 3 delivery attempts:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>
                  <strong>First Attempt:</strong> During scheduled delivery
                  window
                </li>
                <li>
                  <strong>Second Attempt:</strong> Next business day
                </li>
                <li>
                  <strong>Third Attempt:</strong> Following business day
                </li>
                <li>
                  <strong>After 3 Attempts:</strong> Package returned to sender
                  or held for pickup
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Delivery Fees
              </h2>
              <p className="text-gray-600 mb-6">
                Delivery fees are calculated based on:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Distance and location</li>
                <li>Package weight and dimensions</li>
                <li>Service level selected</li>
                <li>Special handling requirements</li>
                <li>Delivery timeframe</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Special Handling
              </h2>
              <p className="text-gray-600 mb-6">
                We offer specialized handling for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>
                  <strong>Temperature-controlled:</strong> Pharmaceuticals,
                  food, cosmetics
                </li>
                <li>
                  <strong>Fragile Items:</strong> Electronics, glass, artwork
                </li>
                <li>
                  <strong>High-value Items:</strong> Jewelry, documents, luxury
                  goods
                </li>
                <li>
                  <strong>Oversized Items:</strong> Furniture, equipment,
                  machinery
                </li>
                <li>
                  <strong>Hazardous Materials:</strong> Limited to permitted
                  items only
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Delivery Exceptions
              </h2>
              <p className="text-gray-600 mb-6">
                Delivery may be delayed due to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Weather conditions (rain, sandstorms)</li>
                <li>Traffic congestion</li>
                <li>Public holidays</li>
                <li>Security restrictions</li>
                <li>Recipient unavailable</li>
                <li>Incorrect address information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Delivery Confirmation
              </h2>
              <p className="text-gray-600 mb-6">
                Upon successful delivery, you will receive:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Digital delivery confirmation</li>
                <li>Photo proof of delivery</li>
                <li>Recipient signature (if applicable)</li>
                <li>Delivery time and location</li>
                <li>Driver contact information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                For delivery-related inquiries, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>Email:</strong>info@alburaqcargo.com
                  <br />
                  <strong>Hours:</strong> Monday - Saturday, 8:00 AM - 8:00 PM
                  <br />
                  <strong>Address:</strong> Al Salam Tower, 10th Floor Office
                  R10, Abu Dhabi
                </p>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-green-800">
                  We are committed to providing reliable, safe, and timely
                  delivery services. Our team undergoes regular training to
                  ensure the highest standards of service quality.
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
