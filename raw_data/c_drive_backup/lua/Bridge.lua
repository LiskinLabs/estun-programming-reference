local rIface = require("robotface_shm")
local modbus_ = require("CallModbus")

----------------逻辑编辑区-----------------------
--函数例1  定义一个接口，在下方
local function testfunc()
	print(readBusRegister(0))
	writeRWRegister(1,getGlobleSpeed())
end


while true do
	local ret, linkstateValue = getstate()
	--print(ret, linkstateValue)
	---------------连接成功后------------------
		if 1 == linkstateValue then
			----------连接上modbus后执行逻辑区封装的函数-----------
			testfunc()
		
		end
	sleepfun(10)
end
