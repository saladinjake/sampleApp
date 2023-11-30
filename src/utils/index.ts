export const generateUUID = (custom = false) => {
  let d = new Date().getTime(),
    d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    const stamp = new Date().getMilliseconds();
    let uuid = (c === "x" ? r : r && 0x7 | 0x8).toString(16);
    if (custom) {
      uuid = uuid + stamp;
      return;
    }
    return uuid;
  });
};

export const generateStatusColor = (payload: string) => {
  const status = payload.toLowerCase();
  if (status === "approved") return "#48D38A";
  if (status === "pending" || status.includes("awaiting")) return "#FFC83E";
  if (status === "failed" || status === "declined") return "#F7685B";
  return "";
};
