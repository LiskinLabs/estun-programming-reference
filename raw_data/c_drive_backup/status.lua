status = 
{
	statusTable = 
	{			
		SYSTEMINFO systemInfo;			--系统信息
		ROBOTSTATUS robotStatus;     --机器人状态
		IOSTATUS IOStatus;					--IO状态
		SIMIOSTATUS simIOStatus;		--虚拟IO状态
		PLCSTATUS	 plcStatus;				--PLC状态（仅供管理员查看）
	},
	SYSTEMINFO = 
	{
		string sysVersion;		--系统版本
		string curSysTime;	--系统时间
		int curSysState;			--系统状态
		ERRINFO errInfo;	--系统错误信息
		SYSTEMIOINFO systemIoInfo;	--系统IO信号
		PROGINSTINFO progInstInfo;	--程序指令状态			
	},
	ERRINFO = 
	{
		int errLog_count;		--错误数目
		ERRORLOG errorlog;
	},
	ERRORLOG = 
	{
		string errtime;		--错误时间
		int errID;				--错误号
		string errInfo;		--错误信息
	},
	SYSTEMIOINFO = 
	{
		int sysMode;			--系统模式：远程、自动、手动
		char enableSwitch;	--手压信号
		char emergButton;		--急停信号
	},
	PROGINSTINFO =
	{
		int programSyn;		--程序文件同步
		string autoLoadProject;	--自启动工程
		string autoLoadProg;		--自启动程序
		string curLoadProject;	--当前加载的工程
		string curLoadProg;		--当前加载的程序
		string curOpenProg;		--当前打开的程序
		int curPC;						--当前PC
		int curProgRunMode;	--当前程序运行模式：单步（前进、后退）、连续
		int curProgRunState;		--当前程序运行状态
		RunProgList execProgList;   --当前运行的程序列表  
	},
	RunProgList =
	{
	  	RunProg runProg;        --当前运行的程序
		int progCount;          --当前运行的程序数量
	},
	RunProg = 
	{
	    string prjName;
		string proName;
	},
	ROBOTSTATUS = 
	{
		char ChServoOn;			--轴组励磁状态
		char ChHomed;				--轴组回零状态
		int jogCoordType;			--当前点动坐标系
		int jogMode;                     --当前点动模式：0：正常 1：寸动
		double globalSpeedFactor;	--全局速度
		double curTCPVelo;				--TCP速度
		int curToolID;						--工具域标号
		string curToolName;				--工具名称
		int curProgCoordID;				--参考坐标系域标号
		string curProgCoordName;	--参考坐标系名称
		int axis_count;						--关节(轴)数目
		AXISSTATUS axisStatus;					
	},
	AXISSTATUS = 
	{
		char axiscurServoState;			--励磁状态
		char axiscurHomedState;		--回零状态
		char axiscurPosSWLimit;		--正限位
		char axiscurNegSWLimit;		--负限位
		double curJointPos;				--关节角度
		double curWorldPos;			--基坐标系值
		double curProgCoordPos;		--用户坐标系值
		double axiscurActTorque;		--实际力矩
		double axiscurActVelocity;	--实际速度
		double axiscurActScalling;		--实际单圈值
	},
	IOSTATUS = 
	{
		int dinNum;						--数字输入数目
		char IoStatusInfo_din;		--数字输入
		char dinForceSts;          --数字输入强制使能标志
		int doutNum;						--数字输出数目	
		char IoStatusInfo_dout;		--数字输出
		int ainNum;						--模拟输入数目
		double IoStatusInfo_ain;	--模拟输入
		char ainForceSts;          --模拟输入强制使能标志
		int aoutNum;						--模拟输出数目
		double IoStatusInfo_aout;	--模拟输出
	},
	SIMIOSTATUS = 
	{
		int simdinNum;
		char simIoStatusInfo_din;
		char simdinForceSts;          --虚拟数字输入强制使能标志
		int simdoutNum;
		char simIoStatusInfo_dout;
		int simainNum;
		double simIoStatusInfo_ain;
		char simainForceSts;          --虚拟模拟输入强制使能标志		
		int simaoutNum;
		double simIoStatusInfo_aout;
	},
	PLCSTATUS = 
	{
		string plcVersion;	--plc版本
		int plcMainState;	--主状态机
		int plcMhState;		--子状态机
		int plcPMState;		--再现状态机
		int plcJMState;		--点动状态机
		int EcMState;		--ECAT主站状态
		int WcState;			--WC状态
		int curCmdID;		--当前命令ID
		int mkErrID;			--MK错误
		int mkErrDetID;		--MK子错误号
	},
}


