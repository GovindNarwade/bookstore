const express = require("express")
const {emailSendforAdmin,changePasswordforAdmin} = require("../controller/forgotPasswordforAdmin")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - Email
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *       example:
 *         Email: admin@gmail.com
 *        
 *
 */
/**
 * @swagger
 * /api/v1/emailSendforAdmin:
 *   post:
 *     summary: Email Send for forgot Password
 *     tags: [admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: otp send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Some server error
 */
router.route("/emailSendforAdmin").post(emailSendforAdmin)
/**
 * @swagger
 * components:
 *   schemas:
 *     admin1:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - otp
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         otp:
 *           type: integer
 *           description: otp
 *       example:
 *         Email: admin@gmail.com
 *         Password: 12345
 *         otp: 9874
 *
 */
/**
 * @swagger
 * /api/v1/changePasswordforAdmin:
 *   post:
 *     summary: change Password for Admin
 *     tags: [admin]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin1'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin1'
 *       500:
 *         description: Some server error
 */
router.route("/changePasswordforAdmin").post(changePasswordforAdmin)
module.exports = router
