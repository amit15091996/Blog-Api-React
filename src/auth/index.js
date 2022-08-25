//authenticate 'isLoggedIn' =>

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data === null) {
    return false;
  } else {
    return true;
  }
};

//doLogging -> data-> set to local storage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//doLogout -> remove from local storage

export const doLogOut = (next) => {
  localStorage.removeItem("data");
  next();
};

// get currentUser

export const getCurrentUser = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"))?.user;
  } else {
    return undefined;
  }
};

export const getToken = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};
