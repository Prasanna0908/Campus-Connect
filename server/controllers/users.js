const { body, validationResult } = require('express-validator/check');
const { login, createAuthToken } = require('../auth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.login = (req, res, next) => {
  // const result = validationResult(req);


  // if (!result.isEmpty()) {
  //   const errors = result.array({ onlyFirstError: true });
  //   return res.status(422).json({ errors });
  // }

  console.log(req.body)

  login(req, res, next);
};

exports.register = async (req, res, next) => {
  // const result = validationResult(req);
  // if (!result.isEmpty()) {
  //   const errors = result.array({ onlyFirstError: true });
  //   return res.status(422).json({ errors });
  // }

  try {
    
    const { username, password, Email } = req.body;
    const user = await User.create({ username, password, email:Email});
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "sidkakela@gmail.com",
        pass: "sidkela123" 
      }
    });
    try {
        const emailToken = jwt.sign(
          {
            user: user.username,
          },
          "%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7",
          {
            expiresIn: '1d',
          },
        );

        const url = `http://localhost:8080/api/confirmation/${emailToken}`;

        await transporter.sendMail({
          to: "sidkakela@gmail.com",
          subject: 'Confirm Email',
          html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
        });

        const token = createAuthToken(user.toJSON());
        res.status(201).json({ token });
      } catch (e) {
    next(e);

        console.log(e);
      }

    
  } catch (err) {
    next(err);
  }
};

exports.validate = method => {
  const errors = [
    body('username')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ max: 32 })
      .withMessage('must be at most 32 characters long')

      .custom(value => value.trim() === value)
      .withMessage('cannot start or end with whitespace')

      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('contains invalid characters'),

    body('password')
      .exists()
      .withMessage('is required')

      .isLength({ min: 1 })
      .withMessage('cannot be blank')

      .isLength({ min: 8 })
      .withMessage('must be at least 8 characters long')

      .isLength({ max: 72 })
      .withMessage('must be at most 72 characters long')
  ];

  if (method === 'register') {
    errors.push(
      body('username').custom(async username => {
        const exists = await User.countDocuments({ username });
        if (exists) throw new Error('already exists');
      })
    );
  }

  return errors;
};
