--******************************************************************--
--**************************错误信息对应表**************************--
--******************************************************************--
----------------------------------------------------------------------
-------------------------系统错误信息[201,300]------------------------
----------------------------------------------------------------------
201 <CH>设置系统模式失败，不支持该模式！</CH> <EN>Set system mode failed，this mode is not supported!</EN>
202 <CH>系统模式切换导致程序报警停止！</CH> <EN>Switching system mode causes the program to stop!</EN>
203 <CH>系统切换到远程模式，自动加载程序失败！</CH> <EN>System was switched to remote mode, program auto-load failed!</EN>
204 <CH>系统切换到远程模式，启动设置全局速度失败！</CH> <EN>System was switched to remote mode, set global velocity failed!</EN>
205 <CH>远程模式下，启动程序失败！</CH> <EN>Start program failed in remote mode!</EN>
206 <CH>远程模式下，停止程序失败！</CH> <EN>Stop program failed in remote mode!</EN>
207 <CH>安全门打开，程序转到暂停状态！</CH> <EN>The safe-door is open, program paused!</EN>
208 <CH>多工位加载程序失败！请检查预约程序的正确性！</CH> <EN>Loading Multi-station program failed! System execute failed!</EN>
209 <CH>与示教器断开连接，暂停运动！</CH> <EN>Network interruption, pause current motion!</EN>
210 <CH>远程模式下，ExitCycle只在非运行状态有效，暂停运动！</CH> <EN>ExitCycle is only valid in the non-running state, pause current motion!</EN>
211 <CH>系统模式切换导致程序报警暂停！</CH> <EN>Switching system mode causes the program to pause!</EN>

251 <CH>主管理模块1运行异常！</CH> <EN>An exception occurred in the main management module 1!</EN>
252 <CH>运动管理模块2运行异常！</CH> <EN>An exception occurred in the motion management module 2!</EN>
253 <CH>指令管理模块3运行异常！</CH> <EN>An exception occurred in the instruction management module 3!</EN>
254 <CH>通讯模块4运行异常！</CH> <EN>An exception occurred in the linker module 4!</EN>
255 <CH>PLC管理模块5运行异常！</CH> <EN>An exception occurred in the PLC management module 5!</EN>
256 <CH>视觉管理模块6运行异常！</CH> <EN>An exception occurred in the vision management module 6!</EN>
257 <CH>现场总线Modbus模块7运行异常！</CH> <EN>An exception occurred in the ModbusTCP management module 7!</EN>

-------------------------程序执行错误[601,900]------------------------
601  <CH>configTable.cfg文件加载失败！</CH> <EN>Load file "configTable.cfg" failed!</EN>
602  <CH>userTable.cfg文件加载失败！</CH> <EN>Load file "userTable.cfg" failed!</EN>
603  <CH>执行逻辑控制指令失败！</CH> <EN>Execute logical control instructions failed!</EN>
604  <CH>命令执行失败！</CH> <EN>Execute command failed!</EN>
605  <CH>执行失败！run程序中存在禁止运行的指令在运行！</CH> <EN>Program execute failed, there is prohibited instructions in "run" program!</EN>
606  <CH>判断指令中有变量不存在！</CH> <EN>There is invalid variable in judge instruction!</EN>
607  <CH>加载指令字符串失败！</CH> <EN>Load instruction string failed!</EN>
608  <CH>运动内核缓存已满！</CH> <EN>The buffer of motion kernel is full!</EN>
609  <CH>加载程序数据失败！</CH> <EN>Load program data failed!</EN>
610  <CH>加载run程序数据失败！</CH> <EN>Load run program data failed!</EN>
611  <CH>加载触发程序数据失败！</CH> <EN>Load trig-data of program failed!</EN>
612  <CH>解析失败！程序未加载！</CH> <EN>Parse instruction failed! No program has been loaded!</EN>
613  <CH>解析逻辑控制指令失败！</CH> <EN>Parse logical control instructions failed!</EN>
614  <CH>call指令行变更,请重新载入工程！</CH> <EN>The CALL instruction line change.Please reload project!</EN>
615  <CH>执行call时获取call程序文件失败！</CH> <EN>Get "call" program file failed when executing "call" instruction!</EN>
616  <CH>需要call的程序文件不存在！</CH> <EN>The program file of "call" is not found!</EN>
617  <CH>圆弧中间停止,不允许直接再启动！</CH> <EN>Stop at the middle of arc path, restarting the program is forbidden!</EN>
618  <CH>系统最多同时支持八个程序run！</CH> <EN>The system supports up to eight "Run" programs!</EN>
619  <CH>kill与run程序不匹配！</CH> <EN>"Kill" program does not match "run" program!</EN>
620  <CH>表达式指令执行失败！</CH> <EN>Execute expression instruction failed!</EN>
621  <CH>机器人零点已丢失！</CH> <EN>The robot's home-pos of driver has lost!</EN>
622  <CH>触发指令缓冲已满,请确保程序结构正确！</CH> <EN>The buffer of trigger instructions is full, please make sure the program structure is correct!</EN>
623  <CH>变量类型不存在！</CH> <EN>The variable type does not exist!</EN>
624  <CH>变量类型不匹配！</CH> <EN>The variable type mismatch!</EN>
625  <CH>单步模式下，不允许执行run指令！</CH> <EN>"Run" instruction cannot be executed in single-step mode!</EN>
626  <CH>程序处于run时，不允许再次run！</CH> <EN>Program in running state is not allowed to run again!</EN>
627  <CH>单步模式下，不允许执行触发指令！</CH> <EN>Trigger instruction cannot be executed in single-step mode!</EN>
628  <CH>触发指令执行失败！请检查指令是否合法！</CH> <EN>Failed to execute trigger instruction, please check the legality of the instruction!</EN>
629  <CH>OnParameter触发指令不支持该运动指令！</CH> <EN>The OnParameter instruction dose not support current motion instruction!</EN>
630  <CH>触发指令与运动指令之间不允许使用等待指令！</CH> <EN>The wait instruction cannot be used between trigger instruction and motion instruction!</EN>
631  <CH>软浮动指令之间，不允许运动指令！</CH> <EN>Motion instructions is forbidden between soft-floating instructions!</EN>
632  <CH>软浮动停止指令之前缺少软浮动启动指令！</CH> <EN>The start command of soft-floating function is missing before the soft-floating instruction!</EN>
633  <CH>多个软浮动指令嵌套使用！</CH> <EN>Multiple soft-floating instructions are nested!</EN>
634  <CH>缺少软浮动结束指令！</CH> <EN>The end command of soft-floating function is missing!</EN>
635  <CH>该区域变量未被激活，不允许条件判断！</CH> <EN>This area variable is not activated, condition judge failed!</EN>
636  <CH>单条轨迹的触发数量超过最大限制数量，执行失败！</CH> <EN>Trig count of single line is out of max count, execute failed!</EN>
637	 <CH>获取程序变量文件失败！</CH> <EN>Failed to obtain program variable file!</EN>
638	 <CH>BendTrack过程中停止，不允许再启动！</CH> <EN>System execute stop command during BendTrack process, restarting the program is forbidden!</EN>
639	 <CH>OnDistance触发指令不支持该运动指令！</CH> <EN>The OnDistance instruction dose not support current motion instruction!</EN>
640	 <CH>触发指令执行失败！</CH> <EN>The trigger instruction implement error!</EN>
641	 <CH>当前指令不支持倒退执行！</CH> <EN>The current instruction dose not support backward execution!</EN>
642	 <CH>待跳转的label不存在！</CH> <EN>The label is not existed!</EN>
643	 <CH>跟随状态下有禁止的指令在运行！</CH> <EN>Some command is forbidden during the follow motion!</EN>
644	 <CH>跟随过程中停止，请pc到带有用户坐标系的运动指令上再启动！</CH> <EN>System execute stop command during ConveyorTrack process, restarting the program is forbidden!</EN>
645	 <CH>跟随失败后跳转的label不能为空！</CH> <EN>The label which systen need skip is empty when conveyorTrack is failed!</EN>
646	 <CH>全局程序中不支持RUN、KILL指令！</CH> <EN>Global program is forbid to execute RUN/KILL command!</EN>
647	 <CH>全局程序中CALL指令不支持call到非全局程序以外的程序！</CH> <EN>The CALL command of Global program should be use local program!</EN>
648	 <CH>AddDo指令执行失败！</CH> <EN>AddDo instruction implement error!</EN>
649	 <CH>单步模式下，不允许执行负载在线辨识指令！</CH> <EN>ERBD instruction cannot be executed in single-step mode!</EN>
650    <CH>CALL指令不允许调用当前程序本身！</CH> <EN>Cannot call itself!</EN>

