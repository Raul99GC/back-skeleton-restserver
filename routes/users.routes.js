const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post("/", usuariosPost);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
