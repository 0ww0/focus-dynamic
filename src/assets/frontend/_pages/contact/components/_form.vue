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
                formname(name = 'Subject')
                formselect(v-model='form.subject')
                    option(disabled, value = '') Select Subject
                    option General
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
    import formselect from './../../../_components/form/select/_select.vue'
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
            formselect,
            formtextlabel,
            formtextinput,
            formtextarea,
            formvalidate
        },

        data() {
            return {
                validate: {
                   name : false,
                   text_name : '',
                   email : false,
                   text_email : '',
                   phone : false,
                   text_phone : '',
                   message : false,
                   text_message : '',

                   general_error: false,
                   text_general_error: ''
               }
            }
        },

        computed : {
            form () {
                return this.$store.getters.form;
            },
        },

        methods : {
            validation() {
                if(this.form.name === '') {
                    this.validate.name = true;
                    this.validate.text_name = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.name = false;
                    this.validate.text_name = '';
                }

                if(this.form.email === '') {
                    this.validate.email = true;
                    this.validate.text_email = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.email = false;
                    this.validate.text_email = '';
                }

                if(this.form.phone === '') {
                    this.validate.phone = true;
                    this.validate.text_phone = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.phone = false;
                    this.validate.text_phone = '';
                }

                if(this.form.message === '') {
                    this.validate.message = true;
                    this.validate.text_message = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.message = false;
                    this.validate.text_message = '';
                }

                return true
            },

            onSubmit() {
                if(!this.validation()) {
                    return
                }

                API.post(EntryAPI, {
                    data : {
                        name: this.form.name,
                        email: this.form.email,
                        phone: this.form.phone,
                        message: this.form.message,
                        subject: this.form.subject,
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
