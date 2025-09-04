const PrivacyContent = () => {
  return (
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h3>
        <p className="text-sm leading-relaxed mb-3">
          We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 ml-4">
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Health-related information you choose to share</li>
          <li>Usage data and preferences</li>
          <li>Communication preferences and feedback</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h3>
        <p className="text-sm leading-relaxed mb-3">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 ml-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Process your requests and transactions</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Develop new products and services</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing and Disclosure</h3>
        <p className="text-sm leading-relaxed">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 ml-4 mt-3">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
          <li>With service providers who assist in our operations</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h3>
        <p className="text-sm leading-relaxed">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">5. Your Rights and Choices</h3>
        <p className="text-sm leading-relaxed mb-3">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 ml-4">
          <li>Access and update your personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of certain communications</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">6. Cookies and Tracking Technologies</h3>
        <p className="text-sm leading-relaxed">
          We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences, though disabling cookies may affect some functionality.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Services</h3>
        <p className="text-sm leading-relaxed">
          Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h3>
        <p className="text-sm leading-relaxed">
          We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">9. International Data Transfers</h3>
        <p className="text-sm leading-relaxed">
          Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Policy</h3>
        <p className="text-sm leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
        </p>
      </div>

      <div className="text-center text-sm text-muted-foreground pt-4">
        <p>Last updated: January 2024</p>
        <p>For privacy-related questions, please contact us at privacy@lotessa.com</p>
      </div>
    </div>
  );
};

export default PrivacyContent;
