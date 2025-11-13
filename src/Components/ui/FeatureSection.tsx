const FeatureSection = ({
  title,
  question,
  items,
}: {
  title: string;
  question: string;
  items: string[];
}) => (
  <div>
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <p className="mt-4 text-base text-gray-600">{question}</p>
    <ul
      role="list"
      className="mt-6 space-y-4 list-disc list-inside text-base text-gray-600"
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default FeatureSection;