import Heading4 from "../typography/Heading4";
import Paragraph from "../typography/Paragraph";

const CardDesign = ({ card }) => {
  console.log("card", card);

  return (
    <div className="flex flex-col gap-2 w-full items-center shadow-md rounded-2xl">
      <div className="w-full overflow-hidden rounded-2xl">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 w-full py-2">
        <Heading4>{card.title}</Heading4>
        <Paragraph>{card.description}</Paragraph>
      </div>
    </div>
  );
};

export default CardDesign;
