var dish_data, model_select;

function show_base_recipe(ex) {
  dish_data = ex;
  $("#base-recipe-display").removeClass("d-none");
  $("#base-recipe-text").html(dish_data["base"]);
  $("#base-dish").text(dish_data["base-dish"]);
  if (model_select != null){
    $("#target-recipe-display").removeClass("d-none");
    $("#target-recipe-text").html(dish_data["target"][model_select]);
    $("#target-dish").text(dish_data["target-dish"]);
    $("#model-display").text(model_select);
  } else {
    $("#target-recipe-display").addClass("d-none");
  };
};

function show_target_recipe(model) {
  model_select = model;
  if (dish_data != null){
    $("#target-recipe-display").removeClass("d-none");
    $("#target-recipe-text").html(dish_data["target"][model]);
    $("#target-dish").text(dish_data["target-dish"]);
    $("#model-display").text(model);
  };
};

function shape_window() {
  $("body").css("overflow", "hidden");
  console.log($(window).height() - $("#navbar").outerHeight());
  // $("main").css("body", $(window).height());
  let navbar_height = $("#navbar").outerHeight();
  $("#text-display").css("height", $(window).height() - navbar_height);
};

$(document).ready(function() {
  let data = {
    'steam': {
      'base-dish': '清蒸多宝鱼', 'target-dish': '清蒸大闸蟹', 
      'base': '将1/3的葱和姜切成细丝，剩下的葱切寸段，姜切片，红辣椒切细丝，香菜洗净待用。<br>将生抽、蚝油、糖、几滴鱼露和4大勺清水混合，用小锅煮沸或微波炉转2分钟待用。<br>将多宝鱼处理干净，两面打菱形花刀，在鱼身上均匀的撒上料酒。<br>并将葱段和姜片均匀铺在鱼的上下方，放在大小合适的盘中。<br>入蒸锅大火8-9分钟即关火，离火但不要开锅盖，虚蒸2分钟。<br>蒸好的鱼去掉葱姜，盘里的汤汁也弃去不用。<br>沿鱼身边淋入煮好的豉油，再在鱼身上铺葱姜丝和红椒丝，香菜围边。<br>取小锅内放3大勺植物油，烧到冒白烟的程度（7、8成热），浇在葱姜丝上即可。', 
      'target': {
        '人类专家': '将1/3的葱和姜切成细丝，剩下的葱切寸段，姜切片，红辣椒切细丝，香菜洗净待用。<br>将生抽、蚝油、糖、几滴鱼露和4大勺清水混合，用小锅煮沸或微波炉转2分钟待用。<br>将大闸蟹处理干净，在大闸蟹身上均匀的撒上料酒。<br>并将葱段和姜片均匀铺在大闸蟹的上下方，放在大小合适的盘中。<br>入蒸锅大火10-15分钟即关火，离火但不要开锅盖，虚蒸2分钟。<br>用姜丝、醋，等调制蘸料。<br>蒸好的大闸蟹去掉葱姜，盘里的汤汁也弃去不用，美味诱惑的大闸蟹即可食用。', 
        'GPT-2 (D)': '将螃蟹洗净，放入盘中，加上姜片和葱段，倒入料酒，盖好锅盖，开火蒸15分钟即可出锅后撒上香菜末就啦！',
        'GPT-2 (D+R)': '大闸蟹洗净，放入蒸锅，蒸10分钟。<br>蒸好的大闸蟹，去掉蟹腮，去掉蟹心，蟹胃，蟹肠，蟹腮，蟹胃，蟹肠，蟹肠，蟹肠，（不断重复）',
        'EduCat': '1/3的葱和姜切成细丝，剩下的葱段和姜切丝，干辣椒切小段，香菜切段。<br>生抽、蚝油、糖、几滴鱼露和一大勺清水用小锅煮开。<br>微波炉叮2分钟。<br>多宝鱼清洗干净，两面切几刀，抹上料酒。<br>放入合适的容器。<br>上蒸锅，8-9分钟关火。<br>关火后不要开盖，焖3分钟。<br>蒸好的鱼去掉姜丝，蒸出的汤汁倒掉不要。<br>沿着盘边倒入煮好的酱汁。<br>在鱼身上铺上葱姜辣椒和香菜。<br>锅中放一大勺植物油，烧到冒青烟的程度（7-8成热）。<br>浇在葱姜丝上。',
        'Delorean': '蒸好后，把蟹壳掀开，把腮去掉，蟹身切成两半，摆盘。<br>锅里放入适量的油，油热后放入葱姜蒜爆香，加入适量的蒸鱼豉油，再加入适量的水，烧开后浇在蟹身上。<br>清蒸大闸蟹的做法如下。<br>大闸蟹洗净，放入蒸锅，蒸锅里放入适量的水，大火烧开后转中火蒸15分钟。<br>清蒸大闸蟹的做法如下。<br>大闸蟹洗净，放入蒸锅，蒸锅里放入适量的水，大火烧开后转中火蒸15分钟。<br>清蒸大闸蟹的做法如下。'
      }
    },
    'spicy': {'base-dish': '辣炒鱿鱼', 'target-dish': '辣炒田螺', 
      'base': '鱿鱼一定要过水，去腥。洗净鱿鱼颈，去除中间墨囊及鱿鱼嘴，切成块。<br>焯过捞起沥水。辣椒（可省）姜，蒜，热油后陆续放入锅中。<br>配料炒至半熟（青椒等，我没加），加适量盐，放入鱿鱼颈。<br>加料酒、生抽、老干妈调料烧至入味即可。<br>装盘开吃。', 
      'target': {
        '人类专家': '清洗田螺，将田螺在淡盐水中浸泡1个小时，吐泥沙。锅中烧开水，将浸泡的田螺捞出放入开水中。<br> 快速焯水，捞出，沥水。<br>辣椒（可省）姜，蒜，热油后陆续放入锅中。<br>加入青椒、青蒜等配料炒至半熟，加适量盐，放入田螺。<br>加料酒、生抽、老干妈调料烧至入味即可。<br>装盘开吃。',
        'GPT-2 (D)': '1.将买回来的田螺用清水洗干净，放入锅中加适量盐和料酒煮熟（大概10分钟左右）<br>2.捞出沥干备用<br>3.准备好配菜<br>4.热油爆香姜蒜<br>5.倒入田螺翻炒<br>6.再依次加入豆瓣酱、生抽、老抽、蚝油、糖、鸡精、花椒粉、八角、桂皮、小米椒继续翻炒<br>7.最后加入青红椒翻炒均匀<br>8.装盘即可食用啦！',
        'GPT-2 (D+R)': '1.将田螺洗净，放入锅中，加入适量的水，煮开后，捞出，沥干水分。<br>2.锅中放入适量的油，放入姜片，蒜片，干辣椒，花椒，爆香。<br>3.放入田螺，翻炒，加入适量的盐，生抽，老抽，料酒，翻炒均匀。<br>4.加入适量的水，煮开后，转小火，煮至汤汁浓稠，加入适量的鸡精，翻炒均匀，即可出锅。',
        'EduCat': '洗去泥沙鱿鱼去掉外皮和内脏，切成圈，大葱（切段），姜切片配料爆香（为了好看我没加）加适量盐加入田螺炒。<br>加料酒、生抽、白糖、蚝油开吃。',
        'Delorean': '田螺洗净，剪去尾部，放盐水浸泡半小时，再用清水冲洗干净。<br>锅中放油，放入姜片，蒜片，干辣椒，花椒，八角，桂皮，香叶，炒香。<br>放入田螺，翻炒，加入料酒，生抽，老抽，蚝油，盐，糖，加入啤酒，盖上锅盖，大火烧开，转中火煮15分钟。<br>加入青椒，大火收汁，出锅。'
      }
    },
	'kungpao': {'base-dish': '宫保鸡丁', 'target-dish': '宫保虾球', 
      'base': '鸡胸肉洗净切丁。<br>加入一勺料酒，两勺生抽，一勺淀粉，半勺蚝油，适量的黑胡椒粉。<br>搅拌均匀腌制10分钟。<br>下油炒鸡胸肉断生捞出，油继续放里面。<br>下半勺豆瓣酱炒出红油，这里我家里没有豆瓣酱所以放了老干妈，一样好吃，加入葱姜蒜炒香。<br>倒入炒好的鸡胸肉和切好的胡萝卜丁和黄瓜丁，这时炒的差不多熟的时候你可以尝尝味道，觉得少什么就加什么，想吃甜口可以加点糖。<br>成品就是这样了，这不是饭店的甜版，我觉得太甜了很容易腻，这种的很下饭又香。', 
      'target': {
        '人类专家': '将虾洗净，去皮，去头，去虾线，剁成泥，用耗油、料酒、酱油、胡椒粉腌制15分钟。<br>撒入淀粉抓匀，顺时针搅动虾泥馅儿，上劲儿，用手掌抓取肉泥，挤出一个一个虾球，备用。<br>炸花生米——花生先用冷水洗一遍，泡个一两分钟，然后锅里倒少许油，开小火炸花生，等到花生在锅里噼里啪啦唱歌，就好了。<br>锅里用炸花生剩的油，小火煸香花椒和干辣椒，我喜欢麻麻地口感，还放了点青花椒。<br>花椒出香味后放入葱蒜、郫县豆瓣炒出红油。<br>倒入虾球翻炒，倒入花生翻炒。<br>放入青椒丁翻炒，加入酱油，醋，少许糖，根据口味放盐。<br>出锅。',
        'GPT-2 (D)': '将虾仁洗净，去除肠线后切成小块；<br>2。葱、姜分别剁碎末备用；<br>3。黄瓜洗净后切成丁状；<br>4。胡萝卜洗净后也切成丁状；<br>5。花生米放入锅中炒熟，晾凉后去皮；<br>6。将虾仁和黄瓜丁混合在一起，加盐、料酒拌匀腌制10分钟左右；<br>7。淀粉倒入碗内，调入精盐、味精、白糖、醋、香油搅拌均匀成芡汁待用；<br>8。取一个大盘子，先铺上干豆腐片，再把虾仁、黄瓜丁、胡萝卜丁码好，淋上芡汁即可食用',
        'GPT-2 (D+R)': '虾仁洗净，去虾线，加入料酒、盐、胡椒粉腌制10分钟。<br>黄瓜切丁，葱姜蒜切末。锅中放油，油热后放入葱姜蒜末爆香。<br>放入腌制好的虾仁，翻炒至变色。<br>放入黄瓜丁，翻炒均匀。<br>加入适量盐、糖、生抽、醋，翻炒均匀。<br>出锅前撒上葱花即可。',
        'EduCat': '虾仁洗净，加入一勺料酒，一勺生抽，一勺老抽，一勺蚝油，一勺白胡椒粉，搅拌均匀腌制15分钟。<br>腌制汁不要倒掉豆瓣酱炒出红油，如果没有豆瓣酱，用老干妈也好吃加入葱姜蒜炒香，加入鸡胸肉和切好的胡萝卜丁和黄瓜丁翻炒，炒的时候可以尝尝味道，缺什么加什么，不够甜加点糖，其实不是很甜的味道，我觉得太甜不好吃，吃的比较淡的。',
        'Delorean': '虾仁洗净，去虾线，用料酒、盐、胡椒粉腌制15分钟。<br>胡萝卜、黄瓜、青椒切丁。<br>葱姜蒜切末。<br>调汁：生抽、醋、糖、盐、淀粉、水。锅中放油，油热后放入虾仁，炒至变色后盛出。<br>锅中留油，放入葱姜蒜末炒香，放入胡萝卜丁、黄瓜丁、青椒丁，翻炒至熟。<br>放入虾仁，倒入调好的汁，翻炒均匀，出锅。'
      }
    },
	'cold': {'base-dish': '凉拌豆腐', 'target-dish': '凉拌皮蛋豆腐', 
      'base': '豆腐切块，沸水焯熟胡萝卜丝、甜椒丝和豆腐块。<br>捞出，香菜切段撒之，加入蒜蓉、生姜末，淋生抽、香醋、香油、麻辣酱。<br>起锅，热两勺花椒油，关火后加少许白砂糖，用余温加热，淋在菜上。<br>拌匀，即可食用。', 
      'target': {
        '人类专家': '皮蛋剥皮，分切成四瓣；豆腐切块，胡萝卜切丝、甜椒切丝、香菜切段。豆腐块，胡萝卜丝沸水焯熟。<br>皮蛋、豆腐、胡萝卜丝、甜椒丝，香菜依次摆盘，加入蒜蓉、生姜末，淋生抽、香醋、香油、麻辣酱。<br>起锅，热两勺花椒油，关火后加少许白砂糖，用余温加热，淋在菜上。<br>拌匀，即可食用。',
        'GPT-2 (D)': '准备好所有食材，皮蛋切块，香菜洗净切段；<br>将豆腐放入锅中煮熟捞出沥干水分后装盘；<br>把皮蛋、辣椒酱和生抽倒在一起搅匀成调味汁；<br>淋上调味汁即可享用！',
        'GPT-2 (D+R)': '皮蛋切块，胡萝卜切丝，香菜切段，蒜切末，小米辣切圈，放入碗中，加入生抽，醋，盐，糖，香油，辣椒油，搅拌均匀。<br>将调好的料汁倒入皮蛋豆腐中，搅拌均匀即可。',
        'EduCat': '豆腐切块，盘子里放胡萝卜丝、尖椒丝、豆腐块，香菜切末，蒜末、葱末、生抽、陈醋、香油、盐、糖、起锅烧一勺花椒油，关火放少许白糖，余温加热，倒入盘中。<br>拌匀即可。',
        'Delorean': '皮蛋切小块，豆腐切块，蒜切末，小米辣切圈，香菜切段，放入碗中。<br>调料：生抽，醋，糖，盐，香油，辣椒油，花椒油，辣椒油，花椒粉，蒜末，小米辣，香菜，搅拌均匀。<br>皮蛋豆腐的做法如下。<br>豆腐切块，皮蛋切块，葱切末，小米辣切圈，香菜切段，放入碗中。'
      }
    },
	'smother': {'base-dish': '焖鸡', 'target-dish': '鲍鱼焖鸡', 
      'base': '处理好的三黄鸡加入姜葱和调味料腌2小时，鸡肚子里也要放入姜葱和调料腌入味。<br>压力锅底铺一层姜片和葱。<br>放入腌好的鸡，倒入腌鸡的酱汁。<br>盖上锅盖，放好配重泄压阀，开中火，煮至配重泄压阀大幅度摇摆，改成小火再煮10分钟，即可关火。<br>关火后锅内温度依然很高，等到压力指示器下降后开盖，压力锅焖鸡就完成了。<br>装盘后浇上汤汁，就可以享用啦。', 
      'target': {
        '人类专家': '处理好的三黄鸡加入姜葱和调味料腌2小时，鸡肚子里也要放入姜葱和调料腌入味；鲍鱼去内脏，洗净，备用。<br>压力锅底铺一层姜片和葱。<br>放入腌好的鸡，倒入腌鸡的酱汁。<br>盖上锅盖，放好配重泄压阀，开中火，煮至配重泄压阀大幅度摇摆，改成小火再煮10分钟，即可关火。<br>关火后锅内温度依然很高，等到压力指示器下降后开盖，加入鲍鱼，再次开火，翻炒2-3分钟，关火。<br>装盘后浇上汤汁，就可以享用啦。',
        'GPT-2 (D)': '准备好食材，鸡肉洗净切块，姜蒜切片，葱切段锅中放油烧热后加入姜、蒜爆香倒入鸡块翻炒至变色加入料酒和生抽继续翻炒均匀加入适量清水大火煮开转小火炖20分钟左右加入红枣再炖5-10分钟最后撒上葱花即可出锅啦！',
        'GPT-2 (D+R)': '鸡肉洗净，切块，加入料酒，生抽，老抽，蚝油，盐，糖，淀粉，抓匀腌制半小时。<br>锅中放油，放入姜片，蒜瓣，八角，桂皮，香叶，干辣椒，炒香。<br>放入鸡肉，炒至变色。<br>加入一罐啤酒，加入适量水，没过鸡肉。<br>大火煮开，转小火焖煮20分钟。<br>加入土豆，胡萝卜，洋葱，继续焖煮10分钟。<br>加入青椒，大火收汁。<br>出锅，撒上葱花。',
        'EduCat': '处理好的三黄鸡加入姜葱和调味料腌半小时，鸡肚子里也要加入姜葱和调料腌入味。<br>高压锅底铺一层姜片和葱段，放腌好的鸡，倒入腌鸡的酱汁。<br>盖上盖子大火煮10分钟，大幅度开盖后小火煮10分钟。<br>关火后温度高，压力下降后开盖就可以了。<br>出锅后淋上汤汁就可以开吃了。',
        'Delorean': '鸡肉洗净，切块，加入料酒、生抽、老抽、蚝油、盐、糖、淀粉、姜片腌制半小时。<br>鲍鱼洗净，切花刀。葱切段，姜切片，蒜切片。热锅冷油，放入葱姜蒜爆香，放入鸡块翻炒至变色。<br>加入鲍鱼翻炒，加入适量生抽、老抽、蚝油、盐、糖、料酒翻炒均匀。<br>加入适量水，没过鸡块，大火烧开，转小火焖煮20分钟。'
      }
    }
  }
  shape_window();
  $("input[name=dish_filter]").click(function() { show_base_recipe(data[$("input[name=dish_filter]:checked").val()]) });
  $("input[name=model_filter]").click(function() { show_target_recipe($("input[name=model_filter]:checked").val()) });
});

