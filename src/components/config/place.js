/** An attachment that puts an already-built KUC element into the node. */
export const place = (...elements) => (node) => {
  node.append(...elements);
};
