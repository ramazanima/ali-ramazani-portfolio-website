
import { uploadImage } from '@/app/_actions';
import { isAcceptedFileType } from '@/lib/utils';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineUpload } from 'react-icons/ai';
import { AcceptedFileTypes, ImageType } from '../../../../types';

type Props = {
  imagesToUpload: Array<ImageType>,
  setImagesToUpload: any
  setError: any
  setLoading: any
  setShouldUpdate:any
}

export const AddImage = ({ imagesToUpload, setImagesToUpload, setError, setLoading,setShouldUpdate }: Props) => {
  const imageValidate = async (files: Array<File>) => {
    for (const file of files) {
      if (!isAcceptedFileType(file.type as AcceptedFileTypes)) return setError('Invalid File type')
    }
    saveImages(files);
  };

  async function saveImages(files: Array<File>) {
    setLoading(true)
    let dbTypeImages: Array<ImageType> = []
    for (const each of files) {

      const res = await uploadImage(each)
      if (res?.secure_url){
        dbTypeImages.push({
          name: each.name,
          image: res?.secure_url
        })
      }
    }
    if(dbTypeImages?.length) setShouldUpdate(true)

    const combined = [...imagesToUpload, ...dbTypeImages]

    setImagesToUpload(combined)
    setLoading(false)
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    imageValidate(acceptedFiles);
  }, []);

  const { getRootProps } = useDropzone({
    onDrop,
    disabled: false,
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          {...getRootProps()}
          className="border-3 w-full cursor-pointer rounded-md border-dashed border-gray-300 bg-white px-20 py-14 shadow-md hover:border-gray-500 hover:bg-gray-200 md:mx-10"
        >
          <div className="mx-auto w-full" style={{ maxWidth: '100px' }}>
            <AiOutlineUpload />
          </div>

          <p className="mb-0 mt-1 text-center text-sm font-medium">
            Drag and Drop here or click to upload images
          </p>
        </div>
      </div>
    </>
  );
};