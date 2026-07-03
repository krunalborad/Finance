const prisma = require("../utils/prisma");


// CREATE RECORD
exports.createRecord = async (req, res) => {
 try {

  const record = await prisma.record.create({
   data: {
    amount: req.body.amount,
    type: req.body.type,
    category: req.body.category,
    notes: req.body.notes,
    date: req.body.date ? new Date(req.body.date) : new Date()
   }
  });

  res.json(record);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }
};



// GET ALL RECORDS (WITH FILTER)
exports.getRecords = async (req, res) => {

 try {

  const { type, category } = req.query;

  const records = await prisma.record.findMany({
   where: {
    type: type || undefined,
    category: category || undefined
   },
   orderBy: {
    date: "desc"
   }
  });

  res.json(records);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};



// UPDATE RECORD
exports.updateRecord = async (req, res) => {

 try {

  const { id } = req.params;

  const record = await prisma.record.update({
   where: { id: Number(id) },
   data: {
    amount: req.body.amount,
    type: req.body.type,
    category: req.body.category,
    notes: req.body.notes,
    date: req.body.date ? new Date(req.body.date) : undefined
   }
  });

  res.json(record);

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};



// DELETE RECORD
exports.deleteRecord = async (req, res) => {

 try {

  const { id } = req.params;

  await prisma.record.delete({
   where: { id: Number(id) }
  });

  res.json({ message: "Record deleted successfully" });

 } catch (error) {
  res.status(500).json({ error: error.message });
 }

};