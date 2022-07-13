const { provinsi, kabupaten } = require("../../models");

exports.getKabupatens = async (req, res) => {
  try {
    let data = await kabupaten.findAll({});

    if (data == 0) {
      return res.send({
        pesan: "data Kabupaten kosong!",
      });
    }
    res.send({
      status: "success",
      message: "Data Kabupaten ditampilkan!",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getKabupaten = async (req, res) => {
  try {
    const kabId = req.params.id;

    let data = await kabupaten.findOne({
      where: {
        id: kabId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    data = JSON.parse(JSON.stringify(data));

    data = {
      ...data,
      photo: data.photo ? process.env.PATH_FILE + data.photo : null,
    };

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addKabupaten = async (req, res) => {
  try {
    //console.log(req.files);
    const data = await kabupaten.create({
      ...req.body,

      photo: req.file.filename,
    });

    res.send({
      status: "success",
      message: "Data Kabupaten berhasil ditambahkan!",
      data,
    });
  } catch (error) {
    console.log(error);

    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateKabupaten = async (req, res) => {
  try {
    const { id } = req.params;

    await kabupaten.update(
      { ...req.body, photo: req.file.filename },
      {
        where: {
          id,
        },
      }
    );

    res.send({
      status: "success",
      message: `Update Kabupaten id: ${id} finished`,
      data: req.body,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteKabupaten = async (req, res) => {
  try {
    const { id } = req.params;

    await kabupaten.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Delete Kabupaten id: ${id} finished`,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
