import axios from "axios";

axios.get("http://localhost:3000").then((res) => {
  const data = res.data;

  const fields = Object.keys(data[0]);
  console.table(getInfluencersFiltered(data, fields[2], fields[4]));
  console.table(getInfluencersFiltered(data, fields[5], fields[7]));
});

function getInfluencersFiltered(
  data: Array<{ [k: string]: string }>,
  groupBy: string,
  sortBy: string
) {
  return data.reduce((acc: { [k: string]: { [k: string]: string } }, item) => {
    if (!acc.hasOwnProperty(item[groupBy])) {
      acc[item[groupBy]] = item;
    } else {
      const max = convertFollowersStrToNum(acc[item[groupBy]][sortBy]);
      const current = convertFollowersStrToNum(item[sortBy]);
      if (current > max) {
        acc[item[groupBy]] = item;
      }
    }
    return acc;
  }, {});
}

function convertFollowersStrToNum(count: string) {
  if (count.includes("M")) {
    return Number(count.split("M")[0]) * 1000;
  }

  return Number(count.split("K")[0]);
}
