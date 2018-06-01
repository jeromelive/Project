import axios from 'axios';

let HOST = process.env.NODE_ENV === 'production' ? 
            `http://120.77.178.106:3000` :
            `https://${location.hostname}:3000`

export default async (opts) => {
  opts.url = `${HOST}${opts.url}`;

  let {
    url,
    method = 'GET',
    data
  } = opts;


  let res = await axios({
    url,
    method,
    data
  });
  return res.data;
}