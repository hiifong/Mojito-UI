<script setup lang="ts">
import { onMounted } from 'vue'
import CalHeatmap from 'cal-heatmap'
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import LegendLite from 'cal-heatmap/plugins/LegendLite'
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'

import 'cal-heatmap/cal-heatmap.css'
import { i18n } from '@/config/modules/i18n'

dayjs.extend(localeData)
dayjs.localeData()

const cal = new CalHeatmap()
const { t } = i18n.global

const data = [
  {
    date: '2024-04-11',
    value: 6
  },
  {
    date: '2024-05-08',
    value: 10
  },
  {
    date: '2024-06-01',
    value: 20
  },
  {
    date: '2024-06-03',
    value: 13
  },
  {
    date: '2024-06-06',
    value: 30
  }
]

const paintCalendar = () => {
  cal.paint(
    {
      data: {
        source: data,
        type: 'json',
        x: 'date',
        y: 'value'
      },
      date: {
        start: dayjs().subtract(12, 'month').valueOf(),
        min: dayjs().valueOf(),
        max: dayjs().valueOf(),
        locale: {
          weekStart: 1
        },
        timezone: 'Asia/Shanghai',
        highlight: dayjs().valueOf()
      },
      range: 13,
      scale: {
        color: {
          type: 'threshold',
          range: ['#4dd05a', '#37a446', '#166b34', '#14432a'],
          domain: [10, 20, 30]
        }
      },
      domain: {
        type: 'month',
        gutter: 4,
        label: { text: 'MMM', textAlign: 'middle', position: 'top' }
      },
      subDomain: { type: 'ghDay', radius: 2, width: 10, height: 10, gutter: 3 }
    },
    [
      [
        Tooltip,
        {
          text: function (date: number, value: number | null, dayjsDate: any) {
            console.log('date: ', date, 'value: ', value, 'dayjs: ', dayjsDate)
            return (value ? value : 'No') + t('heatmap.activity') + ' on ' + dayjsDate.format('dddd, MMMM D, YYYY')
          }
        }
      ],
      [
        LegendLite,
        {
          includeBlank: true,
          itemSelector: '#cal-heatmap-legend',
          radius: 2,
          width: 11,
          height: 11,
          gutter: 4
        }
      ],
      [
        CalendarLabel,
        {
          width: 30,
          textAlign: 'start',
          text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d)),
          padding: [25, 0, 0, 0]
        }
      ]
    ]
  )
}

onMounted(() => paintCalendar())
</script>

<template>
  <div class="heatmap-main">
    <div class="cal-heatmap-legend-container">
      <span>{{ t('heatmap.less') }}</span>
      <div id="cal-heatmap-legend"></div>
      <span>{{ t('heatmap.more') }}</span>
    </div>
    <div id="cal-heatmap"></div>
  </div>
</template>

<style scoped>
.heatmap-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 1rem;
  overflow: hidden;
}
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
  margin: 0 10px;
}
</style>
