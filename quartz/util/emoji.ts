const U200D = String.fromCharCode(8205);
const UFE0Fg = /\uFE0F/g;

export function getIconCode(char: string) {
  return toCodePoint(
    char.indexOf(U200D) < 0 ? char.replace(UFE0Fg, "") : char
  );
}

function toCodePoint(unicodeSurrogates: string) {
  const r: string[] = [];
  let c = 0, p = 0, i = 0;

  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++);
    if (p) {
      r.push((0x10000 + ((p - 0xd800) << 10) + (c - 0xdc00)).toString(16));
      p = 0;
    } else if (0xd800 <= c && c <= 0xdbff) {
      p = c;
    } else {
      r.push(c.toString(16));
    }
  }
  return r.join("-");
}

type EmojiMap = {
  codePointToName: Record<string, string>;
  nameToBase64: Record<string, string>;
};

let emojiMap: EmojiMap | undefined;

const fallbackEmoji =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP4DwQACfsD/QydbsQAAAAASUVORK5CYII="; 
// transparent 1x1 PNG

export async function loadEmoji(code: string) {
  if (!emojiMap) {
    const data = await import("./emojimap.json");
    emojiMap = (data.default ?? data) as EmojiMap;
  }

  const key = code.toLowerCase(); // normalize

  const name = emojiMap.codePointToName[key];
  if (!name) {
    console.warn(`⚠️ Emoji not found for codepoint: ${code}, falling back`);
    return fallbackEmoji;
  }

  const b64 = emojiMap.nameToBase64[name];
  if (!b64) {
    console.warn(`⚠️ Emoji asset missing for name: ${name}, falling back`);
    return fallbackEmoji;
  }

  return b64;
}
