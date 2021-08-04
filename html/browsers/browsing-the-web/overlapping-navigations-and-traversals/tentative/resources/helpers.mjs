export function createIframe(t) {
  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    iframe.onload = () => resolve(iframe);
    iframe.onerror = () => reject(new Error("Could not load iframe"));
    iframe.src = "/common/blank.html";

    t.add_cleanup(() => iframe.remove());
    document.body.append(iframe);
  });
}

export function delay(t, ms) {
  return new Promise(resolve => t.step_timeout(resolve, ms));
}

export function waitForLoad(obj) {
  return new Promise(resolve => {
    obj.addEventListener("load", resolve, { once: true });
  });
}

export function waitForHashchange(obj) {
  return new Promise(resolve => {
    obj.addEventListener("hashchange", resolve, { once: true });
  });
}

export function waitForPopstate(obj) {
  return new Promise(resolve => {
    obj.addEventListener("popstate", resolve, { once: true });
  });
}
