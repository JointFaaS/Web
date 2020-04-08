<template>
  <a-spin :spinning="spinning">
    <a-descriptions title="Function Info" bordered :column="3">
      <a-descriptions-item label="FuncName">{{funcInfo.functionName}}</a-descriptions-item>
      <a-descriptions-item label="Created Time" :span="2">
        {{funcInfo.createdTime}}
      </a-descriptions-item>
      <a-descriptions-item label="Env">{{funcInfo.runtime}}</a-descriptions-item>
      <a-descriptions-item label="MemorySize">{{funcInfo.memorySize}}</a-descriptions-item>
      <a-descriptions-item label="Timeout">{{funcInfo.timeout}}</a-descriptions-item>
      <a-descriptions-item label="Code Size">{{funcInfo.codeSize}}</a-descriptions-item>
      <a-descriptions-item label="Code Checksum" :span="2">{{funcInfo.codeChecksum}}</a-descriptions-item>
      <a-descriptions-item label="Description" :span="3">
        {{funcInfo.description}}
      </a-descriptions-item>
      <a-descriptions-item label="Environment Variables" :span="3">{{funcInfo.environmentVariables}}</a-descriptions-item>
    </a-descriptions>
    <a-divider/>
    <a-row>
      <a-col :span="12">
        <a-form-model :label-col="{span: 8}" :wrapper-col="{span: 16}">
          <a-form-model-item label="Enable Native Serverless">
            <a-switch v-model="enableNative" />
          </a-form-model-item>
          <a-form-model-item label="Args">
            <a-textarea v-model="args" :rows="6"/>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 2 }">
            <a-button type="primary" @click="onSubmit">
              Invoke
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :span="4" />
      <a-col :span="8">
        <a-card title="函数返回值" :bordered="false" style="width: 300px">
          <a-empty v-if="output === ''"/>
          <p>{{output}}</p>
        </a-card>
      </a-col>
    </a-row>
  </a-spin>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { functionidGET, invokePOST } from '@/api'
import { message } from 'ant-design-vue'
const FunctionInfoProps = Vue.extend({
  props: {
    id: String
  }
})

@Component
export default class FunctionInfo extends FunctionInfoProps {
  spinning = false
  funcInfo = {}
  funcName = ''
  enableNative = true
  args = ''
  output = ''

  async mounted () {
    this.spinning = true
    try {
      const res = await functionidGET({
        id: this.id
      })
      if (res.functions !== undefined) {
        this.funcInfo = res.functions[0]
        this.funcName = res.functions[0].functionName as string
      }
    } catch (e) {
      message.info(e)
    } finally {
      this.spinning = false
    }
  }

  async onSubmit () {
    this.spinning = true
    try {
      const res = await invokePOST({
        funcName: this.funcName,
        args: btoa(this.args)
      })
      console.log(res)
      this.output = res as string
    } catch (e) {
      console.log(e)
      message.info(e)
    } finally {
      this.spinning = false
    }
  }
}

</script>
