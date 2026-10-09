const restaurants = {
  niunew: {
    name: '牛New寿喜烧（南京东路悦荟广场店）', short: '牛New寿喜烧', type: '寿喜烧自助',
    address: '南京东路353号悦荟广场L3-307&308B（携程列示）',
    hours: '晚餐时段、调休日套餐及用餐时限需向门店确认。',
    source: 'https://you.ctrip.com/food/shanghai2/16031951.html',
    food: '自助寿喜锅，适合想畅吃、少做点菜决策的同事。',
    booking: '携程用户反馈门店历史信息仅供参考。门店有拥挤、排队的反馈；先确认20人相邻区域、晚餐套餐是否含锅底和饮料。'
  },
  niunew_wujiaochang: {
    name: '牛New寿喜烧（五角场百联店）', short: '牛New五角场百联', type: '寿喜烧自助',
    address: '淞沪路8号百联又一城6层（公开目录列示）',
    hours: '晚餐时段、用餐时限及20人座位待门店确认。',
    source: 'https://you.ctrip.com/food/shanghai2/20626379.html',
    food: '寿喜烧自助，适合桌游后一起吃、各自选择菜品。',
    booking: '公开页面曾列118/158/等历史或用户反馈套餐，仅供参考。确认当前20人相邻座位、套餐、用餐时限和含税团队团队接待信息。'
  },
  white_university: {
    name: 'WHITE白餐厅（创智天地大学路店）', short: 'WHITE大学路', type: '西餐 · 非自助',
    address: '杨浦区大学路创智天地商圈（大众点评列示，具体楼层以预约为准）',
    hours: '晚餐营业时间、20人座位及团队菜单待门店确认。',
    source: 'https://www.google.com/search?q=WHITE%E7%99%BD%E9%A4%90%E5%8E%85+%E5%88%9B%E6%99%BA%E5%A4%A9%E5%9C%B0%E5%A4%A7%E5%AD%A6%E8%B7%AF%E5%BA%97',
    food: '环境更适合坐下来聊天的西餐，适合作为桌游后的正式聚餐。',
    booking: '公开页面未给可靠当前团体价。询问两张10人桌或相邻区域、团队菜单和含税总价，控制在内。'
  },
  bluefrog_wujiaochang: {
    name: 'bluefrog蓝蛙（五角场万达广场店）', short: '蓝蛙五角场', type: '美式西餐 · 非自助',
    address: '五角场万达广场商圈（公开目录列示，具体店铺及楼层以预约为准）',
    hours: '晚餐营业时间及20人相邻座位待确认。',
    source: 'https://www.google.com/search?q=bluefrog%E8%93%9D%E8%9B%99%E4%BA%94%E8%A7%92%E5%9C%BA%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%E5%BA%97',
    food: '汉堡、意面和共享拼盘，距离大学路商圈近，转场方便。',
    booking: '询问20人团队菜单、相邻座位、饮料和服务费；含全部必付费用控制在内。'
  },
  grandma_joycity: {
    name: '外婆家（静安大悦城店）', short: '外婆家静安大悦城', type: '本帮菜 / 桌餐 · 非自助',
    address: '西藏北路166号静安大悦城（公开目录列示）',
    hours: '晚餐营业时间、20人座位及包间安排待门店确认。',
    source: 'https://www.google.com/search?q=%E5%A4%96%E5%A9%86%E5%AE%B6+%E9%9D%99%E5%AE%89%E5%A4%A7%E6%82%A6%E5%9F%8E%E5%BA%97',
    food: '中式共享菜，离中兴路赛道近，适合卡丁车后快速整队用餐。',
    booking: '询问两张10人桌或相邻区域、团队菜单和含税总价；不把网上'
  },
  dashu_joycity: {
    name: '大树餐厅（静安大悦城店）', short: '大树餐厅静安大悦城', type: '中式桌餐 · 非自助',
    address: '静安大悦城商圈（公开目录列示，具体楼层以预约为准）',
    hours: '晚餐营业时间及20人座位待确认。',
    source: 'https://www.google.com/search?q=%E5%A4%A7%E6%A0%91%E9%A4%90%E5%8E%85+%E9%9D%99%E5%AE%89%E5%A4%A7%E6 悦%E5%9F%8E%E5%BA%97',
    food: '中式合菜和共享菜，适合团队一起吃，比单点西餐更容易控制总价。',
    booking: '询问20人团队桌餐、相邻座位、最低消费及含税服务费，控制在内。',
    source: 'https://www.google.com/search?q=Shanghai+Jing%27an+Joy+City+Dashu+restaurant'
  },
  tori_joycity: {
    name: '匠Tori Shin（静安大悦城店）', short: '匠Tori Shin静安大悦城', type: '日式料理 · 非自助',
    address: '静安大悦城商圈（公开目录列示，具体楼层以预约为准）',
    hours: '晚餐营业时间和20人座位待门店确认。',
    source: 'https://www.google.com/search?q=%E5%8C%A0Tori+Shin+%E9%9D%99%E5%AE%89%E5%A4%A7%E6 悦%E5%9F%8E%E5%BA%97',
    food: '日式料理和共享菜，作为卡丁车后的氛围型晚餐候选。',
    booking: '公开搜索结果未确认当前团体价。询问20人相邻座位、套餐和含税总价，超出上限则不选。',
    source: 'https://www.google.com/search?q=Shanghai+Jing%27an+Joy+City+Tori+Shin'
  },
  bluefrog_crystal: {
    name: 'bluefrog蓝蛙（凯德晶萃广场店）', short: '蓝蛙凯德晶萃', type: '美式西餐 · 非自助',
    address: '徐家汇路268号凯德晶萃广场1楼23B-24A-24B号（携程列示）',
    hours: '晚餐营业时段及20人团体座位待确认。',
    source: 'https://you.ctrip.com/food/2/22577342.html',
    food: '汉堡、意面和共享拼盘，偏轻松的小酒馆聚餐氛围。',
    booking: '携程用户反馈门店历史信息仅供参考。询问20人相邻区域或团队菜单；团队菜单范围要覆盖主食、拼盘和饮料。'
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
    booking: '官网确认供应自助餐，但未公布当前费用信息。电话021-6036 8888询问20人晚餐含税、服务费团队接待信息；团队接待信息超过本方案团队菜单范围就不预订。'
  },
  marriott_chinese: {
    name: '金桥红枫万豪 · 万豪中餐厅', short: '红枫万豪中餐厅', type: '粤菜 / 上海菜 · 非自助',
    address: '浦东新区新金桥路15号',
    hours: '官网列示晚餐17:30-21:00。',
    source: 'https://www.marriott.com.cn/hotels/shapd-shanghai-marriott-hotel-pudong-east/dining/',
    food: '官网列有湖景包厢，比商场快餐更适合坐下来聚餐。',
    booking: '询问两张10人桌、包厢低消及团队桌餐；含税、服务费的20人总价须在团队菜单范围内。包厢与团队价尚未确认。'
  },
  sheraton: {
    name: '喜来登由由 · 盛宴标帜餐厅', short: '喜来登由由自助', type: '酒店自助餐',
    address: '浦东新区浦建路38号',
    hours: '晚餐开放日期、时段和用餐时限待酒店确认。',
    source: 'https://you.ctrip.com/food/shanghai2/5001308.html',
    food: '把更多安排留给酒店自助，适合公园活动后的正式聚餐。',
    booking: '携程用户反馈门店历史，点评较早，仅作参考。须确认10月10日自助晚餐团队接待信息、实际菜品及20人同一区域座位。'
  },
  latina_tongren: {
    name: 'Latina拉蒂娜（铜仁店）', short: '拉蒂娜铜仁店', type: '巴西烤肉自助',
    address: '静安区铜仁路88号2楼（品牌官网列示）',
    hours: '官网列示周六晚餐17:00-22:30；调休日安排待确认。',
    source: 'https://www.latina-grill.net/Reservation01?_l=en',
    food: '巴西烤肉自助，官网提供团体聚餐服务，适合想要热闹聚餐氛围的同事。',
    booking: '询问20人自助团体套餐和集中座位，官网未公布现价。含税、服务费团队接待信息须不超过本方案上限；现场音乐及饮料包含情况另问门店。'
  },
  latina_lujiazui: {
    name: 'Latina拉蒂娜（陆家嘴店）', short: '拉蒂娜陆家嘴店', type: '巴西烤肉自助',
    address: '浦东新区陆家嘴环路165号2楼（品牌官网列示）',
    hours: '官网列示周六晚餐17:00-22:30；调休日安排待确认。',
    source: 'https://www.latina-grill.net/Reservation01?_l=en',
    food: '烤肉自助与团体聚餐服务，适合轻活动后把安排花在吃饭上。',
    booking: '询问20人自助团队价、座位安排和含税总价；不使用历史团购价作为现价，音乐及饮料安排以门店确认为准。'
  },
  bluefrog_96: {
    name: 'bluefrog蓝蛙（九六广场店）', short: '蓝蛙九六广场', type: '美式西餐 · 非自助',
    address: '东方路796号九六广场1层122单元',
    hours: '携程列示10:00-24:00，实际营业待确认。',
    source: 'https://gs.ctrip.com/html5/you/foods/fooddetail/2461/12178674.html',
    food: '西餐与共享拼盘，更适合不想吃自助、想坐着聊天的同事。',
    booking: '20人预订相邻区域，按团队菜单范围商量团队菜单；可升级主菜或共享拼盘，饮料与服务费需计入。'
  },
  marriott_kangqiao: {
    name: '上海万豪酒店康桥 · Goji Kitchen & Bar', short: '康桥万豪自助餐', type: '酒店自助餐',
    address: '浦东新区康新公路4499号',
    hours: '官网列示每日营业；晚餐时段和10月10日安排需预约确认。',
    source: 'https://www.marriott.com/en-us/hotels/shazh-shanghai-marriott-hotel-kangqiao/dining/',
    food: '酒店自助餐，适合卡丁车后集中用餐和团队安排。',
    booking: '官网显示提供自助餐并接受预订；确认20人相邻座位、晚餐套餐和团队接待。'
  },
  holidayinn_kangqiao: {
    name: '上海康桥假日酒店 · 康桥餐厅', short: '康桥假日酒店餐厅', type: '酒店餐厅',
    address: '浦东新区秀沿路800号附近',
    hours: '官方页面列示酒店餐饮服务；晚餐时段和团队接待需确认。',
    source: 'https://www.ihg.com/holidayinn/hotels/us/en/shanghai/shgks/hoteldetail/dining',
    food: '酒店餐厅和休闲酒廊，适合20人集中用餐。',
    booking: '询问20人桌位、团队菜单、是否可安排相邻区域及当日营业情况。'
  },
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
    status: '先确认可覆盖约2.5小时所需项目；保龄球等按套餐计，不默认所有项目无限畅玩。电话021-31775136（携程列示）。',
    transport: '金吉路9号线至世纪大道，换2号线到人民广场，含步行约60-80分钟；拼车约45-70分钟。晚餐转场见各餐厅候选。',
    fit: '想热闹、喜好各不相同',
    times: [['16:00','集合出发','金桥5G未来中心；按人数分组。'],['17:15','分组轮换','保龄球、台球、飞镖等按实际套餐选择，每组5人。'],['19:00','整队转场','按所选餐厅预留步行或乘车时间。'],['19:30','团队晚餐','寿喜烧自助或美式西餐，约21:00结束。']]
  },
  {
    id: 'kart', n: '02', title: '卡丁车竞速', short: '专业赛道 + 圈速计时赛', tag: '刺激优先',
    area: '浦东康桥 · 专业竞速赛道', name: '流光速卡丁车俱乐部（康桥店）',
    why: '专业级卡丁车赛道，适合成人分批竞速和圈速挑战；场馆公开营业信息更完整。',
    activityBudget: 150, dinnerBudget: 150,
    dinners: [
      { id: 'marriott_kangqiao', route: '卡丁车场到上海万豪酒店康桥约10-20分钟车程，预留停车和入场时间。' },
      { id: 'holidayinn_kangqiao', route: '卡丁车场到康桥假日酒店约10-20分钟车程，按实时路况整队。' }
    ],
    venue: '流光速卡丁车俱乐部（康桥店）',
    address: '浦东新区康桥东路1088号4幢',
    hours: '公开地图和场馆资料列示为营业场馆；康桥店下午及晚间场次、20人分批安排需提前确认。',
    source: 'https://www.amap.com/place/B0HB3G755J',
    status: '公开资料显示这是专业卡丁车俱乐部，并有成人竞速和赛事记录。预约前确认10月10日营业、20人分批发车、单场时长、身高限制和团队接待。',
    transport: '从金桥5G未来中心到康桥东路约35-55分钟车程；统一拼车更方便。晚餐转场见康桥候选。',
    fit: '想要真正竞速、接受分批发车',
    times: [['16:00','集合出发','从金桥5G未来中心统一前往康桥。'],['17:00','安全讲解 + 计时赛','按赛道容量分批，记录圈速和团队排名。'],['18:45','颁发小奖 + 转场','确认停车、换场和整队时间。'],['19:15','团队晚餐','康桥酒店餐厅或附近团队餐厅，约21:00结束。']]
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
    status: '是团队询价目标，尚无现价确认。先问各主题人数、时长和同步开场安排；活动与晚餐含全部必付费用须合计不超过。',
    transport: '金吉路9号线至世纪大道，换2号线到人民广场，含步行约60-80分钟；拼车约45-70分钟。晚餐转场见候选餐厅。',
    fit: '喜欢剧情解谜、交流协作',
    times: [['16:00','集合出发','按主题人数分组。'],['17:15','小组密室挑战','2-3组分别体验，主题和人数由门店确认。'],['19:00','复盘 + 转场','预留结束时间差与餐厅转场。'],['19:30','团队晚餐','寿喜烧自助或美式西餐，约21:00结束。']]
  },
  {
    id: 'park', n: '04', title: '公园定向局', short: '轻定向任务 + 更好的晚餐', tag: '晚餐优先',
    area: '世纪公园 · 看天气', name: '世纪公园轻定向',
    why: '4组完成步行寻点与照片任务，活动轻松，把更多安排留给晚餐环境和菜品。',
    activityBudget: 40, dinnerBudget: 260,
    dinners: [
      { id: 'sheraton', route: '世纪公园到浦建路喜来登约15-30分钟车程。' },
      { id: 'latina_lujiazui', route: '世纪公园到陆家嘴环路约20-35分钟车程。' },
      { id: 'bluefrog_96', route: '世纪公园到九六广场约15-25分钟车程。' }
    ],
    venue: '世纪公园', address: '浦东新区锦绣路1001号，集合入口按路线选定',
    hours: '官方文旅资料列示每天24小时免费开放。',
    source: 'https://www.meet-in-shanghai.net/cn/tourist-attraction/shanghai-century-park-467610/',
    status: '公园免费；用于任务材料、饮水与小奖品，不是门票。需一位同事主持；活动遵守园方规定，下雨改室内。晚餐不默认包含某种海鲜或酒水。',
    transport: '金吉路9号线至世纪大道，换2号线到世纪公园，含步行约50-70分钟；拼车约30-50分钟。晚餐选浦东区域。',
    fit: '想轻松聊天、重视聚餐',
    times: [['16:00','集合出发','4组、每组5人。'],['17:15','步行定向任务','约60分钟，找点拍照、团队问答。'],['18:30','公布结果 + 转场','休息后前往选定餐厅。'],['19:00','晚餐主场','酒店自助、巴西烤肉或西餐，约21:00结束。']]
  },
  {
    id: 'boardgames', n: '05', title: '桌游德扑局', short: '轻桌游 + 德扑筹码积分赛', tag: '聊天友好',
    area: '五角场大学路 · 室内', name: '大学路桌游 + 德扑积分局',
    why: '改到五角场大学路，避开原人民广场小店；新手玩轻桌游，德扑爱好者分桌积分，中途轮换。',
    activityBudget: 80, dinnerBudget: 220,
    dinners: [
      { id: 'niunew_wujiaochang', route: '大学路到百联又一城约5-15分钟车程，或步行约15-25分钟，按门店入口整队。' },
      { id: 'white_university', route: '场馆到创智天地大学路商圈约5-15分钟车程，具体入口以预约信息为准。' },
      { id: 'bluefrog_wujiaochang', route: '大学路到五角场万达约5-15分钟车程，预留进商场时间。' }
    ],
    venue: '五角场大学路 · 德扑 / 狼人杀 / 桌游包场候选',
    address: '杨浦区大学路123号8层（城市吧列示，电话17321071557）',
    hours: '目前公开信息更偏跑团，未能确认是否有成熟的德扑/狼人杀包场服务；预约前必须电话确认20人包场、独立大桌、德扑桌和狼人杀主持支持，否则不采用。',
    source: 'https://www.amap.com/search?query=%E4%BA%94%E8%A7%92%E5%9C%BA%20%E5%A4%A7%E5%AD%A6%E8%B7%AF%20%E6%A1%8C%E6%B8%B8%20%E7%8B%BC%E4%BA%BA%E6%9D%80',
    status: '当前不把它视为已确认场地：公开资料主要显示跑团属性。只有在门店确认可安排德扑、狼人杀、20人分桌和包场后才保留；否则改为公司会议室或其他明确支持聚会桌游的场地。',
    transport: '从5G未来中心乘12号线至嘉善路换10号线到江湾体育场，含步行约55-75分钟；统一拼车约35-55分钟。场地确认后再锁集合入口。',
    fit: '喜欢桌游、德扑、边玩边聊',
    times: [['16:00','集合出发','统一拼车或地铁前往大学路。'],['17:00','分桌开局','轻桌游讲解；德扑按筹码积分，每桌人数由场地确定。'],['18:15','换桌 + 第二轮','确认大房实际容量后自由轮换。'],['19:15','转场 + 晚餐','按晚餐投票结果前往五角场商圈，约19:30到店。']]
  }
].map(plan => ({ ...plan, price: plan.activityBudget + plan.dinnerBudget }));

const dinnerOptions = plan => plan.dinners.map(option => ({ ...restaurants[option.id], ...option }));
