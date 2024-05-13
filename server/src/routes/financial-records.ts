import express, { Request, Response } from "express";
import FinancialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getallbyuserid/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await FinancialRecordModel.find({ userId: userId });
    if (!records.length) {
      return res.status(404).send("No records found for the user.");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new FinancialRecordModel(newRecordBody);
    const savedRecord = await newRecord.save();

    res.status(201).send(savedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newRecordBody = req.body;
    const updatedRecord = await FinancialRecordModel.findByIdAndUpdate(
      id,
      newRecordBody,
      { new: true }
    );

    if (!updatedRecord) return res.status(404).send();

    res.status(200).send(updatedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedRecord = await FinancialRecordModel.findByIdAndDelete(id);

    if (!deletedRecord) {
      return res.status(404).send("Record not found.");
    }

    res.status(200).send(deletedRecord);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
