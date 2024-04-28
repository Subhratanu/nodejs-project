const fileNameGenerator = (actualFileName, userId, currTimestamp) => {
  const fileName = `${currTimestamp}_${userId}-${actualFileName}`;
  //1714310646_U-654789AX-sample.jpg
  return fileName;
};

module.exports = fileNameGenerator;
