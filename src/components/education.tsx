import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Education = () => {
  let education = [
    {
      uniName: "University Of Karachi",
      date: "April 2023",
      field: 'BS Accounts',
      details: 'I earned my Bachelor of Science (BS) degree in Accounts from the University of Karachi. I completed my degree from 2021 to 2023. Throughout my two-year program. I excelled in relevant coursework, including Enterpenuer Communication Finance and Advanced Accounting etc. Notably, I achieved a very good GPA and successfully completed my BS Degreee.'
    },
    {
      uniName: "University Of Karachi",
      date: "December 2020",
      field: 'Graduation',
      details: 'I earned my Bachelor of Commerce (B.Com) degree from the University of Karachi. I completed my degree from 2018 to 2020. Throughout my two-year program. I excelled in relevant coursework, including Accounts Maths Economics English Commercial etc. I achieved first division and successfully completed my Graduation Degreee.'
    },
    {
      uniName: "Govt.College For Commerce and Economics",
      date: "May 2017",
      field: 'Intermediate',
      details: 'I earned my Intermediate degree from the Govt.Commerce College. I completed my degree from 2015 to 2017. Throughout my two-year program. I excelled in relevant coursework, including English Business Mathematics POC Banking Economics etc. I achieved a very good grade and successfully completed my Inter Degreee.'
    },
    {
      uniName: "B.M.B Toddlers Girls Secondary School",
      date: "April 2014",
      field: 'Matriculaion',
      details: 'I earned my Matriculation certificate from B.M.B Toddlers girls school. I completed my matic from 2012 to 2014. Throughout my two-year program. I excelled in relevant coursework, including English Urdu Maths Islamiat Commercial etc. I achieved a very good percentage and successfully completed my Matriculation Degreee.'
    }
  ]

  return (
    <Card data-aos="zoom-in" className='h-[85vh] overflow-y-auto bg-slate-100'>
      <CardHeader>
        <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.uniName}
                </h2>
                <p className="leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}

export default Education