// Shared geometry for the archival folder shape: a tall body whose RIGHT edge
// steps outward to form an integrated tab, then steps back inward. One path
// describes the whole silhouette — body and tab are not separate pieces.
//
// NOTE: if you change these numbers, the matching pixel values written into
// the CSS for `.folder2__tab-label` / `.folder2__body-text` (per size variant)
// need to stay in sync — see index.css "FOLDER SHAPE" section.
export const MAIN_SIZE = {
  bodyWidth: 148,
  tabWidth: 62,
  height: 400,
  tabTop: 54,
  tabHeight: 64,
  step: 9,
  radius: 6,
}

export const NESTED_SIZE = {
  bodyWidth: 128,
  tabWidth: 54,
  height: 320,
  tabTop: 42,
  tabHeight: 56,
  step: 8,
  radius: 5,
}

export function folderTotalWidth(size) {
  return size.bodyWidth + size.tabWidth
}

// The tab's own fill region (parchment), drawn on top of the body fill so
// the tab reads as a distinct material while the outline above still traces
// one continuous silhouette.
export function buildTabFillPath(size) {
  const { bodyWidth: bw, tabTop, tabHeight, step, radius: r } = size
  const tabRight = folderTotalWidth(size)
  const tabBottom = tabTop + tabHeight
  const seam = bw - 3

  return [
    `M ${seam} ${tabTop - step}`,
    `L ${bw + step} ${tabTop}`,
    `L ${tabRight - r} ${tabTop}`,
    `Q ${tabRight} ${tabTop} ${tabRight} ${tabTop + r}`,
    `L ${tabRight} ${tabBottom - r}`,
    `Q ${tabRight} ${tabBottom} ${tabRight - r} ${tabBottom}`,
    `L ${bw + step} ${tabBottom}`,
    `L ${seam} ${tabBottom + step}`,
    `Z`,
  ].join(' ')
}

export function buildFolderPath(size) {
  const { bodyWidth: bw, height, tabTop, tabHeight, step, radius: r } = size
  const tabRight = folderTotalWidth(size)
  const tabBottom = tabTop + tabHeight

  return [
    `M ${r} 0`,
    `L ${bw - r} 0`,
    `Q ${bw} 0 ${bw} ${r}`,
    `L ${bw} ${tabTop - step}`,
    `L ${bw + step} ${tabTop}`,
    `L ${tabRight - r} ${tabTop}`,
    `Q ${tabRight} ${tabTop} ${tabRight} ${tabTop + r}`,
    `L ${tabRight} ${tabBottom - r}`,
    `Q ${tabRight} ${tabBottom} ${tabRight - r} ${tabBottom}`,
    `L ${bw + step} ${tabBottom}`,
    `L ${bw} ${tabBottom + step}`,
    `L ${bw} ${height - r}`,
    `Q ${bw} ${height} ${bw - r} ${height}`,
    `L ${r} ${height}`,
    `Q 0 ${height} 0 ${height - r}`,
    `L 0 ${r}`,
    `Q 0 0 ${r} 0`,
    'Z',
  ].join(' ')
}
