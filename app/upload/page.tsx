'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
    {publicId && <CldImage src='{publicId}' alt='test' width='100' height='100' />}
    <CldUploadWidget
      uploadPreset="bxywgz1v"
      onUpload={(result, widget) => {
        if (result.event !== 'success') return;
        const info = result.info as CloudinaryResult;
        setPublicId(info.public_id);
      }}>
      {({ open }) =>
        <button
          className='btn btn-primary'
          onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage