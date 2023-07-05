import * as yup from "yup";

export const courseValidationSchema = yup.object({
  name: yup.string().required("name is required"),
  description: yup.string().max(500).optional(),
  thumbnail: yup.string().url().optional(),
});
