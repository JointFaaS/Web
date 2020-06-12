<template>
  <div>
    <a-row>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Backend Panel"
        >
        <div slot="extra">
          <a-button @click="refreshBackend">Refresh</a-button>
        </div>
      </a-page-header>
    </a-row>
    <a-row>
      <a-table :columns="backendColumns" :data-source="backends">
        <template
          v-for="col in ['price', 'latency', 'priority', 'active']"
          :slot="col"
          slot-scope="text, record"
        >
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template slot="action" slot-scope="text, record">
          <div>
            <span v-if="record.editable">
              <a @click="() => save(record.key)">Save</a>
              <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </a-table>
    </a-row>
    <a-row>
      <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Function Panel"
      >
        <div slot="extra">
          <a-button @click="refreshFunction">Refresh</a-button>
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
          <a-button @click="(event) => {deleteFunction(item.functionName)}" type="danger">Delete</a-button>
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
  backendColumns = [
    {
      title: 'Addr',
      dataIndex: 'addr',
      key: 'addr'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      scopedSlots: { customRender: 'price' }
    },
    {
      title: 'Latency',
      dataIndex: 'latency',
      key: 'latency',
      scopedSlots: { customRender: 'latency' }
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      scopedSlots: { customRender: 'priority' }
    },
    {
      title: 'Active',
      key: 'active',
      dataIndex: 'active',
      scopedSlots: { customRender: 'active' }
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' }
    }
  ]

  page = 1
  pageSize = 8
  editingKey = ''
  cacheBackends: any = []

  get functionList () {
    const start = (this.page - 1) * this.pageSize
    const end = Math.min((start + this.pageSize), this.total)
    console.log(start, end)
    return this.$store.state.functionList.slice(start, end)
  }

  get total () {
    return this.$store.state.functionList.length
  }

  get backends () {
    return this.$store.state.backends
  }

  set backends (newData) {
    this.$store.commit('updateBackends', newData)
  }

  onChange (page: number, pageSize: number) {
    this.page = page
    this.pageSize = pageSize
  }

  refreshFunction () {
    this.$store.dispatch('getFunctions')
  }

  refreshBackend () {
    this.$store.dispatch('getBackends')
  }

  newFunction () {
    this.$router.push({ path: 'newfunction' })
  }

  deleteFunction (id: string) {
    this.$store.dispatch('deleteFunction', id)
  }

  handleChange (value: any, key: string, column: string) {
    const newData = [...this.backends]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      target[column] = value
      this.backends = newData
    }
  }

  edit (key: string) {
    const newData = [...this.backends]
    const target = newData.filter(item => key === item.key)[0]
    this.editingKey = key
    if (target) {
      target.editable = true
      this.backends = newData
    }
  }

  save (key: string) {
    const newData = [...this.backends]
    const newCacheData = [...this.cacheBackends]
    const target = newData.filter(item => key === item.key)[0]
    const targetCache = newCacheData.filter(item => key === item.key)[0]
    if (target && targetCache) {
      delete target.editable
      this.$store.commit('updateBackends', newData)
      Object.assign(targetCache, target)
      this.cacheBackends = newCacheData
    }
    this.editingKey = ''
  }

  cancel (key: string) {
    const newData = [...this.backends]
    const target = newData.filter(item => key === item.key)[0]
    this.editingKey = ''
    if (target) {
      Object.assign(target, this.cacheBackends.filter(item => key === item.key)[0])
      delete target.editable
      this.backends = newData
    }
  }

  mounted () {
    if (this.total === 0) {
      this.$store.dispatch('getFunctions')
      this.$store.dispatch('getBackends')
    }
    this.page = this.$store.state.page
    this.pageSize = this.$store.state.pageSize
    this.cacheBackends = this.backends.map(item => ({ ...item }))
  }

  beforeDestroy () {
    this.$store.commit('storePage', { page: this.page, pageSize: this.pageSize })
  }
}

</script>
