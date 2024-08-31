<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'
import Galleria from 'primevue/galleria'
import { useToast } from 'primevue/usetoast'
import TerminalService from 'primevue/terminalservice'

onMounted(() => {
  TerminalService.on('command', commandHandler)
})

onBeforeUnmount(() => {
  TerminalService.off('command', commandHandler)
})

const displayFinder = ref(false)
const displayTerminal = ref(false)
const displayPhotos = ref(false)
const images = ref([
  {
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg'
  },
  {
    itemImageSrc: 'https://hiif.ong/logo.png'
  },
  {
    itemImageSrc: 'https://hiif.ong/logo.png'
  },
  {
    itemImageSrc: 'https://hiif.ong/logo.png'
  }
])
const nodes = ref()
const toast = useToast()
interface item {
  label: string
  icon: string
  command: Function
}

const items: Ref<item[]> = ref([
  {
    label: 'Finder',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/finder.svg',
    command: () => {
      displayFinder.value = true
    }
  },
  {
    label: 'Terminal',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/terminal.svg',
    command: () => {
      displayTerminal.value = true
    }
  },
  {
    label: 'App Store',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/appstore.svg',
    command: () => {
      toast.add({
        severity: 'error',
        summary: 'An unexpected error occurred while signing in.',
        detail: 'UNTRUSTED_CERT_TITLE',
        group: 'tc',
        life: 3000
      })
    }
  },
  {
    label: 'Safari',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/safari.svg',
    command: () => {
      toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 })
    }
  },
  {
    label: 'Photos',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/photos.svg',
    command: () => {
      displayPhotos.value = true
    }
  },
  {
    label: 'GitHub',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/github.svg',
    command: () => {
      window.open('https://github.com/hiifong', '_blank')
    }
  },
  {
    label: 'Trash',
    icon: 'https://primefaces.org/cdn/primevue//images/dock/trash.png',
    command: () => {
      toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 })
    }
  }
])
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
])

const onDockItemClick = (event: Event, item: item) => {
  if (item.command) {
    item.command()
  }

  event.preventDefault()
}

const commandHandler = (text: string) => {
  let response
  let argsIndex = text.indexOf(' ')
  let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text

  switch (command) {
    case 'date':
      response = 'Today is ' + new Date().toDateString()
      break

    case 'greet':
      response = 'Hola ' + text.substring(argsIndex + 1)
      break

    case 'random':
      response = Math.floor(Math.random() * 100)
      break

    case 'ls':
      response = `I'm hiifong`
      break

    case 'pwd':
      response = '/home/hiifong'
      break

    default:
      response = 'Unknown command: ' + command
  }

  TerminalService.emit('response', response)
}
</script>

<template>
  <div class="card dock-demo">
    <Toast position="top-center" group="tc" />

    <div class="dock-window dock-advanced">
      <Dock :model="items">
        <template #item="{ item }">
          <a v-tooltip.top="item.label" href="#" class="p-dock-item-link" @click="onDockItemClick($event, item)">
            <img :alt="item.label" :src="item.icon" style="width: 100%" />
          </a>
        </template>
      </Dock>

      <Dialog
        v-model:visible="displayTerminal"
        header="Terminal"
        :breakpoints="{ '960px': '50vw' }"
        :style="{ width: '40vw' }"
        :maximizable="true"
      >
        <Terminal
          welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')"
          prompt="hiifong $"
        />
      </Dialog>

      <Dialog
        v-model:visible="displayFinder"
        header="Finder"
        :breakpoints="{ '960px': '50vw' }"
        :style="{ width: '40vw' }"
        :maximizable="true"
      >
        <Tree :value="nodes" />
      </Dialog>

      <Galleria
        v-model:visible="displayPhotos"
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="width: 400px"
        :circular="true"
        :fullScreen="true"
        :showThumbnails="false"
        :showItemNavigators="true"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
      </Galleria>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100vh;
}

.dock-demo > .dock-window {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('https://primefaces.org/cdn/primevue/images/dock/window.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.dock-demo .p-menubar {
  padding: 0;
  border-radius: 0;
}
</style>
