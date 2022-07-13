const express = require("express");

const router = express.Router();

const {
  addProvinsi,
  getProvinsis,
  getProvinsi,
  updateProvinsi,
  deleteProvinsi,
} = require("../controllers/provinsi");

const {
  getKabupatens,
  getKabupaten,
  addKabupaten,
  updateKabupaten,
  deleteKabupaten,
} = require("../controllers/kabupaten");

const {uploadFile}=require("../middleware/uploadFile")

router.post("/provinsi", uploadFile('photo'), addProvinsi);
router.get("/provinsis", getProvinsis);
router.get("/provinsi/:id", getProvinsi);
router.patch("/provinsi/:id", uploadFile('photo'),updateProvinsi);
router.delete("/provinsi/:id", deleteProvinsi);


router.get("/kabupatens", getKabupatens);
router.get("/kabupaten/:id", getKabupaten);
router.post("/kabupaten", uploadFile('photo'), addKabupaten);
router.patch("/kabupaten/:id", uploadFile('photo'), updateKabupaten);
router.delete("/kabupaten/:id", deleteKabupaten);

module.exports = router;
