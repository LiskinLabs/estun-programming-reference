local luaCommIFace11="C:\\runtime\\lua\\RobotFaceLibForlua.dll"
local loadCommFace=package.loadlib(luaCommIFace11,"luaopen_RobotFaceForlua")

a = loadCommFace()

local _M = RobotFaceForlua

ss = _M.initRobot()


--功模: sleep 函数
--参数: sleeptime:sleep的时间（ms）

function sleepfun(sleeptime)
	_M.LuaSleep(sleeptime)
end



--功能:得到当前关节坐标系下的坐标值
--返回值:a1,a2,a3,a4,a5,a6
function GetCurJPos()
	local var = _M.GetCurJPos_SerializationIFace_PY()
	return var[0],var[1],var[2],var[3],var[4],var[5]
end

--功模:得到世界坐标系下的坐标值
--返回值:X,Y,Z,A,B,C
function GetCurWPos()
	local var = _M.GetCurWPos_SerializationIFace_PY()
	return var[0],var[1],var[2],var[3],var[4],var[5]
end

--功能:读取变量值
--参数：varName：变量名字
--      type：变量类型,0:bool  1:int  2: float
--      scope:范围， 1：全局  2：工程  3：程序
--返回值:变量值
--函数调用实例：local ret1= readVar("INT0",1,2)

function readVar(varName,type,scope)
	local    ret=_M.ReadVar_SerializationIFace_PY(varName,type,scope)
    return   ret
end


--功能:设置变量值
--参数：varName：变量名字
--      Value：变量值
--      type：变量类型,0:bool  1:int  2: float
--      scope:范围， 1：全局   2：工程   3：程序；
--返回值:true:设置成功     false:设置失败
--函数调用实例： local ret1= setVar("INT0",100,1,2)

function setVar(varName,Value,type,scope)
	local    ret=_M.SetVar_SerializationIFace_PY(varName,Value,type,scope)
    return   ret
end


--功能:设置变量值,掉电保存
--参数：varName：变量名字
--      Value：变量值
--      type：变量类型,0:bool  1:int  2: float
--      scope:范围，1：全局   2：工程   3：程序；
--返回值:true:设置成功     false:设置失败
--函数调用实例： local ret1= setVar("INT0",100,1,2)

function setVar_s(varName,Value,type,scope)
	local    ret=_M.SetVar_s_SerializationIFace_PY(varName,Value,type,scope)
    return   ret
end



--功能: 设置位置变量的值
--函数调用实例： local ret=SetPointPos({"p1",1,0,{1.1,2.2,3.3,4.4,5.5,6.6}})
--PointData : {PointName,type,scope,dataValue} (for example:{"p1",1,0,{1.1,2.2,3.3,4.4,5.5,6.6}})
--参数：
--      PointName: 位置变量名
--      type: 0:APOS  1:CPOS
--      scope: 1：全局   2：工程   3：程序
--		dataValue：  位置值
--返回值:true:设置成功   false:设置失败

function SetPointPos(PointData)

	if table.getn(PointData)~=4 then
		return false
	else
		local strData = ""
		for i = 1, table.getn(PointData[4]) do
			if i == 1 then
				strData = string.format("%0.4f",PointData[4][1])
			else
				strData = string.format("%s_%0.4f",strData,PointData[4][i])
			end
		end
		print(PointData[1],PointData[2],PointData[3],strData)
		local ret=_M.SetPointPos_SerializationIFace_PY_3d(PointData[1],PointData[2],PointData[3],strData)
		return ret
	end
	return false
end




--功能: 设置位置变量的值,掉电保存
--函数调用实例： local ret=SetPointPos({"p1",1,0,{1.1,2.2,3.3,4.4}})
--PointData : {PointName,type,scope,dataValue} (for example:{"p1",1,0,{1.1,2.2,3.3,4.4,5.5,6.6}})
--参数：
--      PointName: 位置变量名
--      type: 0:APOS  1:CPOS
--      scope: 1：全局   2：工程   3：程序；
--		dataValue：  位置值
--返回值:true:设置成功   false:设置失败

