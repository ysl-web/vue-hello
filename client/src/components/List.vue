<template>
    <el-row>
        <el-col :span="24">
            <div class="list-nav">
                <ul class="list-view">
                    <li class="list-item">热门</li>
                    <li class="list-item">最新</li>
                    <li class="list-item">热榜</li>
                </ul>
            </div>
        </el-col>
        <el-col :span="24">
            <ul>
                <li>
                    <a href="###">
                        <el-row type="flex">
                            <el-col :sm="18" :xs="24">标题</el-col>
                            <el-col :sm="4" :xs="0" :offset="2">图片</el-col>
                        </el-row>
                    </a>
                </li>
            </ul>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'list',
    data(){
        return{

        }
    }
}
</script>