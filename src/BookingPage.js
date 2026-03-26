import BookingsForm from './BookingsForm.js'

let BookingPage = (props) => {
    return (<>
        <BookingsForm
            availableTimes={props.availableTimes}
            dispatch={props.dispatch}
            formData={props.formData}
            setFormData={props.setFormData}
            submitForm={props.submitForm}
        ></BookingsForm>
    </>)
}

export default BookingPage