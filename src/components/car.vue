<template>
    <div>
        <el-form size="mini" ref="form" :model="form" label-width="80px">
            <div style="display: flex;">
                <el-form-item label="车辆名称" style="margin-right: -2em;">
                    <el-input v-model="form.chedaoshuName"></el-input>
                </el-form-item>
                <el-form-item label="种类" style="margin-right: -2em;">
                    <el-select v-model="form.leixing" placeholder="小轿车">
                        <el-option label="小轿车" value="gelilan"></el-option>
                        <el-option label="货车" value="weizhi"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="数量">
                    <el-input v-model="form.chedaoshu"></el-input>
                </el-form-item>
            </div>

            <span  > 车辆轨迹</span>
            <el-form-item label="起点路段" style="margin-right: -2em;">
                <el-select v-model="form.qidian" placeholder="手动选点">
                    <el-option label="手动选点" value="shoudong"></el-option>
                    <el-option label="随机选点" value="suiji"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="终点路段" style="margin-right: -2em;">
                <el-select v-model="form.zhongdian" placeholder="手动选点">
                    <el-option label="手动选点" value="shoudong"></el-option>
                    <el-option label="随机选点" value="suiji"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="速度" style="margin-right: -2em;">
                <el-select v-model="form.sudu" placeholder="随机生成">
                    <el-option label="随机生成" value="suiji"></el-option>
                    <el-option label="1km/h" value="1km"></el-option>
                    <el-option label="2km/h" value="2km"></el-option>
                    <el-option label="3km/h" value="3km"></el-option>
                </el-select>
            </el-form-item>


        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                chedaoshu: '',
                chedaoshuName: '',
                feijidongchekuandu: '',
                jifeigelikuandu: '',
                leixing: '',
                qidian: '',
                zhongdian: '',
                sudu: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>