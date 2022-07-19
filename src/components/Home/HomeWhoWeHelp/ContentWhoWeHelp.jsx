import { ContentItem } from ".";
import { foundations, NGOS, collections } from "./data";

export const ContentWhoWeHelp = ({
  chosenStep,
  itemsPerPage,
  paginationStartNumber,
}) => {
  const paginationEndNumber = paginationStartNumber + itemsPerPage;

  if (chosenStep === "1") {
    return foundations.items
      .slice(paginationStartNumber, paginationEndNumber)
      .map((item) => (
        <ContentItem
          key={item.id}
          title={item.header}
          description={item.description}
          items={item.items}
        />
      ));
  } else if (chosenStep === "2") {
    return NGOS.items
      .slice(paginationStartNumber, paginationEndNumber)
      .map((item) => (
        <ContentItem
          key={item.id}
          title={item.header}
          description={item.description}
          items={item.items}
        />
      ));
  } else {
    return collections.items.map((item) => (
      <ContentItem
        key={item.id}
        title={item.header}
        description={item.description}
        items={item.items}
      />
    ));
  }
};
