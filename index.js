
/**
 * @param {string} input
 * @returns {number}
 */
const getByteLength = (str) => {
  let size = 0;
  try {
    let sblob = new Blob([str]);
    size = sblob.size;
  } catch { }
  return size;
}

export {
  getByteLength
}

export default getByteLength