651  <CH>指令中参数数量异常！</CH> <EN>Invalid number of parameters in instruction!</EN>
652  <CH>指令中位置点数据异常！</CH> <EN>Invalid Pos data in the instruction!</EN>
653  <CH>指令参数中位置点类型不匹配！</CH> <EN>Mismatch Pos data type in instruction!</EN>
654  <CH>指令参数中位置点类型无法找到！</CH> <EN>Pos data type cannot be found in instruction!</EN>
655  <CH>指令参数中位置点中某项的值找不到！</CH> <EN> Element cannot be found in Pos data!</EN>	
656  <CH>指令参数中速度项参数异常！</CH> <EN>Invalid velocity parameters of instruction!</EN>
657  <CH>指令参数中过渡类型参数异常！</CH> <EN>Invalid blend type of instruction parameters!</EN>
658  <CH>指令参数中触发参数异常！</CH> <EN>Invalid trigger parameter in instruction!</EN>
659  <CH>指令参数中AddDO类型参数异常！</CH> <EN>Invalid "AddDo" parameter in instruction!</EN>
660  <CH>指令参数中速度变量数据异常！</CH> <EN> Abnormal speed variable data in instruction parameters!</EN>
661  <CH>指令参数中速度变量类型不匹配！</CH> <EN>Speed variable type mismatch in instruction parameters!</EN>
662  <CH>指令参数中速度变量类型无法找到！</CH> <EN>Speed variable type cannot be found in instruction parameters!</EN>
663  <CH>指令参数中速度变量中某项的值找不到！</CH> <EN>Some value of Speed variable cannot be found in instruction parameters!</EN>
664  <CH>指令参数中过渡变量数据异常！</CH> <EN>There is some abnormal data of blend variable in instruction parameters!</EN>
665  <CH>指令参数中过渡变量类型不匹配！</CH> <EN>Blend variable type mismatch in instruction parameters!</EN>
666  <CH>指令参数中过渡变量类型无法找到！</CH> <EN>Blend variable type missing in instruction parameters!</EN>
667  <CH>指令参数中过渡变量中某项的值找不到！</CH> <EN>Some value of Blend variable cannot be found in instruction parameters!</EN>
668  <CH>指令参数POS点中MODE类型找不到！</CH> <EN>The "Mode" type cannot be found in "POS" parameters!</EN>
669  <CH>指令参数POS点中MODE中某项的值找不到！</CH> <EN>Some value of "Mode" type cannot be found!</EN>
670  <CH>指令参数中socket名字异常！</CH> <EN>Invalid socket name in instruction!</EN>
671 <CH>指令参数中IP地址不合法！</CH> <EN>Invalid IP address in instruction!</EN>
672 <CH>指令参数中tool坐标系参数异常！</CH> <EN>Invalid parameters in tool coordinate system!</EN>
673 <CH>指令参数中tool坐标系类型不匹配！</CH> <EN>The tool coordinate system type mismatch in instruction parameters!</EN>
674 <CH>指令参数中tool坐标系类型无法找到！</CH> <EN>The tool coordinate system type cannot be found in instruction parameters!</EN>
675 <CH>指令参数中tool坐标系中某项的值找不到！</CH> <EN>Some value of tool coordinate system cannot be found in instruction parameters!</EN>
676 <CH>指令参数中用户坐标系参数异常！</CH> <EN>There have exceptions in the user coordinate system!</EN>
677 <CH>指令参数中用户坐标系类型不匹配！</CH> <EN>The user coordinate system type mismatch in instruction parameters!</EN>
678 <CH>指令参数中用户坐标系类型无法找到！</CH> <EN>The user coordinate system type cannot be found in instruction parameters!</EN>
679 <CH>指令参数中用户坐标系中某项的值找不到！</CH> <EN>Some value of user coordinate system cannot be found in instruction parameters!</EN>
680 <CH>指令参数中负载惯量类型不匹配！</CH> <EN>The payload system type mismatch in instruction parameters!</EN>
681 <CH>指令参数中负载惯量类型无法找到！</CH> <EN>The payload system type cannot be found in instruction parameters!</EN>
682 <CH>指令参数中负载惯量中某项找不到！</CH> <EN>Some value of payload system cannot be found in instruction parameters!</EN>
683 <CH>指令参数中摆弧类型不匹配！</CH> <EN>The weave type mismatch in instruction parameters!</EN>
684 <CH>指令参数中摆弧类型无法找到！</CH> <EN>The weave type cannot be found in instruction parameters!</EN>
685 <CH>指令参数中摆弧中某项找不到！</CH> <EN>Some value of weave cannot be found in instruction parameters!</EN>
686 <CH>指令参数中外部TCP坐标系参数异常！</CH> <EN>There have exceptions in the external tcp coordinate system!</EN>
687 <CH>指令参数中外部TCP坐标系类型不匹配！</CH> <EN>The external tcp coordinate type mismatch in instruction parameters!</EN>
688 <CH>指令参数中外部TCP坐标系类型无法找到！</CH> <EN>The external tcp coordinate type cannot be found in instruction parameters!</EN>
689 <CH>指令参数中外部TCP坐标系中某项的值找不到！</CH> <EN>Some value of external tcp coordinate system cannot be found in instruction parameters!</EN>
690  <CH>指令中坐标系参数数据异常！</CH> <EN>Invalid Coordinate data in the instruction!</EN>
691  <CH>指令参数中坐标系类型不匹配！</CH> <EN>Mismatch Coordinate data type in instruction!</EN>
692  <CH>指令参数中坐标系类型无法找到！</CH> <EN>Coordinate data type cannot be found in instruction!</EN>
693  <CH>指令参数中坐标系中某项的值找不到！</CH> <EN> Element cannot be found in Coordinate data!</EN>	
694 <CH>指令参数中变位机坐标系参数异常！</CH> <EN>There have exceptions in the positioner coordinate system!</EN>
695 <CH>指令参数中变位机坐标系类型不匹配！</CH> <EN>The positioner coordinate type mismatch in instruction parameters!</EN>
696 <CH>指令参数中变位机坐标系类型无法找到！</CH> <EN>The positioner coordinate type cannot be found in instruction parameters!</EN>
697 <CH>指令参数中变位机坐标系中某项的值找不到！</CH> <EN>Some value of positioner coordinate system cannot be found in instruction parameters!</EN>
698 <CH>指令中待跳转的label格式不正确！</CH> <EN>The label system type mismatch in instruction parameters</EN>
699 <CH>指令参数中动坐标系参数异常！</CH> <EN>There have exceptions in the dyn coordinate system!</EN>
700 <CH>指令参数中动坐标系类型不匹配！</CH> <EN>The dyn coordinate system type mismatch in instruction parameters!</EN>
701 <CH>指令参数中动坐标系类型无法找到！</CH> <EN>The dyn coordinate system type cannot be found in instruction parameters!</EN>
702 <CH>指令参数中动坐标系中某项的值找不到！</CH> <EN>Some value of dyn coordinate system cannot be found in instruction parameters!</EN>
703 <CH>指令参数中速率类型参数异常！</CH> <EN>Invalid override type of instruction parameters!</EN>
704 <CH>指令参数中扫频参数异常！</CH> <EN>There have exceptions in the chirp parameter!</EN>
705 <CH>指令参数中扫频类型不匹配！</CH> <EN>The chirp type mismatch in instruction parameters!</EN>
706 <CH>指令参数中扫频类型无法找到！</CH> <EN>The chirp type cannot be found in instruction parameters!</EN>
707 <CH>MovJOffset指令中不支持工具坐标系下的DAPOS偏移！</CH> <EN>MovJOffset Inst cannot support DAPOS offset in Tool coordinate system!</EN>
708 <CH>SWITCH中'CASE'值错误！</CH> <EN>SWITCH 'CASE' value error!</EN>
709 <CH>'IF/WHILE/FOR'语句里面不能包含'CASE'</CH> <EN>'IF/WHILE/FOR' can not contain 'CASE'!</EN>
710 <CH>'IF/WHILE/FOR'语句里面不能包含'DEFAULT'</CH> <EN>'IF/WHILE/FOR' can not contain 'DEFAULT'!</EN>
711 <CH>'IF/WHILE/FOR'语句里面不能包含'BREAK'</CH> <EN>'IF/WHILE/FOR' can not contain 'BREAK'!</EN>
712 <CH>'SWITCH'语句里面不能嵌套'SWITCH'</CH> <EN>'SWITCH' can not nest 'SWITCH'!!</EN>
713 <CH>'SWITCH'语句'CASE'值重复</CH> <EN>duplicate case value!!</EN>
714 <CH>'SWITCH_ENDSWITCH'不匹配</CH> <EN>'SWITCH_ENDSWITCH' not match!!</EN>
715 <CH>'SWITCH’后面必须紧跟'CASE'或者'DEFAULT'</CH> <EN>below 'SWITCH' must be  'CASE' or 'DEFAULT''!!</EN>
716 <CH>'BREAK'后面必须为'CASE'/'DEFAULT'/'ENDSWITCH'</CH> <EN>'below 'BREAK' error, must be 'CASE' or 'DEFAULT' or 'ENDSWITCH!!</EN>
717 <CH>'DEFAULT'值太多</CH> <EN>too much 'DEFAULT'!!</EN>
718 <CH>DEFAULT必须在CASE下面</CH> <EN>'DEFAULT must below 'CASE''!!</EN>
719 <CH>robot信息ID号错误，设置范围[70001-80000]</CH> <EN>'please set info id in [70001-80000]!!</EN>
720 <CH>robot错误信息ID号错误，设置范围[90001-100000]</CH> <EN>'please set error id in [90001-100000]'!!</EN>
721 <CH>robot报警信息ID号错误,设置范围[80001-90000]</CH> <EN>'please set Warning id in [80001-90000]!!</EN>
722 <CH>'CASE'、'BREAK'、'DEFAULT'语句只能在SWITCH语句里面使用</CH> <EN>'CASE'、'BREAK'、'DEFAULT' only been used in 'SWITCH'!!</EN>
723 <CH>指令参数中左右手类型参数异常！</CH> <EN>Invalid scope type of instruction parameters!</EN>
724 <CH>存在多个AutoTune指令,请检查程序！</CH> <EN>AutoTune is to much,please check your program!</EN>
725 <CH>AutoTune 指令个数或参数不匹配,请检查程序！！</CH> <EN>AutoTune Pid is not match,please check your program!</EN>
726 <CH>主机器人协同运动过程中有禁止的指令在运行！</CH> <EN>Some command is forbidden during the master robot synchronous motion!</EN>
727 <CH>从机器人协同运动过程中有禁止的指令在运行！</CH> <EN>Some command is forbidden during the slave robot synchronous motion!</EN>
728 <CH>关闭主从协同运动指令需要与开启主从协同运动指令组合搭配使用！</CH> <EN>The MSSyncOff inst need to be executed after system execute the MovMSSyncOn inst. Please mix and match!</EN>
729 <CH>不允许多个开启和关闭主从协同运动指令嵌套使用！</CH> <EN>Multiple MovMSSyncOn and MSSyncOff insts are forbidded to be nested use!</EN>
730 <CH>SetSyncSignal指令或GetSyncSignal指令只能在执行开启主从协同运动指令后执行！</CH> <EN>The SetSyncSignal inst or GetSyncSignal inst is forbidded to be executed before system execute the MovMSSyncOn inst!</EN>
731 <CH>指令中CTV参数异常！</CH> <EN>Invalid parameters in tool coordinate system!</EN>
732 <CH>指令参数中CTV类型不匹配！</CH> <EN>The CTV type mismatch in instruction parameters!</EN>
733 <CH>指令参数中CTV类型无法找到！</CH> <EN>The CTV type cannot be found in instruction parameters!</EN>
734 <CH>指令参数中CTV类型中某项的值找不到！</CH> <EN>Some value of CTV cannot be found in instruction parameters!</EN>

800 <CH>中断指令只能在中断程序调用时执行！</CH> <EN>The interrupt inst should be executed in interrupt program!</EN>
801 <CH>执行失败！中断程序中存在禁止运行的指令在运行！</CH> <EN>Program execute failed, there is prohibited instructions in "Interrupt" program!</EN>
802 <CH>中断程序中的运动指令只能在执行IEnter指令后执行！</CH> <EN>The motion inst is forbid to execute before system execute IEnter command!</EN>
803 <CH>中断程序中的IExit指令前必须为MovToIPos指令！</CH> <EN>MovToIPos inst must be teach before IExit inst in "Interrupt" program!</EN>
804 <CH>中断程序中的IEnter必须与IExit或ExitCycle指令搭配执行！</CH> <EN>IEnter inst must be used with IExit or ExitCycle inst!</EN>
805 <CH>中断程序中不支持CALL全局程序！</CH> <EN>CALL global program is not supported in Interrupt program!</EN>
806 <CH>示教程序call嵌套次数达到系统限制，请检查是否存在递归调用！</CH> <EN>The number of nested calls reaches the limit, please check if there are recursive calls!</EN>
807 <CH>获取上级程序名失败！</CH> <EN>Failed to get parent program name!</EN>


851 <CH>示教程序call嵌套次数达到系统限制，请重新加载程序运行！</CH> <EN>The number of nested calls reaches the limit, please reload the program to run!</EN>
852 <CH>校验全部工程变量达到系统限制，请单个工程校验</CH> <EN>The number of nested calls reaches the limit, please reload the program to run!</EN>

--Cam2D3D操作错误[901,1000]-----
901 <CH>3D视觉信息发送失败，请确认相机已连接！</CH> <EN>Failed to send 3D-vision message, please confirm the camera is connected!</EN>
902 <CH>2D视觉拍照命令触发失败！</CH> <EN>Failed to trig 2D-vision photograph command!</EN>
903 <CH>计算失败，请确认点位数据正确！</CH> <EN>Failed to Calculate, please make sure the point data is correct!</EN>
----------------------------------------------------------------------
--configure脚本执行错误[951,1000]-----
951 <CH>APOS转CPOS失败！</CH> <EN>Conversion from APOS to CPOS failed!</EN>
952 <CH>CPOS转APOS失败！</CH> <EN>Conversion from CPOS to APOS failed!</EN>
953 <CH>CPOS转CPOS失败！</CH> <EN>Conversion from CPOS to CPOS failed!</EN>
954 <CH>位运算失败！不能对负数进行位操作！</CH> <EN>Bit operation failed, the variable cannot be set to a negative number!</EN>
955 <CH>当前码垛计数已经超过最大码垛数量！</CH> <EN>The current pallet count exceeds the maximum number of pallets!</EN>
956 <CH>放置失败,当前放置已满！</CH> <EN>Placement failed, the current placement is full!</EN>
957 <CH>抓取失败,当前可抓取工件为空！</CH> <EN>Failed to grab, there are no artifacts to grab currently!</EN>
958 <CH>码垛参考位置点不存在！</CH> <EN>The reference position point of pallet does not exist!</EN>
959 <CH>批量IO操作失败，起始端口号大于结束端口号！</CH> <EN>Batch IO operation failed, the start port number is bigger than the end port number!</EN>
960 <CH>Hand指令答复失败！</CH> <EN>Hand instruction reply failed!</EN>
961 <CH>1~8号输出口为系统输出口，禁止用户操作！</CH> <EN>User is not allowed to operate system output, these output is 1,2,3,4,5,6,7,8!</EN>
962 <CH>读取的数据个数不能超过数组的大小！</CH> <EN>Data count which need read cannot exceed the array size</EN>
963 <CH>IO类型的触发值只能为0或者1！</CH> <EN>The trigger value of type IO can only be 0 or 1!</EN>
964 <CH>AreaActivate 或 AreaDeactivate 指令失败！</CH> <EN>AreaActivate or AreaDeactivate failed!</EN>
965 <CH>参数异常，请检查参数是否合法！</CH> <EN>Parameter Error! Please check whether parameter is truely!</EN>
966 <CH>无法获取明确的回退位置点，不能继续！</CH> <EN>Unable to get clear back position point,unable to continue!</EN>
967 <CH>SetTargetPos指令仅能在传送带为无视觉触发模式下运行！</CH> <EN>SetTargetPos is forbid execute in current mode!</EN>
968 <CH>动坐标系对应的传送带未使能，SetTargetPos指令执行失败！</CH> <EN>SetTargetPos execute failed! Conveyor is not in enable status!</EN>
969 <CH>根据动坐标系的值计算用户坐标系失败！</CH> <EN>Failed to convert the syncoord to usercoord!</EN>
970 <CH>伺服增益参数设置失败！</CH> <EN>The Pn gain Param set failed!</EN>
971 <CH>阵列指令:行数及列数必须为大于0的整数！</CH> <EN>Row and Column must be over than zero!</EN>
972 <CH>阵列指令:行号或列号大于设置值！</CH> <EN>Row or Column larger than settings!</EN>
973 <CH>阵列指令:行数和列数乘积需要小于限定值(32767)！</CH> <EN>(Row * Column) cannot larger than settings(32767)!</EN>
974 <CH>当前运动指令选择不受全局速度影响模式时需设置运行速度！</CH> <EN>Please set motion speed when OverrideType is UNCONTROLLED!</EN>
975 <CH>Damping加速度限制系数设置失败！</CH> <EN>The Damping acc limit param set failed!</EN>
976 <CH>Damping滤波器参数设置失败！</CH> <EN>The Damping filter param set failed!</EN>
977 <CH>同一时刻执行的脉冲指令数量超过了最大限制！</CH> <EN>The pulse count which system execute is out of max limit!</EN>
978 <CH>传入的变量类型不合法！</CH> <EN>Inst execute failed! Please check whether parameter is truely!</EN>
979 <CH>模型辨识数据采集失败！</CH> <EN>Failed to collect MDL data!</EN>
980 <CH>传送带使能状态设置失败！</CH> <EN>Failed to set virual conveyor enable status!</EN>
981 <CH>MovArch指令中下降高度未设置！</CH> <EN>The drop height is not set in the MovArch instruction!</EN>
982 <CH>参数不合法，传入的值只能为1~100！</CH> <EN>The parameter is out of limit!</EN>
983 <CH>中断标识已与其他程序绑定，请先解绑再执行绑定操作！</CH> <EN>The current interrupt index have connected to other program!</EN>
984 <CH>需要操作的中断标识未绑定！</CH> <EN>The interrupt index which need operate is not connected to program!</EN>
985 <CH>队列中已有待执行的中断操作命令！</CH> <EN>The interrupt operate buffer have other operate command!</EN>
986 <CH>返回中断发生位置指令只能在IEnter触发后执行！</CH> <EN>MovToIPos Inst is forbid when system has not execute IEnter instruction!</EN>
987 <CH>已执行过IEnter指令，请执行IExit指令后再执行IEnter指令！</CH> <EN>IEnter Inst is forbid when system is in motion interrupt status!</EN>
988 <CH>IExit指令只能在IEnter触发后执行！</CH> <EN>IExit Inst is forbid when system has not execute IEnter instruction!</EN>
989 <CH>ExitCycle指令只能在IEnter触发后执行！</CH> <EN>ExitCycle Inst is forbid when system has not execute IEnter instruction!</EN>
990 <CH>操作转矩限制值失败！</CH> <EN>Failed to operate torque limit value!</EN>
991 <CH>MovLArch指令中下降高度未设置！</CH> <EN>The drop height is not set in the MovLArch instruction!</EN>
992 <CH>计算位置点偏移结果失败！</CH> <EN>Failed to calculate the offset result of POS!</EN>
993 <CH>获取目标相对位置失败！</CH> <EN>Failed to get RelPos!</EN>
994 <CH>获取参考坐标系失败！</CH> <EN>Failed to get RefSys!</EN>
995 <CH>获取工具参数失败！</CH> <EN>Failed to get Tool!</EN>
996 <CH>获取坐标系参数失败！</CH> <EN>Failed to get Coord!</EN>
997 <CH>SgCmdRun指令执行失败，请检查当前轴状态！</CH> <EN>SgCmdRun execution failed, please check current axis status!</EN>
998 <CH>SgPowerOn指令执行失败，请检查当前轴状态！</CH> <EN>SgPowerOn execution failed, please check current axis status!</EN>
999 <CH>SgPowerOff指令执行失败，请检查当前轴状态！</CH> <EN>SgPowerOff execution failed, please check current axis status!</EN>
1000 <CH>SgHardStop指令执行失败，请检查当前轴状态！</CH> <EN>SgHardStop execution failed, please check current axis status!</EN>
1001 <CH>SgReset指令执行失败，请检查当前轴状态！</CH> <EN>SgReset execution failed, please check current axis status!</EN>
1002 <CH>SgStop指令执行失败，请检查当前轴状态！</CH> <EN>SgStop execution failed, please check current axis status!</EN>
1003 <CH>全局速度设置超出范围！</CH> <EN>Override exceeds the limit!</EN>
1004 <CH>SgSetOverRide指令执行失败，请检查当前轴状态！</CH> <EN>SgSetOverRide execution failed, please check current axis status!</EN>
1005 <CH>SgHome指令执行失败，请检查当前轴状态！</CH> <EN>SgHome execution failed, please check current axis status!</EN>
1006 <CH>SgSetDriveMode指令执行失败，请检查当前轴状态！</CH> <EN>SgSetDriveMode execution failed, please check current axis status!</EN>
1007 <CH>当前轴未使能为SG轴，请先执行设置SG轴指令！</CH> <EN>Axis is not enabled, execute RemoveAxisFromGroup instruction first!</EN>
1008 <CH>轴未励磁或内核不在可执行运动状态，运动命令下发失败！</CH><EN>Servo is off or Kernel is not in the running state, command delivery failed!</EN>
1009 <CH>系统出现报警，运动命令执行失败！</CH> <EN>Current system is in error status, motion instruction execution failed!</EN>
1010 <CH>轴转向值输入错误，必须为1或者-1！</CH><EN>Direction value must be 1 or -1!</EN>
1011 <CH>当前系统配置的SG轴数已达到限制，不允许切换此轴！</CH> <EN>SG axis number exceeds the limit!</EN>
1012 <CH>设置SG轴指令执行失败！</CH> <EN>Failed to remove axis from group!</EN>
1013 <CH>设置RC轴指令执行失败！</CH> <EN>Failed to add axis to group</EN>
1014 <CH>指令参数异常，仅支持附加轴！</CH> <EN>The parameters of instruction can only be aux axes</EN>
1015 <CH>SetOriMode指令执行失败，请检查当前指令参数！</CH> <EN>SetOriMode execution failed, please check current instruction parameter!</EN>
1016 <CH>程序文件为只读状态，执行失败！</CH> <EN>Failed to Open the program file which file permission is ReadOnly!</EN>
1017 <CH>因系统处于错误状态，坐标系设置失败！</CH> <EN>Failed to set the coordinate when system is error status!</EN>
1018 <CH>SetSingularPass指令执行失败，请检查当前指令参数！</CH> <EN>SetSingularPass execution failed, please check current instruction parameter!</EN>
1019 <CH>SetCircMode指令执行失败，请检查当前指令参数！</CH> <EN>SetCircMode execution failed, please check current instruction parameter!</EN>
1020 <CH>SetSCARAMode指令执行失败，请检查当前指令参数！</CH> <EN>SetSCARAMode execution failed, please check current instruction parameter!</EN>
1021 <CH>设置IO参数失败，请检查当前指令参数！</CH> <EN>Set IO parameter failed, please check current instruction parameter!</EN>
1022 <CH>设置运动参数失败，请检查当前指令参数！</CH> <EN>Set Movement parameter failed, please check current instruction parameter!</EN>
1023 <CH>AutoTune指令无法执行，请检查上次自调节是否处理完毕！</CH> <EN>AutoTune can not execution, please make sure last autoTune is completed!</EN>
1024 <CH>MovArch指令中高度类型未设置！</CH> <EN>The height type is not set in the MovArch instruction!</EN>
1025 <CH>协同标识参数不能为0！</CH> <EN>The synchronous index param cannot be zero!</EN>
1026 <CH>从机器人只能选"DEFAULT",主机器人只能选非"DEFAULT"！</CH> <EN>Slave robot can only choose "DEFAULT", master robot can bot choose "DEFAULT"!</EN>
1027 <CH>设置主从运动指令参数失败，请检查当前指令参数！</CH> <EN>Failed to set master slave synchronous motion param, please check current instruction parameter!</EN>
1028 <CH>从机器人不允许设置信号索引！</CH> <EN>Slave robot cannot be allowed to set signal index!</EN>
1029 <CH>主机器人不允许获取信号索引！</CH> <EN>Master robot cannot be allowed to set signal index!</EN>
1030 <CH>当前主从运动功能未使能，指令执行失败！</CH> <EN>Failed to execute the instruction because the current master-slave motion function is disabled!</EN>
1031 <CH>设置PSO控制字失败！</CH> <EN>Failed to set PSO controlword!</EN>
1032 <CH>获取PSO状态字失败！</CH> <EN>Failed to get PSO statusword!</EN>
1033 <CH>设置PSO比较点属性失败！</CH> <EN>Failed to set the attribute of PSO comparison point!</EN>

