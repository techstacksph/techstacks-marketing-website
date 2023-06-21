import { useId } from 'react'
import { HeaderSix, Wrapper } from '../../layout'
import { Form, Formik, Field as FormikField } from 'formik'
import { object, string } from 'yup'
import SEO from '../../components/seo'

const FormNames = {
  Name: 'name',
  School: 'school',
  Email: 'email',
  How: 'how',
}

const FIELDS = [
  ['Name', FormNames.Name],
  ['School', FormNames.School],
  ['E-mail', FormNames.Email],
  [
    'How did you hear about our OJT Program?',
    FormNames.How,
    ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
  ],
]

const validationSchema = object({
  [FormNames.Name]: string().required().label('Name'),
  [FormNames.School]: string().required().label('School'),
  [FormNames.Email]: string().required().label('Email'),
  [FormNames.How]: string().required('This field is required'),
})

export default function JoinPage() {
  return (
    <Wrapper>
      <SEO pageTitle="Inquire" />
      <HeaderSix />
      <div className="ojt-join-page-root">
        <div className="ojt-join-page-wrapper">
          <div className="ojt-join-page-title">
            <h1 className="text-center">
              Need Assistance? Get in touch to learn more about our OJT Program
            </h1>
            <p className="text-center">
              Reach out to us today to initiate a discussion and explore how our
              OJT program can meet your requirements and support your
              team&apos;s growth.
            </p>
          </div>

          <Formik
            initialValues={{
              [FormNames.Name]: '',
              [FormNames.School]: '',
              [FormNames.Email]: '',
              [FormNames.How]: '',
            }}
            validationSchema={validationSchema}
            onSubmit={console.log} // TODO action
          >
            {({ errors }) => (
              <Form className="ojt-join-page-form">
                <p className="text-center">
                  We&apos;re eager to hear from you! Fill out the form below,
                  and we&apos;ll reach out to you at our earliest convenience.
                </p>

                <div className="field-container">
                  {FIELDS.map(([label, name, options], i) => (
                    <Field
                      name={name}
                      label={label}
                      key={i}
                      options={options}
                      error={errors[name]}
                    />
                  ))}
                </div>

                <button type="submit" className="tp-btn">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Wrapper>
  )
}

const Field = ({ name, label, options, error }) => {
  const id = useId()

  return (
    <label className="w-100 field" htmlFor={id}>
      <div className="label-text">{label}</div>

      <div className="text-field-container">
        <FormikField
          name={name}
          id={id}
          className="form-control w-100"
          as={options ? 'select' : undefined}
        >
          {options && (
            <>
              <option value="" disabled>
                Choose...
              </option>
              {options.map((option, i) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
            </>
          )}
        </FormikField>
        {error && <div className="text-field-error">{error}</div>}
      </div>
    </label>
  )
}
