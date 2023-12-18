const express = require("express");

const router = express.Router();

import { isEmptyBody, isValidId } from "../../middlewares/index.js";

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

import {
  contactAddSchema,
  contactUpdateSchema,
  contactFavoriteScheme,
} from "../../models/Contact.js";

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactUpdateSchema),
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactFavoriteScheme),
  contactsController.updateById
);

router.delete("/:contactId", isValidId, contactsController.deleteById);

module.exports = router;
