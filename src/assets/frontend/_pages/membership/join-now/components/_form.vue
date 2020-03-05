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
                formname(name = 'NRIC no.')
                formplaceholder(name = 'NRIC no.')
                formtextinput(
                    v-model = 'form.nric',
                    :error = 'validate.nric'
                )
                formvalidate(
                    v-if = 'validate.nric',
                    :text = 'validate.text_nric',
                    :error = 'validate.nric'
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
        formgroup(direction = 'column')
            formtextlabel
                formname(name = 'Date Of Birth')
                formplaceholder(name = 'Date Of Birth')
            datepicker(
                input-class = "input-datepicker"
                format="dd-MM-yyyy"
                v-model = 'form.dob',
                :bootstrap-styling = 'true'
                :use-utc = 'true'
            )
            formvalidate(
                v-if = 'validate.dob',
                :text = 'validate.text_dob',
                :error = 'validate.dob'
            )
        formgroup
            formtextlabel
                formname(name = 'Gender')
                formradiolabel
                    input.input-radiobox(type = 'radio', name = 'gender', value = 'Male', v-model = 'form.gender')
                    formradioicon
                    formname(name = 'Male')
                formradiolabel
                    input.input-radiobox(type = 'radio', name = 'gender', value = 'Female', v-model = 'form.gender')
                    formradioicon
                    formname(name = 'Female')
                formvalidate(
                    v-if = 'validate.gender',
                    :text = 'validate.text_gender',
                    :error = 'validate.gender'
                )
        formgroup
            formbutton(name = 'Submit', @click.native = 'onSubmit()', color = 'theme')
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
    import formgroup from '../../../../_components/form/fieldset/_group.vue'
    import formname from '../../../../_components/form/fieldset/_name.vue'
    import formplaceholder from '../../../../_components/form/fieldset/_placeholder.vue'
    import formbutton from '../../../../_components/form/fieldset/_button.vue'

    import formtextlabel from '../../../../_components/form/text/_label.vue'
    import formtextinput from '../../../../_components/form/text/_input.vue'
    import formtextarea from '../../../../_components/form/text/_area.vue'

    import formradiolabel from '../../../../_components/form/radiobox/_label.vue'
    import formradioinput from '../../../../_components/form/radiobox/_input.vue'
    import formradioicon from '../../../../_components/form/radiobox/_icon.vue'

    import formvalidate from '../../../../_components/form/validate/_validate.vue'
    import datepicker from 'vuejs-datepicker';

    export default {
        components : {
            formgroup,
            formname,
            formplaceholder,
            formbutton,
            formtextlabel,
            formtextinput,
            formtextarea,
            formradiolabel,
            formradioinput,
            formradioicon,
            formvalidate,
            datepicker,
        },

        data() {
            return {
                validate: {
                   name : false,
                   text_name : '',
                   nric : false,
                   text_nric : '',
                   phone : false,
                   text_phone : '',
                   email : false,
                   text_email : '',
                   dob : false,
                   text_dob : '',
                   gender : false,
                   text_gender : '',

                   general: false,
                   text_general: '',
               },
            }
        },

        computed : {
            form () {
                return this.$store.getters.form;
            },

            formatDate(date) {
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

                if(this.form.nric === '') {
                    this.validate.nric = true;
                    this.validate.text_nric = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.nric = false;
                    this.validate.text_nric = '';
                }

                if(this.form.nric !== '') {
                    let regex = /(([[0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]))-([0-9]{2})-([0-9]{4})$/g;
                    if(!regex.test(this.form.nric)){
                        this.validate.nric = true;
                        this.validate.text_nric = 'Please provide a valid NRIC no. Ex: YYMMDD-XX-XXXX'
                        return false
                    }
                } else {
                    this.validate.phone = false;
                    this.validate.text_phone = '';
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

                if(this.form.dob === '') {
                    this.validate.dob = true;
                    this.validate.text_dob = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.dob = false;
                    this.validate.text_dob = '';
                }

                if(this.form.gender === '') {
                    this.validate.gender = true;
                    this.validate.text_gender = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.gender = false;
                    this.validate.text_gender = '';
                }

                return true
            },

            clearform() {

                let form = {
                    name : '',
                    nric : '',
                    phone : '',
                    email : '',
                    dob : {},
                    gender: '',
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
                        nric: this.form.nric,
                        phone: this.form.phone,
                        email: this.form.email,
                        dob: this.form.dob,
                        gender: this.form.gender
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../../style/config.scss';
    /deep/ .vdp-datepicker {
        width: 100%;
    }

    /deep/ input.input-datepicker {
        @include fs(14)
        width: 100%;
        padding: 5px 12px;
        border: 1px solid;
        border-radius: 5px;
        outline: none;
        border-color: #dadada;
    }
</style>
