import ImageContent from "./Content/ImageContent";
import TextContent from "./Content/TextContent";
import ListItems from "./Content/ListItems";

const StepContent = ({ content }) => {
  if (!content) return null;

  const renderContent = () => {
    return content.map((item, index) => {
      if (!item) return null;

      if (item.image) {
        return (
          <ContentItem key={index}>
            <ImageContent item={item} />
          </ContentItem>
        );
      }

      if (item.text) {
        return (
          <ContentItem key={index}>
            <TextContent item={item} />
          </ContentItem>
        );
      }

      if (item.unordered_list) {
        return (
          <ContentItem key={index}>
            <ListItems items={item.unordered_list} type="unordered" />
          </ContentItem>
        );
      }

      if (item.ordered_list) {
        return (
          <ContentItem key={index}>
            <ListItems items={item.ordered_list} type="ordered" />
          </ContentItem>
        );
      }

      return null;
    });
  };

  return <div className="flex flex-col gap-3">{renderContent()}</div>;
};

const ContentItem = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-100 rounded-md">
      {children}
    </div>
  );
};

export default StepContent;
