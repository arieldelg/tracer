import { getCookie, hasCookie, setCookie } from "cookies-next";

const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse(getCookie("cart") ?? "{}");
    return cookieCart;
  }
  return {};
};

const addCookie = (id: number) => {
  const cookie = getCookieCart();
  if (cookie[String(id)]) {
    cookie[String(id)] += 1;
  } else {
    cookie[String(id)] = 1;
  }

  setCookie("cart", JSON.stringify(cookie));
};

const deleteCookie = (id: number) => {
  const cookie = getCookieCart();

  delete cookie[String(id)];
  setCookie("cart", JSON.stringify(cookie));
};

const deleteSingleCookie = (id: string) => {
  const cookie = getCookieCart();
  if (cookie[id] && cookie[id] !== 0) {
    cookie[id] -= 1;
    if (cookie[id] === 0) {
      delete cookie[id];
    }
  }
  setCookie("cart", JSON.stringify(cookie));
};

export { addCookie, deleteCookie, deleteSingleCookie };
