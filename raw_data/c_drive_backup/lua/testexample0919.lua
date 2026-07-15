require("robotface_shm")


while 1 do

	cmdIndex = tonumber(io.read())

	if cmdIndex == 1 then
		print("GetCurJPos:",GetCurJPos())

	elseif cmdIndex == 2 then

        print("GetCurWPos:",GetCurWPos())

	elseif cmdIndex == 3 then
        print("readVar:",readVar("INT0",1,2))

	elseif cmdIndex == 4 then
		print("setVar:",setVar("INT0",1,2,200))

	elseif cmdIndex == 5 then
        print("SetPointPos:",SetPointPos({"P1",0,2,{1.1,2.2,3.3,4.4,5.5,6.6}}))

	elseif cmdIndex == 6 then
         print("SetMultiPointPos:",SetMultiPointPos({{"P2",0,2,{10.1,20.1,30.1,40.1,50.1,60.1}},
				{"P3",0,2,{10.1,20.1,30.1,40.1,50.1,60.10}},
				{"P4",0,2,{10.1,20.1,30.1,40.1,50.1,60.1}},
				{"P5",0,2,{10.1,20.1,30.1,40.1,50.1,60.1}}}))

	elseif cmdIndex == 7 then
		print("GetPointPos:",GetPointPos("P10",1,2))

	elseif cmdIndex == 8 then
		tt01 = GetMultiPointPos({{"P10",1,2},{"P12",1,2},{"P13",1,2},{"P14",1,2},{"P15",1,2}})
		for i = 1, table.getn(tt01) do
			print("-------i=",i,"------------")
			for j=1,table.getn(tt01[i]) do
				print(tt01[i][j])
			end
		end

	elseif cmdIndex == 9 then
		print("GetIOValue:",GetIOValue(3,0))
		print("GetIOValue:",GetIOValue(3,1))
		print("GetIOValue:",GetIOValue(3,11))
		print("GetIOValue:",GetIOValue(3,12))
		print("GetIOValue:",GetIOValue(3,13))
		print("GetIOValue:",GetIOValue(3,14))


	elseif cmdIndex == 10 then
		tt02 = GetMultiIOValue(3,1,20)
		for i = 1, table.getn(tt02) do
			print("-------i=",i,"=",tt02[i],"------------")
		end

		tt02 = GetMultiIOValue(3,11,20)
		for i = 1, table.getn(tt02) do
			print("-------i=",i,"=",tt02[i],"------------")
		end

		tt02 = GetMultiIOValue(3,12,20)
		for i = 1, table.getn(tt02) do
			print("-------i=",i,"=",tt02[i],"------------")
		end

		tt02 = GetMultiIOValue(3,13,20)
		for i = 1, table.getn(tt02) do
			print("-------i=",i,"=",tt02[i],"------------")
		end

		tt02 = GetMultiIOValue(3,14,20)
		for i = 1, table.getn(tt02) do
			print("-------i=",i,"=",tt02[i],"------------")
		end

	elseif cmdIndex == 11 then
		print("SetIoValue:",SetIoValue(9,1,1))
		print("SetIoValue:",SetIoValue(9,11,1))
		print("SetIoValue:",SetIoValue(9,12,1))
		print("SetIoValue:",SetIoValue(9,13,14.8))
		print("SetIoValue:",SetIoValue(9,14,14.8))

	elseif cmdIndex == 12 then
		print("SetMultiIOValue:",SetMultiIOValue(13,1,10,{1,1,1,1,1,1,1,1,1,1}))
		print("SetMultiIOValue:",SetMultiIOValue(13,11,10,{1,1,1,1,1,1,1,1,1,1}))
		print("SetMultiIOValue:",SetMultiIOValue(13,12,10,{1,1,1,1,1,1,1,1,1,1}))
		print("SetMultiIOValue:",SetMultiIOValue(13,13,10,{1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1}))
		print("SetMultiIOValue:",SetMultiIOValue(13,14,10,{1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1}))

	elseif cmdIndex == 13 then
		print("TeachSelectPoint:",TeachSelectPoint("P16",2))

	elseif cmdIndex == 14 then
		print("MoveToSelectPoint:",MoveToSelectPoint(1,"0_0_0_0_90_0","10_100"))

	elseif cmdIndex == 15 then
		print("MoveToSelectPoint:",MoveToSelectPoint(2,"394_0_592_180_0_180","0_1000"))

	elseif cmdIndex == 16 then
		print("MoveToSelectPointb:",MoveToSelectPointb(1,"30_0_0_0_90_0","10_100_100"))

	elseif cmdIndex == 17 then
		print("MoveToSelectPointb:",MoveToSelectPointb(2,"294_0_592_180_0_180","50_1000_100"))

	elseif cmdIndex == 18 then
		print("StopDestPosMotion",StopDestPosMotion())

	elseif cmdIndex == 19 then
		print("setVar_S:",setVar_S("INT0",1,2,200))

	elseif cmdIndex == 20 then
		print("SetPointPos_S:",SetPointPos_S({"P1",0,2,{1.1,2.2,3.3,4.4,5.5,6.6}}))

	elseif cmdIndex == 21 then
		print("MoveSearch:",MoveSearch(1,"0_90_0_0_90_0","10_50_2_10_1"))

	elseif cmdIndex == 22 then
		print("SetTool:",SetTool(0,"TOOL0"))

	elseif cmdIndex == 23 then
		print("SetCoord:",SetCoord(0,"USERCOOR0"))

	elseif cmdIndex == 24 then
		print("SetRtToErr:",SetRtToErr("asdfgh",10000))
	elseif cmdIndex == 25 then
		print("SetCurrentMotionCmd:",SetCurrentMotionCmd(4))

	else

	end




end

