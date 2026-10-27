import CardDesign from "./CardDesign";

const Card = ({ cardData }) => {
  console.log("cardData", cardData);

  return (
    <div className="py-20 px-10 grid grid-cols-1 gap-6 items-stretch sm:grid-cols-2 lg:grid-cols-3">
      {cardData.cards.map((item) => (
        <CardDesign key={item.id} card={item} />
      ))}
    </div>
  );
};

export default Card;
