import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { DateTime } from "luxon";

//Still need USER ARRAY and eventHead : USER
const EventSchema = new Schema({
  title: { type: String },
  startTime: { type: Date },
  endTime: { type: Date },
  description: { type: String },
  location: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date },
  eventHead: { type: Schema.Types.ObjectId, ref: "User" },
});

EventSchema.virtual("url").get(function () {
  return `/events/${this._id}`;
});

EventSchema.virtual("startTimeFormatted").get(function () {
  return DateTime.fromJSDate(this.startTime).toLocaleString(DateTime.DATE_MED);
});

EventSchema.virtual("startTimeFormatted").get(function () {
  return DateTime.fromJSDate(this.endTime).toLocaleString(DateTime.DATE_MED);
});

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;
