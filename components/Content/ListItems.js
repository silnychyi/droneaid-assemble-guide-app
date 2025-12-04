const ListItems = ({ items, type }) => {
  const availableTypes = ["ordered", "unordered"];
  if (!availableTypes.includes(type)) return null;

  if (!items || items.length === 0) return null;

  const renderList = () => {
    return items.map((item, index) => {
      return (
        <li key={index} className="text-base font-medium">
          {item}
        </li>
      );
    });
  };

  if (type === "ordered") {
    return <ol className="list-decimal list-inside">{renderList()}</ol>;
  }

  if (type === "unordered") {
    return <ul className="list-disc list-inside">{renderList()}</ul>;
  }

  return null;
};
export default ListItems;
