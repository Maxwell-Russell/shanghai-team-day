const restaurants = {
  niunew: {
    name: '牛New寿喜烧（南京东路悦荟广场店）', short: '牛New寿喜烧', type: '寿喜烧自助',
    address: '南京东路353号悦荟广场L3-307&308B（携程列示）',
    hours: '晚餐时段、调休日套餐及用餐时限需向门店确认。',
    source: 'https://you.ctrip.com/food/shanghai2/16031951.html',
    food: '自助寿喜锅，适合想畅吃、少做点菜决策的同事。',
    booking: '携程用户反馈人均165元，仅供参考。门店有拥挤、排队的反馈；先确认20人相邻区域、晚餐套餐是否含锅底和饮料。'
  },
  bluefrog_crystal: {
    name: 'bluefrog蓝蛙（凯德晶萃广场店）', short: '蓝蛙凯德晶萃', type: '美式西餐 · 非自助',
    address: '徐家汇路268号凯德晶萃广场1楼23B-24A-24B号（携程列示）',
    hours: '晚餐营业时段及20人团体座位待确认。',
    source: 'https://you.ctrip.com/food/2/22577342.html',
    food: '汉堡、意面和共享拼盘，偏轻松的小酒馆聚餐氛围。',
    booking: '携程用户反馈人均141元，仅供参考。询问20人相邻区域或团队菜单；餐费上限要覆盖主食、拼盘和饮料。'
  },
  bluefrog_jinqiao: {
    name: 'bluefrog蓝蛙（金桥国际店）', short: '蓝蛙金桥国际', type: '美式西餐 · 非自助',
    address: '张杨路3611弄7号，7座1层124-125室',
    hours: '公开页面显示10:00起营业，晚餐结束时间待确认。',
    source: 'https://gs.ctrip.com/html5/you/foods/fooddetail/2/16556254.html',
    food: '汉堡、意面、烧烤拼盘，适合活动后边吃边聊。',
    booking: '请门店按20人提供团队菜单和相邻座位；提前把饮料及服务费计入餐费，不默认酒水畅饮。'
  },
  marriott_buffet: {
    name: '金桥红枫万豪 · 枫味豪厨', short: '红枫万豪自助', type: '酒店自助餐',
    address: '浦东新区新金桥路15号',
    hours: '官网列示周五、周六晚餐17:30-21:00；10月10日实际安排需确认。',
    source: 'https://www.marriott.com.cn/hotels/shapd-shanghai-marriott-hotel-pudong-east/dining/',
    food: '酒店全日餐厅，设现场烹饪站；适合更看重环境和菜品选择的同事。',
    booking: '官网确认供应自助餐，但未公布当前价格。电话021-6036 8888询问20人晚餐含税、服务费报价；报价超过本方案餐费上限就不预订。'
  },
  marriott_chinese: {
    name: '金桥红枫万豪 · 万豪中餐厅', short: '红枫万豪中餐厅', type: '粤菜 / 上海菜 · 非自助',
    address: '浦东新区新金桥路15号',
    hours: '官网列示晚餐17:30-21:00。',
    source: 'https://www.marriott.com.cn/hotels/shapd-shanghai-marriott-hotel-pudong-east/dining/',
    food: '官网列有湖景包厢，比商场快餐更适合坐下来聚餐。',
    booking: '询问两张10人桌、包厢低消及团队桌餐；含税、服务费的20人总价须在餐费上限内。包厢与团队价尚未确认。'
  },
  sheraton: {
    name: '喜来登由由 · 盛宴标帜餐厅', short: '喜来登由由自助', type: '酒店自助餐',
    address: '浦东新区浦建路38号',
    hours: '晚餐开放日期、时段和用餐时限待酒店确认。',
    source: 'https://you.ctrip.com/food/shanghai2/5001308.html',
    food: '把更多预算留给酒店自助，适合公园活动后的正式聚餐。',
    booking: '携程用户反馈人均188元，点评较早，仅作参考。须确认10月10日自助晚餐报价、实际菜品及20人同一区域座位。'
  },
  latina_tongren: {
    name: 'Latina拉蒂娜（铜仁店）', short: '拉蒂娜铜仁店', type: '巴西烤肉自助',
    address: '静安区铜仁路88号2楼（品牌官网列示）',
    hours: '官网列示周六晚餐17:00-22:30；调休日安排待确认。',
    source: 'https://www.latina-grill.net/Reservation01?_l=en',
    food: '巴西烤肉自助，官网提供团体聚餐服务，适合想要热闹聚餐氛围的同事。',
    booking: '询问20人自助团体套餐和集中座位，官网未公布现价。含税、服务费报价须不超过本方案上限；现场音乐及饮料包含情况另问门店。'
  },
  latina_lujiazui: {
    name: 'Latina拉蒂娜（陆家嘴店）', short: '拉蒂娜陆家嘴店', type: '巴西烤肉自助',
    address: '浦东新区陆家嘴环路165号2楼（品牌官网列示）',
    hours: '官网列示周六晚餐17:00-22:30；调休日安排待确认。',
    source: 'https://www.latina-grill.net/Reservation01?_l=en',
    food: '烤肉自助与团体聚餐服务，适合轻活动后把预算花在吃饭上。',
    booking: '询问20人自助团队价、座位安排和含税总价；不使用历史团购价作为现价，音乐及饮料安排以门店确认为准。'
  },
  bluefrog_96: {
    name: 'bluefrog蓝蛙（九六广场店）', short: '蓝蛙九六广场', type: '美式西餐 · 非自助',
    address: '东方路796号九六广场1层122单元',
    hours: '携程列示10:00-24:00，实际营业待确认。',
    source: 'https://gs.ctrip.com/html5/you/foods/fooddetail/2461/12178674.html',
    food: '西餐与共享拼盘，更适合不想吃自助、想坐着聊天的同事。',
    booking: '20人预订相邻区域，按餐费上限商量团队菜单；可升级主菜或共享拼盘，饮料与服务费需计入。'
  }
};

