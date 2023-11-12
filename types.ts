export type CategoryType = {
    title: string;
    _id: string;
}

export type ImageType={
    image: string, // casted to MongoDB's BSON type: binData,
    _id?:string
    name:string
}

export type ProjectType = {
    title: string;
    para1: string;
    para2: string;
    role: string;
    deliverables: string
    images: Array<ImageType>
    category: CategoryType;
    _id?: string;
}
export type ProjectTypeSave = {
    title: string;
    para1: string;
    para2: string;
    role: string;
    deliverables: string
    images: Array<ImageType>
    category: string;
    _id?: string;
}

export enum AcceptedFileTypes {
    PNG = 'image/png',
    JPEG = 'image/jpeg',
    JPG = 'image/jpg',
  }