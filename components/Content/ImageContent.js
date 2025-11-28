import Image from "next/image";

const ImageContent = ({ item, index }) => {
  if (!item || !item.image) return null;

  const { text } = item;
  const imagePath = `/images/guide/${item.image}`;

  return (
    <div key={index} className="flex flex-col gap-2 rounded-md">
      <Image
        src={imagePath}
        alt={text || item.image}
        width={500}
        height={500}
        className="w-full h-auto rounded-md"
      />
      {text && <p className="text-base font-medium">{text}</p>}
    </div>
  );
};

export default ImageContent;
