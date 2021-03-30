//here we're going to create our routes in order to keep our server clean
//NB: even this part won't be as messy as the controllers :')
const express = require("express");
const {
  PostContact,
  GetContact,
  DeleteContact,
  UpdateContact,
} = require("../Controllers/contactController");

//straight to the shit now
router = express.Router();
/**
 *  @desc : add Contacts
 * @path : http://localhost:5000/api/contact
 * @method : post
 * @data : req.body
 * @access : public
 */
router.post("/", PostContact);
/**
 *  @desc : get Contacts
 * @path : http://localhost:5000/api/contacts
 * @method : put
 * @data : req.params._id
 * @access : public
 */
router.get("/:_id", GetContact);
/**
 *  @desc : Delete Contacts
 * @path : http://localhost:5000/api/contact
 * @method : delete
 * @data : req.params._id & req.body
 * @access : public
 */
router.delete("/:id", DeleteContact);
/**
 *  @desc : Update Contacts
 * @path : http://localhost:5000/api/contact
 * @method : put
 * @data : req.params._id & req.body
 * @access : public/private
 */
router.put("/:_id", UpdateContact);
module.exports = router;
