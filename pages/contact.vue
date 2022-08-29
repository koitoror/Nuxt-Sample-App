<template>
    <v-layout
        column
        justify-center
        align-center
    >
    <v-container>
        <v-row>
           <v-col align="center">
               <!-- <img src="~/assets/logo_page.png" height="100" alt=""> -->
               <h1> CONTACT US </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="6">
                <v-card outlined>
                    <v-card-title>
                        <v-row>
                            <v-col align="center" class="text">
                                Write Message ...
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-col align="centered">

                        </v-col>
                        <v-row align="center">
                            <v-col md="6">
                                <v-text-field
                                    label="First Name"
                                    v-model="nom"
                                    outlined
                                ></v-text-field>
                            </v-col>
                            <v-col md="6">
                                <v-text-field
                                    label="Last Name"
                                    v-model="prenom"
                                    outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="center">
                                <v-text-field
                                    label="Email Address"
                                    v-model="email"
                                    outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="center">
                                <v-textarea
                                outlined
                                clearable
                                counter
                                v-model="message"
                                label="Your message here..."
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                            <v-col align=center>
                                <v-btn width="80%" dark>
                                    Send
                                </v-btn>
                            </v-col>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card
                dark
                elevation-1
                >
                <v-card-title>
                    <v-row>
                        <v-col align="center">
                            OUR CONTACT: Sphere Logic - AI
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text>
                <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="14">
                <gmap-marker
                    v-for="(item, index) in markers"
                    :key="index"
                    :position="item.position"
                    @click="center = item.position"
                />
                </gmap-map>
                </v-card-text>
                <v-card-actions>
                    <v-col align="center">
                        <h2>
                        info@elector.ml
                        </h2>
                        <h2>
                        </h2>
                    </v-col>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                nom:'',
                prenom:'',
                email:'',
                message:'',
                center: { lat: 35.6911100, lng: -0.6416700 },
                mapTypeId: "terrain",
                markers: [
                    { position: { lat: 35.6911100, lng: -0.6416700 } },
                    { position: { lat: 35.65, lng: -0.616667 } }
                ]
            }
        },
    }
</script>

<style scoped>
h1{
    content: "";
    width: 270px;
    display: block;
    border-bottom: 5px solid #00adb5;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-transform: uppercase;
}
.text{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 32px;
}
.vue-map-container {
  height: 415px;
  max-width: 992px;
  width: 100%;
}
</style>