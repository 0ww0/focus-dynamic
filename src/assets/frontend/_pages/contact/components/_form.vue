<template lang="pug">
    formgroup(formHeader)
        formgroup
            formtextlabel
                formname(name = 'Name')
                formplaceholder(name = 'Name')
                formtextinput(
                    v-model = 'form.name',
                    :error = 'validate.name'
                )
                formvalidate(
                    v-if = 'validate.name',
                    :text = 'validate.text_name',
                    :error = 'validate.name'
                )
        formgroup
            formtextlabel
                formname(name = 'Email')
                formplaceholder(name = 'Email')
                formtextinput(
                    v-model = 'form.email',
                    :error = 'validate.email'
                )
                formvalidate(
                    v-if = 'validate.email',
                    :text = 'validate.text_email',
                    :error = 'validate.email'
                )
        formgroup
            formtextlabel
                formname(name = 'Phone Number')
                formplaceholder(name = 'Phone Number')
                formtextinput(
                    v-model = 'form.phone',
                    :error = 'validate.phone'
                )
                formvalidate(
                    v-if = 'validate.phone',
                    :text = 'validate.text_phone',
                    :error = 'validate.phone'
                )
        formgroup
            formtextlabel
                formname(name = 'Message')
                formplaceholder(name = 'Message')
                formtextarea(
                    v-model = 'form.message',
                    :error = 'validate.message'
                )
                formvalidate(
                    v-if = 'validate.message',
                    :text = 'validate.text_message',
                    :error = 'validate.message'
                )
        formgroup
            formbutton(name = 'Send Message', @click.native = 'onSubmit()')
        formgroup
            formvalidate(
                v-if = 'validate.general_error',
                :text = 'validate.text_general_error',
                :error = 'validate.general_error'
            )
</template>

<script>
    import { API, EntryAPI }  from '../api/_form.js'
    import formgroup from '../../../_components/form/fieldset/_group.vue'
    import formname from '../../../_components/form/fieldset/_name.vue'
    import formplaceholder from '../../../_components/form/fieldset/_placeholder.vue'
    import formbutton from '../../../_components/form/fieldset/_button.vue'
    import formtextlabel from '../../../_components/form/text/_label.vue'
    import formtextinput from '../../../_components/form/text/_input.vue'
    import formtextarea from '../../../_components/form/text/_area.vue'
    import formvalidate from '../../../_components/form/validate/_validate.vue'

    export default {
        components : {
            formgroup,
            formname,
            formplaceholder,
            formbutton,
            formtextlabel,
            formtextinput,
            formtextarea,
            formvalidate
        },

        computed : {
            form () {
                return this.$store.getters.form;
            },

            validate () {
                return this.$store.getters.validate;
            },
        },

        methods : {
            onSubmit() {

                let validate = {
                    name : false,
                    text_name : '',
                    email : false,
                    text_email : '',
                    phone : false,
                    text_phone : '',
                    message : false,
                    text_message : '',
                }

                if(this.form.name === '') {
                    validate.name = true;
                    validate.text_name = 'Field cannnot be blank';
                } else {
                    validate.name = false;
                    validate.text_name = '';
                }

                if(this.form.email === '') {
                    validate.email = true;
                    validate.text_email = 'Field cannnot be blank';
                } else {
                    validate.email = false;
                    validate.text_email = '';
                }

                if(this.form.phone === '') {
                    validate.phone = true;
                    validate.text_phone = 'Field cannnot be blank';
                } else {
                    validate.phone = false;
                    validate.text_phone = '';
                }

                if(this.form.message === '') {
                    validate.message = true;
                    validate.text_message = 'Field cannnot be blank';
                } else {
                    validate.message = false;
                    validate.text_message = '';
                }

                this.$store.dispatch('updateState', {
                    key : 'validate',
                    value : validate
                });
                

                API.post(EntryAPI, {
                    data : {
                        name: this.form.name,
                        email: this.form.email,
                        phone: this.form.phone,
                        message: this.form.message,
                    }
                }).then(resp => {
                    console.log(resp)
                }).catch(err => {
                    console.log(err)
                })
            },
        }
    }
</script>
