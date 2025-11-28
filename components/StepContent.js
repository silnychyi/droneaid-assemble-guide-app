import ImageContent from "./Content/ImageContent";
import TextContent from "./Content/TextContent";

const StepContent = ({ content }) => {
  if (!content) return null;

  return (
    <div className="flex flex-col gap-3">
      {content.map((item, index) => {
        if (!item) return null;

        if (item.image) {
          return <ImageContent key={index} item={item} index={index} />;
        }

        if (item.text) {
          return <TextContent key={index} item={item} index={index} />;
        }

        return null;
      })}
    </div>
  );
};
export default StepContent;
