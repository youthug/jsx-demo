<template>
    <div id="app">
        <el-table :data="tableData">
            <el-table-column v-for="(col, i) in columns" :key="i" v-bind="col"/>
        </el-table>
    </div>
</template>

<script>
import { columns } from "@/config/column-config";

export default {
    name: 'App',
    components: {},
    data() {
        return {
            columns,
            tableData: [
                {
                    firstName: 'Foo',
                    lastName: 'Bar'
                }
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
