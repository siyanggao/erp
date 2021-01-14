const menuConfig = [
    {name: "财务会计", icon: "ordered-list",url:"finance",type:"mainmenu", children: [
      {name: "总帐", url: "finance/zongzhang",type:"mainmenu",children:[
        {name: "凭证管理", url: "finance/zongzhang/pingzheng",type:"submenu",children:[
            {name: "凭证录入", url: "finance/zongzhang/pingzheng/luru",type:"submenu"},
            {name: "凭证查询", url: "finance/zongzhang/pingzheng/chaxun",type:"submenu"}
        ]},
        {name: "测试管理", url: "finance/zongzhang/test",type:"submenu",children:[
          {name: "测试录入", url: "finance/zongzhang/test/luru",type:"submenu"},
          {name: "测试查询", url: "finance/zongzhang/test/chaxun",type:"submenu"}
      ]},
      ]},
      {name: "应收款管理", url: "/finance/yingshoukuan",type:"mainmenu",children:[]},
    ]},
    {name: "供应链", icon: "hdd", url: "/supply_chain",type:"mainmenu", children:[
        {name: "采购管理", url: "/supply_chain/caigou",type:"mainmenu"},
        {name: "销售管理", url: "/supply_chain/xiaoshou",type:"mainmenu"},
    ],},
]

export default menuConfig