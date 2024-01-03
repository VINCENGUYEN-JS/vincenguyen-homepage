type FnType = (...args: any[]) => void;

type TagType = { __typename: string; name: string };

export const TAGS_TO_COLORS: Record<string, string> = {
  HTML: "gray",
  CSS: "pink",
  JAVASCRIPT: "yellow",
  WEB: "purple",
  IMAGE: "orange",
  FRONTEND: "blue",
  READ: "green",
};

const hints = Object.keys(TAGS_TO_COLORS);

export const composeFn = (...functions: FnType[]) => {
  return (...args: any[]) => {
    functions.forEach((func) => func(...args));
  };
};

//Convert HTML5 -> HTML , CSS3 -> CSS , ETC
export const normalizeString = (tagName: string) => {
  tagName = tagName.replace(/(\s)?(\w+)/g, (all, first, second) => {
    if (first) {
      return "";
    }
    if (second) {
      const hint = hints.find((hint) => {
        if (second.toUpperCase().includes(hint)) {
          return hint;
        }
      });
      if (!hint) return second;
      return hint;
    }

    return all;
  });
  return tagName;
};

export const sortingTags = (tags: TagType[]) => {
  if (tags.length === 0) {
    return [];
  }
  const sortedTags = [...tags];
  return sortedTags.sort((tagA, tagB) => {
    if (tagA.name > tagB.name) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const formatText = (tagName: string) => {
  tagName = tagName.replace(/^\w/g, (all) => {
    return all.toUpperCase();
  });
  return tagName;
};

export function sortByViews(posts: Array<any>, method: string) {
  const sortedArray = [...posts]; // Create a copy of the current state array
  if (method === "des") {
    sortedArray.sort((a, b) => b.views - a.views); // Sort by views in descending order
  } else if (method === "asc") {
    sortedArray.sort((a, b) => a.views - b.views); // Sort by views in ascending order
  }
  return sortedArray;
}
