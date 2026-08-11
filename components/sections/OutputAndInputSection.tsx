import React from 'react'
import InputField from '../feature/InputField';

const OutputAndInputSection = () => {
  return (
    <section className=''>
      <div className="mb-8">
        <h3 className="text-lg font-medium">
            Convert Your Configuration
        </h3>
        <p className="mt-2 text-sm text-muted">
            Past your configuration file below, choose the output format, and convert in instantly in your browser.
        </p>
      </div>
      <InputField/>
    </section>
  )
}

export default OutputAndInputSection; 