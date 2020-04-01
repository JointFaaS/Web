<template>
    <div>
        <a-row>
            <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Function Panel"
            >
                    <a-button key="3">Refresh</a-button>
            </a-page-header>
        </a-row>
        <a-row>
            <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="functionList">
                <a-list-item slot="renderItem" slot-scope="item">
                <a-card :title="item.title">Card content</a-card>
                </a-list-item>
            </a-list>
        </a-row>
        <a-row>
            <a-pagination showQuickJumper :defaultCurrent="1" :pageSize="6" :total="500" @change="onChange" />
        </a-row>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  get functionList () {
    return this.$store.functionList
  }
}

</script>