const downtownDinners = [
  { id: 'niunew', route: '迪美到悦荟广场步行约25-35分钟，预留整队时间。' },
  { id: 'bluefrog_crystal', route: '迪美到凯德晶萃广场车程约15-30分钟；地铁加步行约30-45分钟。' }
];

const plans = [
  {
    id: 'sports', n: '01', title: '室内运动局', short: '保龄球、台球等分组轮换', tag: '热闹多样',
    area: '人民广场 · 全天候', name: 'PARTY KING室内运动局',
    why: '项目选择多，20人可以分成4组轮换，新手也容易参与。',
    activityBudget: 125, dinnerBudget: 175, dinners: downtownDinners,
    venue: 'PARTY KING（迪美购物中心店）',
    address: '人民大道221号迪美购物中心B1，185-186号（携程标注）',
    hours: '携程列示10:00-次日03:00；具体营业及套餐需电话确认。',
    source: 'https://you.ctrip.com/sight/shanghai2/5545482.html',
    status: '先确认125元/人可覆盖约2.5小时所需项目；保龄球等按套餐计，不默认所有项目无限畅玩。电话021-31775136（携程列示）。',
    transport: '金吉路9号线至世纪大道，换2号线到人民广场，含步行约60-80分钟；拼车约45-70分钟。晚餐转场见各餐厅候选。',
    fit: '想热闹、喜好各不相同',
    times: [['13:30','集合出发','金桥5G未来中心；按人数分组。'],['15:00','分组轮换','保龄球、台球、飞镖等按实际套餐选择，每组5人。'],['17:30','整队转场','按所选餐厅预留步行或乘车时间。'],['18:15','团队晚餐','寿喜烧自助或美式西餐，约19:45结束。']]
  },
  {
    id: 'kart', n: '02', title: '卡丁车挑战', short: '计时赛 + EKA园区逛逛', tag: '刺激优先',
    area: '金桥 · 需确认场次', name: 'EKA光影卡丁车挑战',
    why: '体验速度与计时排名；预算按每人一次体验控制，空余时间逛园区。',
    activityBudget: 110, dinnerBudget: 190,
    dinners: [
      { id: 'bluefrog_jinqiao', route: 'EKA到金桥国际约10-20分钟车程。' },
      { id: 'marriott_buffet', route: 'EKA到红枫万豪约15-30分钟车程。' },
      { id: 'marriott_chinese', route: 'EKA到红枫万豪约15-30分钟车程。' }
    ],
    venue: 'Neonsped光影卡丁车（EKA天物店）',
    address: '金桥路535号50幢1层121-128室（高德标注）',
    hours: '公开资料未确认营业时段，14:30预约场次需问门店。',
    source: 'https://www.amap.com/place/B0LKTHVA03',
    status: '确认体验价不超过110元/人、20人可分批进场、单场分钟数和头套等附加费。酒店餐厅只有团队含税报价不超过190元/人时才能执行。',
    transport: '从5G未来中心拼车约20-35分钟；晚餐均选金桥区域，转场时间见餐厅候选。交通单独安排。',
    fit: '更看重刺激感，接受轮候',
    times: [['13:30','集合出发','建议拼车，约14:15前到店。'],['14:30','讲解 + 分批计时','20人按场馆容量轮换，每人一次体验。'],['16:00','EKA园区自由活动','拍照、聊天、逛园区。'],['17:30','金桥聚餐','美式西餐、酒店自助或酒店桌餐，约19:30结束。']]
  },
  {
    id: 'escape', n: '03', title: '密室协作局', short: '小队解谜，晚餐一起复盘', tag: '协作优先',
    area: '人民广场 · 室内', name: '谋局密室协作局',
    why: '20人拆成2-3组，选择非恐怖或低恐怖主题，晚餐一起分享各组经历。',
    activityBudget: 140, dinnerBudget: 160, dinners: downtownDinners,
    venue: '谋局沉浸密室（人民广场迪美店）',
    address: '人民大道221号B1层155-158商铺（场馆目录标注）',
    hours: '目录列示10:00-22:00，主题与下午场次待确认。',
    source: 'https://huodong.com/venue/detail/eyWH5',
    status: '140元/人是团队询价目标，尚无现价确认。先问各主题人数、时长和同步开场安排；活动与晚餐含全部必付费用须合计不超过300元。',
    transport: '金吉路9号线至世纪大道，换2号线到人民广场，含步行约60-80分钟；拼车约45-70分钟。晚餐转场见候选餐厅。',
    fit: '喜欢剧情解谜、交流协作',
    times: [['13:30','集合出发','按主题人数分组。'],['15:00','小组密室挑战','2-3组分别体验，主题和人数由门店确认。'],['17:00','复盘 + 转场','预留结束时间差与餐厅转场。'],['18:00','团队晚餐','寿喜烧自助或美式西餐，约19:30结束。']]
  },
  {
    id: 'park', n: '04', title: '公园定向局', short: '轻定向任务 + 更好的晚餐', tag: '晚餐优先',
    area: '世纪公园 · 看天气', name: '世纪公园轻定向',
    why: '4组完成步行寻点与照片任务，活动轻松，把更多预算留给晚餐环境和菜品。',
    activityBudget: 40, dinnerBudget: 260,
    dinners: [
      { id: 'sheraton', route: '世纪公园到浦建路喜来登约15-30分钟车程。' },
      { id: 'latina_lujiazui', route: '世纪公园到陆家嘴环路约20-35分钟车程。' },
      { id: 'bluefrog_96', route: '世纪公园到九六广场约15-25分钟车程。' }
    ],
    venue: '世纪公园', address: '浦东新区锦绣路1001号，集合入口按路线选定',
    hours: '官方文旅资料列示每天24小时免费开放。',
    source: 'https://www.meet-in-shanghai.net/cn/tourist-attraction/shanghai-century-park-467610/',
    status: '公园免费；40元用于任务材料、饮水与小奖品，不是门票。需一位同事主持；活动遵守园方规定，下雨改室内。晚餐不默认包含某种海鲜或酒水。',
    transport: '金吉路9号线至世纪大道，换2号线到世纪公园，含步行约50-70分钟；拼车约30-50分钟。晚餐选浦东区域。',
    fit: '想轻松聊天、重视聚餐',
    times: [['13:30','集合出发','4组、每组5人。'],['14:45','步行定向任务','约90分钟，找点拍照、团队问答。'],['16:30','公布结果 + 转场','休息后前往选定餐厅。'],['17:30','晚餐主场','酒店自助、巴西烤肉或西餐，约19:30结束。']]
  },
  {
    id: 'boardgames', n: '05', title: '桌游德扑局', short: '轻桌游 + 德扑筹码积分赛', tag: '聊天友好',
    area: '人民广场 · 室内', name: '桌游 + 德扑积分局',
    why: '新手可以玩轻桌游，德扑爱好者分桌打积分赛，中途轮换，不熟悉规则的同事也能参与。',
    activityBudget: 80, dinnerBudget: 220,
    dinners: [
      { id: 'niunew', route: '从福建中路区域前往南京东路悦荟广场，步行约10-25分钟，按门店实际地址调整。' },
      { id: 'latina_tongren', route: '福建中路区域到铜仁路约20-40分钟车程，预留整队时间。' },
      { id: 'bluefrog_crystal', route: '福建中路区域到凯德晶萃广场约20-35分钟车程。' }
    ],
    venue: 'PaoOo泡泡桌游社（人民广场店）· 候选场馆',
    address: '点评显示福建中路区域，完整门牌及楼层需预约时向门店确认。',
    hours: '下午场次、时长和20人场地安排待门店确认。',
    source: 'https://m.dianping.com/shop/G4MlogFTv80op8v2',
    image: 'assets/boardgames.webp', imageAlt: 'PaoOo泡泡桌游社商户展示照片',
    status: '点评用户反馈人均77元，仅供参考。询问80元/人能否覆盖约2.5小时、20人座位、桌游讲解及扑克筹码；拟分两桌德扑和一桌轻桌游，实际配置需门店确认。德扑只按筹码积分。',
    transport: '金吉路9号线至世纪大道，换2号线到南京东路，含步行约60-80分钟；拼车约45-70分钟。场馆完整地址确认后再定集合入口。',
    fit: '喜欢桌游、德扑、边玩边聊',
    times: [['13:30','集合出发','先确认场馆完整地址和预约场次。'],['15:00','分桌开局','轻桌游讲解；德扑按筹码积分，每桌人数由场地确定。'],['16:15','换桌 + 第二轮','自由轮换，给新手保留轻桌游桌。'],['17:30','转场 + 晚餐','寿喜烧、巴西烤肉或西餐，约18:15到店。']]
  }
].map(plan => ({ ...plan, price: plan.activityBudget + plan.dinnerBudget }));

const dinnerOptions = plan => plan.dinners.map(option => ({ ...restaurants[option.id], ...option }));
