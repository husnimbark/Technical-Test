const { provinsi } = require("../../models");

exports.addProvinsi = async (req, res) => {
  try {
    console.log(req.file.filename);
    await provinsi.create(req.body);

    const data = await provinsi.create({
      ...req.body,

      photo: req.file.filename,
    });

    res.send({
      status: "Berhasil!",
      message: "Provinsi telah ditambahkan",
    });
  } catch (error) {
    res.send({
      status: "Gagal!",
      message: "Server Error",
    });
  }
};

exports.getProvinsis = async (req, res) => {
  try {
    const data = await provinsi.findAll({});

    res.send({
      status: "success",
      data: {
        data,
      },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getProvinsi = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await provinsi.findOne({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data: {
        data,
      },
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateProvinsi = async (req, res) => {
  try {
    const { id } = req.params;

    await provinsi.update(
      { ...req.body, photo: req.file.filename },
      {
        where: {
          id,
        },
      }
    );

    res.send({
      status: "success",
      message: `Update Provinsi id: ${id} finished`,
      data: req.body,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteProvinsi = async (req, res) => {
  try {
    const { id } = req.params;

    await provinsi.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Delete Provinsi id: ${id} finished`,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
