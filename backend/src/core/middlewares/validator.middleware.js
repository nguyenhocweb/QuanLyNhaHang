// src/middlewares/validator.middleware.js
import { asyncHandler } from '../utils/asyncHandler.js';

export const validate = (schema) => asyncHandler(async (req, res, next) => {
    // Dùng parseAsync thay vì parse
    // Nếu có lỗi, Zod sẽ ném ra ZodError -> asyncHandler sẽ bắt và đẩy về error.middleware
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
});
