import CardDesign from "./CardDesign";

const Card = ({ cardData }) => {
  if (!cardData || !Array.isArray(cardData.cards)) {
    return (
      <p className="p-4 text-red-600">
        Invalid card configuration: expected a cards array.
      </p>
    );
  }

  if (cardData.cards.length === 0) {
    return <p className="p-4">No cards available.</p>;
  }

  const invalidCard = cardData.cards.find(
    (card) =>
      !card ||
      card.id === undefined ||
      card.id === null ||
      !String(card.title ?? "").trim(),
  );

  if (invalidCard) {
    return (
      <p className="p-4 text-red-600">
        Invalid card configuration: every card must have an id and a title.
      </p>
    );
  }

  const ids = cardData.cards.map((item) => item.id);
  const hasDuplicateIds = new Set(ids).size !== ids.length;

  if (hasDuplicateIds) {
    return (
      <p className="p-4 text-red-600">
        Invalid card configuration: every card must have a unique ID.
      </p>
    );
  }

  return (
    <div className="py-20 px-10 grid grid-cols-1 gap-6 items-stretch sm:grid-cols-2 lg:grid-cols-3">
      {cardData.cards.map((item) => (
        <CardDesign key={item.id} card={item} />
      ))}
    </div>
  );
};

export default Card;