function SetPointPos_S(PointData)

	if table.getn(PointData)~=4 then
		return false
	else
		local strData = ""

		for i = 1, table.getn(PointData[4]) do
			if i == 1 then
				strData = string.format("%0.4f",PointData[4][1])
			else
				strData = string.format("%s_%0.4f",strData,PointData[4][i])
			end
		end
		local ret=_M.SetPointPos_s_SerializationIFace_PY_3d(PointData[1],PointData[2],PointData[3],strData)
		return ret
	end
	return false
end



--功能:得到位置变量的值
--参数：PointName：  位置变量名；
--      type：  位置变量类型  0:APOS  1:CPOS ；
--      scope： 1：全局   2：工程   3：程序；
--返回值:
--函数调用实例：local ret=GetPointPos("AP1",0,0)
function GetPointPos(PointName,type,scope)
	local var = _M.GetPoint_SerializationIFace_PY(PointName,type,scope)

	return var[0],var[1],var[2],var[3],var[4],var[5]
end

--功能:得到位置变量的类型
--参数：PointName：  位置变量名；
--      scope： 1：全局   2：工程   3：程序；

--返回值:type：  位置变量类型  0:APOS  1:CPOS ；
--函数调用实例：local ret=GetPointType("AP1",0)
function GetPointType(PointName,scope)
	return _M.GetPointType_SerializationIFace_PY(PointName,scope)
end

--功能:获得IO端口值
--参数:--ioType: 端口类型号: DI:0; DO:1 AO:2 AI:3 SIMDI:11 SIMDO:12 SIMAI:13 SIMAO:14
       --ioIndex:IO口端口号
--返回值:IO端口值

function GetIOValue(ioIndex,ioType)
    local data
	data = _M.GetIOValue_SerializationIFace_PY_3d(ioIndex,ioType)
	return data
end

--参数：ioStartIndex: 起始端口号
		--iotype: 端口类型号：DI:0 DO:1  AO:2  SIMDI:11 SIMDO:12 SIMAI:13 SIMAO:14
		--ioIndex:IO口端口号
--len: 长度
--return: a table of num {1.1,2.2,3.3,4.4,5.5,6.6,7.7,8.8,9.9,10.0}

function GetMultiIOValue(ioStartIndex,iotype,len)

	local retData = _M.GetIOValue_SerializationIFace_PY(ioStartIndex,iotype,len)
	local resTable = {}

	for i =0, len-1 do
		table.insert(resTable,tonumber(retData[i]))
	end
	return resTable
end

--功能: 设置IO口的值
--参数:--ioIndex:IO口端口号
       --ioType: 端口类型号: DI:0; DO:1  AO:2  SIMDI:11 SIMDO:12 SIMAI:13 SIMAO:14
	   --ioValue:io值
--返回值:true 设置成功 ；false 设置失败
--函数调用实例：local ret = SetIoValue(3,12,1)
function SetIoValue(ioIndex,ioType,ioValue)
	return _M.SetIOValue_SerializationIFace_PY_3d(ioIndex,ioType,ioValue)
end


--功能: 设置多个IO口的值,最多只能同时设置5个IO口的值
--SetMultiIOValue(1,14,10,{1.1,2.2,3.3,4.4,5.5,6.6,7.7,8.8,9.9,10.0})
--ioStartIndex: start index
--iotype:DI:0 DO:1  AO:2  SIMDI:11 SIMDO:12 SIMAI:13 SIMAO:14
--len: len
--ioValue: a table of data value
function SetMultiIOValue(ioStartIndex,iotype,len,ioValue)
	local strData = ""
	for i = 1, table.getn(ioValue) do
		if i == 1 then
			strData = string.format("%0.4f",ioValue[i])
		else
			strData = string.format("%s_%0.4f",strData,ioValue[i])
		end
	end
	local Ret = _M.SetMultiIOValue_SerializationIFace_PY_3d(strData,ioStartIndex,iotype,len)
	return Ret
