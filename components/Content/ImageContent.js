import Image from "next/image";

const ImageContent = ({ item }) => {
  if (!item || !item.image) return null;

  const imagePath = `/images/guide/${item.image}`;

  return (
    <div className="flex flex-col gap-2 rounded-md">
      <Image
        src={imagePath}
        alt={item.image}
        width={500}
        height={500}
        className="w-full h-auto rounded-md"
      />
    </div>
  );
};

export default ImageContent;
