import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our policy on refunds and returns for our services
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
                <strong>Last updated:</strong> March 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Overview
              </h2>
              <p className="text-gray-600 mb-6">
                At Alburaq Express, we strive to provide the highest quality
                delivery and logistics services. This refund policy outlines the
                circumstances under which refunds may be issued and the process
                for requesting them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Service Cancellation
              </h2>
              <p className="text-gray-600 mb-6">
                You may cancel your service request under the following
                conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Before the pickup has been initiated</li>
                <li>
                  Due to circumstances beyond our control (weather, natural
                  disasters)
                </li>
                <li>
                  If we are unable to fulfill your request due to operational
                  issues
                </li>
                <li>Within 24 hours of booking for scheduled deliveries</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Refund Eligibility
              </h2>
              <p className="text-gray-600 mb-6">
                Refunds may be issued in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>
                  <strong>Service Not Provided:</strong> If we fail to provide
                  the service as agreed
                </li>
                <li>
                  <strong>Significant Delay:</strong> Delays exceeding 48 hours
                  from the promised delivery time
                </li>
                <li>
                  <strong>Damaged Goods:</strong> Items damaged during transit
                  due to our negligence
                </li>
                <li>
                  <strong>Wrong Delivery:</strong> Delivery to incorrect address
                  due to our error
                </li>
                <li>
                  <strong>Service Cancellation:</strong> Cancellation within the
                  allowed timeframe
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Non-Refundable Services
              </h2>
              <p className="text-gray-600 mb-6">
                The following services are non-refundable:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Services already completed successfully</li>
                <li>Express delivery fees</li>
                <li>Insurance premiums</li>
                <li>Storage fees for held items</li>
                <li>Administrative fees</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Refund Process
              </h2>
              <p className="text-gray-600 mb-6">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 mb-8">
                <li>
                  Contact our customer service within 7 days of the service date
                </li>
                <li>
                  Provide your order number and detailed explanation of the
                  issue
                </li>
                <li>
                  Submit any supporting documentation (photos, receipts, etc.)
                </li>
                <li>Allow 3-5 business days for review</li>
                <li>Receive notification of approval or denial</li>
                <li>
                  If approved, refund will be processed within 5-10 business
                  days
                </li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Refund Methods
              </h2>
              <p className="text-gray-600 mb-6">
                Refunds will be issued using the original payment method:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Credit/Debit cards: 5-10 business days</li>
                <li>Bank transfers: 3-7 business days</li>
                <li>Digital payments: 1-3 business days</li>
                <li>Cash payments: Store credit or bank transfer</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Partial Refunds
              </h2>
              <p className="text-gray-600 mb-6">
                Partial refunds may be issued for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Partial delivery completion</li>
                <li>Service modifications</li>
                <li>Discounts applied after payment</li>
                <li>Overcharges or billing errors</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Dispute Resolution
              </h2>
              <p className="text-gray-600 mb-6">
                If you disagree with our refund decision, you may:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li>Request a review by our management team</li>
                <li>Provide additional evidence or documentation</li>
                <li>Escalate to our customer relations department</li>
                <li>Seek mediation through consumer protection authorities</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                For refund requests or questions about this policy, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@alburaqcargo.com
                  <br />
                  <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
                  <br />
                  <strong>Address:</strong> Al Salam Tower, 10th Floor Office
                  R10, Abu Dhabi
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Important Note
                </h3>
                <p className="text-blue-800">
                  This refund policy is subject to change. Please check this
                  page regularly for updates. For specific cases not covered in
                  this policy, please contact our customer service team.
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