---******************************************************************--
---****************命令响应失败信息对应表***************--
---******************************************************************--
-----------------ER_Manager操作错误[50001,50999]----------------------
----------------------------------------------------------------------
50001 <CH>设置系统模式的参数异常！</CH> <EN>Invalid parameter of setting system mode!</EN>
50002 <CH>设置系统模式时，程序由执行转到停止失败！</CH> <EN>Failed to switch the program state from "run" to "stop" when setting system mode!</EN>
50003 <CH>获取系统中运动相关配置参数失败！</CH> <EN>Get motion configuration failed!</EN>
50004 <CH>程序执行中，不允许伺服励磁操作！</CH> <EN>Servo motivate operation is not allowed when program is running!</EN>
50005 <CH>系统不在自动模式，不允许伺服励磁操作！</CH> <EN>Servo motivate operation is not allowed when system is not in automatic mode!</EN> 
50006 <CH>系统下发运动控制复位命令失败！</CH> <EN>System failed to issue reset instruction of motion control!</EN>
50007 <CH>系统下发指令处理复位命令失败！</CH> <EN>System failed to issue reset instruction of instruction processing!</EN>
50008 <CH>系统清理错误列表失败！</CH> <EN>System failed to clean up the error list!</EN>
50009 <CH>系统错误清空复位命令执行失败！</CH> <EN>System error! Executing instruction of emptying reset command failed!</EN>
50010 <CH>获取到系统远程速度参数异常，超过[1,100]！</CH> <EN>Invalid remote velocity parameter of system, above [1,100]!</EN>
50011 <CH>设置系统远程速度参数异常，超过[1,100]！</CH> <EN>Invalid remote velocity parameter to be set, above [1,100]!</EN>
50012 <CH>设置自启动中工程或程序名存在空值！</CH> <EN>Project or program name is empty when setting auto-start option!</EN>		
50013 <CH>取消自启动中工程或程序名与原本不对应！</CH> <EN>Project or program name mismatch when canceling auto-start option!</EN>
50014 <CH>程序执行中，不允许设置系统IP！</CH> <EN>Operation of setting system IP is not allowed when program is running!</EN>
50015 <CH>设置系统IP参数中端口号值异常！</CH> <EN>The port value parameter of  setting system IP is abnormal!</EN>
50016 <CH>加密信息不合法，加密失败！</CH> <EN>The encrypt information is not valid, failed to encrypt!</EN>
50017 <CH>解密密码错误，解密失败！</CH> <EN>Password error, failed to decrypt!</EN>
50018 <CH>加密数据被其他线程占用，请稍后重试！</CH> <EN>The encryption data is occupied by another thread, please try again later!</EN>
50019 <CH>系统当前没有加密，无需解密！</CH> <EN>The system is not encrypted and dose not require decryption!</EN>
50020 <CH>系统执行期限已过，请联系厂家进行解密！</CH> <EN>System execution period expired, please contact the manufacturer to decrypt!</EN>
50021 <CH>系统时间被篡改，运行不合法！</CH> <EN>System time was tampered!</EN>
50022 <CH>系统时间获取失败，操作频繁，请重试！</CH> <EN>Failed to acquire system time, please try again later!</EN>
50023 <CH>程序由暂停转到停止状态出错！</CH> <EN>The program failed to switch from pause to stop state!</EN>
50024 <CH>多工位参数设置失败，参数不合法！</CH> <EN>Parameter is error! Set multi-station parameter failed!</EN>
50025 <CH>设置远程速度失败，请切换到其它模式下设置！</CH> <EN>Failed to set remote speed, please switch to other mode settings!</EN>
50026 <CH>被使能的多工位输入口/输出口/程序名不能为空或无效值！</CH> <EN>Multi-station param is illegal, please ensure param is truely!</EN>
50027 <CH>更新加密数据到文件中失败！</CH> <EN>Update the encrypt information to file failed!</EN>
50028 <CH>设置系统模式时，程序倒序切换到单步失败！</CH> <EN>Failed to switch the program step from "step_back" to "step" when setting system mode!</EN>
50029 <CH>该系统不支持设置外部通讯网络信息！</CH> <EN>Failed to set Ext_network when system not support!</EN>
50030 <CH>非停止状态下禁止设置API模式！</CH> <EN>It is frobid to set api parameter when system is not stopping status!</EN>
50031 <CH>系统处于错误状态，不能励磁操作！</CH> <EN>System is in error status,can not servo on!</EN>
50032 <CH>系统异常启动！</CH> <EN>System start abnormal!</EN>

