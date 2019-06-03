const data = document.getElementById('data')
const salt = document.getElementById('salt')
const hash = document.getElementById('hash')
const underscore = document.getElementById('underscore')
const strtob = (s) => s.split('').map(x => x.charCodeAt(0))
const hashtop = (hash) => {
  const pass = hash.map(x => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789XD'[x & 0x3f])
  if (underscore.checked) pass[hash.map(x => (x & 0xC0) >> 6).reduce((a, b) => a + b) % 32] = '_'
  return pass.join('')
}
const gethash = (text) => {
  const ror = (a, n) => (a >>> n) | (a << 32 - n)
  const delta0 = (a) => ror(a, 7) ^ ror(a, 18) ^ (a >>> 3)
  const delta1 = (a) => ror(a, 17) ^ ror(a, 19) ^ (a >>> 10)
  const sigma0 = (a) => ror(a, 2) ^ ror(a, 13) ^ ror(a, 22)
  const sigma1 = (a) => ror(a, 6) ^ ror(a, 11) ^ ror(a, 25)
  const ch = (a, b, c) => (a & b) ^ (~a & c)
  const maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c)
  const H = [0xff673e09, 0x2d785d86, 0x9e961141, 0x44038e6c, 0x2dbdd119, 0x38fb23da, 0xf07830e1, 0x0d33740a];
  const k = [0xf4078dee, 0xf00ce919, 0x7035d54b, 0x8226e244, 0xa79bb2c3, 0x9760f4f7, 0x2346ccfe, 0x0d055a9a, 0x35fdb4c1, 0xdfbce80c, 0x6dfb6812, 0x1e7cf919, 0x6dc24c23, 0x573e6703, 0x1c268a36, 0xa43c343a, 0xefcd16c0, 0x3f685d57, 0x483a667f, 0x29723241, 0xdf9ecdca, 0x92c7ca17, 0x1d997fca, 0xdc2e3918, 0xa5a7d101, 0x4aa388d3, 0x8a8a61e5, 0xd7ead22f, 0xcc12d22d, 0x54c044f1, 0x9c607f83, 0x20afcc1d, 0x2592842e, 0x83be4f0a, 0x7a65c8e2, 0xe8d76bf8, 0x0d3aef5c, 0x7132f9a8, 0x69127544, 0xca91cf58, 0x01c33877, 0xedcc901f, 0xff33a52f, 0xa5aadf2a, 0x0ed77bb5, 0x25c77e21, 0x6df48e07, 0xdb878e50, 0xb6e9d27c, 0xf367156d, 0x67edd0d5, 0xad6dde6b, 0xc1254ddf, 0xc6f243c5, 0x8fe0a2fc, 0x1aecdd55, 0xf20f350c, 0xc095d575, 0xf25b46b4, 0x367603e9, 0xe2db7001, 0x9965d0cf, 0xd7063e9c, 0xcc28882d];
  const num = Math.ceil((text.length + 1 + 8) / 64.0);
  const data = Array(num * 16).fill(0);
  let i;

  for (i = 0; i < text.length; i++) data[Math.floor(i / 4)] |= (text[i] << (24 - i % 4 * 8));

  data[Math.floor(i / 4)] |= (128 << (24 - i % 4 * 8));
  data[data.length - 2] = Math.floor((text.length * 8) / Math.pow(2.0, 32.0));
  data[data.length - 1] = text.length * 8;

  for (let n = 0; n < num; n++) {
    const w = Array(64).fill(0);
    for (i = 0; i < 16; i++) w[i] = data[(n * 16) + i];
    for (; i < 64; i++) w[i] = w[i - 16] + delta0(w[i - 15]) + w[i - 7] + delta1(w[i - 2]);

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    let f = H[5];
    let g = H[6];
    let h = H[7];

    for (i = 0; i < 64; i++) {
      let temp1 = h + sigma1(e) + ch(e, f, g) + k[i] + w[i];
      let temp2 = sigma0(a) + maj(a, b, c);
      h = g;
      g = f;
      f = e;
      e = d + temp1;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2;
    }

    H[0] += a;
    H[1] += b;
    H[2] += c;
    H[3] += d;
    H[4] += e;
    H[5] += f;
    H[6] += g;
    H[7] += h;
  }

  const hash = Array(32).fill(0);
  for (i = 0; i < 8; i++) {
    hash[(i * 4) + 0] = (H[i] >>> 24) & 0xff;
    hash[(i * 4) + 1] = (H[i] >>> 16) & 0xff;
    hash[(i * 4) + 2] = (H[i] >>>  8) & 0xff;
    hash[(i * 4) + 3] = (H[i] >>>  0) & 0xff;
  }
  return hash;
}
const getHash = () => {
  hash.value = hashtop(gethash(strtob(data.value + salt.value)))
}