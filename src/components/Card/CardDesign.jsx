import Heading4 from "../typography/Heading4";
import Paragraph from "../typography/Paragraph";

const CardDesign = ({ card }) => {
    const badgeColors = [
        "bg-blue-100 text-blue-700",
        "bg-green-100 text-green-700",
        "bg-purple-100 text-purple-700",
        "bg-orange-100 text-orange-700",
    ];
    const layout = card.headingParaLayout === "horizontal" ? "flex-row gap-4" : "flex-col gap-1";
    return (
        <div className="flex flex-col gap-2 w-full items-center shadow-md rounded-2xl overflow-hidden">
            {card.image && (
                <div className="w-full overflow-hidden rounded-2xl">
                    <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full object-cover"
                    />
                </div>
            )}
            <div className="flex flex-col gap-2 px-4 w-full py-2">
                {Array.isArray(card.badges) && card.badges.length > 0 && (
                    <div className="w-full flex gap-4 flex-wrap">
                        {card.badges.map((badge, index) => (
                            <span
                                key={`${card.id}-badge-${index}`}
                                className={`rounded-full px-3 py-1 text-sm font-medium ${badgeColors[index % badgeColors.length]
                                    }`}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}

                {Array.isArray(card.metadata) && card.metadata.length > 0 && (
                    <div className="w-full flex gap-4 flex-wrap">
                        {card.metadata.map((data, index) => (
                            <div key={`${card.id}-meta-${index}`} className="flex flex-col">
                                <span className="text-base font-medium">{data.label}</span>
                                <span className="text-sm font-normal opacity-70">
                                    {data.value}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
                <div className={`flex ${layout}`}>
                    <Heading4 classname="text-blue-800">{card.title}</Heading4>
                    {card.description && <Paragraph>{card.description}</Paragraph>}
                </div>
                {Array.isArray(card.actions) && card.actions.length > 0 && (
                   <div className="flex flex-wrap gap-3 mt-2">
            {card.actions
              .filter(
                (action) =>
                  action &&
                  action.type === "link" &&
                  typeof action.url === "string" &&
                  action.url.trim() !== "" &&
                  typeof action.label === "string" &&
                  action.label.trim() !== ""
              )
              .map((action, index) => (
                <a
                  key={`${card.id}-action-${index}`}
                  href={action.url}
                  target="_blank"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  {action.label}
                </a>
              ))}
          </div>
                )}
            </div>
        </div>
    );
};

export default CardDesign;