-----------------ER_MovManager操作错误[51001,52000]-------------------
51001 <CH>程序执行中，不允许进行该操作！</CH> <EN>Operation is not allowed when program is running!</EN>
51002 <CH>伺服不在励磁状态，不允许回零操作！</CH> <EN>Homing operation is not allowed when servo is not in excitation state!</EN>
51003 <CH>回零命令执行失败！</CH> <EN>Failed to execute homing instruction!</EN>
51004 <CH>全局速度命令设置失败！</CH> <EN>Failed to execute setting override instruction!</EN>
51005 <CH>程序运行中，不允许设置点动参考坐标系！</CH> <EN>Setting jog reference coordinate system is not allowed when program is running!</EN>
51006 <CH>点动坐标系命令设置失败！</CH> <EN>Failed to execute setting jog coordinate system!</EN>
51007 <CH>程序运行中，不允许机器人点动！</CH> <EN>Jog operation is not allowed when program is running!</EN>
51008 <CH>伺服不在励磁状态，不允许机器人点动！</CH> <EN>Jog operation is not allowed when servo is not in excitation state!</EN>
51009 <CH>自动模式下，不允许机器人点动！</CH> <EN>Jog operation is not allowed when system is in automatic state!</EN>
51010 <CH>当前系统模式下，不允许机器人点动操作！</CH> <EN>Jog operation is not allowed when system is in current state!</EN>
51011 <CH>程序运行中，不允许切换点动模式！</CH> <EN>Switching to jog mode is not allowed when program is running!</EN>
51012 <CH>点动命令执行失败！</CH> <EN>Failed to execute jog instruction!</EN>
51013 <CH>设置DOUT命令执行失败！</CH> <EN>Failed to execute setting DOUT instruction!</EN>
51014 <CH>设置AOUT命令执行失败！</CH> <EN>Failed to execute setting AOUT instruction!</EN>
51015 <CH>设置SIMDOUT命令执行失败！</CH> <EN>Failed to execute setting SIMDOUT instruction!</EN>
51016 <CH>设置SIMAOUT命令执行失败！</CH> <EN>Failed to execute setting SIMAOUT instruction!</EN>
51017 <CH>系统接口异常，重启系统后再尝试！</CH> <EN>The system interface is abnormal, try again after restarting the system!</EN>
51018 <CH>命令参数超限定范围，命令执行失败！</CH> <EN>Command parameters exceed the limit, failed to execute the command!</EN>
51019 <CH>程序运行中，不允许标定工具参数！</CH> <EN>Calibrating tool parameters is not allowed when program is running!</EN>
51020 <CH>程序运行中，不允许标定用户坐标系！</CH> <EN>Calibrating user coordinate system is not allowed when program is running!</EN>
51021 <CH>设置传送带参数命令执行失败！</CH> <EN>Failed to execute setting conveyor parameters instruction!</EN>
51022 <CH>设置跟随参数命令执行失败！</CH> <EN>Failed to execute setting follow parameters instruction!</EN>
51023 <CH>刷新单圈值失败！</CH>  <EN>Failed to refresh single turn value!</EN>
51024 <CH>映射运动内核接口数据失败，检查运动内核组件是否正常启动！</CH> <EN>Failed to map motion kernel interface data，check whether RTMC.rta starts normally!</EN>
51025 <CH>起终点跨奇异，不支持一点到达运动！</CH> <EN>Path pass singularity!</EN>
51026 <CH>设置的高度值不合法！</CH> <EN>The height value is illegal!</EN>
51027 <CH>当前机型不支持一点到达操作(拱形运动)！</CH> <EN>Current model does not support go targetPos in this way(arch motion)!</EN>
51028 <CH>当前模式不支持一点到达操作(拱形运动)！</CH> <EN>Current mode does not support go targetPos in this way(arch motion)!</EN>
51029 <CH>运动启动失败！</CH> <EN>Failed to start motion!</EN>
51030 <CH>运动缓存已满！</CH> <EN>The motion buffer is full!</EN>
51031 <CH>程序运行中，不允许激活一点对正！</CH> <EN>The program is running, activating one-click alignment is not allowed!</EN>
51032 <CH>程序运行中，不允许进行一点对正操作！</CH> <EN>The program is running, one-click alignment operation is not allowed!</EN>
51033 <CH>一点对正操作失败！</CH> <EN>Failed to execute one-click alignment operation!</EN>
51034 <CH>未激活一点对正，不允许操作！</CH> <EN>One-click alignment operation is not activated, cannot be executed!</EN>
51035 <CH>程序暂停状态中，不允许进行回零操作！</CH> <EN>The program is in paused state, homing operation is not allowed!</EN>
51036 <CH>程序暂停状态中，不允许设置点动参考坐标系！</CH> <EN>The program is in paused state, cannot set the reference coordinate system of jog-motion!</EN>
51037 <CH>程序暂停状态中，不允许机器人点动！</CH> <EN>The program is in paused state, jog-motion is not allowed!</EN>
51038 <CH>程序暂停状态中，不允许切换点动模式！</CH> <EN>The program is in paused state, switching jog-motion mode is not allowed!</EN>
51039 <CH>程序暂停状态中，不允许标定工具参数！</CH> <EN>The program is in paused state, calibrating the tool parameters is not allowed!</EN>
51040 <CH>程序暂停状态中，不允许标定用户坐标系！</CH> <EN>The program is in paused state, calibrating the user coordinate system is not allowed!</EN>
51041 <CH>程序暂停状态中，不允许激活一点对正！</CH> <EN>The program is in paused state, activating one-click alignment is not allowed!</EN>
51042 <CH>程序暂停状态中，不允许进行一点对正操作！</CH> <EN>The program is in paused state, one-click alignment operation is not allowed!</EN>
51043 <CH>设置DI命令执行失败！</CH> <EN>Failed to set DI!</EN>
51044 <CH>设置AI命令执行失败！</CH> <EN>Failed to set AI!</EN>
51045 <CH>设置SIMDI命令执行失败！</CH> <EN>Failed to set SIMAI!</EN>
51046 <CH>设置SIMAI命令执行失败！</CH> <EN>Failed to set SIMDI!</EN>
51047 <CH>伺服励磁状态，不允许清除伺服报警！</CH> <EN>Clearing servo alarms is not allowed when the servo is in an excited state!</EN>
51048 <CH>操作失败！</CH> <EN>Failed to execute!</EN>
51049 <CH>获取伺服Pn参数失败！</CH> <EN>Failed to get the servo PN parameters!</EN>
51050 <CH>设置伺服Pn参数失败！</CH> <EN>Failed to set the servo PN parameters!</EN>
51051 <CH>软浮动期间，不允许机器人点动！</CH> <EN>Jog operation is not allowed during in SoftFloat!</EN>
51052 <CH>内核由暂停转空闲状态失败！</CH> <EN>Kernel state from pause to idle failed!</EN>
51053 <CH>设置诊断功能项失败！</CH> <EN>Set function item of Diagnose failed!</EN>
51054 <CH>设置诊断参数失败！</CH> <EN>Set parameters of Diagnose failed!</EN>
51055 <CH>程序运行中，不允许标定外部坐标系！</CH> <EN>Calibrating extend tcp system is not allowed when program is running!</EN>
51056 <CH>程序暂停状态中，不允许标定外部坐标系！</CH> <EN>The program is in paused state, calibrating the extend tcp system is not allowed!</EN>
51057 <CH>映射运动内核接口数据错误，版本不匹配！</CH> <EN>Mapping motion kernel interface data error, version mismatch!</EN>
51058 <CH>变位机参数设置失败,请检查输入参数的合法性！</CH> <EN>It is failed to set positioner parameter, Please ensure parameter is truely!</EN>
51059 <CH>变位机参数读取失败，请检查输入参数的合法性！</CH> <EN>It is failed to get positioner parameter, Please ensure parameter is truely!</EN>
51060 <CH>程序运行中，不允许标定变位机坐标系！</CH> <EN>Calibrating positioner system is not allowed when program is running!</EN>
51061 <CH>程序暂停状态中，不允许标定变位机坐标系！</CH> <EN>The program is in paused state, calibrating the positioner system is not allowed!</EN>
51062 <CH>程序运行中，不允许设置变位机坐标系参数！</CH> <EN>Set positioner param error! Program is in running!</EN>
51063 <CH>第一个变位机轴不在零点位置！标定失败！</CH> <EN>The first external axis is not at zero! Calibration positioner param failed!</EN>
51064 <CH>第二个变位机轴不在零点位置！标定失败！</CH> <EN>The second external axis is not at zero! Calibration positioner param failed!</EN>
51065 <CH>激活或冻结区域命令失败！</CH> <EN>AreaActivateOrNot cmd failed!</EN>
51066 <CH>传入的传送带ID错误！</CH> <EN>The conveyor index is out of limit!</EN>
51067 <CH>程序运行中，不允许标定传送带脉冲当量！</CH> <EN>Calibrating Conveyor Equivalent system is not allowed when program is running!</EN>
51068 <CH>程序暂停状态中，不允许标定传送带脉冲当量！</CH> <EN>The program is in paused state, calibrating the Conveyor Equivalent system is not allowed!</EN>
51069 <CH>当前点与上一次记录的点相同！</CH> <EN>The current point is samed to last point!</EN>
51070 <CH>计算失败！两个点之间的编码器脉冲差值太小或者相等！</CH> <EN>The encoder value between last point and current point is equal or too short!</EN>
51071 <CH>传入的动坐标系未与传送带绑定或传送带未使能，运行失败！</CH> <EN>Please ensure the dyn coordinate is bound to the conveyor!</EN>
51072 <CH>设置的传送带输出口超过设定范围！</CH> <EN>The trig output of conveyor is out of limit!</EN>
51073 <CH>设置的传送带输入口超过设定范围！</CH> <EN>The trig input of conveyor is out of limit!</EN>
51074 <CH>设置的传送带输出口跟其他传送带的输出口重复！</CH> <EN>The trig output of conveyor is used by other conveyor!</EN>
51075 <CH>设置的传送带输入口跟其他传送带的输入口重复！</CH> <EN>The trig input of conveyor is used by other conveyor!</EN>
51076 <CH>未获取到视觉点信息，运行失败！</CH> <EN>Please ensure the vision message is received before execute MovLSync instruction!</EN>
51077 <CH>设置的传送带坐标系跟其他传送带的动坐标系重复！</CH> <EN>The trig syncoord of conveyor is used by other conveyor!</EN>
51078 <CH>动坐标系下，不允许机器人点动！</CH> <EN>Jog operation is not allowed when current coodrate is syncoord!</EN>
51079 <CH>动坐标系下，不允许切换坐标系！</CH> <EN>Coordinate switch operation is not allowed when current coodrate is syncoord!</EN>
51080 <CH>动坐标系下，禁止标定传送带的脉冲当量！</CH> <EN>Calibrating conveyor equivalent operation is not allowed when current coodrate is syncoord!</EN>
51081 <CH>动坐标系下，禁止设置碰撞检测参数！</CH> <EN>Set CollideValue parameter operation is not allowed when current coodrate is syncoord!</EN>
51082 <CH>动坐标系下，禁止设置振动抑制参数！</CH> <EN>Set vibraBatement parameter operation is not allowed when current coodrate is syncoord!</EN>
51083 <CH>计算失败！两个点之间的距离太近！</CH> <EN>The distance between last point and current point is too short!</EN>
51084 <CH>恢复参数完成！但是，以下参数无法恢复：</CH> <EN>Recover servo parameter done!But,below paramertes cannot recover:</EN>
51085 <CH>设置机械臂参数失败！</CH> <EN>Failed to set mechanical arm parameters!</EN>
51086 <CH>更改轨迹纠偏使能状态失败！</CH> <EN>Failed to change the track correction enable state!</EN>
51087 <CH>设置轨迹纠偏参数失败！</CH> <EN>Failed to set correction parameter!</EN>
51088 <CH>设置区域参数失败！</CH> <EN>Failed to set area parameter!</EN>
51089 <CH>备份参数失败！</CH> <EN>Failed to backup servo parameter!</EN>
51090 <CH>恢复参数失败！</CH> <EN>Failed to recover servo parameter!</EN>
51091 <CH>当前动坐标系与待设置参数的传送带动坐标系不一致！</CH> <EN>Current syncoord should be corresponding to current conveyor syncoord!!</EN>
51092 <CH>当前操作只能在动坐标系下进行！</CH> <EN>Record follow pos should be in syncoord!</EN>
51093 <CH>设置多边体区域参数失败！</CH> <EN>Failed to set polyhedron area parameter!</EN>
51094 <CH>获取多边体区域参数失败！</CH> <EN>Failed to get polyhedron area parameter!</EN>
51095 <CH>删除多边体区域参数失败！</CH> <EN>Failed to delete polyhedron area parameter!</EN>
51096 <CH>激活或冻结多边体区域命令失败！</CH> <EN>Failed to activate or deactivate polyhedron cmd!</EN>
51097 <CH>一键清除IO输入量仿真状态失败！</CH> <EN>Failed to clear IO input force status!</EN>
51098 <CH>获取IO注释失败！</CH> <EN>Failed to get IO note!</EN>
51099 <CH>设置IO注释失败！</CH> <EN>Failed to set IO note!</EN>
51100 <CH>虚拟示教器急停命令失败！</CH> <EN>Failed to activate virtual emergency button cmd!</EN>
51101 <CH>设置更新伺服监测数据命令失败！</CH> <EN>Failed to set update servo status cmd!</EN>
51102 <CH>获取伺服历史报警命令失败！</CH> <EN>Failed to get servo historical error list cmd!</EN>
51103 <CH>文件上传命令失败！</CH> <EN>Failed to FOE Upload cmd!</EN>
51104 <CH>文件下载命令失败！</CH> <EN>Failed to FOE Download cmd!</EN>
51105 <CH>本次上电距离最近一次断电时间间隔较短，请再次断电并等待至少5秒后上电！</CH> <EN>The interval between this power-on the latest power-off is short, Power off again and wait at least 5 seconds！</EN>
51106 <CH>远程模式下，机械运动未使能禁止下发运动段！</CH> <EN>Pushing motion instruction is not allowed due to mechanical motion disabled in remote mode!</EN>
51107 <CH>远程模式下，机械运动未使能禁止程序运行！</CH> <EN>Running program is not allowed due to mechanical motion disabled in remote mode!</EN>
51108 <CH>修改motion mode备注失败！</CH> <EN>modify motion mode note failed!!</EN>
51109 <CH>获取motion mode参数失败！</CH> <EN>get motion mode failed!</EN>
51110 <CH>设置motion mode参数失败！</CH> <EN>set motion mode failed!</EN>
51111 <CH>设置motion mode自调节参数失败！</CH> <EN>set motion mode auto tune para failed!</EN>
51112 <CH>保存motion mode自调节参数失败！</CH> <EN>save motion mode auto tune para failed!</EN>
51113 <CH>设置默认motion mode失败！</CH> <EN>set default motion  failed!</EN>
51114 <CH>motion mode id 错误，请检查</CH> <EN>motion mode id error! please check the id is correct.</EN>
51115 <CH>获取motion mode备注及默认motion mode失败</CH> <EN>get motion mode note and default motion mode failed!</EN>
51116 <CH>系统参数操作失败！</CH> <EN>Operate system parameter failed!</EN>
51117 <CH>系统未完全掉电！再次断电并等待控制器完全掉电后再上电！</CH> <EN>Power on Again, need restart!</EN>
51118 <CH>程序运行中，不允许标定多机坐标系！</CH> <EN>Calibrating multi robot system is not allowed when program is running!</EN>
51119 <CH>程序暂停状态中，不允许标定多机坐标系！</CH> <EN>Calibrating the multi robot system is not allowed when program is in paused state!</EN>
51120 <CH>程序运行中，不允许设置多机配置参数！</CH> <EN>Setting multi robot configuration parameter is not allowed when program is running!</EN>
51121 <CH>多机配置参数设置失败，请检查输入参数的合法性！</CH> <EN>It is failed to set multi robot configuration parameter, Please ensure parameter is truely!</EN>
51122 <CH>多机配置参数读取失败，请检查输入参数的合法性！</CH> <EN>It is failed to get multi robot configuration parameter, Please ensure parameter is truely!</EN>
51123 <CH>防碰撞配置参数设置失败，请检查输入参数的合法性！</CH> <EN>It is failed to set anti-collision configuration parameter, Please ensure parameter is truely!</EN>
51124 <CH>防碰撞配置参数读取失败，请检查输入参数的合法性！</CH> <EN>It is failed to get anti-collision configuration parameter, Please ensure parameter is truely!</EN>
51125 <CH>程序暂停状态中，不允许设置多机配置参数！</CH> <EN>Setting multi robot configuration parameter is not allowed when program is in paused state!</EN>
51126 <CH>文件比较命令失败,出厂或用户备份参数文件不存在！</CH> <EN>Failed to compare file cmd,Factory or user backup parameter files non-existed!</EN>
51127 <CH>文件更新命令失败！</CH> <EN>Failed to update file cmd!</EN>
51128 <CH>禁止对已选中的主从组参数进行上下使能操作！</CH> <EN>The MSGroupId param is being setted, forbid to operate the param to be enable or disable!</EN>
51129 <CH>主从模式已退出！</CH> <EN>The master-slave mode has exited!</EN>
51130 <CH>寻位成功！</CH> <EN>Search successfully</EN>
51131 <CH>运动到校准点成功！</CH> <EN>Motion point successfully</EN>
51132 <CH>设置维保模式启停失败！</CH> <EN>Start or stop maintenance failed！</EN>
51134 <CH>记录失败，三次寻位偏差值过大，请重新寻位！</CH> <EN>Back to zero point failed, variance dissatisfied!</EN>
----------------------------------------------------------------------
--------------------Instruction操作错误[52001,52999]------------------
52001  <CH>系统处于运行状态，操作被禁止！</CH><EN>The system is in running state, the operation is forbidden!</EN>
52002  <CH>请先加载工程或程序！</CH><EN>Please load a project or program at first!</EN>
------------------工程文件操作错误(52003~52030)------------------
52003  <CH>工程创建失败！</CH> <EN>Create project failed!</EN>
52004  <CH>工程加载失败！</CH> <EN>Load project failed!</EN>
52005  <CH>工程注销失败！</CH> <EN>Logout project failed!</EN>
52006  <CH>工程复制失败！</CH> <EN>Copy project failed!</EN>
52007  <CH>工程粘贴失败！</CH> <EN>Paste project failed!</EN>
52008  <CH>工程删除失败！</CH> <EN>Delete project failed!</EN>
52009  <CH>工程重命名失败！</CH> <EN>Rename project failed!</EN>
52010  <CH>工程刷新失败！</CH> <EN>Refresh project failed!</EN>
52011  <CH>程序创建失败！</CH> <EN>Create program failed!</EN>
52012  <CH>程序加载失败！</CH> <EN>Load program failed!</EN>
52013  <CH>程序注销失败！</CH> <EN>Logout program failed!</EN>
52014  <CH>程序打开失败！</CH> <EN>Open program failed!</EN>
52015  <CH>程序关闭失败！</CH> <EN>Close program failed!</EN>
52016  <CH>程序复制失败！</CH> <EN>Copy program failed!</EN>
52017  <CH>程序粘贴失败！</CH> <EN>Paste program failed!</EN>
52018  <CH>程序被调用，删除失败！</CH> <EN>Delete program failed!</EN>
52019  <CH>程序被调用，重命名失败！</CH> <EN>Rename program failed!</EN>
52020  <CH>程序刷新失败！</CH> <EN>Refresh program failed!</EN>
52021  <CH>程序列表获取失败！</CH> <EN>Get program list failed!</EN>
52022  <CH>工程名过长或为空！</CH> <EN>The project name is too long or empty!</EN>
52023  <CH>工程名已存在！</CH> <EN>The project name already exists!</EN>
52024  <CH>工程数量超出限制！</CH> <EN>The number of projects exceeds the limit!</EN>
52025  <CH>创建工程变量数据文件失败！</CH> <EN>Failed to create variable data file of project!</EN>
52026  <CH>创建工程后获取工程列表失败！</CH> <EN>Failed to get Project list after creating the project!</EN>
52027  <CH>工程文件异常！</CH> <EN>Project file exception!</EN>
52028  <CH>该工程不存在！</CH> <EN>The project does not exist!</EN>
52029  <CH>获取全局数据失败！</CH> <EN>Failed to get the global speed!</EN>
52030  <CH>加载工程数据失败！</CH> <EN>Failed to load the data file of project!</EN>
52031  <CH>工程没有被加载！</CH> <EN>The project is not loaded!</EN>
52032  <CH>非法的程序名！</CH> <EN>The program name is illegal!</EN>
52033  <CH>程序名过长或为空！</CH> <EN>The program name is too long or empty!</EN>
52034  <CH>程序名已存在！</CH> <EN>The variable name already exists!</EN>
52035  <CH>程序数量超出限制！</CH> <EN>The number of programs exceeds the limit!</EN>
52036  <CH>创建程序变量文件失败！</CH> <EN>Failed to create variable data file of program!</EN>
52037  <CH>创建程序文件失败！</CH> <EN>Failed to create program file!</EN>
52038  <CH>获取选定工具坐标系参数失败！</CH> <EN>Failed to get tool coordinate system parameters!</EN>
52039  <CH>获取选定用户坐标系参数失败！</CH> <EN>Failed to get user coordinate system parameters!</EN>
52040  <CH>工程名或程序名为空！</CH> <EN>Project name or program name is empty!</EN>
52041  <CH>程序文件无法打开！</CH> <EN>Cannot open the program file!</EN>
52042  <CH>该程序没有在工程中找到或没有被加载！</CH> <EN>The program was not found or was not be loaded!</EN>
52043  <CH>程序文件不存在！</CH> <EN>The program file does not exist!</EN>
52044  <CH>删除数据文件失败！</CH> <EN>Failed to delete data file!</EN>
52045  <CH>删除程序文件失败！</CH> <EN>Failed to delete program file!</EN>
52046  <CH>获取程序列表失败！</CH> <EN>Failed to get program list!</EN>
52047  <CH>无法删除当前加载的工程！</CH> <EN>Current loaded project cannot be deleted!</EN>
52048  <CH>从程序文件中获取全部指令失败！</CH> <EN>Failed to get all instructions from program file!</EN>
52049  <CH>程序文件格式转换失败！</CH> <EN>Failed to convert program file format!</EN>
52050  <CH>当前打开的程序无法关闭！</CH> <EN>Current opened program cannot be closed!</EN>
52051  <CH>程序数据文件大小超出限制！</CH> <EN>The size of program file exceeds limit!</EN>
52052  <CH>恢复运行的数据失败！</CH> <EN>Failed to resume running data!</EN>
52053  <CH>当前加载程序的程序变量数据获取失败！</CH> <EN>Failed to get all variable data of current loaded program!</EN>
52054  <CH>当前加载程序的程序变量数据加载失败！</CH> <EN>Failed to load all variable data of current loaded program!</EN>
52055  <CH>当前加载程序的程序变量数据保存失败！</CH> <EN>Failed to save all variable data of current loaded program!</EN>
52056  <CH>没有被复制的程序，程序粘贴失败！</CH> <EN>No program was copied, pasting program failed!</EN>
52057  <CH>没有被复制的工程，工程粘贴失败！</CH> <EN>No project was copied, pasting project failed!</EN>
52058  <CH>要复制的工程不存在，工程粘贴失败！</CH> <EN>The project to be copied does not exist, pasting project failed!</EN>
52059  <CH>工程文件目录获取失败！</CH> <EN>Failed to get the project file directory!</EN>
52060  <CH>工程被加载、程序被加载或打开时，不允许重命名操作！</CH> <EN>Renaming operation are not allowed when a project is loaded or a program is loaded or opened!</EN>
52061  <CH>程序数据文件重命名失败！</CH> <EN>Failed to rename the program data file!</EN>
52062  <CH>程序指令文件重命名失败！</CH> <EN>Failed to rename the program instruction file!</EN>
52063  <CH>工程文件目录拷贝失败！</CH> <EN>Failed to copy the project file directory!</EN>
52064  <CH>工程文件目录删除失败！</CH> <EN>Failed to delete the project file directory!</EN>
52065  <CH>拷贝工程目录失败！</CH> <EN>Failed to copy the project directory!</EN>
52066  <CH>工程加载状态下不允许删除工程中的程序！</CH> <EN>Program of one project cannot be deleted when the project loaded!</EN>
52067  <CH>工程加载状态下不允许重命名工程中的程序！</CH> <EN>Program of one project cannot be renamed when the project loaded!</EN>
52068  <CH>变量名长度超限！</CH> <EN>Variable name overrun!</EN>
52069  <CH>程序平移或镜像中不允许存在与预设坐标系、工具不同的参数！</CH> <EN>Parameters different from the preset coordinate or tool parameters are not allowed in the shift or mirror program!</EN>
52070  <CH>程序行数超限，程序平移或镜像的指令行数最多支持998行！</CH> <EN>The number of program lines overruns because shift or mirror progarm lines only support the maximum of 998 lines!</EN>
52071  <CH>打开程序文本失败！</CH> <EN>Open program file error!</EN>
52072  <CH>程序平移失败！</CH> <EN>Failed to shift the program!</EN>
52073  <CH>程序平移获取结果失败！</CH> <EN>Failed to receive the program shift results!</EN>
52074  <CH>镜像命令下发错误！</CH> <EN>Send Error!</EN>
52075  <CH>镜像命令获取结果超时！</CH> <EN>Time Out!</EN>
52076  <CH>更新变量管理表失败！</CH> <EN>Update Variable false!</EN>
52077  <CH>操作失败！系统初始化未完成，请稍后重试！</CH> <EN>Operate failed! System initialization is unfinished! Please try again later!</EN>
52078  <CH>获取选定外部TCP坐标系参数失败！</CH> <EN>Failed to get externaltcp coordinate system parameters!</EN>
52079  <CH>获取选定变位机坐标系参数失败！</CH> <EN>Failed to get positioner coordinate system parameters!</EN>
52080  <CH>获取选定负载惯量参数失败！</CH> <EN>Failed to get payload parameters!</EN>
52081  <CH>传入的label名不存在，获取label所在行失败 ！</CH> <EN>The label name is not existed!</EN>
52082  <CH>程序删除成功！</CH> <EN>Program deleted successfully!</EN>
52083  <CH>工程删除成功！</CH> <EN>Project deleted successfully!</EN>
52084  <CH>外部控制模式下不支持该操作！</CH> <EN>External mode is not support to this operation!</EN>
52085  <CH>全局工程不支持该操作！</CH> <EN>It is forbid to operate Global program!</EN>
52086  <CH>工程文件处于写保护状态！</CH> <EN>The project file is protected!</EN>
52087  <CH>程序文件处于写保护状态！</CH> <EN>The program file is protected!</EN>
52088  <CH>变量文件处于写保护状态！</CH> <EN>The var file is protected!</EN>
52089  <CH>设置程序文件为只读权限失败！</CH> <EN>Failed to set the ReadOnly permission of the program file!</EN>
52090  <CH>设置程序文件为读写权限失败！</CH> <EN>Failed to set the ReadWrite permission of the program file!</EN>
52091  <CH>程序注释超过了最大长度！</CH> <EN>The length of Program Comment  is out of limit!</EN>
52092  <CH>有工程处于加载状态,不允许执行恢复操作！</CH> <EN>There is a project in the loading state, not allow restore operations!</EN>
52093  <CH>没有工程或者程序需要恢复！</CH> <EN>There are no project or program that need to be sertored!</EN>
52094  <CH>只读程序无法覆盖！</CH> <EN>read only progarm cannot restore!</EN>
52095  <CH>程序转换点太近或共线，请重新选取转换位置点！</CH> <EN>The position points of the progarm are too close or collinear! Please re-select position points!</EN>
52096  <CH>程序内容为空，程序转换失败！</CH> <EN>Failed to shift the progarm because the content of the progarm is empty!</EN>
52097  <CH>变量校验，工程数量超出限制！</CH> <EN>Checkout Project Var, Too Much Project!</EN>
52098  <CH>工程变量校验中！</CH> <EN>Project Var Checkouting!</EN>
52099  <CH>当前示教坐标系与所选坐标系不匹配，示教失败！</CH> <EN>Failed to teach points because current coordinate system does not match the selected coordinate system!</EN>
52100  <CH>当前示教工具与所选工具不匹配，示教失败！</CH> <EN>Failed to teach points because current tool system does not match the selected tool system!</EN>
52101  <CH>当前打开程序与加载程序不匹配，程序转换失败！</CH> <EN>Failed to shift the progarm because current opened program does not match current loaded program!</EN>
52102  <CH>当前程序中存在点位数组变量，禁止程序转换！</CH> <EN>The current program exists position array var, forbid to shift or mirror the progarm!</EN>
52103  <CH>当前程序中无位置点或程序变量校验关系缺失，禁止程序转换！</CH> <EN>There ara no position points or program var test relationship in current progarm, forbid to shift the progarm!</EN>
52104  <CH>当前机器人处于协同模式，禁止加载、注销、设置PC等操作！</CH> <EN>The robot is in synchronous mode, forbid operations such as loading, unloading or setting PC!</EN>
52105  <CH>设备未完全断电后再次上电！该操作被禁止</CH> <EN>Power on device before it is compeletely powered off! The current operation is disable</EN>
52106  <CH>当前程序中的运动指令超过700行，禁止程序转换!</CH> <EN>The motion instructions are over 700 lines in current progarm, forbid to shift the progarm!</EN>
52107  <CH>选中行范围内流程控制指令不完整，不允许转换！</CH> <EN>Logical command in selected lines of program shift or mirror is incomplete!</EN>
52108  <CH>程序转换选取的开始行或结束行不合适，请重新选取！</CH> <EN>Selected start line or end line in program shift are incorrect, please reselect!</EN>
52109  <CH>程序转换选取插入行不合适，请重新选取！</CH> <EN>Selected insert line is incorrect, please reselect!</EN>
52110  <CH>程序转换后新程序总行数超限制！</CH> <EN>Total number of lines in new program is over limit!</EN>
52111  <CH>获取目标程序总行数失败！</CH> <EN>Get total number of lines of target program failed!</EN>
52112  <CH>选中行内有默认坐标系或默认工具，将按照选择坐标系或工具进行转换！</CH> <EN>Deafaut coordinate or tool not match with selected ones!</EN>
52113  <CH>选择行内存在程序转换后与目标程序中名称相同的点，请修改源程序或目标程序中同名点的名称 </CH> <EN>Target program has same point with origin program</EN>
52114  <CH>源程序维护表位置变量与程序中位置变量不一致，无法进行程序转换。请检查VarE文件！ </CH> <EN> Position vars in VarE file of original program is inconsistent with erp file</EN>

