import axios from 'axios';

let HOST = process.env.NODE_ENV === 'production' ? 
            `http://${location.host}` :
            `http://${location.hostname}:3000`

export default async (opts) => {
  opts.url = `${HOST}${opts.url}`;

  console.log(opts.url);

  let {
    url,
    method = 'GET'
  } = opts;

  let res = await axios({
    url,
    method
  });
  return res.data;
}