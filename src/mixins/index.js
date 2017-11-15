export default {
	methods:{
		doVote(val) {
			console.log(val);
			$.ajax({
				url: 'http://ahfensitong.com/tmp/shangpu/api.php?action=dovote',
				data: {
					uid: val.id,
					wx_uid: window.uid,
					jsonp: 1,
				},
				type: 'GET',
				dataType: 'jsonp',
				success: (data) => {

					if (data.error == 0) {
						this.$parent.$emit('showtost', '投票成功');
						val.count++;
					} else {

						this.$parent.$emit('showtost', data.msg);
					}
				}

			})

		},
		showTost(message) {
			console.log(12345);
			this.messageList.push(message);
			setTimeout(() => {
				let del_index = this.messageList.indexOf(message);
				this.messageList.splice(del_index, 1);
			}, 800)
		},
		getPageData(page,type,limit,call) {
			var realType;
			if (type) {
				realType = type;
			} else if (this.$route.query.type){
				realType = this.$route.query.type;
			} 
			$.ajax({
				url: 'http://ahfensitong.com/tmp/shangpu/api.php?action=getList',
				data: { type: realType, jsonp: 1, page: page ? page : 0 ,limit:limit?limit:6},
				type: 'GET',
				dataType: 'jsonp',
				success: (data) => {
					if (data.error == 0) {
						this.dataList.length = 0;
						data.data.length<6&&(this.last=true)
						data.data.length>=6&&(this.last=false)
						data.data.forEach((val) => {
							this.dataList.push(val)
						})
						call&&call(data.data);
					}
				}

			})
		},
		getPrev(){
			this.currPage>1&&this.currPage--;
		},
		getNext(){
			!this.last&&this.currPage++;
		}
	},
	mounted() {
		var timer = setInterval(() => {
			if (window.myApp.wx) {
				clearInterval(timer);
				var pathname = window.location.pathname;
				if (!!this.$route.query.uid){
					window.myApp.wx('', window.location.origin + pathname+'?&' + '/#' + this.$route.fullPath)
					return ;
				}
				window.myApp.wx('', window.location.origin + pathname+'?&' + '/#/');
			}
		}, 50)
	},
	watch:{
		currPage(news){
			
				this.getPageData(news);
			
		}
	},
	computed: {
		getInfo() {
			if (this.$route.query.uid){
				$.ajax({
					url:'http://ahfensitong.com/tmp/shangpu/api.php?action=getDetail',
					type:'GET',
					data:{uid:this.$route.query.uid,jsonp:1},
					dataType:'jsonp',
					success:(data)=>{
						if (data.error==0){
							if (this.$store.getters.getData.length<=0){
								this.$store.commit('setTmp', data.data);
							}
						}
					}
				})
			}
			return this.$store.getters.getData;
		},
		getheader() {
			return this.nameList[this.$route.query.type]
		}
	},
	data(){
		return {
			isLoading:true,
			progress:0,
			loadImgFlag:false,
			currPage:1,
			last:false,
			nameList: {
				'1': '2017年度最具人气口碑街区',
				'3': '2017年度最具特色街区',
				'4': '2017城市商业地标奖',
				'5': '2018年度最具投资价值街区',
				'6': '2018最值得期待的购物中心',
				'7': '2018年度最具投资价值写字楼',
				'8': '2017最佳商业运营操盘手',
				'9': '2017最佳商业销售操盘手',
				'10': '2017年度最佳商业地产开发企业',
				'11': '2017年度消费者最喜爱安徽品牌商户',
				'12': '2017年度优秀商业地产服务机构',
			},

			proList: [
				{ 
				  type: 1,
				  src: 'http://n.sinaimg.cn/ah/865fe30d/20171113/Zu-171.png',
				  children:[
					  { name:'2017年度最具人气口碑街区',celltype:1,listName:'街区名'},
					  { name: '2017年度最具特色街区', celltype: 3, listName: '街区名'},
					  { name: '2017城市商业地标奖', celltype: 4, listName: '街区名'},
					  { name: '2018年度最具投资价值街区', celltype: 5, listName: '街区名'},
					  { name: '2018最值得期待的购物中心', celltype: 6, listName: '街区名'},
					  { name: '2018年度最具投资价值写字楼', celltype: 7, listName: '街区名'}
				  ]
				},
				{ 
					type: 2, 
					src: 'http://n.sinaimg.cn/ah/865fe30d/20171113/Zu-172.png',
					children:[
						{ name: '2017最佳商业运营操盘手', celltype: 8, listName: '姓名',renderType:'peo'},
						{ name: '2017最佳商业销售操盘手', celltype: 9, listName: '姓名', renderType: 'peo'},
					],
				},
				{ 
					type: 3,
					src: 'http://n.sinaimg.cn/ah/865fe30d/20171113/Zu-173.png',
					children:[
						{ name: '2017年度最佳商业地产开发企业', celltype: 10, listName: '街区名'},
						{ name: '2017年度消费者最喜爱安徽品牌商户', celltype: 11, listName: '街区名'},
						{ name: '2017年度优秀商业地产服务机构', celltype: 12, listName: '街区名'},
					],
				 },
			]
		}
	},
	beforeMount () {
		if (!!!this.imgs||this.imgs.length<=0){
			this.isLoading=false;
			return;
		}
		var length = this.imgs.length;
		var count = 0;
		this.imgs.forEach((src)=>{
			let img = new Image();
			img.src = src;
			let that =this;
			img.onload = function(){
				that.progress = parseInt((++count/length)*100);
				// count==length&&(that.isLoading = false);
				if (count==length){
					setTimeout(()=>{
						that.isLoading = false;
						that.loadImgFlag = true;
						if (that.mountedFlag == true) {
							that.initGame && that.initGame();
						}
					},500)
				}
			}
		})
	}
}