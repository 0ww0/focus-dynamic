<template lang="pug">
    formgroup(formHeader)
        formgroup.title
            p Feedback
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
                formname(name = 'Email Address')
                formplaceholder(name = 'Email Address')
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
                formselect(
                    v-model='form.subject',
                    :error = 'validate.subject'
                )
                    option(hidden, value = '', disabled) Select Subject
                    option General
                    option Membership
                formvalidate(
                    v-if = 'validate.subject',
                    :text = 'validate.text_subject',
                    :error = 'validate.subject'
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
            formbutton(name = 'Send Message', @click.native = 'onSubmit()', color = 'theme')
        formgroup
            formvalidate(
                v-if = 'validate.general',
                :text = 'validate.text_general',
                :error = 'validate.general',
                success
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
                   subject : false,
                   text_subject : '',

                   general: false,
                   text_general: '',
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

                if(this.form.email !== '') {
                    let regex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                    if(!regex.test(this.form.email)){
                        this.validate.email = true;
                        this.validate.text_email = 'Please provide a valid email address'
                        return false
                    }
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

                if(this.form.phone !== '') {
                    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gmi;
                    if(!regex.test(this.form.phone)){
                        this.validate.phone = true;
                        this.validate.text_phone = 'Please provide a valid phone number. Ex: 60123456789 / 0123456789'
                        return false
                    }
                } else {
                    this.validate.phone = false;
                    this.validate.text_phone = '';
                }

                if(this.form.subject === '') {
                    this.validate.subject = true;
                    this.validate.text_subject = 'Please select an option';
                    return false
                } else {
                    this.validate.subject = false;
                    this.validate.text_subject = '';
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

            clearform() {

                let form = {
                    name : '',
                    email : '',
                    phone : '',
                    message : '',
                    subject : '',
                }

                this.$store.dispatch('updateStateObject', {
                    key : 'form',
                    value : form
                });
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
                        subject: this.form.subject,
                        message: this.form.message,
                    }
                }).then(resp => {
                    let self = this
                    self.validate.general = true;
                    self.validate.text_general = 'Form submit successfully';
                    self.clearform()

                    setTimeout(function(){
                        self.validate.general = false;
                        self.validate.text_general = '';
                    }, 4000);
                }).catch(err => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../style/config.scss';

    .title {
        @include fs(14)
        @include weight(500)
        margin-bottom: 10px;
    }
</style>
