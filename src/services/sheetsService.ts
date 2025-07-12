const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJNND9LN685pdrG5DnLJWDAqpNy51boJipw9xkxg-M5rgSNGpmbCajTyQhYaX1rT6Vwg/exec';

export async function getGifts() {
  const res = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=getGifts`);
  return res.json();
}

export async function submitRSVP(data) {
  const res = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=submitRSVP`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}

export async function reserveGift(giftId, guestName) {
  const res = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?action=reserveGift`, {
    method: 'POST',
    body: JSON.stringify({ giftId, guestName }),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.json();
}