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
        <AceEditor v-if="form.env === 'python3'" theme='github' lang='python' :minLines='20' :maxLines='40' @valueChange='mainCodeChange' />
        <a-upload v-if="form.env === 'java8'" :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
          <a-button> <a-icon type="upload" /> 选择jar包 </a-button>
        </a-upload>
      </a-col>
    </a-row>
  </a-spin>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AceEditor from '@/components/AceEditor.vue'
import { functionPOST } from '@/api'
import JSZip from 'jszip'
import { message } from 'ant-design-vue'

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
  fileList: File[] = []
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

  handleRemove (file: File) {
    const index = this.fileList.indexOf(file)
    const newFileList = this.fileList.slice()
    newFileList.splice(index, 1)
    this.fileList = newFileList
  }

  beforeUpload (file: File) {
    if (this.fileList.length === 0) {
      this.fileList = [file]
    } else {
      message.info('只能上传一个文件')
    }
    return false
  }

  onSubmit () {
    // form-modal types misses
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.$refs.funcform as any).validate(async (valid: boolean) => {
      if (valid) {
        this.spinning = true
        try {
          const zip = new JSZip()
          zip.file('index.py', this.mainCode)
          const res = await functionPOST({
            funcName: this.form.name,
            memorySize: this.form.memorySize.toString(),
            timeout: this.form.timeout.toString(),
            env: this.form.env,
            codeZip: await zip.generateAsync({ type: 'base64' })
          })
          this.$message.info(String(res))
        } catch (err) {
          message.info(err)
        } finally {
          this.spinning = false
        }
      } else {
        return false
      }
    })
  }
}

</script>
