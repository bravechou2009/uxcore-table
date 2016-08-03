/**
 * Table Component Demo for uxcore
 * @author zhouquan.yezq
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
let classnames = require('classnames');
let Table = require('../src');
let Button = require('uxcore-button');
let urlPrefix = 'http://192.168.99.117:3000/';

///* 第一列为radio的demo
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            text: 1
        }
    }
    render() {
        let me = this;
        // 通过 rowSelection 对象表明需要行选择
        let rowSelection = {
            onSelect: function(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: function(selected, selectedRows) {
                console.log(selected, selectedRows);
            }
        };
        let columns = [
            {
                dataKey: 'select',
                type: 'checkbox',
                isDisable: function(data) {
                    console.log(data);
                }
            },
            {
                group: '分组',
                columns: [
                    {
                        dataKey: 'id',
                        title: 'ID',
                        width: 50
                    },
                    {
                        dataKey: 'country',
                        title: '国家',
                        width: 200,
                        ordered: true,
                        render: function(cellData, rowData) {return cellData + me.state.text;}
                    },
                ]
            },
            {
                dataKey: 'city',
                title: () => '城市',
                width: 150,
                ordered: true,
                message: '都是中国城市'
            },
            {
                dataKey: 'firstName',
                title: "FristName"
            },
            {
                dataKey: 'lastName',
                title: "LastName"
            },
            {
                dataKey: 'email',
                title: "Email",
                width: 200,
                ordered: true
            }, {
                dataKey: 'action1',
                title: '操作1',
                width: 100,
                type: "action",
                actions: [{
                    title: 'click',
                    callback: function() {
                        alert('click')
                    },
                    mode: 'edit'
                }, {
                    title: '删除',
                    callback: function() {
                        alert('删除')
                    },
                    mode: 'view'
                }, {
                    title: 'view',
                    callback: function() {
                        alert('view')
                    },
                    mode: 'edit'
                }, {
                    title: 'view',
                    callback: function() {
                        alert('view')
                    }
                }]
            }, {
                dataKey: 'action',
                title: '链接',
                width: 100,
                render: function(rowData) {
                    return <div><a href="#">111</a></div>
                }
            }
        ]
        let fetchUrl = 'http://eternalsky.me:8122/file/getGridJson.jsonp';
        let renderProps = {
            actionColumn: {
                'edit': function() {},
                'del': function() {}
            },
            pagerSizeOptions:[5,10,15,20],
            actionBar: {
                'Action Button': function(type, table) {
                    me.setState({
                        text: 2
                    })
                }
            },
            showSearch: true,
            fetchUrl: fetchUrl,
            rowSelector: 'checkboxSelector',
            jsxcolumns: columns,
            rowSelection: rowSelection
        };
        return (
            <div>
                <Table {...renderProps}  ref="table" className="kuma-uxtable-border-line" />
                <Button onClick={function() {me.refs.table.fetchData()}}>重新获取数据</Button>
            </div>
        );
    }
}
;
//*/
module.exports = Demo;
