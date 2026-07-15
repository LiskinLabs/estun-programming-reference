InstTable=
{
	--注意：类型与名称之间，不可以使用制表符，如int serial；中间用空格
	--注意下面的书写格式,如命令没有参数但‘{’中间需要有一个空行‘}’、如on_xxxx{定义的变量类型+名称不能太长，尽量总数小于30}
	--全部操作分类：0通用命令回复、1变量操作、2指令操作、3程序操作、4工程操作、5命令操作、6ESTUNTOOL命令
	--0通用命令回复
	 simpleInfoReply=      --简单命令回复
	 {
		int	type;
		string Info;
	 },
	 getConfigMsg=      --示教器向控制器索取配置文件信息
	 {

	 }, 
	 on_getConfigMsg=      --示教器向控制器索取配置文件信息
	 {
		int needRetry;   --是否需要继续传输 0:不需要；1：需要
	 }, 
	 CNT2THCmd=   --控制器上传命令信息
	 {
	    int type;           --信息显示类型: 0:状态栏显示 1:弹窗显示 2:专用系统日志报告生成完成后弹窗关闭 3:辨识带按钮弹窗
	    string Info;       --内容
	 },
	 CNT2THCmdReply=   --控制器上传命令,示教器回复包信息
	 {
	    int result;         --命令响应结果: 0:失败 1:成功
	 },
	  getRotInitOK=      --示教器向控制器索取控制器初始化信息20231114
	 {

	 }, 
	  on_getRotInitOK=      --示教器向控制器索取控制器初始化信息20231114
	 {
        int result;        --命令响应结果: 0:失败 1:成功
	 }, 
	--1变量操作
	getVarType=                               --获取变量类型
	{
		int serial;
	},
	on_getVarType=
	{
		int serial;
		int varType_count;
		VARTYPE varType;				 --全部变量详细
	},
	getSystemVarClass=                               --获取系统变量类型列表
	{
		int serial;
	},
	on_getSystemVarClass=
	{
		int serial;
		int varClass_count;
		VARCLASS varClass;		--变量列表
	},
	getGlobalVarClass=                               --获取全局变量类型列表
	{
		int serial;
	},
	on_getGlobalVarClass=
	{
		int serial;
		int varClass_count;
		VARCLASS varClass;		--变量列表
	},
	getPrjVarClass=                               --获取工程变量类型列表
	{
		int serial;
	},
	on_getPrjVarClass=
	{
		int serial;
		int varClass_count;
		VARCLASS varClass;		--变量列表
	},
	getProVarClass=                               --获取程序变量类型列表
	{
		int serial;
	},
	on_getProVarClass=
	{
		int serial;
		int varClass_count;
		VARCLASS varClass;		--变量列表
	},
	getDataNameList=
	{
		int scope;
		string projectName;
		string programName;
		string type;
	},
	on_getDataNameList=
	{
		int data_count;
		DATANAMELIST dataNameList;
	},
	getEnumList=
	{
		string name;
		int paramNO;
	},
	on_getEnumList=
	{
		string enumList;
	},
	getVarNameList=
	{
		string type;
	},
	on_getVarNameList=
	{
		int count;
		SCOPENAMELIST scopenamelist;
	},
	getVarParam=
	{
		int scope;
		string projectName;
		string programName;
		string name;
	},
	on_getVarParam=
	{
		DATAPARAM var;
	},
	getVarName=
	{
		int scope;
		string projectName;
		string programName;
		string type;
	},
	on_getVarName=
	{
		string varName;
	},
	getAllVar=
	{

	},
	on_getAllVar=
	{
		ALLDATA allvar;
	},

	dataAdd=
	{
		int scope;
		string projectName;
		string ProgramName;
		INSTDATA var;
	},
	dataModify=
	{
		int scope;
		string projectName;
		string ProgramName;
		INSTDATA var;
		int ForcedUpdateEnable;
	},
	
	dataRename=
	{
		int scope;
		string projectName;
		string ProgramName;
		string varName;
		string newVarName;		
	},
	
	dataDelete=
	{
		int scope;
		string projectName;
		string ProgramName;
		string varName;
	},
	
	teachPostion=				--示教点
	{
		int scope;
		string projectName;
		string programName;
		DATAPARAM TeachPosData;
	},
	--变量结构体定义
	ALLDATA=
	{
		int scopeNum;
		int var_count;
		DATA data;
	},
	DATA=
	{
		string type;
		string name;
	},
	VARTYPE=
	{
		string varName;       --"APos"
		int param_count;
		VARPARAM varParam;  --APos参数 
	},
	VARPARAM=
	{
		string paramName;      --A1
		string type;		--类型
		string unit;		--参数单位
	},
	VARCLASS=
	{
		string className;      --“基本变量类型”
		int class_count;
		VARCLASS2 varList;		--“基本变量类型下的全部变量”
	},
	VARCLASS2=
	{
		string varName;        --“APos”
		string desc;           --“点到点位置”
	},
	DATANAMELIST=					--同类型变量P1,P2....
	{
		int scope;
		string name;
	},
	SCOPENAMELIST=
	{
		int scope;
		int count;
		VARPARAM varnamelist;
	},
	DATAPARAM=
	{
		string name;
		string type;
		string data;
	},
	getDisplayVarScope=			--获取显示变量域
	{
	
	},
	on_getDisplayVarScope=
	{
		int varScopeDisplay;	--0表示不显示，1表示显示
	},
	setDisplayVarScope=			--设置显示变量域
	{
		int varScopeDisplay;	--0表示不显示，1表示显示
	},
	on_setDisplayVarScope=
	{
	
	},
	getSingleScopeVar=
	{
		int scope;
	},
	on_getSingleScopeVar=
	{
		ALLDATA allvar;
	},
	getTrigStepEnableSts=			--获取触发指令可支持单步执行的使能状态
	{
	
	},
	on_getTrigStepEnableSts=
	{
		int enableSts;	--0表示不支持，1表示支持
	},
	setTrigStepEnableSts=			--设置触发指令可支持单步执行的使能状态
	{
		int enableSts;	--0表示不支持，1表示支持
	},
	on_setTrigStepEnableSts=
	{
	
	},
	
	--2指令操作
	getInstClass=                              --获取系统已定义指令列表
	{
		int serial;
	},
	on_getInstClass=
	{
		int serial;
		int instClass_count;
		INSTCLASS instClass;
	},
	getLittleInstClass=                        --获取系统已定义小指令列表
	{
		int serial;
	},
	on_getLittleInstClass=
	{
		int serial;
		int instClass_count;
		INSTCLASS addDoinstClass;
	},
	getTrigInstClass=                        --获取系统已定义触发列表
	{
		int serial;
	},
	on_getTrigInstClass=
	{
		int serial;
		int instClass_count;
		INSTCLASS trigInstClass;
	},	
	getInstParamList=                               --获取所有指令的参数列表
	{
		int serial;
		int resetFlag;
	},
	on_getInstParamList=
	{
		int serial;
		int needRetry;   --是否需要继续传输 0:不需要；1：需要
		int inst_count;
		INST inst;
	},
	getOneLineInst=                             --获取程序下的1条指令
	{
		string projectName;
		string programName;
		int instIndex;
	},
	on_getOneLineInst=
	{
		string projectName;
		string programName;
		int instIndex;
		PROGRAMINST programInst;
	},
	getProgramInst=                             --获取程序下的指令
	{
		string projectName;
		string programName;
	},
	on_getProgramInst=
	{
		string projectName;
		string programName;
		int needRetry;   --是否需要继续传输 0:不需要；1：需要	
		int programInst_count;
		PROGRAMINST programInst;
	},
	getNewInstParam=						--新建指令时，向控制器获取该指令的参数
	{
		string instName;
		string projectName;
		string programName;
	},
	on_getNewInstParam=         				--控制器返回的指令参数
	{
		INSTPARAMVALUE getInstParamValue;
	},
	getInstData=						--修改指令时，向控制器获取该指令的参数
	{
		int instRow;
		string projectName;
		string programName;
	},
	on_getInstData=         				--控制器返回的指令参数
	{
		INSTPARAMVALUE getInstParamValue;
	},
	getInstParam=
	{
		string projectName;
		string programName;
		int instIndex;
		string instKeyWord;
	},
	on_getInstParam=
	{
		INSTPARAMVALUE getNewInstParamValue;
	},
	addNewInst=                                     --新增指令
	{
		INSTPARAMVALUE setNewInstParamValue;
	},
	on_addNewInst=
	{
		INSTRELYINFO addInstReply;
	},
	modifyInst=                                     --修改指令
	{
		INSTPARAMVALUE modifyInstParamValue;
	},
	on_modifyInst=
	{
		INSTRELYINFO modifyInstReply;
	},
	instComment=                       --隐藏指令	
	{
		string projectName;
		string programName;
		int instIndex;
		int instIndex_end;
	},
	on_instComment=                       
	{
		INSTRELYINFO commentReply;
	},
	instUnComment=                       --显示指令	
	{
		string projectName;
		string programName;
		int instIndex;
		int instIndex_end;
	},
	on_instUnComment=                      	
	{
		INSTRELYINFO uncommentReply;
	},
	getFunctionParam=				--大指令编辑界面，点击fun类型参数，向控制器到小指令参数列表
	{
		string projectName;
		string programName;
		int instIndex;
		int ParamIndex;
		string type;
	},
	on_getFunctionParam=
	{
		INSTPARAMVALUE funParamValue;
	},
	getNewFunctionParam=			--小指令选择界面，选择好指令后，向控制器要小指令的参数列表
	{
		string projectName;
		string programName;
		int instIndex;
		string instKeyWord;
	},
	on_getNewFuncitonParam=
	{
		INSTPARAMVALUE newfunParamValue;
	},
	addFunction=				--小指令编辑完后，确定，发送指令参数到控制器
	{
		INSTPARAMVALUE addFunction;
	},
	on_addFunction=
	{
		string funcString;
	},
	instDelete=
	{
		string projectName;
		string ProgramName;
		int instIndex;
		int instIndex_end;
	},
	on_instDelete=                      	
	{
		INSTRELYINFO deleteInstReply;
	},
	instCopy=
	{
		string projectName;
		string ProgramName;
		int instIndex;
		int instIndex_end;
	},
	instCut=
	{
		string projectName;
		string ProgramName;
		int instIndex;
		int instIndex_end;
	},
	on_instCut=
	{
		INSTRELYINFO cutInstReply;
	},
	instPaste=
	{
		string projectName;
		string ProgramName;
		int instIndex;
		int isReverse;  --是否为反向粘贴，默认为FALSE
	},
	on_instPaste=
	{
		INSTRELYINFO pasteInstReply;
	},
	
	instRevock=
	{
		string projectName;
		string programName;
	},
	on_instRevock=
	{
		int revockType;		--类型 1-删除, 2-修改, 3-剪切, 4-粘贴, 5-注释, 6-取消注释
		int revockNum;		--可撤销数
		INSTRELYINFO revockInstReply;
	},
	
	--指令结构体定义
	INSTCLASS=
	{
		string className;
		int instName_count;
		INSTNAME instNameList;
	},
	INSTNAME=
	{
		string instName;
	},
	INST=
	{
		string instName;       --"MovJ"
		int param_count;
		INSTPARAM instParam;
	},
	INSTPARAM=
	{
		string paramName;       --
		string type;            --"real"
		string subType;         --"real"
		string desc;            --"相对速度"
		string maxValue;        --“100”
		string minValue;        --“0”
		string initValue;       --“20”
		string enumstr;         --
		string comment;      	--注释
		string depends;			--依赖
		string state;			--状态
	},
	PROGRAMINST=
	{
		string instContent;		--每行具体指令 
	},
	INSTPARAMVALUE=
	{
		string projectName;
		string programName;
		int lineID;
		int instType;
		string instString;
		int data_count;
		string instKeyWord;
		INSTDATA instData;
	},
	INSTDATA=
	{
		string name;
		string type;			--"APos"
		string data;			--"P1"
		int scope;			    --"作用域"
	},
	
	INSTRELYINFO=		--程序指令结构有变化时，回复的内容
	{
		string projName;
		string progName;
		string MDInfo;			--"MD5中a-b-c-d的值"
		int startLineIndex;
		int endLineIndex;
		string instInfo;
	},
	
	
	--3程序操作
	loadProgram=
	{
		string projectName;
		string programName;
	},
	on_loadProgram=
	{
		string projectName;
		string programName;
		string MD5V;
	},
	UnLoadProgram=
	{
		string projectName;
		string programName;
	},
	openProgram=
	{
		string projectName;
		string programName;
	},
	on_openProgram=
	{
		string projectName;
		string programName;
		string MD5V;
	},
	closeProgram=
	{
		string projectName;
		string programName;
	},
	refreshProgram=
	{
		string projectName;
	},
	on_refreshProgram=
	{
		string projectName;
		int program_count;
		string programName;
	},
	addNewProgram=
	{
		string projectName;
		string programName;
	},
	on_addNewProgram=
	{
		string projectName;
		string programName;
	},
	copyProgram=
	{
		string projectName;
		string programName;
	},
	pasteProgram=
	{
		string projectName;
		string programName;
	},
	deleteProgram=
	{
		string projectName;
		string programName;
	},
	renameProgram=
	{
		string projectName;
		string ProgramName;
		string newProgramName;
	},
	getProgramMD5V=
	{
		string projectName;	
		string programName;
	},
	on_getProgramMD5V=
	{
		string projectName;
		string programName;
		string MD5V;
	},

	on_getProgLine=
	{
		int line;
	},

	getProgLine=
	{
		string projectName;
		string programName;
	},
	
	prlsftProgram=
	{
		int cmdType;			--命令响应（1：第一个界面参数、2：第二个界面参数、3：生成平移程序）
		string projectName;		--工程名
		string programName;		--程序名
		string newProgName;		--新程序名
		string coorName;		--坐标系名
		string toolName;		--工具名
		int coorScope;			--坐标系域
		int toolScope;			--工具域
		int progShiftType;		--程序平移方式（0:示教方式、1:指定方式）
		int rotateType;			--旋转方式（0：OFF、1:ON）
		int posId;				--位置点ID（0：OFF的一组点、1-3：ON的三组点）
		string oriPosName;		--源位置的名称
		int oriPosScope;		--源位置的作用域
		string goalPosName;		--目标位置的名称
		int goalPosScope;		--目标位置的作用域
		int goalPosType;		--目标位置的获取方式（0：选点、1：示教）
		double dbX;				--X轴偏移量
		double dbY;				--Y轴偏移量
		double dbZ;				--Z轴偏移量
		int switchType;			--平移或镜像
		int scope;              --平移或镜像范围
		int startLine;			--开始行
		int endLine;			--结束行
		int insertLine;			--插入行
	},
	
	mirimgProgram=
	{
		string projectName;
		string programName;
		string newProgName;
		string coorName;
		string toolName;
		int coorscope;
		int toolscope;
		int mirrorPlane;
		double mirrorValue;
	},
	
	setProtectProgram=
	{
		string projectName;
		string programName;
		int programAttribute;   --0为写保护状态，1为未保护状态
	},
	on_setProtectProgram=
	{
		string projectName;
		string programName;
		int programAttribute;   --0为写保护状态，1为未保护状态
	},

	--4工程操作
	loadProject=
	{
		string projectName;
	},
	on_loadProject=
	{
		string programName;

	},
	unLoadProject=
	{
		string projectName;
	},
	refreshProject=
	{
		
	},
	on_refreshProject=
	{
		int projectNum;
		PROJECT project;
	},
	addNewProject=
	{
		string projectName;
	},
	on_addNewProject=
	{
		string projectName;
	},
	copyProject=
	{
		string projectName;
	},
	pasteProject=
	{
		string projectName;
	},
	deleteProject=
	{
		string projectName;
	},
	renameProject=
	{
		string projectName;
		string newProjectName;
	},
	
	--工程结构体定义
	PROJECT=
	{
		string projectName;
		int programNum;
		string programName;
		int programAttribute;   --0为写保护状态，1为未保护状态
		string programComm;		--程序注释信息
	},
	
	--导入操作完成后更新变量管理表
	updateVariable=
	{
		int updateType;			--0 更新所有工程，1 更新某个工程
		string projectName;		
	},
	
	--5命令操作
	--设置用户自定义机器人名称Id
	setUserDefRobId=
	{
	    string robId;
	},
	--获取用户自定义机器人名称Id
	getUserDefRobId=
	{
	    
	},
	on_getUserDefRobId=
	{
	    string robId;
	},
	--获取系统配置文件
	getSysCfgInfo=                              
	{
		
	},
	on_getSysCfgInfo=
	{
		VERSIONINFO versionInfo;	--控制器版本信息
		MANAGERCFG managerCfg;		--系统参数
		ROBOTCFG robotCfg;		--机器人参数
		MOTIONCFG motionCfg;		--运动相关参数
		JOGCFG jogCfg;			--点动参数
		IOCFG ioCfg;			--IO参数
		CONVEYERCFG conveyerCfg;        --传送带参数
		TrackCFG trackCfg;              --跟随参数
	},
	--控制器版本信息
	VERSIONINFO=
	{
		string HMISoftVersion;
		string ERCSoftVersion;
		string PLCSoftVersion;
		string KernelVersion;
		string developDate;
		string developers;
		string appSoftType;			--应用软件工艺包类型，通用、弧焊、码垛、折弯、点焊
		string appSoftVersion;		--应用软件工艺包版本
		string appSoftTypeList;		--应用软件工艺包类型列表，用于描述当前系统支持哪些
	},
	--系统参数
	MANAGERCFG=
	{
		int enWriteErrFile;			--出错后是否生成错误文件
		int enPowerInManual;			--手动情况是是否上伺服
		int FirmwareVersion;        --系统固件/平台类型(0,1,2)
		string controllerIP;			--控制器IP (FV=0,1,2)
		int controllerPort;			--端口号
		string RTOSIP;				--实时系统IP(FV=0,1)
		int RTOSPort;				--端口号
		string RTOSCommIP;          --实时系统通讯连接IP(FV=0)
		string controllerLan4IP;  --控制器lan4IP(FV=1,2)
		string controllerLan4IPNetmask;  --控制器lan4IP对应的Netmask(FV=1)
		string controllerLan4IPGateway;  --控制器lan4IP对应的Gateway(FV=1)
		string RTOSLan3IP;      --实时系统ie1g2/lan3IP(FV=1)
		string RTOSLan3IPNetmask;      --实时系统ie1g2/lan3IP对应的Netmask(FV=1,2)
		string RTOSLan3IPGateway;      --实时系统ie1g2/lan3IP对应的Gateway(FV=1,2)
		int deviceType;				--视觉设备类型 1:2D 2:3D
		string visionIP;			--视觉IP
		int visionPort;				--视觉端口号
		int visionType;    			--视觉类型 0: 静态 1：动态
		double remoteVelo;			--远程启动速度
		string remoteProj;			--远程启动工程
		string remoteProg;			--远程启动程序
		int motByselfEnable;		--切到远程模式时系统能否自动上使能的标志
		int reloadProgEnable;		--切到远程模式时DI9能否重新加载程序的标志
	},
	--机器人参数
	ROBOTCFG=
	{
		string robotType;
		string robotTypeList;
		int bodyAxisNum;
		int extAxisNum;
		int axisType;
		int linkType;
		int axisServoType;   --轴伺服类型
		double payload;
		int mountMethod;
		int cabinet;  --电柜型号0:默认 1:新一代电柜
	},
	--运动相关参数
	MOTIONCFG=
	{
		int axisSingleValue;		--零位单圈值参数
		int collideEn;				--碰撞检测使能
		int colliSupportEn;  		--碰撞功能支持使能
		int collideSensPerc;		--碰撞灵敏度百分比
		int vibraBatement;			--振动抑制开关
		int vibraBateSensGrade;     --振动抑制灵敏等级
		int replyLinSpeed;			--再现时直线最大速度
		int replyCircSpeed;			--再现时圆弧最大速度
		int replyCartAcc;			--再现时空间运动的加速度
		int replyCartDec;			--再现时空间运动的减速度
		int replyCartJerk;			--再现时空间运动的加加速度
		int ptpTransMode;			--关节运动过渡类型
		int cartTransMode;			--空间运动过渡类型
		int standEnableSts;			--自动掉励磁使能
		double standWaitTime;		--自动掉励磁检测时间
		int collideStopType;		--碰撞后停止方式
	},
	--点动参数
	JOGCFG=
	{
		double accTimePer;			--点动加速度百分比
		double decTimePer;			--点动减速度百分比
		int linSpeed;				--点动直线最大速度
		int ptpSpeed;				--点动关节最大速度
		int microIncOvrride;		--寸动速度
		double microIncJoint;		--关节寸动距离
		double microIncCart;		--空间寸动距离
	},
	--IO参数
	IOCFG=
	{
		int dInNum;
		int dOutNum;
		int aInNum;
		int aOutNum;
		int simdInNum;
		int simdOutNum;
		int simaInNum;
		int simaOutNum;
	},
	--传送带参数
	CONVEYERCFG=
	{
		int direction;     --传送带方向 0:Forward,1:Backward
		int resolution;    --编码器分辨率
		int molecule;      --减速比分子
		int denominator;   --减速比分母
		double equivalent; --传送带当量 
	},
	--跟随参数
	TrackCFG=
	{
		 int trackType;  --跟随类型 0:Axis,1:cart
		 double left;    --左边界
		 double right;   --右边界
		 double latestPos; --最后抓取位置
		 double height;    --工件高度
		 double compensation; --x方向补偿量
		 double speed;  --跟随速度
		 double acceleration; --跟随加速度
		 double jerk;      --跟随加加速度
		 double accuracy;  --跟随精度
		 int level;     --跟随误差等级 0:low,1:normal,2:high
		 int triggleTime; --相机触发时间(ms) 
	},
	
	--获取远程速度
	getAutoRunVeloFactor=   
	{
		
	},
	on_getAutoRunVeloFactor=
	{
		double veloFactor;
	},	
	--设置远程速度
	on_setAutoRunVeloFactor=
	{
		double veloFactor;
	},	
	setAutoRunVeloFactor=   
	{
		double veloFactor;
	},
	--设置远程程序
	setAutoRunProgram=		
	{
		string projectName;
		string programName;
	},
	--取消远程加载程序
	un_setAutoRunProgram=		
	{
		string projectName;
		string programName;
	},
	--改变点动坐标系
	changeJogCoorType=		
	{
		int coorType;
	},
	--改变程序运行方式：单步或者连续
	changeProgramRunMode=		
	{
		int modeType;
	},
	--改变全局速度
	changeOverRide=			
	{
		double vValue; --int改为double20210525
	},
	--伺服操作
	motionEnable=
	{
		int motionEnOrDis;
	},
	--设置点动模式 0:正常 1:寸动
	setJogMode=
	{
		int jogMode;
	},
	--点动
	jogMotion=				
	{
		int jogCmd;
		int jogIndex;
		int jogDir;
	},
	--切换系统模式:自动，手动，远程
	manualOperatModeType=			
	{
		int Type;
	},
	--调试模式
	modifyRobDebugMode=
	{
		int type;  --0获取 1修改
		int value;  --0关闭 1开启  修改时有效
	},
	on_modifyRobDebugMode=
	{
		int ret; --0关闭 1开启 获取时答复
	},
	--整体回零
	homingAxis=
	{
		int axisIndex;
		int axisSingleValue;
	},
	--存储零点值
	storeZeroPoint=
	{
	   int axisIndex;           --轴号
	   double axisSingleValue;  --参数
	   int Type;                --现场值：0， 初始值：1
	   int movCount;            --寻位次数   0无效   1 2 3表示寻位次数， 4表示手动寻位
	},
	--运动到校准点
	movingCalibratedPoint=
	{
	   int movType;          --开始运动：0， 停止运动：1
	   int axisIndex;        --轴号
	},
	--寻位
	locatingMotion=
	{
	   int locatType;        --开始寻位：0，停止寻位：1
	   int axisIndex;        --轴号
	   int value;           --灵敏度  (0~1000)
	},
	--获取初始值
	getInitValueStatus=
	{
		int axisIndex;		--轴号
	},
	on_getInitValueStatus=
	{
		int value;
	},
	--传送带跟随指令
	setTrackAlarmEnabled=
	{
		int enableFlag;
	},
	--启动
	on_startRun=
	{
        int displayDlg;   --为0代表不用提示对话框，为1则表示需要弹出对话框提示用户进行选择操作。
	},
	startRun=
	{
		string projectName;
		string ProgramName;
	    int operateType;  --为10表示获取是否选择对话框的状态，为0表示继续运行，为1表示转到停止。	
	},
	--停止
	stopRun=
	{
        int stopType;   --为0代表正常按下stop停止，为1代表松开start停止
	},
	--暂停
	Halt=
	{

	},
	--继续
	continue=
	{

	},	
	--虚拟示教器急停按钮状态
	VirtualE-ButtonState=
	{
		int value;  --0:未按下 1:按下
	},
	--设置PC
	setPC=
	{
		int row;
	},
	getProgPC=		--获取程序指针断电恢复功能的使能参数
	{
		
	},
	on_getProgPC=		
	{
		int memProgPC;		--0：不启用，1：启用
	},
	setProgPC=		--设置程序指针断电恢复功能的使能参数
	{
		int memProgPC;		--0：不启用，1：启用
	},
	on_setProgPC=
	{
	
	},
	resumeProgPC=		--断电恢复设置程序指针行号
	{
		
	},
	on_resumeProgPC=		
	{
		int resume;		--0：不恢复，1：恢复
		string projectName;
		string programName;
		int progPCId;
	},
	
	--IO
	setDoutValue=
	{
		int port;
		int value;
	},
	setAoutValue=
	{
		int port;
		double value;
	},
	setSimDoutValue=
	{
		int port;
		int value;
	},
	setSimAoutValue=
	{
		int port;
		double value;
	},
	--IO--强制设置输入IO
	setDinValue=
	{
		int port;
		int value;
		int isForce;
	},
	setSimDinValue=
	{
		int port;
		int value;
		int isForce;
	},
	setAinValue=
	{
		int port;
		double value;
		int isForce;
	},	
	setSimAinValue=
	{
		int port;
		double value;
		int isForce;
	},
	
	--IO--一键清除IO输入量的仿真状态
	setClearForce=
	{
		int ioType;			-- -1-NONE	0-DI	1-DO	2-AO	3-AI	11-SIM_DI	12-SIM_DO	13-SIM_AI	14-SIM_AO
	},
	on_setClearForce=
	{
		
	},
	--IO--IO注释
	getIONote=
	{
		int ioType;
		int ioPort;
		int langMode;		--0:中文、1：英文
	},
	on_getIONote=
	{
		int ioCount;
		string ioNote;
	},
	setIONote=
	{
		int ioType;
		int port;
		string ioNote;
		int langMode;		--0:中文、1：英文
	},
	on_setIONote=
	{
		
	},
	
	--清错
	clearError=
	{
	    int errorID;
		int errorType;   --错误等级
	},
	resetError=
	{

	},
	--设置工具
	setTool=
	{
		int scope;
		string toolName;
	},
	--设置坐标系
	setRefCoor=
	{
		int scope;
		int frameType;  --坐标系类型:0:UserCoord 1:ExtTCP
		string userCoor;
	},
	--获取碰撞检测参数
	getCollisionDetectValue=   
	{
		
	},
	on_getCollisionDetectValue=
	{
		COLLIDECFG collidecfg;
	},
	--碰撞检测设置
	on_setAxisCollideValue=
	{
		COLLIDECFG collidecfg;
	},
	setAxisCollideValue=
	{
		COLLIDECFG collidecfg;
	},
	COLLIDECFG=
	{
		int collideEnable;
		int collideFinishIOType;	-- 0表示DO，1表示SIMDO
		int collideFinishIOPort;	-- 选NULL时可将该值设为0，其他为对应的输出口值。
		int axiscnt;
		int axisCollideV;	--数组
	},
	--碰撞后停止方式
	on_setCollideStopType=
	{
		int collideStopType;
	},
	setCollideStopType=
	{
		int collideStopType;
	},
	--给定单圈值设置
	refreshScallingValue=
	{
		int axiscnt;
	},
	on_setAxisScallingValue=
	{
		SCALLINGCFG scallingcfg;
	},
	setAxisScallingValue=
	{
		SCALLINGCFG scallingcfg;
	},
	SCALLINGCFG=
	{
		int axiscnt;
		int axisScallingV;	--数组
	},
	--获取振动抑制参数
	getVibraBatemParam=   
	{
		
	},
	on_getVibraBatemParam=
	{
		int vibraBEnable;
		int axiscnt;
		int axisVibraBV;	--数组
	},
	--设置振动抑制 0：关  1：开
	on_setVibraBatement=
	{
		int enOrdisable;
	},
	setVibraBatement=
	{
		int enOrdisable;
	},
	--设置振动抑制灵敏度
	on_setVibraBatemSensitivity=
	{
	    int axisIndex;
		int sensitivity;
	},
	setVibraBatemSensitivity=
	{
	    int axisIndex;
		int sensitivity;
	},
	--设置末端有效载荷
	setPayLoad=
	{
		int scope;
		string payloadName;	
	},
	--	设置机器人类型
	setRobotType=
	{
		string robotType;
	},
	on_setRobotType=
	{
		string robotType;
	},
	--设置系统IP
	setControllerIP=
	{
		string contrIP;
		int contrPort;
		string rtosIP;
		int rtosPort;
		string rtosCommIP;	
	},
	on_setControllerIP=
	{
		string contrIP;
		int contrPort;
		string rtosIP;
		int rtosPort;
		string rtosCommIP;
	},
	--设置外部通讯IP
	setControllerExtIP=
	{
		string controllerLan4IP;  --控制器lan4IP(FV=1)
		string controllerLan4IPNetmask;  --控制器lan4IP(FV=1)对应的Netmask
		string controllerLan4IPGateway;  --控制器lan4IP(FV=1)对应的Gateway
		string RTOSLan3IP;      --实时系统ie1g2/lan3IP(FV=1,2)
		string RTOSLan3IPNetmask;      --实时系统ie1g2/lan3IP(FV=1,2)对应的Netmask
		string RTOSLan3IPGateway;      --实时系统ie1g2/lan3IP(FV=1,2)对应的Gateway
		int isEffectImmediately;  --是否立即生效(FV=2)
	},
	on_setControllerExtIP=
	{
		string controllerLan4IP;  --控制器lan4IP(FV=1,2)
		string controllerLan4IPNetmask;  --控制器lan4IP(FV=1)对应的Netmask
		string controllerLan4IPGateway;  --控制器lan4IP(FV=1)对应的Gateway
		string RTOSLan3IP;      --实时系统ie1g2/lan3IP(FV=1,2)
		string RTOSLan3IPNetmask;      --实时系统ie1g2/lan3IP(FV=1,2)对应的Netmask
		string RTOSLan3IPGateway;      --实时系统ie1g2/lan3IP(FV=1,2)对应的Gateway
	},
	--设置控制器连接的相机控制器IP
	setVisionContrIP=
	{
		int deviceType;  --设备类型1:2D 2:3D
		string IP;
		int port;
		int type;     --视觉类型 0:static,1:dynamic
	},
	on_setVisionContrIP=
	{
	        int deviceType;  --设备类型1:2D 2:3D
		string IP;
		int port;
		int type;        --视觉类型 0:static,1:dynamic
	},
	--设置寸动参数
	setJogMicroIncParam=
	{
		int axisCont;
		int override;
		double jointParam;
		double cartParam;
	},
	on_setJogMicroIncParam=
	{
		int axisCont;
		int override;
		double jointParam;
		double cartParam;
	},
	--设置寸动某一项参数
	setJogMicroIncOneParam=
	{
		int jogCoordType;
		int index;
		double jogMicParam;
	},
	on_setJogMicroIncOneParam=
	{
		int jogCoordType;
		int index;
		double jogMicParam;
	},
	
	--工具参数标定
	calibToolParam=
	{
		int cmdType; --1、2、3、4代表示教的第几个点，5代表计算 
		int axisPlane;		--0表示x轴或XY面，1表示y轴或XZ面，2表示z轴或YZ面
		int isNegative;		--0表示正，1表示负
	},
	on_calibToolParam=
	{
		int cmdType; --1、2、3、4代表示教的第几个点，5代表计算 
		int posNum;
		double posData;
	},
	--用户坐标系标定
	calibRefSysParam=
	{
		int cmdType; 		--1、2、3、4代表示教的第几个点，5代表计算 
		int frameType; 		--1表示用户坐标系，2表示外部坐标系
		int axisPlane;		--0表示x轴或XY面，1表示y轴或XZ面，2表示z轴或YZ面
		int isNegative;		--0表示正，1表示负
		int operateType;  --目前只用于跟随，动坐标系时为0表示直线传送带；为1表示圆形传送带
	},
	on_calibRefSysParam=
	{
		int cmdType; --1、2、3代表示教的第几个点，4代表计算 
		int posNum;
		double posData;
	},
	getTeachPoint=   --获取示教点
	{
		int cmdType; --1.获取示教点
	},
	on_getTeachPoint=
	{
		int posNum;
		double posData;
	},
	--设置应用软件版本，1，通用 2、弧焊 3、码垛 4、点焊 5、折弯
	setAPPSoftwareType=
	{
		string appType;
	},
	on_setAPPSoftwareType=
	{
		string appType;
	},
	--获取系统IO配置
	getSysIOCfg=
	{
		
	},
	on_getSysIOCfg=
	{
		int sysIONum;
		SYSIOCFG iocfg;
	},
	setSysIOCfg=
	{
		SYSIOCFG iocfg;
	},
	on_setSysIOCfg=
	{
		SYSIOCFG iocfg;
	},
	--系统IO参数 type 0:DI 1:DO property 0:高电平 1:低电平
	SYSIOCFG=
	{
		string ioName;
		int ioType;
		int ioPort;
		int ioProperty;
	},
	--获取历史报警记录（目前，200行）
	getHistoricalErrList=
	{
		
	},
	on_getHistoricalErrList=
	{
		int errNums;
		string errList;
	},
	--清空历史报警记录（含文件)
	clearHistoricalErrList=
	{
		
	},
	
	--传送带脉冲标定
	calibConveyorEquivalent=
	{
		int cmdType; --1、2代表示教的第几个点，5代表计算 
		int conveyorIndex; --当前正在标定的传送带编号
		int conveyorType; --传送带类型
	},
	on_calibConveyorEquivalent=
	{
		int cmdType; --1、2、3代表示教的第几个点，5代表计算 
		double x;
		double y;
		double z;
		double a;
		double conveyerValue;
	},
	--获取选中的传送带跟随参数
	getConveyorCfgParam=
	{
		 int conveyorIndex;
	},
	on_getConveyorCfgParam=
	{
		 int conveyorIndex;
		 int enableSts;
		 string visionIP;
		 int visionPort;
		 int direction;     --传送带方向 0:Forward,1:Backward
		 int conveyorType;  --传送带类型 0：直线，1：圆
		 double equivalent; --传送带当量 
		 double left;    --左边界
	 	 double right;   --右边界
		 double latestPos; --最后抓取位置
		 double compensation; --x方向补偿量
		 double speed;  --跟随速度
		 double acceleration; --跟随加速度
		 double jerk;      --跟随加加速度
		 double accuracy;  --跟随精度
		 int triggleTime; --相机触发时间(ms)
		 string coordName;
		 int coordScope;
		 int trigType; --相机触发方式，0：定时触发；1：外部IO触发
		 int trigInput; --相机触发输入口
		 int trigInputLevel; --触发DI的有效电平
		 int trigOutput; --相机触发输出口
		 int trigOutputLevel; --触发DO的有效电平
		 int dataType; --相机数据类型：0：xya平面点位；1：xyzabc立体点位
		 double rejectDis;		--重复检测距离
		 int encoderSel;	--编码器通道号
		 
		 int signalCheckoutType;  --触发信号有效与否的校验类型：0为不校验；1为时间校验；2为传送带距离校验
		 int sheildType;	--屏蔽对象：0为数据接收；1为传送带位置
		 int checkoutTime;   --上一次有效信号触发后屏蔽下一次信号的时间
		 double checkoutPos;	--上一次有效信号触发后屏蔽下一次信号的传送带距离。	

		 double yCompensation; --y方向补偿量
		 double deceleration; --跟随减速度
		 double syncPos; --最晚同步位置
		 double aCompensation; --a方向补偿量
		 int enableFilter; --滤波使能
		 double filterData1; --滤波系数
		 double filterData2;--滤波系数
		 double filterData3;--滤波系数
		 double filterData4;--滤波系数
		 double filterData5;--滤波系数

		 int simConvEnableSts;--虚拟传送带是能状态
		 double simConvSpeed;--虚拟传送带的运行速度
		 int CoordType;
	},	
	--设置选中的传送带跟随参数
	setConveyorCfgParam=
	{
		 int conveyorIndex;
		 int enableSts;
		 string visionIP;
		 int visionPort;
		 int direction;     --传送带方向 0:Forward,1:Backward
		 int conveyorType;  --传送带类型 0：直线，1：圆
		 double equivalent; --传送带当量 
		 double left;    --左边界
	 	 double right;   --右边界
		 double latestPos; --最后抓取位置
		 double compensation; --x方向补偿量
		 double speed;  --跟随速度
		 double acceleration; --跟随加速度
		 double jerk;      --跟随加加速度
		 double accuracy;  --跟随精度
		 int triggleTime; --相机触发时间(ms)
		 string coordName;
		 int coordScope;
		 int trigType; --相机触发方式，0：定时触发；1：外部IO触发
		 int trigInput; --相机触发输入口
		 int trigInputLevel; --触发DI的有效电平
		 int trigOutput; --相机触发输出口
		 int trigOutputLevel; --触发DO的有效电平
		 int dataType; --相机数据类型：0：xya平面点位；1：xyzabc立体点位
		 double rejectDis;		--重复检测距离
		 int encoderSel;	--编码器通道号

		 int signalCheckoutType;  --触发信号有效与否的校验类型：0为不校验；1为时间校验；2为传送带距离校验
		 int sheildType;	--屏蔽对象：0为数据接收；1为传送带位置 
		 int checkoutTime;   --上一次有效信号触发后屏蔽下一次信号的时间
		 double checkoutPos;	--上一次有效信号触发后屏蔽下一次信号的传送带距离。		 

		 double yCompensation; --y方向补偿量
		 double deceleration; --跟随减速度
		 double syncPos; --最晚同步位置
		 double aCompensation; --a方向补偿量		 
		 int enableFilter; --滤波使能
		 double filterData1; --滤波系数
		 double filterData2;--滤波系数
		 double filterData3;--滤波系数
		 double filterData4;--滤波系数
		 double filterData5;--滤波系数 
		 
		 int simConvEnableSts;--虚拟传送带是能状态
		 double simConvSpeed;--虚拟传送带的运行速度	
		 int CoordType;
	},
	on_setConveyorCfgParam=
	{
		 int conveyorIndex;
		 int enableSts;
		 string visionIP;
		 int visionPort;
		 int direction;     --传送带方向 0:Forward,1:Backward
		 int conveyorType;  --传送带类型 0：直线，1：圆
		 double equivalent; --传送带当量 
		 double left;    --左边界
	 	 double right;   --右边界
		 double latestPos; --最后抓取位置
		 double compensation; --x方向补偿量
		 double speed;  --跟随速度
		 double acceleration; --跟随加速度
		 double jerk;      --跟随加加速度
		 double accuracy;  --跟随精度
		 int triggleTime; --相机触发时间(ms)
		 string coordName;
		 int coordScope;
		 int trigType; --相机触发方式，0：定时触发；1：外部IO触发
		 int trigInput; --相机触发输入口
		 int trigInputLevel; --触发DI的有效电平
		 int trigOutput; --相机触发输出口
		 int trigOutputLevel; --触发DO的有效电平
		 int dataType; --相机数据类型：0：xya平面点位；1：xyzabc立体点位
		 double rejectDis;		--重复检测距离
		 int encoderSel;	--编码器通道号
		 
		 int signalCheckoutType;  --触发信号有效与否的校验类型：0为不校验；1为时间校验；2为传送带距离校验
		 int sheildType;	--屏蔽对象：0为数据接收；1为传送带位置
		 int checkoutTime;   --上一次有效信号触发后屏蔽下一次信号的时间
		 double checkoutPos;	--上一次有效信号触发后屏蔽下一次信号的传送带距离。		 		 

		 double yCompensation; --y方向补偿量
		 double deceleration; --跟随减速度
		 double syncPos; --最晚同步位置
		 double aCompensation; --a方向补偿量		 
		 int enableFilter; --滤波使能
		 double filterData1; --滤波系数
		 double filterData2;--滤波系数
		 double filterData3;--滤波系数
		 double filterData4;--滤波系数
		 double filterData5;--滤波系数
		 
		 int simConvEnableSts;--虚拟传送带是能状态
		 double simConvSpeed;--虚拟传送带的运行速度		
		 int CoordType;
	},
	getConveyerSpeed=
	{
		 int conveyorIndex;
	},
	on_getConveyerSpeed=
	{
		 double speed;
	},
	--设置传送带参数
	setConveyerParam=
	{
	         int direction;     --Conveyer Direction 0:Forward,1:Backward
		 int resolution;
		 int molecule;
		 int denominator;
		 double equivalent;
	},
	on_setConveyerParam=
	{
		 int direction;     --Conveyer Direction 0:Forward,1:Backward
		 int resolution;
		 int molecule;
		 int denominator;
		 double equivalent;
	},
	--设置跟随参数
	setTrackParam=
	 {
	         int type;  --Track type 0:Axis,1:Descartes
		 double left;
		 double right;
		 double latestPos;
		 double height;
		 double compensation;
		 double speed;
		 double acceleration;
		 double jerk;
		 double accuracy;
		 int level;     --Error level 0:low,1:normal,2:high
		 int time;
	 },
	 on_setTrackParam=
	 {
	         int type;  --Track type 0:Axis,1:Descartes
		 double left;
		 double right;
		 double latestPos;
		 double height;
		 double compensation;
		 double speed;
		 double acceleration;
		 double jerk;
		 double accuracy;
		 int level;     --Error level 0:low,1:normal,2:high
		 int time;
	 },
	 --设置虚拟或实际示教器
	setDemoType=
	{
		int type;
	},
	on_setDemoType=
	{
		int type;
	},
	--设置拱形运动的参数
	archMotion=
	{
	    double h1;
   	    double h2;
	    double vel;
	    double x;
	    double y;
	    double z;
	    double a;
	    double b;
	    double c;
	    int mode;
	    int cf1;
	    int cf2;
	    int cf3;
	    int cf4;
	    int cf5;
	    int cf6;
	},
	--控制拱形运动的起停
	archCtrl=
	{
	    int value;
	},
	on_archCtrl=
	{
	    int value;
	},
	--锁机功能
	encryptData=
	{
	    string encryptInfo;
	},
	on_encryptData=
	{
	    string encryptInfo;
	},
	decryptData=
	{
	    string decryptInfo;
	},
	on_decryptData=
	{
	    string decryptInfo;
	},
	getEncryptParam=
	{
	    
	},
	on_getEncryptParam=
	{
	    string cpuNum;
	    int type;
	    int remainDay;
		int firstEncryptDay;
		int secondEncryptDay;
		int thirdEncryptDay;
		int TimerEncryptDay;
	},
	getClockStatus=
	{
	    
	},
	on_getClockStatus=
	{
	    int sts;   --为0代表不用锁机，为1代表锁机状态
	},

	--一点对正坐标系
	setToolAlignActiveOrDis=
	{
	    int enActiveOrDis;  --0:代表关闭激活 1:代表打开激活
	},
	ToolAlign=
	{
	    int enable;     --使能:0:disable 1:enable
	    int type;        --类型: 0:only z-axis 1:whole tool
	    int dir;           --方向:0:Go- 1:Go+
	},
	--伺服清错误Fn/Enter(简单回复)
	resetServoError=
	{	
	    string resetName;  --名称:Fn010/Fn011/Enter
	    int index;        --轴索引[1,16]
	},
	--获取伺服历史报警 每轴最大10个
	getServoHistoricalErrList=
	{
		int index;  --索引[1,16]
	},
	on_getServoHistoricalErrList=
	{
		int cnt;
		int errList;
	},	
	--FOE UPLOAD
	slaveFoeUpload=
	{
	    int index;        		--轴索引[1,16], 0:IO
	    int fileType;        	--1:firmware; 2:param
	},
	on_slaveFoeUpload=
	{
	    int value;
	},
	--FOE DOWNLOAD
	slaveFoeDownload=
	{
	    int index;        		--轴索引[1,16], 0:IO
	    int fileType;        	--1:firmware; 2:param
	    int paramType;        	--参数方式，1、出厂参数，2、调试参数
	},
	on_slaveFoeDownload=
	{
	    int value;
	},
	--COMPARE FILE
	compareParameterFile=
	{
	    int index;        		--轴索引[1,16], 从低位到高按位取  0:此轴不需要比较参数文件 1:此轴需要比较参数文件
	    int fileType;        	--1:固件; 2:参数文件 ;3:参数临时文件
	},
	on_compareParameterFile=
	{
	    int value;               --从低位到高按位取  0:参数一致  1:参数不一致
	},
	--updateParameterFile
	updateParameterFile=
	{
	    int index;        		--轴索引[1,16], 从低位到高-按位取  0:此轴不需要更新参数  1:此轴需要更新参数
	    int fileType;        	--1:固件; 2:参数文件 ;3:参数临时文件
	    int updateType;        	--更新方式，1、更新文件，2、仅更新ID
	},
	on_updateParameterFile=
	{
	    int value;              --从低位到高按位取  0:参数一致  1:参数不一致
	},
	--getCommState
	getCommState=
	{
		int count;
		int paramId;--命令号1：获取Modbus本地Server；2：获取Modbus对端Client
	},
	on_getCommState=
	{
		int count;
		int paramId;
		string Ip;
		int port;
	},
	--getEipState
	getEipState=
	{
	    int commType;  --1,Eip
	},
	on_getEipState=
	{
	    int eipType;   --0,Scanner 1,Adpater  当前文件记录的那个运行就返回哪个类型
	    int eipState;  --0,not run; 1,run      返回当前记录软件的授权状态信息
	},
	--getEipAdapter
	getEipAdapter=
	{
	    
	},
	on_getEipAdapter=
	{
	    int ret;      --0-失败  1-成功
	    int configId;
	    int inputSize;      --输入字节数
	    int outputSize;	    --输出字节数
	    int state;
	},
	--modifyEipScanner
	modifyEipScanner=
	{
	    int type;                  --0 增加EIPScanner连接;1,修改EIPScanner连接;2删除EipScanner连接
	    string name;               --名称区别修改哪个
	    string adapterIPaddr;      -- adapter的IP地址
	    int inputAssembly;         --输入连接端口号
	    int outputAssembly;        --输出连接端口号
	    int configurationAssembly; --配置连接端口号
	    int cycleTime;             --周期时间
	    int inputSize;             --输入字节数
	    int outputSize;            --输出字节数
	},
	on_modifyEipScanner=
	{
	    int value;     -- --0-失败  1-成功
	},
	--modifyEipAdpader
	modifyEipAdpader=
	{
	    int type;           --1,修改EIPScanner连接
	    int configId;
	    int inputSize;      --输入字节数
	    int outputSize;	    --输出字节数
	},
	on_modifyEipAdpader=
	{
	    int ret;               -- --0-失败  1-成功
	},
	--getEipInstall
	getEipInstall=
	{
	    int commType;       --命令类型 0-查询，1-安装
	    int deviceType;     --设备类型 1-Scanner  2-Adapter
	},
	on_getEipInstall=
	{
	    int commType;       -- 1-Scanner  2-Adapter
	    int result;	        --0-失败  1-成功
	},
	EipConnInfo=
	{
	    string name;
	    string adapterIPaddr;
	    int inputAssembly;
	    int outputAssembly;
	    int configurationAssembly; 
	    int cycleTime;
	    int inputSize;
	    int outputSize;
	    int state;
	},
	--getEipDeviceList
	getEipDeviceList=
	{
	    int eipType; --1-Scanner 2-Adpater
	},
	on_getEipDeviceList=
	{
	    int count;  --当前文件存入EIP连接的数目
	    EipConnInfo connection; --EIP连接的属性和状态信息
	},
	EDSFileList=
	{
		int number;
	    string name;
	},
	getEipEDSList=
	{
	
	},
	on_getEipEDSList=
	{
	    int count;  --当前文件存入EDS模板的数目
	    EDSFileList edsfilelist; --EDS文件的序号和文件名称
	},
	getEipEDSInfo=
	{
		int number;--需要获取第几个模板文件的参数信息
	},
	on_getEipEDSInfo=
	{
	    int inputAssembly;              --输入连接端口号
	    int outputAssembly;           --输出连接端口号
	    int configurationAssembly; --配置连接端口号
	    int cycleTime;                      --周期时间
	    int inputSize; 
		int outputSize; 		
	},
	--获取伺服Pn参数
	getSlavePnParam=
	{
	    string PnName;  --Pn名称:Pn102/Pn111
	    int index;        --轴索引[1,16]
	},
	on_getSlavePnParam=
	{
	    int value;
	},
	--设置伺服Pn参数
	setSlavePnParam=
	{
	    string PnName;  --Pn名称:Pn102/Pn111
	    int index;        --轴索引[1,16]
	    int value;        --设置值
	},
	on_setSlavePnParam=
	{
	    int value;
	},
	--操作伺服Pn参数
	opSlavePnParam=
	{
	    int opType;        		--操作方式，1、备份，2、恢复
	    int paramType;        	--参数方式，1、出厂参数，2、调试参数
	},
	on_opSlavePnParam=
	{
		int opType;        		--操作方式，1、备份，2、恢复
	    int paramType;        	--参数方式，1、出厂参数，2、调试参数
	    int value;             --操作回复成功标志 0，成功，1，失败
	    string opResult;       --操作回复信息
	},
	--获取伺服、io的版本号
	getSlaveVersion=
	{
	    string slaveName;  --从站名称:IoArm,IoFpga/ServoArm,ServoDsp
	    int index;        --轴索引[0,16]
	},
	on_getSlaveVersion=
	{
		string slaveName;
		int index;
		string versionInfo;
	},
	--伺服关键指标实时状态更新(过载比、温度、母线电压等，状态包中上传)
	updateServoKeyIDs=
	{
		int value;
	},	
	--FoE方式固件升级
	
	--设置吊装方式
	setMountMethod=
	{
	    int value;        --设置值,0-地面 1-吊装
	},
	on_setMountMethod=
	{
	    int value;
	},
	--设置调试功能项
	setFuncDiagnose=
	{
	    int index;       
		int value;
	},
	on_setFuncDiagnose=
	{
	    int index;
	},
	--设置调试参数
	setParamDiagnose=
	{
	    int index;       
		double value;       
	},
	on_setParamDiagnose=
	{
	    int index;
	},
	--获取调试状态参数
	getStaParamDiagnose=
	{
	       
	},
	on_getStaParamDiagnose=
	{
	    int count;       
		double value; 
	},
	--获取产品码
	getProductCode=
	{
	    int commType;  --1,Eip
	},
	on_getProductCode=
	{
	    int commType;  --1,Eip  
		int productCode; 
	},
	--设置激活码
	setLicenseCode=
	{
	    int commType;  --1,Eip
		int licenseCode; 
	},
	on_setLicenseCode=
	{
	    int commType;  --1,Eip 
		int licenseState;  
	},
	--获取激活状态
	getLicenseState=
	{
	    int commType;  --1,Eip 
	},
	on_getLicenseState=
	{
	    int commType;  --1,Eip  
		int licenseState; 
	},
	--设置试用版
	setTrialRunMode=
	{
	    int commType;  --1,Eip
	},
	on_setTrialRunMode=
	{
	    int commType;  --1,Eip 
	},	
	--获取试用版运行剩余天数
	getTrialRunModeDay=
	{
	    int commType;  --1,Eip 
	},
	on_getTrialRunModeDay=
	{
	    int commType;  --1,Eip  
		int trialRunModeDay; 
	},
	--获取实际运行模式
	getRunModeAct=
	{
	    int commType;  --1,Eip 
	},
	on_getRunModeAct=
	{
	    int commType;  --1,Eip  
		int runModeAct; --0,no mode; 1,trial run mode; 2,license mode 
	},	
	--获取运行状态
	getRunState=
	{
	    int commType;  --1,Eip 
	},
	on_getRunState=
	{
	    int commType;  --1,Eip  
		int runState;  --0,not run; 1,run,but no mode; 2,run with mode ,but no cyclic data exchange ; 3,run with cyclic data exchange 
	},
	--获取从站信息
	getEcatSlaveInfo=
	{
	
	},
	on_getEcatSlaveInfo=
	{
		string slaveInfo;  
	},	
	--增加Ecat从站
	addEcatSlave=
	{
	    int slaveType;  --1,从站类型， servo-ED3L, IO-实点模块 DI/DO/Enc 
	},
	on_addEcatSlave=
	{
	    int slaveType;  --1,从站类型， servo-ED3L, IO-实点模块 DI/DO/Enc 
	},	
	--删除Ecat从站
	deleteEcatSlave=
	{
	    int slaveType;  --1,从站类型， servo-ED3L, IO-实点模块 DI/DO/Enc 
	},
	on_deleteEcatSlave=
	{
	    int slaveType;  --1,从站类型， servo-ED3L, IO-实点模块 DI/DO/Enc 
	},	
	MultiStationParam=
	{
	    int enableSts;
		int startInput;
		int stopInput;
		int startOutput;
		int stopOutput;
		string program;
	},
	setMultiStationParam=
	{
	    int isEnable;
		int count;
		MultiStationParam mParam;
	},
	on_setMultiStationParam=
	{
	
	},
	getMultiStationParam=
	{
	
	},
	on_getMultiStationParam=
	{
	    int isEnable;
		int count;
		MultiStationParam mParam;	
	},
	MultiStationExecParam=
	{
		string program;
		int execSts;   --预约执行状态：-10表示未预约；-1表示停止；0表示运行中；1，2,3...表示预约执行的顺序
		int startInputSts;
		int stopInputSts;
		int startOutputSts;
		int stopOutputSts;
	},	
	getMultiStationExecSts=
	{
	
	},
	on_getMultiStationExecSts=
	{
	    int count;
		MultiStationExecParam execSts;
	},
		setRefCoor=
	{
		int scope;
		int frameType;  --坐标系类型:0:UserCoord 1:ExtTCP 2: POSITIONER
		string userCoor;
	},
	--新增变位机坐标系标定数据结构
	calibPositionerParam=
	{
		int cmdType; --1、2、3、4代表示教的第几个点，5代表计算 
		int frameType; --1表示一号变位机，2表示二号变位机，3表示3号变位机
		int axisIndex; --存储前一个变位机的轴号，frameType为1时，该值无效；frameType为2时，该值为一号变位机对应的轴号。
	},
	on_calibPositionerParam=
	{
		int cmdType; --1、2、3代表示教的第几个点，4代表计算 
		int posNum;
		double posData;
	},
	--新增设置变位机坐标系数据结构
	PositionerParam=
	{
		int axisNum; --变位机对应的实际轴号
		int posNum; 
		double posData;--该值的标定值
	},
	getPositionerParam=
	{
		int positionerIndex; --变位机类型索引号 
	},
	on_getPositionerParam=
	{
		int paramNum; 
		PositionerParam param; --变位机类型对应的变位机参数
	},
	setPositionerParam=
	{
		int positionerIndex; --变位机类型索引号 
		int paramNum; 
		PositionerParam param; --变位机类型对应的变位机参数
	},
	on_setPositionerParam=
	{
	
	},
	----多边体区域
	VertexInfo=
	{
		double pointX;
		double pointY;
	},
	setPolyhedronAreaParam=
	{
		int polyhedronIndex; --多边体区域索引号 
		int autoActivate;   --多边体区域自启动标志
		int areaType;        --多边体区域类型（工作区、禁止区、信号区）
		int refSysScope;
		string refSysName;   --多边体区域参考坐标系
		int enInput;
		int enInputHigh;
		int diType;          --di:0; simdi:11 
		int inputActPort;
		int enOutput;
		int enOutputHigh;
		int doType;         --do:1; simdo:12 
		int outputActPort;
		int doTypeLast;         --do:1; simdo:12 
		int outputActPortLast;
		int  vertexNum;
		double areaHigh;
		double areaZ;
		int isFlangeEnd;
		VertexInfo vertex;
	},
	on_setPolyhedronAreaParam=
	{
		int polyhedronIndex; --多边体区域索引号 
	},
	getPolyhedronAreaParam=
	{
		int polyhedronIndex; --多边体区域索引号 
	},
	on_getPolyhedronAreaParam=
	{
		int polyhedronIndex; --多边体区域索引号 
		int isInArea;
		int activateState;
		int autoActivate;   --多边体区域自启动标志
		int areaType;        --多边体区域类型（工作区、禁止区、信号区）
		int refSysScope;
		string refSysName;   --多边体区域参考坐标系
		int enInput;
		int enInputHigh;
		int diType;          --di:0; simdi:11 
		int inputActPort;
		int enOutput;
		int enOutputHigh;
		int doType;         --do:1; simdo:12 
		int outputActPort;
		int  vertexNum;
		double areaHigh;
		double areaZ;	
		int isFlangeEnd;
		VertexInfo vertex;		
	},
	polyhedronAreaOrNot=
	{
		int polyhedronIndex; --多边体区域索引号 
		int activate;
	},
	on_polyhedronAreaOrNot=
	{
		int polyhedronIndex; --多边体区域索引号 
		int isInArea;
		int activateState;
	},
	delPolyhedronAreaParam=
	{
		int polyhedronIndex; --多边体区域索引号
		int doType;         --do:1; simdo:12 
		int outputActPort;		
	},
	on_delPolyhedronAreaParam=
	{
		int polyhedronIndex; --多边体区域索引号 
	},
	LabelList=
	{
		string labelName;
	},
	getCurProgramLabels=
	{
	
	},
	on_getCurProgramLabels=
	{
		int count;
		LabelList labelList;
	},
	getLineByLabelName=
	{
		string labelName;
	},
	on_getLineByLabelName=
	{
		int lineId;
	},
	movSelectPoint=
	{
		int movType; --运动类型，0表示movj，1表示movl
		int scope;
		int posType; --点类型，0表示apos，1表示cpos
		string pointName;
		string projectName;
		string programName;
		int cmdType; --命令类型，0表示运动，1表示停止运动
	},
	-- 获取默认的复位参数，包含默认的tool，usecoord，payload。
	getDefaultRevocerParam=
	{
		int paramType;
	},
	on_getDefaultRevocerParam=
	{
		int toolEnableSts;	--默认工具坐标系下发使能状态
		int toolScope;		--默认工具坐标系的域
		string toolName;	--默认工具坐标系的变量名
		int usercoordEnableSts;	--默认用户坐标系下发使能状态
		int usercoordScope;		--默认用户坐标系的域
		string usercoordName;	--默认用户坐标系的变量名
		int payloadEnableSts;	--默认负载惯量下发使能状态
		int payloadScope;		--默认负载惯量的域
		string payloadName;	--默认负载惯量的变量名
	},	
	setDefaultRevocerParam=
	{
		int paramType;
		int paramScope;
		string paramName;
	},
	on_setDefaultRevocerParam=
	{
		int paramType;
		int paramScope;
		string paramName;
	},
	RunningInTest_Get=
	{
	
	},
	RunningInTest_Set=
	{
		string RobSN;		--机器人本体号
		string CabinetSN;	--电柜序列号
		string CPUSN;		--控制器序列号
		int Hour;			--跑合时长
		int Type;
	},
	RunningInTest_Reset=
	{
	
	},
	RunningInTest_Status=
	{
		int Type;			--1:测试中 3：测试中断，有报警 2：测试完成
	},
	--九点标定使用
	getNPVisionParam=
	{
		int camIndex;			--相机索引号
		int posIndex;			--点位
	},
	on_getNPVisionParam=
	{
		double robPos_x;	--机器人点位x
		double robPos_y;	--机器人点位y
		double robPos_z;	--机器人点位z
		double visPos_x;	--视觉点位x
		double visPos_y;	--视觉点位y
		int	isActive;		--激活状态
		int CamDirection;	--相机方向，正1，负0
		double Rx;			--x方向误差
		double Ry;			--y方向误差
	},
	setNPVisionParam=
	{
		int camIndex;		--相机索引号
		int posIndex;		--点位
		double robPos_x;	--机器人点位x
		double robPos_y;	--机器人点位y
		double robPos_z;	--机器人点位z
		double visPos_x;	--视觉点位x
		double visPos_y;	--视觉点位y
		int	isActive;		--激活状态
		int CamDirection;	--相机方向，正1，负0
	},
	calcNinePoint=
	{
		int camIndex;
	},
	on_calcNinePoint=
	{
		double Rx;			--x方向误差
		double Ry;			--y方向误差
	},
	setNPIsActive=
	{
		int camIndex;		--相机索引号
		int isActive;		--激活状态
	}, 
	setClientEnable=
	{
		int camIndex;		--相机索引号
		int isEnable;		--激活状态
	},
	getServerIpPort=
	{
		int camIndex;
	},
	on_getServerIpPort=
	{
		int isEnable;		--激活状态
		string serverIP;	--相机IP
		int serverPort;		--相机端口号
	},
	setServerIpPort=
	{
		int camIndex;		--相机索引号
		string serverIP;	--相机IP
		int serverPort;		--相机端口号
	},
	--区域激活/冻结
	areaActivateOrNot=
	{
		int scope;
		string projectName;
		string ProgramName;
		INSTDATA var;
	},	
	maintainDateParam=
	{
		int year;
		int month;
		int day;
	},
	setFollowPosParam=
	{
		int conveyorIndex;
	},
	on_setFollowPosParam=
	{
		double pos;		--返回计算后的位置
	},
	refreshGlobalVar=
	{
		
	},
	--保养提示
	maintainDateParam=
	{
		int year;
		int month;
		int day;
	},
	getMaintain=
	{
		
	},
	on_getMaintain=
	{
		maintainDateParam productDate;
		maintainDateParam NextDate;
		double workingTime;
		double mtTime;
		double mtperiod;
	},
	KeyInf=
	{
		int isMaintain; 
		int KeyType;    
		double addhours;
		double hourLimit;   
		double yearLimit;
		maintainDateParam productDate;
		maintainDateParam NextDate;
	},
	AxisInf=
	{
		int KeyNum;  
		KeyInf m_KeyInf1;
		KeyInf m_KeyInf2;
	},
	on_RobotInf=
	{
		int isAxisSimulated;
		string RobotName;
		int AxisNum;
		AxisInf m_AxisInf;
		maintainDateParam NowDate;
	},
	resetMaintain=
	{
		int RowsNum;
	},
	getMaintainLogInfo=
	{
		int currentPage;
	},
	on_getMaintainLogInfo=
	{
		int allPage;
		int listNums;
		string logList;
	},
	getMaintainBattery=
	{

	},
	on_getMaintainBattery=
	{
		int isAxisSimulated;
		int AxisNum;
		maintainDateParam BatteryDate;
		maintainDateParam NextBatteryDate;
		maintainDateParam NowDate;
	},
	resetMaintainBattery=
	{
		int RowsNum;
	},
	--快速标定
	getRobBarParam=
	{
		double L1;
		double L2;
	},
	setRobBarParam=
	{
		double L1;
		double L2;
	},
	getRobAxisParam=
	{
		int D1;
		int D2;
		int D3;
		int D4;
	},
	--设置远程类型参数
	setRemoteTypeParam=
	{
	    int apiEnabelSts;
	},
	on_setRemoteTypeParam=
	{
	    int apiEnabelSts;
	},
	getRemoteTypeParam=
	{

	},
	on_getRemoteTypeParam=
	{
	    int apiEnabelSts;
	},
	--系统诊断
	systemDiagnosis =
	{
		
	},
	getBasePoint=
	{
		int id;
	},
	on_getBasePoint=
	{
		int count;
		double pos;
	},
	setBasePoint=
	{
		int id;
		int count;
		double pos;
	},
	movBasepoint=
	{
		int cmdType;	--命令类型，1表示运动，0表示停止运动
		int id;	
	},
	saveIdeResult=
	{
		int saveFlag;
	},
	setProgAttri=
	{
		string projectName;
		string programName;
		string comment;
	},
	setColliAutoTuneCmd=
	{
		int cmdType;	-- 1表示开始、2表示暂停、3表示继续、4表示结束
	},
	on_setColliAutoTuneCmd=
	{
		
	},
	CalculColliParam=
	{
		int colliId;
		int method;
		int level;
	},
	on_CalculColliParam=
	{
		int result;
	},
	setDefaultColliParam=
	{
		int colliId;	-- 0表示default
	},
	on_setDefaultColliParam=
	{
		
	},
	getDefaultColliParam=
	{

	},
	on_getDefaultColliParam=
	{
		int colliId;	-- 0表示default
	},
	setMotByselfEnable=
	{
		int enableCmd;
	},
	on_setMotByselfEnable=
	{
		
	},
	setReloadProgEnable=
	{
		int enableCmd;		-- 0表示default	
	},
	on_setReloadProgEnable=
	{
		
	},
	--设置自动掉励磁参数
	setStandParam=
	{
		int standEnableSts;			--自动掉励磁使能	0-关闭，1-开启
		double standWaitTime;		--自动掉励磁检测时间 0.5~60000，单位：分钟
	},
	on_setStandParam=
	{
		int standEnableSts;			--自动掉励磁使能
		double standWaitTime;		--自动掉励磁检测时间
	},
	calcCamPos=
	{
		int cmdType;		-- 0表示default	
		int conveyorIndex;
		int conveyorType;
	},
	on_calcCamPos=
	{
		int cmdType;
		double camConvPos;
		double demoConvPos;
		int count;
		double xPos;
		double yPos;
	},
	--设置带编号参数的统一入口
	setSystemParam=
	{
		int count;
		int paramId;
		double paramValue;
		string sysModifyMsg;
	},
	on_setSystemParam=
	{
		
	},
	getSystemParam=
	{
		int count;
		int paramId;
	},
	on_getSystemParam=
	{
		int count;
		int paramId;
		double paramValue;
	},
	
	setMaintenanceAxis=
	{
		int count;
		int axisIndex;
	},
	setMaintenanceEnable=
	{
		int enable;
	},


	--多机协同功能接口
	setCloseMSMode=
	{
		int closeMSMode;		--关闭主从模式，0代表不关闭，1代表关闭
	},
	on_setCloseMSMode=
	{
	
	},
	setMSParam=
	{
		int masterSlaveMode;	--主从模式，0代表独立运动，1代表主从运动
		int masterSlaveGroupId;	--主从组标识，参数0为空，1-7为实际值
	},
	on_setMSParam=
	{
	
	},
	
	getMSGroupEnbParam=
	{
	
	},
	on_getMSGroupEnbParam=
	{
		ROBOTSLAVE robotSlave;
	},
	setMSGroupEnbParam=
	{
		int msGroupId;
		ROBOTSLAVE robotSlave;
	},
	on_setMSGroupEnbParam=
	{
	
	},
	ROBOTSLAVE=
	{
		MSGROUP msGroup;
	},
	MSGROUP=
	{
		int msGroupEnSts;		--主从组使能状态，0代表不使能，1代表使能
	},
	
	getMultiRobotCfgParam=
	{
	
	},
	on_getMultiRobotCfgParam=
	{
		int enableSts;			--使能状态，0代表不使能，1代表使能
		int robotType;			--机器人类型，1代表主机器人，2代表从机器人
		int robotSlaveId;		--从机器人Id
		int robotSlaveNum;		--从机器人个数
		int masterSlaveGroupId;	--主从组标识，参数0为空，1-7为实际值
	},
	setMultiRobotCfgParam=
	{
		int enableSts;			--使能状态，0代表不使能，1代表使能
		int robotType;			--机器人类型，1代表主机器人，2代表从机器人
		int robotSlaveId;		--从机器人Id
		int robotSlaveNum;		--从机器人个数
		int paramId;			--参数ID(1:使能、2：机器人类型、3：从机器人个数、4：从机器人ID)
	},
	on_setMultiRobotCfgParam=
	{
	
	},
	
	calibMultiRobotParam=
	{
		int cmdType;			--1、2、3代表示教的第几个点，4代表计算，8代表复位，11、12、13代表示教器点击上一步时，返回对应的记录值
	},
	on_calibMultiRobotParam=
	{
		int cmdType;
		int posNum;				--机器人点位数量
		double posMasterData;	--主机器人点位数据
		double posSlaveData;	--从机器人点位数据
	},
	setCalibMultiRobotResult=
	{
		int posNum;
		double posResultData;
	},
	on_setCalibMultiRobotResult=
	{
		
	},
	getCalibMultiRobotResult=
	{
		
	},
	on_getCalibMultiRobotResult=
	{
		int posNum;
		double posResultData;
	},
	
	--多机防碰撞接口
	getAntiColliEnable=
	{

	},
	on_getAntiColliEnable=
	{
		int enableSts;		--防碰撞使能状态
	},
	setAntiColliEnable=
	{
		int enableSts;		--防碰撞使能状态
	},
	on_setAntiColliEnable=
	{

	},

	getAntiColliGroup=
	{
		
	},
	on_getAntiColliGroup=
	{
		int groupId;		--序号（1-6）
		int groupSta;		--状态（0：不使能、1使能）
		string robotName1;	--机器人名称1
		string robotName2;	--机器人名称2
	},
	setAntiColliGroup=
	{
		int groupId;		--序号（1-6）
		int groupSta;		--状态（0：不使能、1使能）
		string robotName1;	--机器人名称1
		string robotName2;	--机器人名称2
	},
	on_setAntiColliGroup=
	{

	},
	
	getAntiColliParam=
	{
		int envType;		--包络类型（0：工具、1：机器人）
		int envId;			--包络序号（机器人：1-10、工具：1-6）
	},
	on_getAntiColliParam=
	{
		int envSta;			--包络状态（0：不使能、1使能）
		int envLink;		--包络关节（机器人各关节：1-6）
		int envShape;		--包络形状（0：球体、1：胶囊体）
		double envRadius;	--包络半径
		double decDistan;	--减速距离
		double psDbX;		--起点X轴偏移
		double psDbY;		--起点Y轴偏移
		double psDbZ;		--起点Z轴偏移
		double peDbX;		--终点X轴偏移
		double peDbY;		--终点Y轴偏移
		double peDbZ;		--终点Z轴偏移
	},
	setAntiColliParam=
	{
		int envType;		--包络类型（0：工具、1：机器人）
		int envId;			--包络序号（机器人：1-10、工具：1-6）
		int envSta;			--包络状态（0：不使能、1使能）
		int envLink;		--包络关节（机器人各关节：1-6）
		int envShape;		--包络形状（0：球体、1：胶囊体）
		double envRadius;	--包络半径
		double decDistan;	--减速距离
		double psDbX;		--起点X轴偏移
		double psDbY;		--起点Y轴偏移
		double psDbZ;		--起点Z轴偏移
		double peDbX;		--终点X轴偏移
		double peDbY;		--终点Y轴偏移
		double peDbZ;		--终点Z轴偏移
	},
	on_setAntiColliParam=
	{

	},
	
	getAntiColliStatus=
	{
		int envType;		--包络类型（0：工具、1：机器人）
	},
	on_getAntiColliStatus=
	{
		int envNum;			--包络数量
		int envSta;			--包络状态（0：不使能、1使能）
	},
	
	restoreProgramOrProject=
	{
		int operationType;
	},
	on_restoreProgramOrProject=
	{
		string projectName;
		string programName;
		int type;
		int result;
	},
	
	setLogOutLevel=
	{
		int logOutLevel;
	},
	on_setLogOutLevel=
	{
		int result;//0表示成功，1表示失败
	},
	
	setRunProgLogEnable= //设置run程序日志是否使能
	{
		int isEnable;
	},
	on_setRunProgLogEnable=
	{
		int result;//0表示成功，1表示失败
	},
	
	collectVibrationData= //振动抑制数据
	{
		int operateType;//1开始采集、2暂停采集、3继续采集、4结束采集、5获取自学习应用结果
	},
	on_collectVibrationData=
	{
		int result;//0表示成功，1表示失败	
	},
	
	selfLearnOperation=
	{
		int operateType;//0自学习处理、1自学习应用
		int id;
	},
	on_selfLearnOperation=
	{
		int result;//0成功、1失败
	},
	
	getDefaultUserMotionMode=
	{
	
	},
	on_getDefaultUserMotionMode=
	{
		int defaultModeId;
		string motionModeName1;
		string motionModeName2;
		string motionModeName3;
		string motionModeName4;
	},
	
	setDefaultUserMotionMode=
	{
		int userMotionModeId;
	},
	
	modifyUserMotionModeName=
	{
		int id;
		string newName;
	},
	
	getMotionModePara=
	{
		int motionModeID;
		string motionModeName;
	},
	on_getMotionModePara=
	{
		string motionModeName;
		double PathAccFactor;
		double PathJerkFactor;
		double OriAccFactor;
		double OriJerkFactor;
		int count;
		double KvFactor;
		double TiFactor;
		double KpFactor;
		double JointAccFactor;
		double JointJerkFactor;
		double JointTorqFactor;
		double JointAccLimitFactor;	
		double JointJerkLimitFactor;	
	},
	
	setMotionModePara=
	{
		int  motionModeID;
		double PathAccFactor;
		double PathJerkFactor;
		double OriAccFactor;
		double OriJerkFactor;
		int count;
		double KvFactor;
		double TiFactor;
		double KpFactor;
		double JointAccFactor;
		double JointJerkFactor;
		double JointTorqFactor;
		double JointAccLimitFactor;	
		double JointJerkLimitFactor;
	},
	
	setAutoTuneParam=//设置自调节相关参数并开始自调节
	{
		int accelerateStep;//提速步长设置，0-低，1-中，2-高，默认中;
		double accelerateBeatTarget; //提速节拍目标，界面选择最优时参数为0，自定义单位-秒
		int isLowSpeedMode;//0-否，1-是
	},
	saveAutoTune=
	{
		int functionEnable;//功能开关，0-放弃，1-保存
		int modeId;
	},
	getRailShaftCaliEnable=
	{
		int axisId;
	},
	on_getRailShaftCaliEnable=
	{
		int caliEnable;
	},
	caliRailShaftPos=
	{
		int cmdId;--0-获取配置文件参数   1-示教pos1  2-示教pos2  3-计算pos3  4-获取pos1  5-获取pos2  6-重新标定，数据清空 7-保存结果
		int axisId;
	},
	on_caliRailShaftPos=
	{
		int cmdId;
		CALI_POS pos;
	},
	setCaliRailShaftParam=
	{
		int count;
		int axisId;
		double pos;
	},
	on_setCaliRailShaftParam=
	{
		int count;
		double pos;
	},
	CALI_POS=
	{
		double X;
		double Y;
		double Z;
		double A;
		double B;
		double C;
	},
	calcRailShaftEquivalent=
	{
		double railShaftMovDis;
		double endDeviationDis;
		int axisId;
	},
	on_calcRailShaftEquivalent=
	{
		double result;
	},
	copyVar=
	{
		int scope;
		string projectName;
		string programName;
		string varName;
	},
	pasteVar=
	{
		int scope;
		string projectName;
		string programName;
		string varName;
	},
	checkoutProjVar=
	{
		int checkoutType;//校验类型，0-全部，1-单个工程
		string projectName;
	},
	recoveryCheckoutProjVarState=
	{
		
	},
	
	--6以下为ESTUNTOOL需要的命令///Start///
	addNewFtpDir=
	{
		string name;
		string path;
		char writeable;
	},
	on_addNewFtpDir=
	{
		string name;
		string path;
		char writeable;
	},
	checkFileMd5=
	{
		int count;
		string files;
	},
	on_checkFileMd5=
	{
		int count;
		string md5;
	},
	loginUser=
	{
		string user;
		string datetime;
		string item;
		string decripe;
	},
	on_loginUser=
	{
		
	},
	compressDir=
	{
		string dir;
	},
	on_compressDir=
	{
		string reslut;
	},
	shutdownPC=
	{
		
	},
	on_shutdownPC=
	{
		int ret;
	},
	rebootPC=
	{
		
	},
	on_rebootPC=
	{
		int ret;
	},
	setNodeA=
	{
		string state;
	},
	on_setNodeA=
	{
		string reslut;
	},
	backupRuntime=
	{
		
	},
	on_backupRuntime=
	{
		string state;
	},
	updateRuntime=
	{
		string filetype;
		string filename;
		string path;
	},
	on_updateRuntime=
	{
		string state;
		string msg;
		string md5;
	},
	getNodeAStatus=
	{
		
	},
	on_getNodeAStatus=
	{
		string state;
	},
	PARAM=
	{
		string path;
		string name;
		string type;
		string data;
	},
	getParamVale=
	{
		int count;
		PARAM parameter;
	},
	on_getParamVale=
	{
		int count;
		PARAM parameter;
	},
	modifyParamVale=
	{
		int count;
		PARAM parameter;
		string newdata;
	},
	on_modifyParamVale=
	{
		string reslut;
		int count;
		PARAM parameter;
	},
	setUpdateState=
	{
		string state;
	},
	on_setUpdateState=
	{
		string state;
	},
	backupRobotParam=
	{
		
	},
	on_backupRobotParam=
	{
		string reslut;
		int count;
		string files;
	},
	recoveryRobotParam=
	{
		string md5;
		string file;
		string force;
	},
	on_recoveryRobotParam=
	{
		string reslut;
		string localtype;
		string recoverytype;
		int count;
		PARAM parameter;
	},
	recoveryProject=
	{
		string md5;
		string file;
	},
	on_recoveryProject=
	{
		string msg;
		string reslut;
	},
	recoveryRuntime=
	{
		
	},
	on_recoveryRuntime=
	{
		string msg;
		string reslut;
	},
	startServerCMD=
	{
		string commandfile;
		string requireret;
	},
	on_startServerCMD=
	{
		string msg;
		string reslut;
	},
	on_returnMsg=
	{
		string msg;
		string reslut;
	},
	getSystemVersion=
	{
		
	},
	on_getSystemVersion=
	{
		string version;
	},
	setRobotType2=
	{
		string type;
	},
	on_setRobotType2=
	{
		string reslut;
		string type;
	},
	getRobotTypeList=
	{
		
	},
	on_getRobotTypeList=
	{
		string reslut;
		string type;
		string typelist;
	},
	verifyPackage=
	{
		string filetype;
		string filename;
		string md5;
	},
	on_verifyPackage=
	{
		int   errCode;
		string errMsg;
	},
	startUpdate=
	{
		string filetype;
		string filename;
	},
	on_startUpdate=
	{
		int   errCode;
		string errMsg;
	},
	exportPackage=
	{
		string dir;
		string filename;
	},
	on_exportPackage=
	{
		int   errCode;
		string md5;
	},
	showErrRules=
	{
		int type;
	},
	on_showErrRules=
	{
		int count;
		string errRule;
	},
	recoveryRuntimeC30=
	{
		
	},
	on_recoveryRuntimeC30=
	{
		int errCode;
	},
	StatusReport=
	{
		int type;
		int errCode;
	},
	on_StatusReport=
	{
		
	},
	softRestart=
	{
		
	},
	on_softRestart=
	{
		
	},
	unDefineCmd=
	{
		
	},
	on_unDefineCmd=
	{
		
	},
	setSysTime=
	{
		string date;
		string time;
	},
	on_setSysTime=
	{
		int result;
	},
	getRomoteBackupConfig=
	{

	},
	on_getRomoteBackupConfig=
	{
		string ftpIp;
		int ftpPort;
		string ftpName;
		string ftpPassword;
		string ftpPath;
		string shareIP;
		string sharePath;
	},
	setFtpRomoteBackup=
	{
		string ftpIp;
		int ftpPort;
		string ftpName;
		string ftpPassword;
		string ftpPath;
	},
	on_setFtpRomoteBackup=
	{
		int ret; --0失败 1
	},
	setShareRomoteBackup=
	{
		string shareIP;
		string sharePath;
	},
	on_setShareRomoteBackup=
	{
		int ret; --0失败 1成功
	},
	--ESTUNTOOL需要的命令///End///
	--获取API是否启用
	getApiStatus=
	{

	},
	on_getApiStatus=
	{

	},
	--PN/EIP标准化
	--获取是否是海外版本
	getForeignSig=
	{ 
	
	},
	on_getForeignSig=
	{
		int ForeignSig;
	},
	setPnCofig=
	{
		int setPnCofigValue;
	},
	
	getPnCofig=
	{ 
	
	},
	on_getPnCofig=
	{
		int getPnCofigValue;
	},
	getEipCofig=
	{ 
	
	},
	on_getEipCofig=
	{
		int getEipCofigValue;
	},
	getEcCofig=
	{ 
	
	},
	on_getEcCofig=
	{
		int getEcCofigValue;
	},
},

