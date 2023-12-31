type FnType = (...args: any[]) => void;

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

export const formatText = (tagName: string) => {
  tagName = tagName.replace(/^\w/g, (all) => {
    return all.toUpperCase();
  });
  return tagName;
};
