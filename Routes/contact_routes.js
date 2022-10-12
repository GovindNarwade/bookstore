const express = require("express")
const {GetAllContactDetails,CreateContactDetails,deleteContactDetails} = require("../controller/contact_controller")
const {emailSendforEnquiry} = require("../controller/enquiryEmail")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     contact:
 *       type: object
 *       required:
 *         - ContactId
 *         - Name
 *         - Email
 *         - Mobile
 *         - Message
 *       properties:
 *         ContactId:
 *           type: string
 *           description: ContactId
 *         Name :
 *           type: string
 *           description: Name
 *         Email:
 *           type: string
 *           description: contact@gmail.com
 *         Mobile:
 *           type: integer
 *           description: Mobile
 *         Message:
 *           type: string
 *           description: Message
 *       example:
 *         ContactId : Autogenerated
 *         Name: jhon Deo
 *         Email: jhon@gmail.com
 *         Mobile: 9874561230
 *         Message: Message
 *        
 *
 */

/**
 * @swagger
 * /api/v1/admin/GetAllContactDetails:
 *   get:
 *     summary: Get All Contact Details
 *     tags: [contact]
 *     responses:
 *       200:
 *         description: Get All Contact Details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/contact'
 */
router.route("/GetAllContactDetails").get(GetAllContactDetails)
/**
 * @swagger
 * /api/v1/CreateContactDetails:
 *   post:
 *     summary: CreateContactDetails
 *     tags: [contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contact'
 *     responses:
 *       200:
 *         description: a contact create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contact'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateContactDetails").post(CreateContactDetails)
/**
 * @swagger
 * /api/v1/deleteContactDetails/{ContactId}:
 *   delete:
 *     summary: Delete an deleteContactDetails
 *     tags: [contact]
 *     parameters:
 *         - in: path
 *           name: ContactId
 *           required: true
 *           description: ContactId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: ContactDetails delete successfully
 *   
 */
 router.route("/deleteContactDetails/:ContactId").delete(deleteContactDetails)
 router.route("/emailSendforEnquiry").post(emailSendforEnquiry)

module.exports = router

