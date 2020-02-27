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
            formvalidate
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

                if(this.form.nric === '') {
                    this.validate.nric = true;
                    this.validate.text_nric = 'Field cannnot be blank';
                    return false
                } else {
                    this.validate.nric = false;
                    this.validate.text_nric = '';
                }

                if(this.form.phone === '') {
                    this.validate.phone = true;
                    this.validate.text_phone = 'Field cannnot be blank';
                    return false
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
                    dob: '',
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
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
