import { NavLink } from "react-router-dom";
import Heading4 from "./typography/Heading4";
import Paragraph from "./typography/Paragraph";

const InfoCard = ({
  headingText,
  paraText,
  goTo,
  component,
  supportedText,
  btnText,
  url,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col gap-4 justify-center">
      <div className="flex flex-col gap-1">
        <Heading4>{headingText}</Heading4>
        <Paragraph>{paraText}</Paragraph>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="font-medium text-gray-700 mb-2">How to use:</p>
        <ol className="list-decimal list-inside space-y-1 text-gray-600">
          <li>
            Go to <code className="bg-gray-200 px-1 rounded">{goTo}</code>
          </li>
          <li>
            Create or edit a <code>.json</code> file
          </li>
          <li>
            Import it in <code>App.jsx</code>
          </li>
          <li>
            Pass it to the <code>&lt;{component}/&gt;</code> component
          </li>
        </ol>
      </div>
      <p className="text-sm text-gray-500">{supportedText}</p>
      <NavLink
        to={url}
        className="inline-block text-center px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
      >
        {btnText}
      </NavLink>
    </div>
  );
};

export default InfoCard;
