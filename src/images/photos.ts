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

export const icelandPhotos = imgNums.map((img) => {
  return { url: urlPrefix.concat(img.toString(), urlSuffix), name: "London" };
});

export const filmPhotosLondon: Photos[] = [
  { url: `${urlPrefix}`, name: "London" },
  { url: `${urlPrefix}`, name: "Cologne" },
  { url: `${urlPrefix}`, name: "Cologne" },
  { url: `${urlPrefix}`, name: "London" },
  { url: `${urlPrefix}`, name: "Cologne" },
];

export const allPhotos: Photos[] = icelandPhotos;