end

--功能:得到当前系统模式
--参数：无
--返回值:0：手动模式(T)     1:自动模式(A)      2:远程模式（AE）
function getCurSysMode()
	return _M.CurSysState_SerializationIFace_PY()
end

--功能:得到机器人运行状态
--参数：无
--返回值:1: 程序运行  2:暂停   3：停止

function getRobotRunStatus()
	return _M.ProgRunState_SerializationIFace_PY()
end

--功能:清除错误
--参数：无
--返回值:true：清除错误成功  false:失败

function resetErrorId()
	return _M.rstError_SerializationIFace_PY()
end



--功能:获得错误ID
--参数：无
--返回值:错误的ID

function getErrorId()
	return _M.getErrorId_SerializationIFace_PY()
end


--功能:设置程序开始运行
--参数：无
--返回值:true:设置程序开始运行成功     false:设置失败

function startRun()
	return _M.StartRun_SerializationIFace_PY()
end


--功能:设置程序暂停运行
--参数：无
--返回值:1:true:设置程暂停运动成功   false:设置失败

function pauseRun()
	return _M.PauseRun_SerializationIFace_PY()
end

--功能:设置程序停止运行
--参数：无
--返回值:1:true:设置程序停止运动成功   false:设置失败

function stopRun()
	return _M.StopRun_SerializationIFace_PY()
end


--功能:加载工程、程序
--参数:PrjName：工程名；ProName：程序名
--返回值:true:加载成功  false:加载失败
--程序调用实例：local res=loadUserPrjProg("estun","main");

function loadUserPrjProg(PrjName,ProName)
	return _M.ProgramLoad_SerializationIFace_PY(PrjName,ProName)
end


--功能:卸载用户工程
--参数:ProjectName:工程名，注：字符串类型：“ProjectName”
--返回值:true:卸载成功；false：卸载失败
--程序调用实例：  local ret= UnloadUserPrj("jjj")

function UnloadUserPrj(ProjectName)
	local Ret
	Ret = _M.ProjectUnload_SerializationIFace_PY(ProjectName)
	return Ret
end

--功能:卸载用户程序
--参数:ProjectName：工程名     ProgramName：程序名
--返回值:true:卸载成功；false：卸载失败
--程序调用实例：  local ret= UnloadUserProg("jjj","main")

function UnloadUserProg(ProjectName,ProgramName)
	return _M.ProgramUnload_SerializationIFace_PY(ProjectName,ProgramName)
end


--功能:获取当前用户程序
--参数:
--返回值:ProgramName：程序名
function GetCurProgramName()
	return _M.GetCurProgramName_SerializationIFace_PY()
end


--功能:获取当前用户工程名
--参数:
--返回值:ProgramName：工程名
function GetCurProjectName()
	return _M.GetCurProjectName_SerializationIFace_PY()
end



--功能:查看机器关节是否在运动
--参数：无
--返回值:true:机器人在运动false:机器人停止运行

function IsRobotMoving()
	return _M.RobIsMoving_SerializationIFace_PY()
end


--功能:查看程序加载状态
--返回值:1: 程序处于加载状态       0:程序处于注销状态
function IsProgramLoaded()
	return _M.IsProgramLoaded_SerializationIFace_PY()
end

--功能:设置当前程序指针指向哪一行
--参数:index： 要指向的程序行数
--返回值:true:设置成功；false:设置失败
function SetPc(index)
	return _M.SetProgPC_SerializationIFace_PY(index)
end

--功能:获取当前加载程序的PC行号
--参数:无
--返回值:true:设置成功；false:设置失败
function GetPc()
	return _M.GetCurrPPLineV2_SerializationIFace()
end

--功能:改变模式
--参数:modetype:模式类型： 0：手动（T）   1：自动 (A)  2：远程(AE)
--返回值:true:成功；false:失败

