export function appendIds(array) {
    return array.map((item, index) => {
      return { ...item, id: index + 1 };
    });
  }