import { useState } from 'react'

function BMIResult({bmi,category}){
    return (
    <div className='mt-4 p-4 rounded-lg '>
      <p className=' text-lg font-bold'>Your BMI is:{bmi}</p>
      <p className=' text-lg font-bold'>Your Category is:{category}</p>
    </div>

    );
}
export default BMIResult;