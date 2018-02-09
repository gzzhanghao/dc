<template>
  <Draggable :value="items" @start="onStart" :move="onMove" @end="onEnd">
    <transition-group>
      <div v-for="item in items" :key="item.key" class="item">
        {{item.name}} - {{item.key}}
      </div>
    </transition-group>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'

export default {

  components: { Draggable },

  data() {
    return {
      dragging: false,
      items: new Array(50).fill(0).map((k, i) => ({
        level: i,
        key: i,
        name: `item-${i}`,
      })),
    }
  },

  created() {
    this.onDragMove = this.onDragMove.bind(this)
  },

  mounted() {
    window.addEventListener('dragover', this.onDragMove, true)
  },

  beforeDestroy() {
    window.removeEventListener('dragover', this.onDragMove, true)
  },

  methods: {

    onStart(event) {
      console.log('start', event.oldIndex) // eslint-disable-line no-console
    },

    onMove(event) {
      console.log('move', { from: event.draggedContext.index, to: event.relatedContext.index }) // eslint-disable-line no-console
    },

    onEnd(event) {
      console.log('end', { from: event.oldIndex, to: event.newIndex }) // eslint-disable-line no-console
    },

    onDragMove(event) {
      const rect = this.$el.getBoundingClientRect()
      console.log('drag', rect.width, event.clientX - rect.x) // eslint-disable-line no-console
    },
  },
}
</script>