------------------指令操作错误(52301~52500)------------------
52301  <CH>枚举字符串未找到！</CH> <EN>Enumeration string not found!</EN>
52302  <CH>指令校验不合法！</CH> <EN>Instruction verification is illegal!</EN>
52303  <CH>获取完整的指令内容失败！</CH> <EN>Failed to get complete instruction content!</EN>
52304  <CH>获取新建的指令列表失败！</CH> <EN>Failed to get new instruction list!</EN>
52305  <CH>获取修改的指令列表失败！</CH> <EN>Failed to get modified instruction list!</EN>
52306  <CH>获取新建的小指令列表失败！</CH> <EN>Failed to get the  new "add do" instruction list!</EN>
52307  <CH>获取修改的小指令列表失败！</CH> <EN>Failed to get the "add do" instruction list modified!</EN>
52308  <CH>小功能指令创建失败！</CH> <EN>Failed to create "add do" instruction!</EN>
52309  <CH>指令创建失败！</CH> <EN>Create instruction failed!</EN>
52310  <CH>指令修改失败！</CH> <EN>Modify instruction failed!</EN>
52311  <CH>指令复制失败！</CH> <EN>Copy instruction failed!</EN>
52312  <CH>指令剪切失败！</CH> <EN>Cut instruction failed!</EN>
52313  <CH>指令粘贴失败！</CH> <EN>Paste instruction failed!</EN>
52314  <CH>指令删除失败！</CH> <EN>Delete instruction failed!</EN>
52315  <CH>指令注释失败！</CH> <EN>Annotate instruction failed!</EN>
52316  <CH>指令恢复失败！</CH> <EN>Restore instruction failed!</EN>
52317  <CH>当前行号超过了最大数量限制！</CH> <EN>Current line number exceeds the maximum number of restriction!</EN>
52318  <CH>变量数据超过了最大限制！</CH> <EN>Data in Variable exceeds limitation!</EN> 
52319  <CH>不支持的指令类型！</CH> <EN>Instruction type unsupported!</EN>
52320  <CH>指令参数缺失，添加AddDo指令失败！</CH> <EN>Some instruction parameters are missing, failed to create "AddDo" instruction!</EN>
52321  <CH>指令转译失败！</CH> <EN>Instruction translation failed!</EN>
52322  <CH>指令校验时获取全部指令失败！</CH> <EN>Failed to get all instructions when the instructions are verified!</EN>
52323  <CH>指令MD5校验失败！</CH> <EN>Instructions MD5 check failed!</EN>
52324  <CH>工程名或程序名错误！</CH> <EN>The project name or program name is incorrect!</EN>
52325  <CH>程序为空，或结束行号大于起始行号！</CH> <EN>The program is empty or the starting line number bigger than ending line number!</EN>
52326  <CH>存在特殊字符或不闭合的语句，指令批量操作失败！</CH> <EN>There are special characters or logic instructions not closed, batch operation failed!</EN>
52327  <CH>更新程序文件失败！</CH> <EN>Failed to update program file!</EN>
52328  <CH>无法删除当前加载的程序！</CH> <EN>Current loaded program cannot be deleted!</EN>
52329  <CH>程序指令数量超出最大限制！</CH> <EN>The number of the program instruction exceed the limit!</EN>
52330  <CH>内存插入指令操作失败！</CH> <EN>Failed to insert an instruction into memory failed!</EN>
52331  <CH>指令文件打开错误！</CH> <EN>Failed to open the instruction file of the program!</EN>
52332  <CH>指令行数超出最大限制！</CH> <EN>The number of instruction lines exceeds the maximum limit!</EN>
52333  <CH>指令文件为空！</CH> <EN>The instruction file is empty!</EN>
52334  <CH>指令文件损坏，系统已从备份文件恢复该文件！</CH> <EN>The instruction file is corrupt, system has restored the file from the backup file!</EN>
52335  <CH>单行指令长度超出限制！</CH> <EN>The length of a single line instruction exceeds the limit!</EN>
52336  <CH>获取工程下的程序文件列表失败！</CH> <EN>Failed to get the list of program files under the project!</EN>
52337  <CH>指令粘贴失败，没有被复制或剪切的指令！</CH> <EN>There are no instruction to be copied or cut, failed to paste instruction!</EN>
52338  <CH>没有待粘贴的指令，指令粘贴失败！</CH> <EN>There are no instructions to be pasted!</EN>
52339  <CH>撤销失败！</CH> <EN>Undo operation failed!</EN>
52340  <CH>没有可撤销的操作！</CH> <EN>There are no operation can be undone!</EN>
52341  <CH>撤销文件名错误！</CH> <EN>Undo operation of file name error!</EN>
52342  <CH>触发操作不能为空！</CH> <EN>TrigDo param is empty! Please set it!</EN>
52343  <CH>操作失败！程序文件与指令系统版本不匹配，两者分别为:</CH> <EN>The version of program and inst version is not matching! They are </EN>
52344  <CH>操作的行号超过当前的程序总数，请刷新界面后重试！</CH> <EN>The line number of operation is out of the total number of current program!</EN>
52345  <CH>反向粘贴不能包含IF或WHILE或FOR或SWITCH指令！</CH> <EN>Reverse paste cannot cantain IF or WHILE or FOR or SWITCH!</EN>
52346  <CH>IF逻辑内ELSIF或ELSE不匹配！</CH> <EN>There is no matching ELSIF instruction or ELSE instruction in the IF instruction!</EN>
52347  <CH>FOR指令内没有与之匹配的IF指令！</CH> <EN>There is no matching IF instruction in the FOR instruction!</EN>
52348  <CH>WHILE指令内没有与之匹配的IF指令！</CH> <EN>There is no matching IF instruction in the WHILE instruction!</EN>
52349  <CH>被注释的指令不允许被修改！</CH> <EN>The instructions which are annotated are not be allowed to be modified!</EN>
52350  <CH>拷贝失败！！拷贝指令包括ELSIF或ELSE,ELSIF或ELSE必须在拷贝首行！</CH> <EN>Copy failed! The copy inst contain ELSIF or ELSE,please make sure the ELSIF or ELSE must in copy first row!</EN>

