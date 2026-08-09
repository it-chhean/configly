import React from 'react'
import InputField from '../feature/InputField';

const OutputAndInputSection = () => {
  return (
    <section className='my-9'>
      <div className="mb-8">
        <h3 className="text-lg font-medium">
          Why Choose Converter Config file?
        </h3>
        <p className="mt-2 text-sm text-muted">
          Convert configuration files between popular formats with fast, secure, browser-based processing. No uploads, no servers, no data leaves your device.
        </p>
      </div>
      <InputField/>
    </section>
  )
}

export default OutputAndInputSection; 