<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row>
        <v-col align="center">
          <img height="10" alt="" />
          <h1>ABOUT</h1>
          <p class="services">
            ELECTOR.ML is a PWA - ELECTIONS DASHBOARD governance service that
            you can use with your smartphone or desktop anywhere and anytime.
            <br />
            <br />
            It allows everyone to perform simple tasks like sorting, display and
            graph interpretation of election results from national to local
            elections tallying for individuals and corporate users.
            <br />
            <br />
            We created ELECTOR.ML around the belief that when people have the results
            numbers and tools as a service to interpret for themselves, it promotes better
            understanding of electoral processes, that ultimately leads to peace, 
            harmony and a better society.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="right">
          <!-- <img height="650" alt="" /> -->
        </v-col>
      </v-row>

      <v-row>
        <v-col md="4" align="center">
          <v-img width="70"> </v-img>
          <h2>Ease of use</h2>
          <p class="services">
            You just need one click to select a county and start your analysis.
          </p>
        </v-col>
        <v-col md="4" align="center">
          <v-img width="70"> </v-img>
          <h2>The availability</h2>
          <p class="services">
            Anywhere and anytime. You can check available countries and voter
            tallies.
          </p>
        </v-col>
        <v-col md="4" align="center">
          <v-img width="70"> </v-img>
          <h2>At the best price</h2>
          <p class="services">
            Adjusted rates to earn your loyalty and reward your efforts.
          </p>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      opinions: [
        {
          id: 1,
          opinion:
            'Juste parfait Ça change les choses premier jour à Alger première fois que j’utilise l’application et franchement c’est superbe rien à dire service parfait bravo et bonne continuation.',
          user: 'Mostefa Mourad',
          type: 'Utilisateur',
        },
        {
          id: 2,
          opinion:
            'Très bonne prestation service parfait et ponctuelle lors de la réception du paiement , merci et bonne continuation.',
          user: 'Elizabeth murphy',
          type: 'Utilisatrice',
        },
        {
          id: 3,
          opinion:
            'Application super efficace testée cette semaine à Alger plusieurs fois, rapidité avec le paiement.Je recommande vivement.',
          user: 'Abdelhadi Bouali',
          type: 'Utilisateur',
        },
        {
          id: 4,
          opinion:
            "On vous donnera quelques question pour répondre parfois prendre des photos ou des mémos , puis en retour , vous gagnerez entre 60 et 200 DA .L'argent facile !",
          user: 'Mohammed douzane',
          type: 'Utilisateur',
        },
      ],
    }
  },
}
</script>

<style scoped>
h1 {
  content: '';
  width: 110px;
  display: block;
  border-bottom: 5px solid #00adb5;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
p {
  width: 80%;
  font-size: 32px;
  margin: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h2 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.services {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 24px;
  width: 93%;
}
.opinions {
  background-color: #fafafa;
}
.opinion {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  width: 93%;
}
</style>