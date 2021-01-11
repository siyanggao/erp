const menuConfig = [
    {name: "财务会计", icon: "ordered-list",url:"/menu/finance",type:"mainmenu", children: [
      {name: "总帐", url: "/menu/finance/zongzhang",type:"mainmenu",children:[
        {name: "凭证管理", url: "/menu/finance/zongzhang/pingzheng",type:"submenu",children:[
            {name: "凭证录入", url: "/menu/finance/zongzhang/pingzheng/luru",type:"submenu"},
            {name: "凭证查询", url: "/menu/finance/zongzhang/pingzheng/chaxun",type:"submenu"}
        ]},
      ]},
      {name: "应收款管理", url: "/finance/yingshoukuan",type:"mainmenu"},
    ]},
    {name: "供应链", icon: "hdd", url: "/supply_chain",type:"mainmenu", children:[
        {name: "采购管理", url: "/supply_chain/caigou",type:"mainmenu"},
        {name: "销售管理", url: "/supply_chain/xiaoshou",type:"mainmenu"},
    ],},
]

export default menuConfig