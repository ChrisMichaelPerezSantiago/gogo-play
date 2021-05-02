
<p align="center">
  Proof of concept on how to get all video streams from website https://gogo-play.net/
</p>

<p align="center">
  <img alt="MIT" src="https://img.shields.io/badge/License-MIT-blue.svg"/>
  <img alt="electron" src="https://img.shields.io/badge/gogoplaynet-POC-blue"/>
  <img alt="gogo-play.net POC" src="https://img.shields.io/badge/Maintained%3F-yes-blue.svg"/>
</p>       
         
<br/>


## Run (POC) script
```sh
  npm run dev
```

## PHP Array
*A way must be found to parsing the array from PHP to JS*


```php
string(23)
"anime_picasa_1_NDQ4MDI="
array(9) {
  ["time"] => int(1619991351)["title"] => string(21)
  "Tokyo Ghoul Episode 1" ["quanlity"] => string(51)
  "{"
  res ":"
  1280 x720 ","
  duration ":1450,"
  size ":223891438}" ["type_sub"] => string(3)
  "SUB" ["links"] => array(5) {
    ["v4"] => array(0) {} ["google"] => array(1) {
      ["HD"] => string(107)
      "https://storage.googleapis.com/durable-pulsar-311007/PGMECMDLOFW6/st22_tokyo-ghoul-episode-1.1619915601.mp4"
    } ["hlsdrive"] => string(0)
    "" ["picasa"] => array(1) {
      ["HD"] => string(107)
      "https://storage.googleapis.com/durable-pulsar-311007/PGMECMDLOFW6/st22_tokyo-ghoul-episode-1.1619915601.mp4"
    } ["hlsplus"] => array(1) {
      ["auto"] => string(108)
      "https://server01.streamhd.cc/playlist/7a531607d73e9dacb536b56f3da62bc8/7a531607d73e9dacb536b56f3da62bc8.m3u8"
    }
  } ["backup"] => array(17) {
    ["default"] => array(1) {
      [0] => string(33)
      "1Xx8bpXJXsulewNEKR5EgbyuxyBxZy9xf"
    } ["mp4upload"] => array(0) {} ["hyrax"] => array(1) {
      [0] => string(10)
      "aImXiLV-ug"
    } ["yourupload"] => array(0) {} ["googlestorage"] => array(0) {} ["easyload"] => array(0) {} ["cloud9"] => array(0) {} ["onedrive"] => array(0) {} ["vidcdn"] => array(1) {
      ["hls"] => string(84)
      "https://www01.cloud9xx.com/hls/fa49afeab0c675c5eb0b2f5b301c1329/ep.1.1605743434.m3u8"
    } ["ftp"] => array(0) {} ["download"] => array(3) {
      [360] => string(301)
      "https://gogo-cdn.com/download.php?url=aHR0cHM6LyAdeqwrwedffryretgsdFrsftrsvfsfsr9jZG4xNyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrftesdf5jbG91ZDl4eC5jb20vdXNlcjEzNDIvMzQ4MDEyZmU3NGNhZWUyODg0ZDI0MjlhODVlODdmZjcvRVAuMS4zNjBwLm1wND90b2tlbj1XX3pCZWdMejhEbzlUSWp6MEQwendnJmV4cGlyZXM9MTYyMDAwNTc1MSZpZD00NDgwMg==" [480] => string(308)
      "https://gogo-cdn.com/download.php?url=aHR0cHM6LyAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgtert9URASDGHUSRFSJGYfdsffsderFStewthsfSFtrftesdfjZG4xNy5jbG91ZDl4eC5jb20vdXNlcjEzNDIvMzQ4MDEyZmU3NGNhZWUyODg0ZDI0MjlhODVlODdmZjcvRVAuMS40ODBwLm1wND90b2tlbj1PYlZHVHBLN2NYakxOQWUyQ2pqRG9BJmV4cGlyZXM9MTYyMDAwNTc1MSZpZD00NDgwMg==" [720] => string(297)
      "https://gogo-cdn.com/download.php?url=aHR0cHM6LyAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgtert9AdeqwrwedffryretgsdFrsftrsvfsfsrjZG4xNy5jbG91ZDl4eC5jb20vdXNlcjEzNDIvMzQ4MDEyZmU3NGNhZWUyODg0ZDI0MjlhODVlODdmZjcvRVAuMS43MjBwLm1wND90b2tlbj0tRjdZNndDb054SzFWQ1N5WGZubWF3JmV4cGlyZXM9MTYyMDAwNTc1MSZpZD00NDgwMg=="
    } ["fembed"] => array(0) {} ["streamtape"] => array(1) {
      [0] => string(66)
      "https://streamtape.com/e/Ox0YR4QB6afZOre/tokyo-ghoul-episode-1.mp4"
    } ["streamsb"] => array(1) {
      [0] => string(43)
      "https://sbembed.com/embed-mnvtwu9igjf5.html"
    } ["doodstream"] => array(1) {
      [0] => string(30)
      "https://dood.to/e/bug3h5b9odll"
    } ["images"] => string(72)
    "https://cache.cdnfile.info/images/348012fe74caee2884d2429a85e87ff7/1.vtt" ["cover"] => string(78)
    "https://cache.cdnfile.info/images/348012fe74caee2884d2429a85e87ff7/1_cover.jpg"
  } ["source"] => string(16)
  "gogo-play.net v3" ["content_id"] => string(4)
  "2775" ["ga_event"] => string(155)
  "gtag('event', 'play', { 'event_category' : 'HLSPlus', 'event_label' : 'HLSPlus' });"
}
```

