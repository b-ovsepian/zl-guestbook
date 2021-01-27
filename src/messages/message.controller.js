import express from "express";
import { messagesService } from "./message.service.js";
import Joi from "joi";
import { validate } from "../helpers/validate.js";

const controller = express.Router();

const createMessageSchema = Joi.object({
  name: Joi.string().required(),
  text: Joi.string().required(),
});

controller.post("/", validate(createMessageSchema), (req, res) => {
  const newMessage = messagesService.createMessage(req.body);
  res.status(201).send(newMessage);
});

controller.get("/", (req, res) => {
  const allMessages = messagesService.fetchMessages();
  res.status(200).send(allMessages);
});

export const messagesController = controller;