------------------变量操作错误(52501~52700)------------------
52501  <CH>获取所有的变量值域失败！</CH> <EN>Failed to get all variable scopes!</EN>
52502  <CH>变量列表获取失败！</CH> <EN>Failed to get variable list!</EN>
52503  <CH>变量名为空或超过最大长度！</CH> <EN>Variable name is empty or exceeds the maximum length!</EN>
52504  <CH>变量作用域错误！</CH> <EN>Variable scope error!</EN>
52505  <CH>变量名已存在！</CH> <EN>Variable name have existed!</EN>
52506  <CH>变量创建失败！</CH> <EN>Create variable failed!</EN>
52507  <CH>变量删除失败！</CH> <EN>Delete variable failed!</EN>
52508  <CH>变量修改失败！</CH> <EN>Modify variable failed!</EN>
52509  <CH>变量值获取失败！</CH> <EN>Get variable value failed!</EN>
52510  <CH>变量名获取失败！</CH> <EN>Get variable name failed!</EN>
52511  <CH>变量未找到！</CH> <EN>Variable not fount!</EN>
52512  <CH>变量类型不合法！</CH> <EN>Variable type is illegal!</EN>
52513  <CH>示教点坐标获取失败！</CH> <EN>Failed to get teaching point!</EN>
52514  <CH>程序域变量掉电保存属性不允许修改！</CH> <EN>Program domain variables power-down protection attribute does not allow change!</EN>
52515  <CH>安全区域不是全局变量或者变量不存在！</CH> <EN>Safe-area is not a global variable or the variable does not exist!</EN>
52516  <CH>变量新建写入文件失败！</CH> <EN>Variable creation failed to write to file!</EN>
52517  <CH>变量修改写入文件失败！</CH> <EN>Variable modification failed to write to file!</EN>
52518  <CH>变量示教写入文件失败！</CH> <EN>Variable teaching failed to write to file!</EN>
52519  <CH>变量值不合法或超过最大长度！</CH> <EN>The variable value is invalid or the value's length exceeds the limit!</EN>
52520  <CH>PLC变量索引号不能相同！</CH> <EN>The indexes of different PLC variables cannot be the same!</EN>
52521  <CH>PLC变量已达最大数量！</CH> <EN>The number of PLC variable exceeds the maximum number limit!</EN>
52522  <CH>PLC变量正在被其他应用占用！</CH> <EN>PLC variable is using by other applications!</EN>
52523  <CH>变量重命名失败！</CH> <EN>Failed to rename the variable!</EN>
52524  <CH>系统变量不允许修改！</CH> <EN>The system variables cannot be modified!</EN>
52525  <CH>系统变量不允许删除！</CH> <EN>The system variables cannot be deleted!</EN>
52526  <CH>系统变量不允许重命名！</CH> <EN>The system variables cannot be renamed!</EN>
52527  <CH>全局变量内部处理错误！</CH> <EN>Global variable internal processing error!</EN>
52528  <CH>工程变量内部处理错误！</CH> <EN>Project variable internal processing error!</EN>
52529  <CH>程序变量内部处理错误！</CH> <EN>Program variable internal processing error!</EN>
52530  <CH>Run/Kill数据内部处理错误！</CH> <EN>Run/Kill data internal processing error!</EN>
52531  <CH>删除全局变量执行失败！</CH> <EN>Failed to delete the global variable!</EN>
52532  <CH>删除工程变量执行失败！</CH> <EN>Failed to delete the project variable!</EN>
52533  <CH>删除程序变量执行失败！</CH> <EN>Failed to delete the program variable!</EN>
52534  <CH>安全区域变量数据获取失败！</CH> <EN>Failed to get data of the area variable!</EN>
52535  <CH>安全区域变量不存在或者不是全局变量！</CH> <EN>The area variable does not exist or is not a global variable!</EN>
52536  <CH>系统变量不允许删除！</CH> <EN>The system variable is not allowed to be delete!</EN>
52537  <CH>当前加载的工程或程序与变量所在工程或程序不匹配！</CH> <EN>The currently loaded project or program does not match which the variable in!</EN>
52538  <CH>没有找到该用户坐标系变量！</CH> <EN>The user coordinate system variable was not found!</EN>
52539  <CH>没有找到该工具坐标系变量！</CH> <EN>The tool coordinate system variable was not found!</EN>
52540  <CH>该变量在程序指令中已经被引用！</CH> <EN>The variable has been referenced in the program!</EN>
52541  <CH>系统变量不允许创建！</CH> <EN>The system variables cannot be created!</EN>
52542  <CH>变量所在程序与当前打开的程序不一致！</CH> <EN>Variable is not in the current open program!</EN>
52543  <CH>程序变量文本打开失败！</CH> <EN>Failed to open program variable text!</EN>
52544  <CH>禁止对已被设为系统工具坐标系的tool参数进行修改/删除/重命名操作！</CH> <EN>This Variable is being used by the system tool, operate failed!</EN>
52545  <CH>禁止对已被设为系统用户坐标系的user参数进行修改/删除/重命名操作！</CH> <EN>This Variable is being used by the system user, operate failed!</EN>
52546  <CH>禁止对已被设为系统工件负载的payload参数进行修改/删除/重命名操作！</CH> <EN>This Variable is being used by the system payload, operate failed!</EN>
52547  <CH>当前域变量总数达到上限！</CH> <EN>The total number of variables in the current domain has reached the upper limit!</EN>
52548  <CH>变量创建失败,个数超出！</CH> <EN>Create variable failed,number of variables has reached the upper limit!</EN>
52549  <CH>禁止对使用中的extTcp参数进行修改/删除/重命名操作！</CH> <EN>This Variable is being used by the system, operate failed!</EN>
52550  <CH>禁止对使用中的变位机参数进行修改/删除/重命名操作！</CH> <EN>This Variable is being used by the system, operate failed!</EN>
52551  <CH>修改t_x域变量失败！</CH> <EN>Failed to modify t_x domain variable!</EN>
52552  <CH>修改t_xb域变量失败！</CH> <EN>Failed to modify t_xb domain variable!</EN>
52553  <CH>修改临时域变量失败！</CH> <EN>Failed to modify t_tmp domain variable!</EN>
52554  <CH>临时域变量转字符串失败！</CH> <EN>Conversion of t_tmp domain variable to string failed!</EN>
52555  <CH>更新变量文本失败！</CH> <EN>Failed to update variable text!</EN>
52556  <CH>禁止对已设为默认工具坐标系的tool参数进行删除/重命名操作！</CH> <EN>This Variable is being used by the default tool, operate failed!</EN>
52557  <CH>禁止对已设为默认用户坐标系的user参数进行删除/重命名操作！</CH> <EN>This Variable is being used by the default user, operate failed!</EN>
52558  <CH>禁止对已设为默认工件负载的payload参数进行删除/重命名操作！</CH> <EN>This Variable is being used by the default payload, operate failed!</EN>
52559  <CH>此区域变量处于激活状态，请冻结区域后再删除此变量！</CH> <EN>Failed to delete the variable because the variable is activated,please deactivate the variable then delete the variable!</EN>
52560  <CH>禁止对已被设为动坐标系的syncoord参数进行修改/删除/重命名操作！</CH> <EN>This Variable is being used by the system synccoord, operate failed!</EN>
52561  <CH>多边体区域变量数据获取失败！</CH> <EN>Failed to get data of the polyhedron area variable!</EN>
52562  <CH>多边体区域变量不存在或者不是全局变量！</CH> <EN>The polyhedron area variable does not exist or is not a global variable!</EN>
52563  <CH>全局工程中不可创建/使用/查看工程变量 ！</CH> <EN>It is forbid to use project var in Global program!</EN>
52564  <CH>获取IO值失败！</CH> <EN>Get IO value failed!</EN>
52565  <CH>保存的点位数组元素太多，可删除一些数组后尝试！</CH> <EN>Too many saved POS array, please delete some arrays and try!</EN>
52566  <CH>点位数组个数已达最大值！</CH> <EN>The number of POS arrays has reached the maximum!</EN>
52567  <CH>获取显示变量域失败！</CH> <EN>Failed to get displaying var scope!</EN>
52568  <CH>设置显示变量域失败！</CH> <EN>Failed to set displaying var scope!</EN>
52569  <CH>更新变量文本冲突！</CH> <EN>update variable text conflicted!</EN>
52570  <CH>校验位置变量的变量注释失败！</CH> <EN>Failed to check Pos var note!</EN>
52571  <CH>位置数组变量不支持复制粘贴！</CH> <EN>Pos Array Var not support Copy and Paste!</EN>
52572  <CH>变量拷贝失败！变量名已存在</CH> <EN>Copy Var Failed! VarName Exited!</EN>
52573  <CH>变量拷贝失败! 变量拷贝不能跨域或工程</CH> <EN>Copy Var Failed! Cross Scope or Project not Support</EN>

