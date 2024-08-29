export interface Photos {
  url: string;
  name: string;
}

const urlPrefix = "https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/_DSF";
const urlSuffix = ".jpeg";
const imgNums = [
  1351, 1359, 1371, 1382, 1384, 1388, 1389, 1391, 1392, 1405, 1410, 1411, 1417,
  1418, 1475, 1478, 1488, 1491, 1495, 1496, 1504, 1506,
];

const penxtaxImgNums = [
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const londonPhotos: Photos[] = penxtaxImgNums.map((penxtaxImgNum) => {
  return {
    url: `https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/R1-09930-0${penxtaxImgNum}A.JPG`,
    name: "London",
  };
});

// const pentaxPhotos = "https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/R1-09930-0"
// const suffix =

export const icelandPhotos = imgNums.map((img) => {
  return { url: urlPrefix.concat(img.toString(), urlSuffix), name: "Iceland" };
});

export const filmPhotosLondon: Photos[] = [
  { url: `${urlPrefix}`, name: "London" },
  { url: `${urlPrefix}`, name: "Cologne" },
  { url: `${urlPrefix}`, name: "Cologne" },
  { url: `${urlPrefix}`, name: "London" },
  { url: `${urlPrefix}`, name: "Cologne" },
];

export const allPhotos: Photos[] = icelandPhotos.concat(londonPhotos);
