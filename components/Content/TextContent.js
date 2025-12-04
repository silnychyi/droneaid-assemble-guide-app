const TextContent = ({ item }) => {
  if (!item || !item.text) return null;

  const renderText = ({ text, index = null }) => {
    return (
      <p key={index} className="text-base font-medium">
        {text}
      </p>
    );
  };

  if (Array.isArray(item.text)) {
    return (
      <div className="flex flex-col gap-3">
        {item.text.map((text, index) => renderText({ text, index }))}
      </div>
    );
  }

  return renderText({ text: item.text });
};

export default TextContent;
