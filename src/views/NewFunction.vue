<template>
  <a-spin :spinning='spinning'>
    <a-page-header style="border: 1px solid rgb(235, 237, 240)" @back="backToHome" title="New Function" />
    <a-row :gutter="16">
      <a-col :span='12'>
        <div>Settings</div>
        <a-form-model ref="funcform" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="Function Name" prop="name">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item label="Env" prop="env">
            <a-select v-model="form.env" placeholder="please select function env">
              <a-select-option value="python3">
                python3
              </a-select-option>
              <a-select-option value="java8">
                java8
              </a-select-option>
            </a-select>
          </a-form-model-item>
          <!-- <a-form-model-item label="Instant delivery">
            <a-switch v-model="form.enableNative" />
          </a-form-model-item> -->
          <a-form-model-item label="Timeout (1~300s)" prop="timeout">
            <a-input-number v-model="form.timeout" :min="1" :max="300" />
          </a-form-model-item>
          <a-form-model-item label="Memory Size (128~1024MB)" prop="memorySize">
            <a-input-number v-model="form.memorySize" :min="128" :max="1024" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
              Create
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-col>
      <a-col :span='12'>
        <div>Entrypoint</div>
        <AceEditor theme='github' lang='python' :minLines='20' :maxLines='40' @valueChange='mainCodeChange' />
      </a-col>
    </a-row>
  </a-spin>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AceEditor from '@/components/AceEditor.vue'
import { FunctionCreate } from '@/api'

@Component({
  components: {
    AceEditor
  }
})
export default class NewFunction extends Vue {
  mainCode = ''
  spinning = false
  labelCol = { span: 8 }
  wrapperCol = { span: 14 }
  form = {
    name: '',
    env: '',
    timeout: 3,
    memorySize: 128,
    enableNative: true
  }

  rules = {
    name: [
      { required: true, message: 'Please input Function name', trigger: 'blur' },
      { min: 1, max: 10, message: 'Length should be 1 to 10', trigger: 'blur' }
    ],
    env: [{ required: true, message: 'Please select env', trigger: 'change' }]
  }

  mainCodeChange (e: string) {
    this.mainCode = e
  }

  backToHome () {
    this.$router.push('/')
  }

  onSubmit () {
    // form-modal types misses
    (this.$refs.funcform as any).validate(async (valid: boolean) => {
      if (valid) {
        this.spinning = true
        try {
          const res = await FunctionCreate({
            funcName: this.form.name,
            memorySize: this.form.memorySize,
            timeout: this.form.timeout,
            env: this.form.env,
            codeZip: ''
          })
          this.$message.info(String(res.status))
        } catch (error) {
          console.log()
        } finally {
          this.spinning = false
        }
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
}

</script>
