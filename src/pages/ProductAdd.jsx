import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 0 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur")

    })
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {

                console.log(values)

            }}
        >
            {props => (
                <Form className='ui form' onSubmit={props.handleSubmit}>
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                    <Button color='green' type='submit' > Ekle</Button>
                </Form>
            )}
        </Formik>

    )
}

