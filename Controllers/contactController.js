// All the shit and mess is here
//this is the most hated file ever :'( :'(

const contactModel = require("../model/contactModel");

exports.PostContact = async (req, res) => {
  const { Firstname, Lastname, email, phone } = req.body;
  if (!email || !Firstname) {
    res.status(400).send({ msg: "Contact name and email are required" });
    return;
  }
  const Exist = await contactModel.findOne({ email });
  if (Exist) {
    res.status(400).send({ msg: "User already exist" });
    return;
  }

  try {
    const newContact = new contactModel({ Firstname, Lastname, email, phone });
    await newContact.save();
    res.status(200).send({ msg: "Contact created successfully", newContact });
  } catch (error) {
    res.status(400).send({ msg: "try again", error });
  }
};
exports.GetContact = async (req, res) => {
  console.log(req.params);
  try {
    const contactSearched = await contactModel.findOne(req.params);

    res.status(200).send({ contactSearched });
  } catch (error) {
    res.status(400).send({ msg: "contact doesnt exist try again", error });
  }
  if (!contactSearched.Firstname) {
    res.status(400).send({ msg: "", error });
    return;
  }
};
exports.DeleteContact = async (req, res) => {
  try {
    await contactModel.deleteOne(req.params);
    res.status(200).send({ msg: "contact deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: "can't delete contact please verify ID" });
  }
};
exports.UpdateContact = async (req, res) => {
  const { Firstname, Lastname, email, phone } = req.body;

  try {
    await contactModel.updateOne(req.params, {
      $set: {
        Firstname: Firstname,
        Lastname: Lastname,
        email: email,
        phone: phone,
      },
    });
    const contactUpdated = await contactModel.findOne(req.params);
    res
      .status(200)
      .send({ msg: "contact updated successfully", contactUpdated });
  } catch (error) {
    res.status(400).send({ msg: "can't update contact please verify ID" });
  }
};
