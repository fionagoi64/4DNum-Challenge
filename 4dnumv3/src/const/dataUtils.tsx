export const joinData = (apiData: any[], localData: any[]) => {
  return apiData
    .filter((selectedData) =>
      localData.some(
        (localItem) =>
          localItem.type === selectedData.type &&
          !["CS", "STC", "PT15:30"].includes(localItem.type)
      )
    )
    .map((apiItem) => {
      const all = localData.find(
        (localItem) => localItem.type === apiItem.type
      );
      return { ...apiItem, ...all };
    });
};
