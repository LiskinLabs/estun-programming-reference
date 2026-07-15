require "Modbus4Lua"

 -------------初始化modbus函数-----------
 ---参数1：控制器IP
 ---参数2：modbus服务器的端口号
 ---参数3：modbus建立的地址长度
modbus.initModbus("192.168.6.63", 502, 2000)              

function linkstate()
	local linkstateValue = modbus.getlinkstate()
	if -1 == linkstateValue then
		return -1
	end
	return 0, linkstateValue
end

function getstate()
	return linkstate()
end

---------------------------------------------------------------------
---------------------------- 读部分 ---------------------------------
---------------------------------------------------------------------
-----------------读取 03中可读可写的地址数据-----------
--参数1：对应40001开始的第几个地址   如 index = 0 对应40001 
--失败返回：-1
--成功返回：0和读取的值
function readBusRegister(index)

	local valueRegister = modbus.readRegister(index)
	if -1 == valueRegister then
		return -1
	end
	return 0, valueRegister

end
----------------读取01中可写可读的地址数据------------
--参数1：对应00001开始的第几个地址   如 index = 0 对应00001 
--失败返回：-1
--成功返回：0和读取的值
function readBitRegister(index)
	local valueRegister = modbus.readBit(index)
	if -1 == valueRegister then
		return -1
	end
	return 0, valueRegister
end
--------------读取03中可读可写两个地址数据--------------
--参数1：对应40001开始的第几个地址   
--参数2：对应40001开始的第几个地址   如 index1=0 ，index2=1 对应40001-40002 index只能是偶数 两个参数必须是连续的两个地址 
--失败返回：-1
--成功返回：0和读取的值
function readRWFloatRegister(index1, index2)
	local valueRegister = modbus.readFloat(index1,index2)
	if -1 == valueRegister then
		return -1
	end
	return 0, valueRegister
end


---------------------------------------------------------------------
---------------------------- 写部分 ---------------------------------
---------------------------------------------------------------------
----写 03的可读可写数据------------------
--参数1：对应40001开始的第几个地址
--参数2：是写到modbus地址中的整型数
--失败返回：-1
--成功返回：0
function writeRWRegister(index, value)

	local valueRegister = modbus.writeRegister(index, value)
	if -1 == valueRegister then
		return -1
	end
	return 0

end
----写 03两个地址的可读可写数据
--参数1：对应40001开始的第几个地址
--参数2：对应40001开始的第几个地址       如 index1=0 ，index2=1 对应40001-40002 index只能是偶数 两个参数必须是连续的两个地址 
--参数3：是写到modbus地址中的浮点型数
--失败返回：-1
--成功返回：0
function writeRWFloatRegister(index1, index2, value)

	local valueRegister = modbus.writeFloatRegister(index1, index2, value)
	if -1 == valueRegister then
		return -1
	end
	return 0

end
----写 04的只读数据
--参数1：对应30001开始的第几个地址
--参数2：是写到modbus地址中的整型数
--失败返回：-1
--成功返回：0
function writeBusRegister(index, value)

	local valueRegister = modbus.writeInputRegister(index, value)
	if -1 == valueRegister then
		return -1
	end
	return 0

end
----------写02的只读数据
--参数1：对应10001开始的第几个地址
--参数2：是写到modbus地址中的位
--失败返回：-1
--成功返回：0
function writeBitValue(index,value)
	local valueBit = modbus.writeBit(index, value)
	if -1 == valueBit then
		return -1
	end
	return 0
end
------写01中的读写数据
--参数1：对应00001开始的第几个地址
--参数2：是写到modbus地址中的位
--失败返回：-1
--成功返回：0
function writeRWBitValue(index,value)
	local valueBit = modbus.WriteRWBit(index, value)
	if -1 == valueBit then
		return -1
	end
	return 0
end

----写两个地址到 04的只读数据-------从寄存器的奇数位开始，即从程序中的偶数位开始，如 2、3 对应寄存器30003、 30004
--参数1：对应30001开始的第几个地址
--参数2：对应30001开始的第几个地址       如 index1=0 ，index2=1 对应30001-30002 index只能是偶数 两个参数必须是连续的两个地址 
--参数3：是写到modbus地址中的浮点型数
--失败返回：-1
--成功返回：0
function writeFloatValue(index1,index2,value)
	local valuefloat = modbus.writeInputFloat(index1,index2,value)
	if -1 == valuefloat then
		return -1
	end
	return 0
end


-- 延时
-- params: value 单位毫秒
function ER_Sleep(ms)
	return modbus.sleepMs(ms)
end
