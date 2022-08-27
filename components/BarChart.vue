<!-- <template>
  <div>
    
  </div>
</template> -->

<script>
import { Bar } from "vue-chartjs";
import { Chart, registerables } from 'chart.js';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
// import 'chartjs-adapter-moment'; // or another adapter to avoid moment
// Chart.register(...registerables);
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  extends: Bar,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
</script>