export const state = {
    form : {
        name : '',
        email : '',
        phone : '',
        message : '',
        subject: '',
    },

    validate: {
        name : false,
        text_name : '',
        email : false,
        text_email : '',
        phone : false,
        text_phone : '',
        message : false,
        text_message : '',
        subject: false,
        text_subject: '',

        general_error : false,
        text_general_error : '',
    }
}
