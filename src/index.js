const getUrls = require('get-urls');
const { load } = require('./common/cheerio');
const { sleep } = require('./utils/index');
const request = require('./service/request');


const getVideo = async(url = 'https://gogo-play.net/videos/tokyo-ghoul-episode-1') =>{
  const res = await request(url);
  const $ = load(res);
  let iframeURL = $('iframe').attr('src') || null;
  if(iframeURL){
    iframeURL = `http://${iframeURL.replace('streaming', 'check').trim().slice(2)}`;
  }
  await sleep(1000);
  const iframeRes = await request(iframeURL);
  const urls = Array.from(getUrls(iframeRes));
  const obj = {
    php_array: iframeRes,
    urls: urls,
  }
  return obj;
};

(async() =>{
  await getVideo()
    .then(res => console.log(res))
    .catch(err => console.log(err))
})();