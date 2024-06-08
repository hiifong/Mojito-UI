<script setup lang="ts">
import { onMounted } from 'vue'
import CalHeatmap from 'cal-heatmap'
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import LegendLite from 'cal-heatmap/plugins/LegendLite'
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel'
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

import 'cal-heatmap/cal-heatmap.css'

const cal = new CalHeatmap()
const { t } = useI18n()

const paintCalendar = () => {
  cal.paint(
    {
      date: {
        start: dayjs().subtract(12, 'month').valueOf(),
        min: dayjs().subtract(12, 'month').valueOf(),
        max: dayjs().valueOf(),
        locale: 'en',
        timezone: 'Asia/Shanghai',
        highlight: dayjs().add(1, 'day')
      },
      range: 13,
      scale: {
        color: {
          type: 'quantize',
          range: ['#9be9a8', '#40c463', '#30a14e', '#216e39'],
          domain: [0, 4, 8, 12]
        }
      },
      domain: {
        type: 'month',
        gutter: 5,
        dynamicDimension: true,
        label: {
          text: 'MMM',
          textAlign: 'middle',
          position: 'bottom'
        }
      },
      subDomain: {
        type: 'day',
        radius: 2,
        width: 10,
        height: 10,
        gutter: 2
      }
    },
    [
      [
        Tooltip,
        {
          text: function (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) {
            if (!value) {
              return 'No ' + t('heatmap.activity') + ' on ' + dayjsDate.format('YYYY-MM-DD')
            } else {
              return value + t('heatmap.activity') + ' on ' + dayjsDate.format('YYYY-MM-DD')
            }
          }
        }
      ],
      [
        LegendLite,
        {
          itemSelector: '#cal-heatmap-legend',
          includeBlank: true,
          radius: 2,
          width: 14,
          height: 14,
          gutter: 5
        }
      ],
      [
        CalendarLabel,
        {
          width: 25,
          textAlign: 'middle',
          text: function () {
            return [t('weekday.monday'), '', t('weekday.wednesday'), '', t('weekday.friday'), '', t('weekday.sunday')]
          }
        }
      ]
    ]
  )
}

onMounted(() => paintCalendar())
</script>

<template>
  <div class="cal-heatmap-legend-container">
    <span>{{ $t('heatmap.less') }}</span>
    <div id="cal-heatmap-legend"></div>
    <span>{{ $t('heatmap.more') }}</span>
  </div>
  <div id="cal-heatmap"></div>
</template>

<style scoped>
.cal-heatmap-legend-container {
  display: flex;
  justify-content: space-between;

  span {
    line-height: 14px;
    font-size: 12px;
    color: grey;
  }
}

#cal-heatmap-legend {
  display: flex;
  align-items: center;
  margin: 0 12px;
}
</style>