------------------其他功能操作错误(52701~53000)------------------
52701  <CH>“停止”命令写入到解析器或者内核中失败！</CH> <EN>The stop command failed to be written to parser or motion kernel!</EN> 
52702  <CH>启动解析器或者内核失败！</CH> <EN>Failed to start parser or motion kernel!</EN>
52703  <CH>程序指针设置失败！</CH> <EN>Set point cursor failed!</EN>
52704  <CH>程序模式设置失败！</CH> <EN>Set program mode failed!</EN>
52705  <CH>工具坐标系变量获取失败！</CH> <EN>Failed to get the tool coordinate system variable!</EN>
52706  <CH>工具坐标系设置失败！</CH> <EN>Failed to set the tool coordinate system!</EN>
52707  <CH>用户坐标系获取失败！</CH> <EN>Failed to get the user coordinate system!</EN>
52708  <CH>用户坐标系设置失败！</CH> <EN>Failed to set the user coordinate system!</EN>
52709  <CH>程序没有加载！</CH> <EN>The program has not been loaded!</EN>
52710  <CH>PLC变量属性有变更，更改将在重启后生效！</CH> <EN>The "PLC" variable attributes have changed, the changes will take effect after restart!</EN>
52711  <CH>当前程序仅为打开状态，不允许启动！</CH> <EN>Current program is only open and not allowed to start!</EN>
52712  <CH>程序不处于停止或暂停状态，启动程序失败！</CH> <EN>The program is not in pause or stop state, failed to start the program!</EN>
52713  <CH>启动运动内核失败，无法启动程序！</CH> <EN>Failed to start the motion kernel, cannot start the program!</EN>
52714  <CH>停止指令下发失败！</CH> <EN>The stop command failed to be delivered!</EN>
52715  <CH>当前无工程加载，或打开的程序与加载程序不匹配！</CH> <EN>There is no project loaded, or the program opened does not match the loaded one!</EN>
52716  <CH>暂停程序失败！</CH> <EN>Failed to pause the program!</EN>
52717  <CH>恢复启动内核失败，无法启动程序！</CH> <EN>Failed to restart the motion kernel ,cannot start the program!</EN>
52718  <CH>恢复指令解析失败，无法启动程序！</CH> <EN>Recovery parsing instructions failed, cannot start the program!</EN>
52719  <CH>启动指令解析失败，无法启动程序！</CH> <EN>Failed to start parsing instruction, cannot start the program!</EN>
52720  <CH>“停止”命令写入解析器失败！</CH> <EN>The stop command failed to be written to the parser!</EN>
52721  <CH>“暂停”命令写入解析器失败！</CH> <EN>The pause command failed to be written to the parser!</EN>
52722  <CH>“暂停”命令写入内核失败！</CH> <EN>The pause command failed to be written to the kernel!</EN>
52723  <CH>激活区域命令写入解析器失败！</CH> <EN>Activating area command failed to be written to parser!</EN>
52724  <CH>冻结区域命令写入内核失败！</CH> <EN>Freezing area command failed to be written to motion kernel!</EN>
52725  <CH>此次工具参数标定错误，请重新标定！</CH> <EN>Failed to calculate TOOL param, please calculate it again!</EN>
52726  <CH>此次用户坐标系标定错误，请重新标定！</CH> <EN>Failed to calculate UserCoord param, please calculate it again!</EN>
52727  <CH>获取暂停点与当前点是否一致的状态失败！</CH> <EN>Failed to get pause point state!</EN>
52728  <CH>请切换到手动模式，再设置为倒序执行！</CH> <EN>Please set Back_Step in Teach mode!</EN>
52729  <CH>设置的变量类型不合法！</CH> <EN>Please ensure the default param type is legal!</EN>
52730  <CH>一点到达只支持手动模式！</CH> <EN>The function which system can mov to targetPos only support jog mode!</EN>
52731  <CH>机器人未完全停止状态，不响应GO操作，请增大抬起与按下的时间间隔！</CH> <EN>The robot is not completely stopped and does not respond to GO operation.Please increase the time interval between lifting and pressing!</EN>
52732  <CH>从文件中刷新全局变量失败！</CH> <EN>Failed to refresh the global var from file!</EN>
52733  <CH>因系统切到停止状态而导致本次中断被忽略！</CH> <EN>The interrupt was ignored because the system switched to the stop state!</EN>  
52734  <CH>暂停复位命令写入内核失败！</CH> <EN>The pause reset command failed to be written to the kernel!</EN>
52735  <CH>系统暂停信号使能，禁止启动程序！</CH> <EN>System Stop Singal is enabled, forbid to start program!</EN>
52736  <CH>程序指针信息为空，无法恢复程序指针行号！</CH> <EN>ProgPC Info is empty, failed to recover ProgPC!</EN>
52737  <CH>因点位操作指令对内存的操作还未完成，系统处于锁定状态，待完成后再重试!</CH> <EN>System is locked for position operation not finished, please try later!</EN>
52738  <CH>虚拟安全门信号打开，禁止启动程序！</CH> <EN>Virtual SafetyDoor Singal disabled, forbid to start program!</EN>
52739  <CH>MultiProg程序执行异常！</CH> <EN>The multiprog program executed fault!</EN>
52740  <CH>提速参数自调节过程中，请勿操作...</CH> <EN>ADP auto tuning...</EN>
52741  <CH>PID自调节过程中，请勿操作</CH> <EN>PID auto tuning...,please do other things</EN>
52742  <CH>提速参数自调节结束，请回到自动调节设置界面选择是否保存参数</CH> <EN>ADP auto tune is finished,please save it...</EN>
52743  <CH>PID自调节已完成</CH> <EN>PID auto tune is finished</EN>
52744  <CH>安全门打开，禁止启动程序！</CH> <EN>Safety door signal enabled, forbid to start!</EN>
52745  <CH>点位重合，导轨轴标定失败！</CH> <EN>Position coincidence, calibration rail shaft filed!</EN>
52746  <CH>参数保存成功!</CH> <EN>Successed to save the data!</EN>
52747  <CH>参数保存失败!</CH> <EN>Failed to save the data!</EN>
52748  <CH>PID自调节已完成1次!</CH> <EN>PID auto tune has been completed once!</EN>
52749  <CH>PID自调节超出调节次数范围!</CH> <EN>PID auto tune exceeds the range of the tuning frequency!</EN>
52750  <CH>主从机器人处于协同模式，禁止切换工具坐标系！</CH> <EN>Master robot and slave robot are in the synchronous mode, forbid to set the tool coordinate system!</EN>
52751  <CH>本地自动备份进行中!</CH> <EN>Local auto backup is running!</EN>
52752  <CH>远程手动备份进行中!</CH> <EN>Remote manual backup is running!</EN>
52753  <CH>中断功能不支持单步模式!</CH> <EN>Interrupt is forbid to execute when system is step mode!</EN>

------ER_ModbusTcpIp操作错误[53001,53199]--------
53001  <CH>modbustcp 通讯中断！</CH> <EN>Modbustcp communication is interrupted!</EN>
53002  <CH>网络连接断开超过时限，系统加密！</CH> <EN>Network disconnected beyond time limit, system encryption!</EN>
53003  <CH>公网下发命令，系统加密！</CH> <EN>Public network issuing commands, system encryption!</EN>
53004  <CH>公网下发命令, 功能使能！</CH><EN>Public network issuing commands, open the function!</EN>
53005  <CH>公网下发命令，永久解锁！</CH> <EN>Public network issuing commands, permanently unlock!</EN>
53008  <CH>示教器设置Modbus寄存器失败！</CH> <EN>Teaching-Programming pendant write ModubsTcp register failed！</EN>
53009  <CH>示教器读取Modbus寄存器失败！</CH> <EN>Teaching-Programming pendant read ModubsTcp register failed！</EN>
53011  <CH>modbustcp 通讯中断，客户端主动断开，服务器接收报文失败！</CH> <EN>Modbustcp communication is interrupted, server failed to receive message because the client is actively disconnect!</EN>
53012  <CH>modbustcp 通讯中断，客户端主动断开，服务器发送报文失败！</CH> <EN>Modbustcp communication is interrupted, server failed to receive message because the client is actively disconnect!</EN>
53013  <CH>modbustcp 通讯中断，服务器接收报文超时！</CH> <EN>Modbustcp communication is interrupted, server received message time out!</EN>

53180  <CH>已超过保养周期或日期，建议及时保养！</CH> <EN>It has exceeded the maintenance period or date, please maintain it in time!</EN>
53181  <CH>当前机型与保养机型不匹配，已重置保养信息！</CH> <EN>The current robot type does not match the maintenance robot type,please reset the maintenance information !</EN>
53182  <CH>编码器电池使用已超过一年，请及时维护检查！</CH> <EN>The battery has been used for more than half a year. Please maintain and check it in time!</EN>
53183  <CH>编码器电池电压过低，请及时维护检查！</CH> <EN>The battery has been in undervotage. Please maintain and check it in time!</EN>

------ER_CfgManager操作错误[53501,53599]--------
53502  <CH>加载eni.xml文件失败 </CH> <EN>Failed to load eni.xml file!</EN>
53503  <CH>加载slaveinfo.xml文件失败 </CH> <EN>Failed to load slaveinfo.xml file!</EN>
53504  <CH>保存文件失败</CH> <EN>Failed to save file!</EN>
53505  <CH>备份文件失败</CH> <EN>Failed to backup file!</EN>
53506  <CH>设备类型输入错误</CH> <EN>Failed to identify the input device type!</EN>
53507  <CH>操作文件错误</CH> <EN>Failed to modify file!</EN>
53508  <CH>打开文件错误</CH> <EN>Failed to open file!</EN>
53509  <CH>该电柜不支持操作IO</CH> <EN>Failed to modify io device!</EN>
53510  <CH>添加伺服数量超限</CH> <EN>Add servo quantity overrun!</EN>
53511  <CH>添加IO数量超限</CH> <EN>Add io quantity overrun!</EN>
53512  <CH>添加编码器数量超限</CH> <EN>Add encoder quantity overrun!</EN>
53513  <CH>删除伺服失败，拓扑最后一个伺服不可删除</CH> <EN>Failed to delete servo,the last servo is can not be deleted!</EN>
53514  <CH>删除IO失败，拓扑最后一个IO不可删除</CH> <EN>Failed to delete IO,the last IO is can not be deleted!</EN>
53515  <CH>删除编码器失败，拓扑最后一个编码器不可删除或不存在</CH> <EN>Failed to delete encoder,the last encoder is can not be deleted or non-exist!</EN>
53516  <CH>不支持该配置操作，当前电柜中IO端子不被识别或不存在</CH> <EN>The configuration operation is not supported,the current IO of the cabinet is not recognized or non-existent!</EN>
53517  <CH>不支持该配置操作，当前电柜中存在未识别模块</CH> <EN>The configuration operation is not supported,the module in cabinet can not be recognized!</EN>
53518  <CH>不支持该配置操作，C1或S2电柜添加IO数量超限</CH> <EN>The configuration operation is not supported,add io quantity overrun in C1 or S2 cabinet!</EN>

------ER_CfgManager EIP操作错误[53600,53699]--------
53602  <CH>Eip连接失败，目标设备离线！</CH> <EN>Connection establishment failed. Target is offline!</EN>
53603  <CH>Eip连接失败，目标设备在线但无应答！</CH> <EN>Connection establishment failed. Target is online but did not respond to the connection request!</EN>
53604  <CH>Eip连接失败，目标设备应答错误！</CH> <EN>Connection establishment failed. Target responded with an error response!</EN>
53605  <CH>Eip当前连接超时！</CH> <EN>Active connection timed out!</EN>
53606  <CH>Eip连接被本地或者远程关闭！</CH> <EN>Connection closed based either on the local or remote request!</EN>
53607  <CH>Class1连接中运行标识已被更改！</CH> <EN>Run Idle flag changed for the incoming Class1 connection!</EN>
53608  <CH>收到指定实例发送的数据！</CH> <EN>New data received for the specified assembly instance!</EN>
53609  <CH>收到指定成员发送的数据！</CH> <EN>New data received for the specified assembly member!</EN>
53610  <CH>Eip主站收到新的输入数据！</CH> <EN>New input data received for the scanner connection!</EN>
53611  <CH>收到新连接建立请求，正在识别！</CH> <EN>New connection received!</EN>
53612  <CH>连接已成功重新配置！</CH> <EN>Connection successfully reconfigured (successful NULL Forward Open)!</EN>
53613  <CH>正在使用冗余连接的数据！</CH> <EN>Redundant connection's data now being used!</EN>
53614  <CH>Class1连接的准备标识位已被更改！</CH> <EN>Ready Ownership Output value changed for the incoming Class1 connection!</EN>
53615  <CH>冗余连接不存在主站！</CH> <EN>No redundant owner "master" for associated redundant connections!</EN>
53616  <CH>连接失败，(D)TLS握手无法完成！</CH> <EN>Connection establishment failed. (D)TLS handshake could not be completed!</EN>
53617  <CH>创建动态实例成功！</CH> <EN>A dynamic assembly isntance has been created!</EN>
53618  <CH>删除动态实例成功！</CH> <EN>A dynamic assembly isntance has been deleted!</EN>
53619  <CH>收到对先前发送的请求的响应！</CH> <EN>Response received on the previously sent request!</EN>
53620  <CH>无法连接到请求中指定的路径！</CH> <EN>Unable to connect to the path specified in the request!</EN>
53621  <CH>请求超时，从未收到响应！</CH> <EN>Request timed out - response never received!</EN>
53622  <CH>已收到为客户端对象注册的请求！</CH> <EN>Request received for the object registered for the client application processing!</EN>
53623  <CH>检测到Class3已有连接接收到响应报文异常！</CH> <EN>Detected change in the response received on the previously established Class3 connection!</EN>
53624  <CH>收到PCCC对象请求！</CH> <EN>Request received for the PCCC object!</EN>
53625  <CH>接收到针对先前发送的标识报文广播的响应！</CH> <EN>Response received for previously send List Identity broadcast!</EN>
53626  <CH>收到识别重置请求！</CH> <EN>Identity Reset was received!</EN>
53627  <CH>收到空的路径请求！</CH> <EN>Request received from a path targeted at the backplane!</EN>
53628  <CH>网络状态已更改！</CH> <EN>Network LED status has changed!</EN>
53629  <CH>网络配置对象更改完成！</CH> <EN>Connection Configuration Object changes completed!</EN>
53630  <CH>已连接到指定设备，但是无法完成(D)TLS握手！</CH> <EN>Connected to path specified, but (D)TLS handshake could not be completed!</EN>
53631  <CH>可分配内存不足！</CH> <EN>Out of available memory!</EN>
53632  <CH>无法初始化Windows套接库！</CH> <EN>Unable to initialize Windows Sockets library!</EN>
53633  <CH>主站无法启动线程！</CH> <EN>Unable to start a thread!</EN>
53634  <CH>使用Windows套接字库函数时收到错误！</CH> <EN>Received an error when using Windows Sockets library functions!</EN>
53635  <CH>套接字设置非阻塞模式时失败！</CH> <EN>Error encountered when setting the socket to non-blocking mode!</EN>
53636  <CH>创建信号量时失败！</CH> <EN>Error encountered when failing to create semaphore!</EN>
53637  <CH>客户端数量超出支持范围！</CH> <EN>Number of network peers exceeded MAX_SESSIONS constant!</EN>
53638  <CH>连接数超出最大限制！</CH> <EN>Number of connections exceeded MAX_CONNECTIONS limit!</EN>
53639  <CH>未完成的对象请求超出最大请求数范围！</CH> <EN> Number of outstanding object requests exceeded MAX_REQUESTS limit!</EN>
53640  <CH>未完成的多个服务请求数超出范围！</CH> <EN>Number of outstanding multiple service requests exceeded MAX_REQUEST_GROUPS limit!</EN>
53641  <CH>尝试获取对象响应时指定了未知索引！</CH> <EN>Unknown index specified when trying to get an object response!</EN>
53642  <CH>未收到对发送的请求的响应！</CH> <EN>The response on the request sent has not been received yet!</EN>
53643  <CH>指定的实例没有可用的活动连接！</CH> <EN>There is no active connection available for the specified instance!</EN>
53644  <CH>主机地址未声明！</CH> <EN>No host addresses have been claimed yet!</EN>
53645  <CH>主机地址无效或者未声明！</CH> <EN>Invalid or not yet claimed host address specified in the function call!</EN>
53646  <CH>指定的实例连接号无效！</CH> <EN>Invalid assembly instance specified!</EN>
53647  <CH>指定实例连接号已存在！</CH> <EN>Multiple claims of the assembly instance!</EN>
53648  <CH>配置的实例连接数量超出最大限制！</CH> <EN>Number of configured assemblies would exceed MAX_ASSEMBLIES limit !</EN>
53649  <CH>配置的偏移地址缓冲区重叠！</CH> <EN>Specified offset and size combination overlap with one of the already configured assemblies!</EN>
53650  <CH>偏移地址缓冲区已满！</CH> <EN>No unallocated buffer space left in the assembly buffer!</EN>
53651  <CH>指定实例连接配置数据交互大小超出限制！</CH> <EN>Specified assembly size exceed maximum allowed size of MAX_ASSEMBLY_SIZE!</EN>
53652  <CH>指定实例连接尚未配置！</CH> <EN>Specified assembly instance has not been configured!</EN>
53653  <CH>指定实例连接号已被使用！</CH> <EN>Specified assembly instance is being used by one of the active or pending connections!</EN>
53654  <CH>指定成员大小将导致成员列表超出限制！</CH> <EN>Specified member size would cause the total member list size exceed assembly instance size!</EN>
53655  <CH>配置成员数目超出限制！</CH> <EN>Number of configured members for the corresponding assembly would exceed MAX_MEMBERS limit!</EN>
53656  <CH>多个主站实例声明！</CH> <EN>Multiple claims of the assembly instance member!</EN>
53657  <CH>指定的标识实例无效！</CH> <EN>Invalid identity instance specified!</EN>
53658  <CH>空的转发打开请求，而现有请求正在处理中！</CH> <EN>NULL Forward Open request made while existing one is still being processed!</EN>
53659  <CH>打开连接函数接口失效！</CH> <EN>Invalid value in EtIPConnectionConfig when calling OpenConnection function !</EN>
53660  <CH>显式消息数据区过大！</CH> <EN>Message data size for class3 connection is too big!</EN>
53661  <CH>没有为数据分配足够的数据缓冲区！</CH> <EN>Not enough buffer size was allocated for a STRINGI <-> buffer conversion!</EN>
53662  <CH>指定连接的输入/输出过大！</CH> <EN>Connection size specified is too large for the connection!</EN>
53663  <CH>尝试修改已有连接的输入/输出字节数！</CH> <EN>Variable sized connection operation attempted on fixed sized connection!</EN>
53664  <CH>正在尝试在未应答的显式消息上继续发送请求！</CH> <EN>Attempting to send an explicit message on a class3 connection that already has an outstanding request!</EN>
53665  <CH>Eip连接失败，发送无连接信息请求！</CH> <EN>EIP connection failed,EIP_NO_ORIGINATE_UCMM is set and application is trying to send a UCMM!</EN>
53666  <CH>Eip连接失败，发送显式消息请求未应答！</CH> <EN>EIP connection failed,Send Exp Msg and non-response!</EN>
53667  <CH>Eip连接失败，Adapter连接IP地址已存在，不允许重复添加！</CH> <EN>EIP connection failed,Adapter IP Address has existed!</EN>
53668  <CH>Eip连接失败，Adapter的IP地址与LAN4IP重复！</CH> <EN>EIP connection failed,Adapter IP Address same as LAN4 IP Address!</EN>

