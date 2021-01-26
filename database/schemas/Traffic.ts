import { LeanDocumentOrArray, Model, model, Schema } from "mongoose";
import { ITrafficDocument } from "../../types";
import { ITrafficModel } from "../../types/ITrafficDocument";
import { Maybe } from "../../util";

export const schema: Schema = new Schema(
    {
        ip: String,
        lastRequest: {
            type: Date,
            expires: 3600
        }
    },
    {
        collection: "traffic"
    });

schema.statics.findForIp = function (this: ITrafficModel, ip: string): Promise<LeanDocumentOrArray<ITrafficDocument | null>> {
    return this.findOne({ ip: ip }).lean().exec();
};

schema.statics.updateRequestTime = function (this: ITrafficModel, ip: string, time: Date = new Date()): Promise<any> {
    return this.updateOne({ip: ip},{lastRequest: time}, {upsert: true}).exec();
};

export const Traffic: ITrafficModel = model<ITrafficDocument, ITrafficModel>("Traffic", schema);
