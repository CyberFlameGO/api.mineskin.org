import { Document, model } from "mongoose";

export enum SkinModel {
    UNKNOWN = "unknown",
    CLASSIC = "steve",
    SLIM = "slim",
}

export enum SkinVisibility {
    PUBLIC = 0,
    PRIVATE = 1,
}

export interface Skin extends Document {
    id: number | any;
    hash: string;
    name: string;
    uuid: string;
    model: SkinModel | any;
    visibility: SkinVisibility;
    value: string;
    signature: string;
    url: string;
    skinId: string;
    skinTextureId: string;
    textureHash: string;
    capeUrl: string;
    time: number;
    generateDuration: number;
    account: number;
    type: string;
    duplicate: number;
    views: number;
    via: string;
    server: string;
    ua: string;
    apiVer: string;
    testerRequest: boolean;
    testerMismatchCounter: number;


}