------ER_ERBD操作错误[54001,54399]--------
54001  <CH>模型辨识模块，与内核通讯失败！</CH> <EN>Failed to communicate with Kernel!</EN>
54002  <CH>模型辨识模块，创建与子模块的通讯失败！</CH> <EN>Failed to create communication with submodule!</EN>
54003  <CH>模型辨识模块，与子模块的通讯失败！</CH> <EN>Failed to communicate with submodule!</EN>
54004  <CH>模型辨识模块，校验与子模块的参数配置，当前不支持该机型类型！</CH> <EN>This type of robot is not supported!</EN>
54005  <CH>模型辨识模块，校验与子模块的参数配置，本体轴数设置有误！</CH> <EN>The number of robot axes is wrong!</EN>
54006  <CH>模型辨识模块，校验与子模块的参数配置，轴速比参数设置有误！</CH> <EN>Joint transmission ratio is set incorrectly!</EN>
54099  <CH>模型辨识过程中，请等待数分钟...</CH> <EN>Please waiting for a few minutes...</EN>
54101  <CH>模型辨识模块，通讯连接失败！</CH> <EN>Communication connection failure!</EN>
54102  <CH>模型辨识模块，不支持当前机型！</CH> <EN>The type of robot is not supported!</EN>
54103  <CH>模型辨识模块，关节参数校验有误！</CH> <EN>The joint parameters are incorrectly set!</EN>
54104  <CH>模型辨识模块，腕部关节参数校验有误！</CH> <EN>Wrist joint parameters are incorrectly set!</EN>
54105  <CH>模型辨识模块，校验初始化状态失败！</CH> <EN>Failed to verify the initialization status!</EN>
54106  <CH>模型辨识模块，校验机型配置参数失败！</CH> <EN>Failed to verify the robot configuration!</EN>
54107  <CH>模型辨识模块，校验机型对象失败！</CH> <EN>Failed to verify the object of robot!</EN>
54108  <CH>模型辨识模块，子模块通讯连接失败！</CH> <EN>Communication connection of the submodule fails!</EN>
54109  <CH>模型辨识模块，校验子模块初始化失败！</CH> <EN>Failed to verify submodule initialization!</EN>
54110  <CH>模型辨识模块，模型类型配置有误！</CH> <EN>The type of robot is wrong!</EN>
54111  <CH>模型辨识模块，负载/工具辨识时，缺少本体模型！</CH> <EN>The robot model is missing in payload/tool identification!</EN>
54112  <CH>模型辨识模块，子模块通讯建立失败！</CH> <EN>Failed to create submodule communication!</EN>
54113  <CH>模型辨识模块，子模块通讯数据为空！</CH> <EN>The communication data of the submodule is empty!</EN>
54114  <CH>模型辨识模块，更新模型文件失败！</CH> <EN>Failed to update the model file!</EN>
54115  <CH>模型辨识模块，清理缓存失败！</CH> <EN>Failed to clear cache!</EN>
54116  <CH>模型辨识模块，清理临时文件！</CH> <EN>Failed to clear temporary files!</EN>
54117  <CH>模型辨识模块，子模块建立失败！</CH> <EN>Failed to create the submodule!</EN>
54118  <CH>模型辨识模块异常,请重启后再使用该功能！</CH> <EN>Model identification process is interrupted! Please restart system!</EN>
54119  <CH>模型辨识模块，负载/工具结果数据误差较大，不建议采用！</CH> <EN>The error of payload/tool result is too large, so it's not recommended!</EN>
54120  <CH>模型辨识模块，未找到Robot辨识数据！</CH> <EN>Robot-data is not found!</EN>
54121  <CH>模型辨识模块，Robot辨识数据量太少！</CH> <EN>Robot-data is too little!</EN>
54122  <CH>模型辨识模块，Robot辨识数据量过多！</CH> <EN>Robot-data is too much!</EN>
54123  <CH>模型辨识模块，未找到WithLoad辨识数据！</CH> <EN>WithLoad-data is not found!</EN>
54124  <CH>模型辨识模块，WithLoad辨识数据量太少！</CH> <EN>WithLoad-data is too little!</EN>
54125  <CH>模型辨识模块，WithLoad辨识数据量过多！</CH> <EN>WithLoad-data is too much!</EN>
54126  <CH>模型辨识模块，未找到ValidData辨识数据！</CH> <EN>ValidData-data is not found!</EN>
54127  <CH>模型辨识模块，ValidData辨识数据量太少！</CH> <EN>ValidData-data is too little!</EN>
54128  <CH>模型辨识模块，ValidData辨识数据量过多！</CH> <EN>ValidData-data is too much!</EN>
54130  <CH>模型辨识模块，当前剩余存储空间过小！</CH> <EN>Remaining storage space is too small!</EN>  
54170  <CH>模型辨识模块，机型对象中参数信息有误！</CH> <EN>Parameters in the model of object are incorrect!</EN>
54171  <CH>模型辨识模块，杆件参数信息有误！</CH> <EN>The link parameter information is incorrect!</EN>
54172  <CH>模型辨识模块，轴电机额定转矩参数信息有误！</CH> <EN>Motor rated torque parameter information is incorrect!</EN>
54173  <CH>模型辨识模块，关节运动当量参数信息有误！</CH> <EN>The information of joint motion equivalent parameter is incorrect!</EN>
54174  <CH>模型辨识模块，关节速比或耦合参数信息有误！</CH> <EN>The parameter information of joint transmission ratio is incorrect!</EN>
54175  <CH>模型辨识模块，指令配置参数信息有误！</CH> <EN>The command setting information is incorrect!</EN>
54176  <CH>模型辨识模块，本体安装类型信息有误！</CH> <EN>The method of mount information is incorrect!</EN>
54177  <CH>模型辨识模块，附加机构配置信息有误！</CH> <EN>The additional organization information is incorrect!</EN>
54178  <CH>模型辨识模块，附加信息有误！</CH> <EN>The additional information is incorrect!</EN>
54300  <CH>模型辨识模块，配置参数异常导致模块运行中断！</CH> <EN>The module is interrupted because the condition parameters are abnormal!</EN>
54301  <CH>模型辨识模块，计算过程中发生暂停，系统转入停止！</CH> <EN>System will switch to stop status because pause happen during calculate erbd!</EN>


------SYS_START系统启动失败信息[55001,55499]]--------
55001  <CH>Log模块加载组件失败！</CH> <EN>ER_LOG failed to load components!</EN>
55002  <CH>Manager模块加载组件失败！</CH> <EN>ER_Manager failed to load components!</EN>
55003  <CH>MovManager模块加载组件失败！</CH> <EN>ER_MovManager failed to load components!</EN>
55004  <CH>Instruction模块加载组件失败！</CH> <EN>ER_Instruction failed to load components!</EN>
55005  <CH>Linker模块加载组件失败！</CH> <EN>ER_Linker failed to load components!</EN>
55006  <CH>PlcManager模块加载组件失败！</CH> <EN>ER_PlcManager failed to load components!</EN>
55007  <CH>Cam2D3D模块加载组件失败！</CH> <EN>ER_Cam2D3D failed to load components!</EN>
55008  <CH>ModbusTCP模块加载组件失败！</CH> <EN>ER_ModbusTCP failed to load components!</EN>
55009  <CH>CommIFace模块加载组件失败！</CH> <EN>ER_CommIFace failed to load components!</EN>
55010  <CH>CfgManager模块加载组件失败！</CH> <EN>ER_CfgManager failed to load components!</EN>
55011  <CH>OPCUA模块加载组件失败！</CH> <EN>ER_OPCUA failed to load components!</EN>

-----共享内存类型错误[55021,55023]]--------
55021  <CH>创建EIP通信的共享缓存失败！</CH> <EN> Failed to create EIP Share Memory  !</EN>
55022  <CH>OPCUA创建共享缓存失败！</CH> <EN>ER_OPCUA failed to create Share Memory  !</EN>
55023  <CH>初始化与RTMC交互的共享缓存失败！</CH> <EN>ER_MovManager failed to init Share Memory  !</EN>

-----进程启动失败类错误[55031,55033]]--------
55031  <CH>初始化RtProgram失败！</CH> <EN>Start RtProgram failed!</EN>
55032  <CH>PRT启动失败！</CH> <EN>Start PRT failed!</EN>
55033  <CH>OPCUA启动失败！</CH> <EN>Start OPCUA failed!</EN>

-----线程创建失败类[55041]]--------
55041  <CH>UPS创建线程启动失败！</CH> <EN>Create UPS thread failed!</EN>
55042  <CH>Cam2D3D创建线程启动失败！</CH> <EN>Create UPS thread failed!</EN>

-----文件加载类[55051]]--------
55051  <CH>Instruction初始化配置文件失败！</CH> <EN>ER_Instruction init configure files failed!</EN>
55052  <CH>数据文件加载失败！</CH> <EN>Load data  file failed!</EN>
55053  <CH>global.erd文件加载失败！</CH> <EN>Load project file failed!</EN>
55054  <CH>数学库加载失败！</CH> <EN>Load Math library failed!</EN>
55055  <CH>string库加载失败！</CH> <EN>Load String library failed!</EN>
55056  <CH>APOS&CPOS数组加载失败！</CH> <EN>Load APOS&CPOS array failed!</EN>
55057  <CH>全局变量数据加载失败！</CH> <EN>Load Global data failed!</EN>
55058  <CH>T_gb表加载失败！</CH> <EN>Load T_gb failed!</EN>
55059  <CH>打开系统数据文件失败！</CH> <EN>Open system data file failed!</EN>
55060  <CH>系统IO加载失败！</CH> <EN>Load system IO failed!</EN>
55061  <CH>system.erd文件加载失败！</CH> <EN>Load system data failed!</EN>
55062  <CH>component文件加载失败！</CH> <EN>Load component file failed!</EN>
55063  <CH>commIFace读取系统参数失败！</CH> <EN>CommIFace read system parameter failed!</EN>

-----外部连接类[55071]]--------
55071  <CH>ModbusTCP 初始化失败！</CH> <EN>ER_ModbusTCP init failed!</EN>

------创建信号量[55080]]--------
55080  <CH>创建信号量失败！</CH> <EN>Create semaphore failed!</EN>