## Result in JS

```js
[
  'https://storage.googleapis.com/durable-pulsar-311007/PGMECMDLOFW6/st22_tokyo-ghoul-episode-1.1619915601.mp4',
  'https://server01.streamhd.cc/playlist/7a531607d73e9dacb536b56f3da62bc8/7a531607d73e9dacb536b56f3da62bc8.m3u8',
  'https://www01.cloud9xx.com/hls/fa49afeab0c675c5eb0b2f5b301c1329/ep.1.1605743434.m3u8',
  'https://gogo-cdn.com/download.php?url=aHR0cHM6LyAdeqwrwedffryretgsdFrsftrsvfsfsr9jZG4xNyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrftesdf5jbG91ZDl4eC5jb20vdXNlcjEzNDIvMzQ4MDEyZmU3NGNhZWUyODg0ZDI0MjlhODVlODdmZjcvRVAuMS4zNjBwLm1wND90b2tlbj1XX3pCZWdMejhEbzlUSWp6MEQwendnJmV4cGlyZXM9MTYyMDAwNTc1MSZpZD00NDgwMg%3D%3D',
  'https://gogo-cdn.com/download.php?url=aHR0cHM6LyAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgtert9URASDGHUSRFSJGYfdsffsderFStewthsfSFtrftesdfjZG4xNy5jbG91ZDl4eC5jb20vdXNlcjEzNDIvMzQ4MDEyZmU3NGNhZWUyODg0ZDI0MjlhODVlODdmZjcvRVAuMS40ODBwLm1wND90b2tlbj1PYlZHVHBLN2NYakxOQWUyQ2pqRG9BJmV4cGlyZXM9MTYyMDAwNTc1MSZpZD00NDgwMg%3D%3D',
  'https://gogo-cdn.com/download.php?url=aHR0cHM6LyAawehyfcghysfdsDGDYdgdsfsdfwstdgdsgtert9AdeqwrwedffryretgsdFrsftrsvfsfsrjZG4xNy5jbG91ZDl4eC5jb20vdXNlcjEzNDIvMzQ4MDEyZmU3NGNhZWUyODg0ZDI0MjlhODVlODdmZjcvRVAuMS43MjBwLm1wND90b2tlbj0tRjdZNndDb054SzFWQ1N5WGZubWF3JmV4cGlyZXM9MTYyMDAwNTc1MSZpZD00NDgwMg%3D%3D',
  'https://streamtape.com/e/Ox0YR4QB6afZOre/tokyo-ghoul-episode-1.mp4',
  'https://sbembed.com/embed-mnvtwu9igjf5.html',
  'https://dood.to/e/bug3h5b9odll',
  'https://cache.cdnfile.info/images/348012fe74caee2884d2429a85e87ff7/1.vtt',
  'https://cache.cdnfile.info/images/348012fe74caee2884d2429a85e87ff7/1_cover.jpg',
  'http://gogo-play.net'
]
```


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © gogo-play 2021 