function changemode(modetype)
	return _M.SetSysMode_SerializationIFace_PY(modetype)
end

--功能:设置全局速度
--参数:globalspeed:全局速度
--返回值:true:设置成功；false:设置失败
function setGlobleSpeed(globalspeed)
	return _M.SetGlobalSpeed_SerializationIFace_PY(globalspeed)
end

--功能:获得全局速度
--参数:无
--返回值:全局速度
function getGlobleSpeed()
	local Ret = _M.GetGlobalSpeed_SerializationIFace_PY()
	return math.floor(Ret+0.5)
end

--功能:设置运行模式
--参数:modetype: 1:单步 2：连续
--返回值:true:设置成功；false:设置失败
function setRunMode(modetype)
	return _M.SetProgRunMode_SerializationIFace_PY(modetype)
end

--功能:获取运行模式
--参数:无
--返回值:modetype: 1:单步 2：连续
function getRunMode()
	return _M.GetRunMode_SerializationIFace_PY()
end

--功能:设置伺服使能
--参数:ServoStatus: 0:伺服禁止使能 ，示教器上Mot灯灭    1：伺服使能 ，示教器上Mot灯亮
--返回值:true:设置成功；false:设置失败

function SetMotServoStatus(ServoStatus)
	return _M.SetServoState_SerializationIFace_PY(ServoStatus)
end

--功能:获得伺服使能状态
--参数:无
--返回值:true:  伺服处于使能状态       false:伺服处于禁止使能状态

function GetMotServoStatus()
	return _M.GetServoSts_SerializationIFace_PY()
end


--功能:设置坐标类型
--参数:type：坐标系类型
--       0：关节坐标系（A1,A2,A3,A4,A5,A6)
--       1: 世界坐标系(X,Y,Z,A,B,C)
--       2: 工具坐标系(TX,TY,TZ,TA,TB,TC)
--       3:  (RX,RY,RZ,RA,RB,RC)
--返回值:true:设置成功；false:设置失败

function SetCoordType(type)
	local Ret
	Ret = _M.SetJogCoord_SerializationIFace_PY(type)
	return Ret
end

--功能:获得坐标系类型
--参数:无
--返回值:
--       0：关节坐标系（A1,A2,A3,A4,A5,A6)
--       1: 世界坐标系(X,Y,Z,A,B,C)
--       2: 工具坐标系(TX,TY,TZ,TA,TB,TC)
--       3:  (RX,RY,RZ,RA,RB,RC)

function GetCoordType()
	local Ret
	Ret = _M.GetJogCoord_SerializationIFace_PY()
	return Ret
end



--功能:朝目标点运动
--参数:movetype:MoveJ:1    MoveL:2
--     point_Pos: 当movetype等于1为MoveJ时   "A1_A2_A3_A4_A5_A6"
--     Param:"高度_速度_过渡参数"
--返回值:
-- local ret= MoveToSelectPoint(2,"10.0_23.1_50.0_10.1_21.1_10.5","10_90_50");
function MoveToSelectPoint(movetype,point_Pos,Param)
	local movetypeStr = ""
	if movetype == 1 then
		movetypeStr = "MovJ"
	elseif movetype == 2 then
		movetypeStr = "MovL"
	else
		return false
	end
	local ret=_M.MoveToPos_SerializationIFace_PY_3d(movetypeStr,point_Pos,Param)
    return  ret
end

--[[
--功能：寻位指令
--参数：参数：move_type:运动类型MovJ:1/MovL:2；
			posValue:目标点坐标APos/CPos "A1_A2_A3_A4_A5_A6", "X_Y_Z_A_B_C";
			paramVale:速度_过渡值 "50_0"；
			trigValue：触发类型_索引_触发值 "2_10_1" - 信号输入类型，DI10 = 1时触发:
						/***检测触发类型*/ //1：TorqTrig  2:InputTrig
						/***触发编号*/
						/***触发值*/
--返回值
]]--
function MoveSearch(movetype,posValue,paramVale,trigValue)
	local movetypeStr = ""
	if movetype == 1 then
		movetypeStr = "MovJ"
	elseif movetype == 2 then
		movetypeStr = "MovL"
	else
		return false
	end
	local ret = _M.MoveWithSearch_SerializationIFace_PY_3d(movetypeStr,posValue,paramVale,trigValue)
	return ret
