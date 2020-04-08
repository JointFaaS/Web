<template>
  <div>
    <a-row>
      <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Function Panel"
      >
        <div slot="extra">
          <a-button @click="refresh">Refresh</a-button>
          <a-button @click="newFunction">New Function</a-button>
        </div>
      </a-page-header>
    </a-row>
    <a-row>
      <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="functionList">
        <a-list-item slot="renderItem" slot-scope="item">
        <a-card :title="item.functionName">
          <router-link :to="'/function/' + item.functionName" slot="extra">Details</router-link>
          <p>env: {{item.runtime}}</p>
          <p>memory: {{item.memorySize}} MB</p>
          <p>timeout: {{item.timeout}} s</p>
        </a-card>
        </a-list-item>
      </a-list>
    </a-row>
    <a-row>
      <a-pagination showQuickJumper :defaultCurrent="1" :pageSize="pageSize" :total="total" @change="onChange" />
    </a-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  // data
  page = 1
  pageSize = 8
  // props
  // method
  // mounted

  get functionList () {
    const start = (this.page - 1) * this.pageSize
    const end = Math.min((start + this.pageSize), this.total)
    console.log(start, end)
    return this.$store.state.functionList.slice(start, end)
  }

  get total () {
    return this.$store.state.functionList.length
  }

  onChange (page: number, pageSize: number) {
    this.page = page
    this.pageSize = pageSize
  }

  refresh () {
    this.$store.dispatch('getFunctions')
  }

  newFunction () {
    this.$router.push({ path: 'newfunction' })
  }

  mounted () {
    if (this.total === 0) {
      this.$store.dispatch('getFunctions')
    }
    this.page = this.$store.state.page
    this.pageSize = this.$store.state.pageSize
  }

  beforeDestroy () {
    this.$store.commit('storePage', { page: this.page, pageSize: this.pageSize })
  }
}

</script>
