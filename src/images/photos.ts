export interface Photos {
  link: string;
  name: string;
}

const linkPrefix =
  "https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/_DSF";
const linkSuffix = ".jpeg";
const harryImgNums = [
  1382, 1384, 1351, 1359, 1371, 1392, 1388, 1389, 1405, 1410, 1411, 1417, 1418,
  1475, 1478, 1491, 1495, 1496, 1504, 1506,
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
  "28",
  "29",
  "30",
  "31",
];

const londonPhotos: Photos[] = penxtaxImgNums.map((penxtaxImgNum) => {
  return {
    link: `https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/R1-09930-0${penxtaxImgNum}A.JPG`,
    name: "Mar '23",
  };
});

const augPhotos24Nums = Array.from({ length: 31 }, (_, index) => index + 1);
const augPhotos24: Photos[] = augPhotos24Nums
  .filter((v) => v != 27)
  .map((num) => {
    return {
      link: `https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/august_24/aug_24_${num}.jpg`,
      name: "Aug '24",
    };
  });

const janPhotos25Nums = Array.from({ length: 30 }, (_, index) => index + 1);
const janPhotos25: Photos[] = janPhotos25Nums.map((num) => {
  return {
    link: `https://marcus-photo-bucket.s3.eu-west-2.amazonaws.com/january_25/jan_25_${num}.jpg`,
    name: "Jan '25",
  };
});

export const icelandPhotos = harryImgNums.map((img) => {
  return {
    link: linkPrefix.concat(img.toString(), linkSuffix),
    name: "Sep '23",
  };
});

export const filmPhotosLondon: Photos[] = [
  { link: `${linkPrefix}`, name: "London" },
  { link: `${linkPrefix}`, name: "Cologne" },
  { link: `${linkPrefix}`, name: "Cologne" },
  { link: `${linkPrefix}`, name: "London" },
  { link: `${linkPrefix}`, name: "Cologne" },
];

export const allPhotos: Photos[] = icelandPhotos
  .concat(londonPhotos)
  .concat(augPhotos24)
  .concat(janPhotos25);
