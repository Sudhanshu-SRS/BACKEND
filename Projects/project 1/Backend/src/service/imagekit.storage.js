const ImageKit = require("@imagekit/nodejs/index.js");

const imagekit = new ImageKit({
  privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadimage(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: 'file-name.jpg'
  });
  return result;
}

async function deleteimage(fileId) {
  const result = await imagekit.file.delete(fileId);

  return result;
}


module.exports = uploadimage;
