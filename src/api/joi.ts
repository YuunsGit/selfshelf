import Joi from "joi";

export const userSchema = Joi.object().keys({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .lowercase()
    .messages({
      "string.email": "email not valid",
      "string.empty": "required",
    }),
  name: Joi.string()
    .regex(/^[ a-zA-ZğüşöçİĞÜŞÖÇı]+$/)
    .min(3)
    .max(32)
    .required()
    .messages({
      "string.max": "max 32 characters",
      "string.min": "min 3 characters",
      "string.empty": "required",
    }),
  password: Joi.string().min(6).max(30).required().strict().messages({
    "string.max": "max 30 characters",
    "string.min": "min 6 characters",
    "string.empty": "required",
  }),
  confirmPwd: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .strict()
    .messages({
      "string.empty": "required",
      "any.only": "passwords don't match",
    }),
});