end


--功能:坐标系单方向相对运动
--参数:movetype: 运动方向  1:X;2:Y;3:Z;4:A;5:B;6:C
--     RelDistance:RelDistance:相对运动距离
--     velo:速度
--返回值:
-- local ret= moveCurToXYZ(1,"10",50);
function moveCurToXYZ(movetype,RelDistance,velo)
	local ret=_M.moveCurToXYZ_SerializationIFace_PY_3d(movetype,RelDistance,velo)
    return  ret
end




--功能：获取内核运动状态
--参数：无
--返回值：内核运动：2；内核停止：1；内核暂停：3
function GetMotionStatus()
	local ret = _M.GetMotionStatus_SerializationIFace_PY_3d()
	return ret
end



--功能：设置工具坐标系
--参数：Scope: 0:系统，1：全局 ；toolName：工具坐标系
		--SetTool(0,"nullTool")
--返回值：
function SetTool(Scope,toolName)
	local ret = _M.SetTool_SerializationIFace_PY(Scope,toolName)
	return ret
end

--功能：设置用户坐标系
--参数：Scope: 0:系统   1:全局；userName：工具坐标系
		--SetCoord(0,"World")
--返回值：
function SetCoord(Scope,userName)
	local ret = _M.SetRefCoord_SerializationIFace_PY(Scope,userName)
	return ret
end

--功能： 设置机器人停止运行并发出错误信息
--参数：ErrorInfo：报警信息；ErrorNum：报警号
		--SetRtToErr("error", 90001)
--返回值：
function SetRtToErr(ErrorInfo, ErrorNum)
	local ret = _M.SetRtToError_SerializationIFace_PY(ErrorInfo,ErrorNum)
	return ret
end




--功能:连续点动(手动模式下有效)
--参数:Axis:   0::一轴  1：二轴  2： 三轴  3：四轴   4：五轴   5 六轴
--MovDirection: 1 ：正向增加  -1：负向增加
--返回值:true:设置成功；false:设置失败

function JogMotion(Axis,MovDirection)
	local Ret
	Ret = _M.JogMotion_SerializationIFace_PY_3d(Axis,MovDirection)
	return Ret
end

--功能:寸动(手动模式下有效)
--参数:Axis:   0:一轴  1：二轴  2： 三轴  3：四轴   4：五轴   5 六轴  +附加轴
--MovDirection: 1 ：正向增加  -1：负向增加
--lenth：寸动长度
--返回值:true:设置成功；false:设置失败
function JogMicroMotion(Axis,MovDirection,lenth)
	if lenth > 1 or lenth < 0 then
		return false
	end
	local Ret
	Ret = _M.JogMicroMotion_SerializationIFace_PY_3d(Axis,MovDirection,lenth)
	return Ret
end

--功能:停止点动
--参数:无
--返回值:true:设置成功，停止寸动；false:设置失败
function JogMotionStop()
	local Ret
	Ret = _M.JogMotionStop_SerializationIFace_PY_3d()
	return Ret
end

--功能:重新加载自启动程序
--参数:无
--返回值:true:设置成功；false:设置失败
function ProgAutoload()
	return _M.ProgAutoload_SerializationIFace_PY()
end

--功能:重新加载自启动程序
--参数:	PName:变量名 “P1”
--      scope:范围， 1：全局  2：工程  3：程序
--返回值:true:设置成功；false:设置失败
function TeachSelectPoint(PName,scope)
	return _M.TeachSelectPoint_SerializationIFace_PY(PName,scope)
