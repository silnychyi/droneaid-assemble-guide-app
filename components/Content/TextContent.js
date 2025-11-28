const TextContent = ({ item, index }) => {
  if (!item || !item.text) return null;

  return (
    <div key={index} className="flex flex-col gap-2 p-3 bg-gray-100 rounded-md">
      <p className="text-base font-medium">{item.text}</p>
    </div>
  );
};

export default TextContent;
