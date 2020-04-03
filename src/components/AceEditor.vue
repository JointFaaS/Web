<template>
  <div>
    <div class="ace-container">
      <div class="ace-editor" ref="ace"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'

const AceEditorProps = Vue.extend({
  props: {
    theme: String,
    lang: String,
    maxLines: Number,
    minLines: Number
  }
})

@Component
export default class AceEditor extends AceEditorProps {
  aceEditor?: ace.Ace.Editor = undefined

  mounted () {
    this.aceEditor = ace.edit(this.$refs.ace as Element, {
      maxLines: this.maxLines,
      minLines: this.minLines,
      fontSize: 14,
      theme: 'ace/theme/' + this.theme,
      mode: 'ace/mode/' + this.lang,
      tabSize: 4
    })
    this.aceEditor.on('change', this.docChange)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  docChange (e: ace.Ace.Delta) {
    this.$emit('valueChange', (this.aceEditor as ace.Ace.Editor).getValue())
  }
}

</script>