end


--功能:获取TCP速度
--参数:无
--返回值:TCP速度值
function GetRobCurTCPVelo()
	return _M.GetRobCurTCPVelo_SerializationIFace()
end



--功能:获取python调用的机器人数据
--参数:无
--返回值:字符串数据
function PythonRecvFromRobot()
	return _M.PythonRecvFromRobot_SerializationIFace()
end

--功能:设置python发送到机器人数据
--参数:字符串数据
--返回值:true:设置成功；false:设置失败
function PythonRecvFromRobot(strVal)
	return _M.PythonSendToRobot_SerializationIFace(strVal)
end

--功能:获取系统运行状态
--参数:无
--返回值:1:初始化状态；2：系统正常运行状态；3：系统报警状态；4：系统错误
function GetSystemRunningState()
	return _M.GetSystemRunningStateIFace()
end


--功能:获取轴报警状态
--参数:无
--返回值:0:有报警；1：无报警
function GetAxisErrorState()
	return _M.GetAxisErrorStateIFace()
end

--功能:获取轴回零状态
--参数:无
--返回值:0:有报警；1：无报警
function GetAxisZeroFlag()
	return _M.GetAxisZeroFlagIFace()
end


--功能:获取轴当前实际力矩
--参数:轴号
--返回值:实际力矩值
function GetCurActTorque(AxisNum)
	return _M.GetCurActTorque_SerializationIFace(AxisNum)
end

--功能:建立3D服务器
--参数:端口号
--返回值:true:创建成功；false：创建失败
function Init_Cam2d3d_Server(portNum)
	return _M.Init_Cam2d3d_Server_PY(portNum)
end

--功能:建立3D客户端
--参数:端口号
--返回值:true:创建成功；false：创建失败
function Init_Cam2d3d_Client_PY(IpAddr,portNum)
	return _M.Init_Cam2d3d_Client_PY(IpAddr,portNum)
end


--功能:获取PC指针位置
--参数:端口号
--返回值:true:创建成功；false：创建失败
function Init_Cam2d3d_Client_PY(IpAddr,portNum)
	return _M.Init_Cam2d3d_Client_PY(IpAddr,portNum)
end

--功能:获取急停状态(DI5状态)
--参数:无
--返回值:true:急停状态(DI5 = 0)；false：不在急停(DI5 = 1)
function GetEmergencyBtnStatusV2()
	return _M.GetEmergencyBtnStatusV2_SerializationIFace()
end

--功能:获取机器人类型
--参数:无
--返回值:字符串：机器人类型名：ER16_A6
function GetRobotModelV2()
	return _M.GetRobotModelV2_SerializationIFace()
end

--功能:获取机器人电柜序列号
--参数:无
--返回值:字符串：机器人序列号：V.2021T22
function GetRobotSerialNumV2()
	return _M.GetRobotSerialNumV2_SerializationIFace()
end



--功能:设置变量第二种接口
--参数:
		--PName:变量名	字符串		例:INT0
		--valuedata:数据 字符串	    例：88
		--scope：变量范围 1：全局   2：工程   3：程序；	例：1
		--isWriteFile:是否写文件(false:不写文件，true:写文件)
--返回值:true:设置成功     false:设置失败
--例：设置CPos变量P2的值：SetVarV2("P2", "1,1,0,0,0,0,0,999,1000,50,10,20,30", 1, false)
function SetVarV2(PName,valuedata,scope,isWriteFile)
	return _M.SetVarV2_SerializationIFace(PName,valuedata,scope,isWriteFile)
end


--功能:设置变量第二种接口
--参数:
		--PName:变量名	字符串		例:INT0
		--scope：变量范围 1：全局   2：工程   3：程序；	例：1
--返回值:变量的返回值类型 ：INT$$88,false
function ReadVarV2(PName,scope)
	return _M.ReadVarV2_SerializationIFace(PName,scope)
end
