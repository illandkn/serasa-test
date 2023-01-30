export function hook({ star, name, description }) {
  const delay = (0.7 + Math.random() * 2) * 2000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (!!star && !!name) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
}
