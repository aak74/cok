<script>
import VueCharts from 'vue-chartjs'

const randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const colors = [
  '1f78b4',
  'e31a1c',
  '33a02c',
  'ff7f00',
  '6a3d9a',
  'b15928',
  'a6cee3',
  'fb9a99',
  'b2df8a',
  'fdbf6f',
  'cab2d6',
  'ffff99',
];

export default {
  name: 'ChartRadar',
  extends: VueCharts.Radar,
  props: [
    'legend',
    'values',
    'labels',
  ],
  computed: {
    scores () {
      let i = 0;
      return this.values.reduce((carry, item) => {
        carry.push({
          label: item.label,
          data: item.data,
          backgroundColor: hex2rgba(colors[i+6], 0.6),
          borderColor: colors[i],
        });
        i++;
        return carry;
      }, []);
    },
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.scores,
      },
      {
        legend:{
          display: true,
          // position: 'bottom',
          labels:{
            boxWidth: 20,
            // lineWidth: 2,
            fontSize:20
          }
        },
        scale: {
          ticks : {
            min: 0,
            stepSize: 1,
          },
          pointLabels: {
            fontSize: 20
          }
        }
      }
    )
  }
}
</script>
