import tableDriverFactory from './Table.driver';

export const tablePrivateDriverFactory = args => {
  const publicDriver = tableDriverFactory(args);
  return {
    ...publicDriver,
    exists: () => !!publicDriver.element,
    getInnerHtml: () => publicDriver.element.innerHTML,
    getCellTextAt: (rowIndex, cellIndex) =>
      publicDriver.getCell(rowIndex, cellIndex).textContent,
    scrollHorizontallyBy: x =>
      publicDriver.element
        .querySelector('[data-hook="table-content"]')
        .scrollBy(x, 0),
  };
};
