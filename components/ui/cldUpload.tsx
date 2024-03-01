"use client"
import { CldUploadWidget } from 'next-cloudinary';
import React, { useEffect, useState } from 'react'
import { Button } from './button';

interface CldUploudProps{
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const CldUpload: React.FC<CldUploudProps> = ({
  disabled,
  onChange,
  onRemove,
  value
}) => {

  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  }

  if(!isMounted){
    return null;
  }

  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {
          value.map((url) => (
            <div key={url} className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
              <div className='z-10 absolute top-2 right-2'>
                <Button className='h-4 w-4 text-xs' onClick={() => onRemove(url)} variant="destructive" size="icon">
                  Delete
                </Button>
              </div>
              <img src={url} alt="product-img" className='object-cover' />
            </div>
          ))
        }
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="pvncsyt5">
      {({ open }) => {
        const onClick = () => {
          open();
        }
        return (
          <Button type='button' variant="outline" disabled={disabled} onClick={onClick}>
            Upload an image
          </Button>
        );
      }}
    </CldUploadWidget>
    </div>
  )
}

export default CldUpload;