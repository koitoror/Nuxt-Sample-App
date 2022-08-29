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
               <h1> Questions Fréquemment posées </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <v-tabs
                background-color="white"
                color="primary"
                centered
                >
                <v-tab >CLIENTS</v-tab>
                <v-tab >PARTENAIRES</v-tab>
                <v-tab-item
                >
                <v-row>
                <v-col v-for="quest in questions" :key="quest.id" md="6">
                        <v-card
                            outlined
                           >
                           <v-row align="center">
                               <v-col md="10">
                                <v-card-title class="question">
                                    {{quest.question}}
                                </v-card-title>
                               </v-col>
                               <v-col md="2" >
                                   <v-btn
                                    icon
                                    @click="quest.show = !quest.show"
                                   >
                                      <v-icon>{{ quest.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                   </v-btn>
                               </v-col>
                           </v-row>
                            <v-expand-transition >
                            <div v-show="quest.show">
                                <v-divider></v-divider>
                                <v-card-text class="reponse">
                                    {{quest.reponse}}
                                </v-card-text>
                            </div>
                            </v-expand-transition>
                        </v-card>
                </v-col>     
                </v-row>
                </v-tab-item>
                <v-tab-item>
                    <v-row>
                      <v-col v-for="quest in questions1" :key="quest.id" md="6">
                        <v-card
                            outlined
                           >
                           <v-row align="center">
                               <v-col md="10">
                                <v-card-title class="question">
                                    {{quest.question}}
                                </v-card-title>
                               </v-col>
                               <v-col md="2" >
                                   <v-btn
                                    icon
                                    @click="quest.show = !quest.show"
                                   >
                                      <v-icon>{{ quest.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                   </v-btn>
                               </v-col>
                           </v-row>
                            <v-expand-transition>
                            <div v-show="quest.show">
                                <v-divider></v-divider>
                                <v-card-text class="reponse">
                                        {{quest.reponse}}
                                </v-card-text>
                            </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>     
                    </v-row>
                </v-tab-item>
                </v-tabs>
            </v-col>
        </v-row>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </v-container>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                questions : [
                    {
                        id:1,
                        show:false,
                        question:"Comment faire pour recevoir le paeiment ?",
                        reponse:"attendez votre paeiment dans les 24 H , soir par CCP ou par FLEXY , vous pouvez sélécionner la méthode via l'application mobile",
                    },
                    {
                        id:2,
                        show:false,
                        question:"Question  fréquente 2 ?",
                        reponse:"Réponse 2",
                    },
                    {
                        id:3,
                        show:false,
                        question:"Question  fréquente 3 ?",
                        reponse:"Réponse 3",
                    },
                    {
                        id:4,
                        show:false,
                        question:"Question  fréquente 4 ?",
                        reponse:"Réponse 4",
                    },
                    {
                        id:5,
                        show:false,
                        question:"Question  fréquente 5 ?",
                        reponse:"Réponse 5",
                    },
                    {
                        id:6,
                        show:false,
                        question:"Question  fréquente 6 ?",
                        reponse:"Réponse 6",
                    },
                    {
                        id:7,
                        show:false,
                        question:"Question  fréquente 7 ?",
                        reponse:"Réponse 7",
                    }
                ] ,
                questions1 : [
                    {
                        id:1,
                        show:false,
                        question:"Comment devenir un partenaire ELECTOR.ML ?",
                        reponse:"Contactez notre administrateur ; partagez vos informations et coordonnées , et un compte sera crée dans notre espace Web .",
                    },
                    {
                        id:2,
                        show:false,
                        question:"Question  fréquente 2 ?",
                        reponse:"Réponse 2",
                    },
                    {
                        id:3,
                        show:false,
                        question:"Question  fréquente 3 ?",
                        reponse:"Réponse 3",
                    },
                    {
                        id:4,
                        show:false,
                        question:"Question  fréquente 4 ?",
                        reponse:"Réponse 4",
                    },
                    {
                        id:5,
                        show:false,
                        question:"Question  fréquente 5 ?",
                        reponse:"Réponse 5",
                    },
                    {
                        id:6,
                        show:false,
                        question:"Question  fréquente 6 ?",
                        reponse:"Réponse 6",
                    },
                    {
                        id:7,
                        show:false,
                        question:"Question  fréquente 7 ?",
                        reponse:"Réponse 7",
                    }
                ]         
            }
        },
    }
</script>

<style scoped>
h1{
    content: "";
    width: 535px;
    display: block;
    border-bottom: 5px solid #00adb5;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-transform: uppercase;
}
.question{
    color: grey;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.reponse{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
}
</style>