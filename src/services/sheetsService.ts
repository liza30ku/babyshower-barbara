const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzwHDq8pHtPyjjCUkYoQsJ3M9NZRKGOk4IXwaALnIfMLLrluPvzx1w40LjmNp6QNTzGDg/exec';

export async function getGifts() {
  const res = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getGifts`);
  return res.json();
}

export async function submitRSVP(data: Record<string, unknown>) {
  const res = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=submitRSVP`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}

export async function reserveGift(giftId: string, guestName: string) {
  const res = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=reserveGift`, {
    method: 'POST',
    body: JSON.stringify({ giftId, guestName }),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}
