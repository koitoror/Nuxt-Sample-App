<template>
    <v-flex>                                
        <component :is="item.type" :label="item.text" v-for="(item, i) in fields" :key="i" v-model="values[item.meta_id]">
            <component v-if="item.children && item.children.length > 0" :is="children.type" :value="children.value" :label="children.text" v-for="(children, j) in item.children" :key="j"/>
        </component>

        {{ JSON.stringify(values) }}
    </v-flex>
</template>


<script>

    export default {
        data(){
            return {
                values: {
                    csp_address: 'default value',
                    csp_name: 'default value',
                    csp_gender: 'male',
                    csp_aggree: true
                },
                fields: [
                    {
                        type: 'v-text-field',
                        text: 'CSP Address',
                        meta_id: 'csp_address'
                    },
                    {
                        type: 'v-text-field',
                        text: 'CSP Name',
                        meta_id: 'csp_name'
                    },
                    {
                        type: 'v-radio-group',
                        text: 'CSP Gender',
                        children: [
                            {
                                type: 'v-radio',
                                value: 'male',
                                text: 'Male',
                            },
                            {
                                type: 'v-radio',
                                value: 'female',
                                text: 'Female',
                            }
                        ],
                        meta_id: 'csp_gender'
                    },
                    {
                        type: 'v-checkbox',
                        text: 'CSP Agree',
                        meta_id: 'csp_aggree'
                    }
                ]
            }
        }
    }
</script>