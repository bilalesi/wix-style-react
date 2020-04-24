import shallowEqual from 'shallowequal';

export function virtualRowsAreEqual(prevProps, nextProps) {
  const {
    style: prevStyle,
    data: prevData,
    index: prevIndex,
    ...prevRest
  } = prevProps;
  const {
    style: nextStyle,
    data: nextData,
    index: nextIndex,
    ...nextRest
  } = nextProps;

  const { data: nextItemData, ...restNextItemData } = nextData;
  const { data: prevItemData, ...restPrevItemData } = prevData;

  return (
    nextIndex === prevIndex &&
    shallowEqual(prevStyle, nextStyle) &&
    shallowEqual(prevItemData[prevIndex], nextItemData[nextIndex]) &&
    shallowEqual(restPrevItemData, restNextItemData) &&
    shallowEqual(prevRest, nextRest)
  );
}

const CELL_FIRST_PADDING = 30;
const CELL_PADDING = 12;

export const getStickyColumnStyle = (columns, column) => {
  let left = 0;

  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    if (col === column) {
      break;
    }

    const horizontalPadding =
      i === 0 ? CELL_FIRST_PADDING + CELL_PADDING : 2 * CELL_PADDING;
    left += parseInt(col.width, 10) + horizontalPadding;
  }

  return { left };
};
