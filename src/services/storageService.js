export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("LocalStorage error:", error);
  }
};

export const loadFromStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
