const fs = require('fs');

// --- ENHANCE EXAMPLES ---
const newExamples = [
  {
    "id": "ex1_durable",
    "title": {
      "ru": "Производственный цикл: Смещение по Z (Durable.erp)",
      "en": "Production Cycle: Z-Axis Offset Logic (Durable.erp)",
      "tr": "Üretim Döngüsü: Z Ekseni Ofset Mantığı (Durable.erp)"
    },
    "description": {
      "ru": "Этот пример демонстрирует мощные математические операции с координатами. \n\nВ цикле `WHILE` робот выполняет линейные (`MovL`) и круговые (`MovC`) движения, после чего значение координаты `Z` для точек `ShuiPingP2`, `ShuiPingP3` и `CircleP2` увеличивается на значение `DHeight.value`. Это классический паттерн для паллетирования или многопроходной сварки/фрезеровки, где каждый новый проход выполняется чуть выше предыдущего.\n\nВ конце цикла все точки возвращаются в исходное положение вычитанием накопленной высоты `TemporaryCycNumber.value * DHeight.value`.",
      "en": "This example demonstrates powerful coordinate math operations. \n\nInside the `WHILE` loop, the robot performs linear (`MovL`) and circular (`MovC`) interpolation. After each pass, the `Z` coordinate of points like `ShuiPingP2` and `CircleP2` is incremented by `DHeight.value`. This is a classic pattern for palletizing, multi-pass welding, or milling, where each pass must be slightly higher than the last.\n\nAt the end of the script, the points are reset to their original positions by subtracting the total accumulated height.",
      "tr": "Bu örnek, güçlü koordinat matematik işlemlerini göstermektedir. \n\n`WHILE` döngüsü içinde robot doğrusal (`MovL`) ve dairesel (`MovC`) enterpolasyon gerçekleştirir. Her geçişten sonra, `ShuiPingP2` gibi noktaların `Z` koordinatı `DHeight.value` kadar artırılır. Bu paletleme veya çok pasolu kaynak/frezeleme için klasik bir mantıktır.\n\nKomut dosyasının sonunda noktalar toplam biriken yükseklik çıkarılarak orijinal konumlarına sıfırlanır."
    },
    "code": `// InstParseVersion: V1.02
Start:
/* Случайная точка, автоматический сбор данных */
SetPayload{PayLoad=t_g.PAYLOAD0}
MovJ{P=t_l.RandomPoint,B="ABSOLUTE",C=t_s.C200}
Wait{T=200}

/* Линейное перемещение со скоростью V4000 */
t_l.TemporaryCycNumber.value = 1
WHILE ( t_l.TemporaryCycNumber.value <= 3 ) DO
  MovJ{P=t_p.StraightPoint}
  MovJ{P=t_l.ShuiPingP1}
  MovL{P=t_l.ShuiPingP2,V=t_s.V4000}
  MovC{A=t_l.CircleP2,P=t_l.CircleP3,V=t_s.V4000,B="ABSOLUTE",C=t_s.C0}
  MovL{P=t_l.ShuiPingP3,V=t_s.V4000}
  
  // Логика смещения по Z для каждого прохода
  t_l.ShuiPingP2.z = t_l.ShuiPingP2.z + t_l.DHeight.value
  t_l.ShuiPingP3.z = t_l.ShuiPingP3.z + t_l.DHeight.value
  t_l.CircleP2.z = t_l.CircleP2.z + t_l.DHeight.value
  t_l.CircleP3.z = t_l.CircleP3.z + t_l.DHeight.value
  
  t_l.TemporaryCycNumber.value = t_l.TemporaryCycNumber.value + 1
ENDWHILE

// Сброс координат к исходным значениям после окончания цикла
t_l.ShuiPingP2.z = t_l.ShuiPingP2.z - t_l.TemporaryCycNumber.value * t_l.DHeight.value
t_l.ShuiPingP3.z = t_l.ShuiPingP3.z - t_l.TemporaryCycNumber.value * t_l.DHeight.value
t_l.CircleP2.z = t_l.CircleP2.z - t_l.TemporaryCycNumber.value * t_l.DHeight.value
t_l.CircleP3.z = t_l.CircleP3.z - t_l.TemporaryCycNumber.value * t_l.DHeight.value
End;`
  },
  {
    "id": "ex2_limitangle",
    "title": {
      "ru": "Тестирование пределов осей с метками (LimitAngle.erp)",
      "en": "Axis Limit Testing with Labels (LimitAngle.erp)",
      "tr": "Etiketlerle Eksen Sınır Testi (LimitAngle.erp)"
    },
    "description": {
      "ru": "Этот скрипт используется для заводского тестирования каждой отдельной оси робота (от J1 до J6). \n\nВ коде применяются метки `J1:`, `J2:`, `J3:` для логического разделения подпрограмм внутри одного файла. Для каждой оси организован свой цикл `WHILE`. Если глобальная переменная `t_p.Loopvariable.value == 1`, цикл становится бесконечным (значение счетчика принудительно сбрасывается на 1 при каждой итерации). Если `0` — цикл корректно увеличивает счетчик и завершается. \n\nЭто великолепный пример создания сложных тестовых скриптов с внешним управлением логикой через глобальные переменные контроллера ESTUN.",
      "en": "This script is used for factory burn-in testing of individual robot axes (J1 through J6).\n\nThe code uses labels like `J1:`, `J2:` to logically separate subroutines within a single file. Each axis has its own `WHILE` loop. If the global variable `t_p.Loopvariable.value == 1`, the loop becomes infinite by forcibly resetting the counter to 1. If it's `0`, the loop increments normally and exits. \n\nA perfect example of building complex test scripts controlled by external global variables on the ESTUN controller.",
      "tr": "Bu komut dosyası, ayrı robot eksenlerinin (J1 ila J6) fabrika testleri için kullanılır.\n\nKod, mantığı ayırmak için `J1:`, `J2:` gibi etiketler kullanır. Her eksenin kendi `WHILE` döngüsü vardır. `t_p.Loopvariable.value == 1` ise, döngü sayacı sıfırlayarak sonsuz hale gelir. Küresel değişkenler aracılığıyla kontrol edilen karmaşık test komut dosyaları oluşturmanın mükemmel bir örneği."
    },
    "code": `// InstParseVersion: V1.02
Start:
SetPayload{PayLoad=t_g.PAYLOAD0}
MovJ{P=t_p.ZeroPoint}

J1:
MovJ{P=t_p.LJ1P0}
t_l.TemporaryCycNumber.value = 1
WHILE ( t_l.TemporaryCycNumber.value <= t_p.LANumber.value ) DO
  MovJ{P=t_p.LJ1P1}
  Wait{T=2000}
  MovJ{P=t_p.LJ1P2}
  Wait{T=2000}
  
  // Логика управления циклом извне (бесконечный цикл vs конечный)
  IF ( t_p.Loopvariable.value == 1 ) THEN
    t_l.TemporaryCycNumber.value = 1 // Infinite loop
  ENDIF
  IF ( t_p.Loopvariable.value == 0 ) THEN
    t_l.TemporaryCycNumber.value = t_l.TemporaryCycNumber.value + 1 // Normal exit
  ENDIF
ENDWHILE

J2:
MovJ{P=t_p.LJ2P0}
t_l.TemporaryCycNumber.value = 1
WHILE ( t_l.TemporaryCycNumber.value <= t_p.LANumber.value ) DO
  MovJ{P=t_p.LJ2P1}
  Wait{T=2000}
  MovJ{P=t_p.LJ2P2}
  Wait{T=2000}
  
  IF ( t_p.Loopvariable.value == 1 ) THEN
    t_l.TemporaryCycNumber.value = 1
  ENDIF
  IF ( t_p.Loopvariable.value == 0 ) THEN
    t_l.TemporaryCycNumber.value = t_l.TemporaryCycNumber.value + 1
  ENDIF
ENDWHILE

MovJ{P=t_p.ZeroPoint}
End;`
  },
  {
    "id": "ex3_scope",
    "title": {
      "ru": "Динамическая генерация рабочей зоны (Scope.erp)",
      "en": "Dynamic Workspace Generation (Scope.erp)",
      "tr": "Dinamik Çalışma Alanı Üretimi (Scope.erp)"
    },
    "description": {
      "ru": "Потрясающий пример того, как ESTUN позволяет математически рассчитывать габариты (bounding box) прямо в программном коде, не обучая десятки точек вручную с помощью пульта.\n\nСначала задаются параметры коробки (`BoxX`, `BoxY`, `BoxZ`). Затем базовая точка `P1` копируется в угловые переменные `C1`..`C8`, и для каждой вычисляются точные координаты углов через прибавление/вычитание `0.5 * BoxX` к базовой координате `.x`, `.y` и `.z`.\n\nБлок `IF ( t_p.JudgeMent.value == ... )` позволяет динамически менять стратегию расчета во время выполнения: создавать полный 3D-куб, плоскую плоскость (для 2D задач) или линию в зависимости от логики PLC.",
      "en": "An amazing example of how ESTUN allows mathematical calculation of bounding boxes directly in code, without teaching dozens of points manually with the teach pendant.\n\nBox dimensions are defined (`BoxX`, `BoxY`, `BoxZ`). Then the base point `P1` is copied into variables `C1` through `C8`, and the exact corner coordinates are calculated by adding/subtracting `0.5 * BoxX` to the base `.x`, `.y` and `.z` coordinates.\n\nThe `IF ( t_p.JudgeMent.value == ... )` block allows dynamically changing the calculation strategy at runtime: generating a full 3D cube, a flat 2D plane, or a 1D line based on PLC logic.",
      "tr": "ESTUN'un sınırlayıcı kutuların (bounding box) doğrudan kod içinde matematiksel hesaplanmasına nasıl izin verdiğine dair harika bir örnek.\n\nKutu boyutları tanımlanır (`BoxX`, `BoxY`, `BoxZ`). Daha sonra `P1` kopyalanır ve köşeler hesaplanır.\n`IF` bloğu, harici mantığa göre bir küp, 2D düzlem veya 1D çizgi üretme stratejisini değiştirmeye olanak tanır."
    },
    "code": `// InstParseVersion: V1.02
Start:
t_p.JudgeMent.value = 1

/* Установка габаритов пространства (Box Size) */
t_p.BoxX.value = 1000
t_p.BoxY.value = 1000
t_p.BoxZ.value = 1000

/* Установка центральной базовой точки P1 */
t_p.P1.x = 1700
t_p.P1.y = 0
t_p.P1.z = 1100
t_p.P1.a = 90
t_p.P1.b = 0
t_p.P1.c = 180

/* Математический расчет углов (Corners) относительно центра */
t_p.C1 = t_p.P1
t_p.C1.x = t_p.P1.x + t_p.BoxX.value * 0.5
t_p.C1.y = t_p.P1.y + t_p.BoxY.value * 0.5
t_p.C1.z = t_p.P1.z + t_p.BoxZ.value * 0.5

t_p.C2 = t_p.P1
t_p.C2.x = t_p.P1.x + t_p.BoxX.value * 0.5
t_p.C2.y = t_p.P1.y - t_p.BoxY.value * 0.5
t_p.C2.z = t_p.P1.z + t_p.BoxZ.value * 0.5

/* Динамическая корректировка геометрии на базе флага JudgeMent */
IF ( t_p.JudgeMent.value == 1 ) THEN
  // Формируем 3D зону
  t_p.P2 = t_p.P1
  t_p.P2.x = t_p.P1.x + t_p.BoxX.value * 0.4
  t_p.P2.y = t_p.P1.y + t_p.BoxY.value * 0.4
  t_p.P2.z = t_p.P1.z + t_p.BoxZ.value * 0.4
ENDIF

IF ( t_p.JudgeMent.value == 3 ) THEN
  // Формируем плоскую 2D зону (Z остается неизменным)
  t_p.P2.value = t_p.P1.value
  t_p.P2.x = t_p.P1.x + t_p.BoxX.value * 0.4
  t_p.P2.y = t_p.P1.y + t_p.BoxY.value * 0.4
  t_p.P2.z = t_p.P1.z
ENDIF
End;`
  },
  {
    "id": "ex4_linkage",
    "title": {
      "ru": "Комплексная интерполяция: Скругления и Относительность (Linkage.erp)",
      "en": "Complex Interpolation: Blending & Relative Moves (Linkage.erp)",
      "tr": "Karmaşık Enterpolasyon: Göreceli Hareketler (Linkage.erp)"
    },
    "description": {
      "ru": "Файл `linkage.erp` демонстрирует смешивание абсолютно всех типов перемещений, поддерживаемых ESTUN. В блоке `all:` робот выполняет относительные суставные перемещения `MovJ{B=\"RELATIVE\"}`, а затем переключается на абсолютные `B=\"ABSOLUTE\"`. \n\nЭто крайне полезно при создании параметрических траекторий или сборки деталей, где подход к объекту относителен текущего положения инструмента (чтобы избежать столкновений), а финальная позиция захвата жестко зафиксирована в абсолютных координатах мира.\n\nПараметр `C=t_s.C200` указывает на радиус скругления углов. Чем больше C, тем сильнее робот 'срезает' углы, обеспечивая непрерывное (continuous blending) движение без остановок. Это критически важно для сокращения времени цикла (Cycle Time).",
      "en": "The `linkage.erp` file demonstrates mixing all movement types supported by ESTUN. In the `all:` block, the robot performs relative joint moves `MovJ{B=\"RELATIVE\"}` and then switches to absolute `B=\"ABSOLUTE\"`. \n\nThis is extremely useful when creating parametric trajectories or assembling parts, where the approach is relative to the current tool position (to avoid collisions), but the final grip position is fixed in absolute world coordinates.\n\nThe parameter `C=t_s.C200` specifies the corner rounding radius. The larger the C, the more the robot 'cuts' corners, ensuring continuous blending motion without stopping. This is critical for reducing Cycle Time.",
      "tr": "`linkage.erp` dosyası mutlak ve göreceli hareketlerin karıştırılmasını gösterir. `all:` bloğunda robot `MovJ{B=\"RELATIVE\"}` ile göreceli hareketler yapar ve ardından mutlak `B=\"ABSOLUTE\"` seçeneğine geçer. Bu, yaklaşımın göreceli ancak nihai hedefin sabit olduğu parametrik yörüngeler için son derece kullanışlıdır."
    },
    "code": `// InstParseVersion: V1.02
Start:
SetPayload{PayLoad=t_g.PAYLOAD0}

all:
MovJ{P=t_l.P0}

// Relative Joint Movement (Относительное суставное движение)
MovJ{P=t_l.P69,B="RELATIVE",C=t_s.C200}
MovJ{P=t_l.P70,B="RELATIVE",C=t_s.C200}

// Absolute Joint Movement (Абсолютное суставное движение)
MovJ{P=t_l.P71,B="ABSOLUTE",C=t_s.C200}
MovJ{P=t_l.P72,B="ABSOLUTE",C=t_s.C200}

// Relative Linear Movement (Относительное линейное движение)
MovL{P=t_l.P76,B="RELATIVE",C=t_s.C200}
MovL{P=t_l.P77,B="RELATIVE",C=t_s.C200}

// Absolute Linear Movement (Абсолютное линейное движение)
MovL{P=t_l.P79,B="ABSOLUTE",C=t_s.C200}
MovL{P=t_l.P80,B="ABSOLUTE",C=t_s.C200}

MovL{P=t_l.P94,B="RELATIVE",C=t_s.C200}
MovJ{P=t_l.P0}
End;`
  },
  {
    "id": "ex5_prod_main",
    "title": {
      "ru": "Главный производственный цикл (ProductionMain.erp)",
      "en": "Main Production Cycle (ProductionMain.erp)",
      "tr": "Ana Üretim Döngüsü (ProductionMain.erp)"
    },
    "description": {
      "ru": "Это классический `ProductionMain.erp` - основа любой автоматизированной производственной ячейки на базе ESTUN. \n\nВ начале объявляются глобальные настройки: `SetPayload` (активация веса инструмента для правильного расчета моментов инерции), `SetColliEnable` (включение детекции столкновений). \nЗатем начинается бесконечный цикл `WHILE`, внутри которого вызываются `CALL` для рабочих подпрограмм (например, `ProductionTrack`). В зависимости от состояния глобальных флагов (`t_p.ProdctionFlag`), система решает, переходить ли в режим паузы (`Wait`) или запускать рабочий цикл.\nВнутри цикла предусмотрен механизм прерывания `IF ( t_p.ExitFlag.value == 1 ) THEN BREAK`, который позволяет оператору безопасно остановить производство. В конце цикла робот всегда возвращается в безопасную домашнюю точку (`t_p.HomePoint`).",
      "en": "This is the classic `ProductionMain.erp` - the backbone of any automated production cell based on ESTUN. \n\nIt starts with global setup: `SetPayload` (activates tool weight for proper inertia calculation), `SetColliEnable` (enables collision detection). \nThen an infinite `WHILE` loop begins, inside which subroutines are executed via `CALL` (e.g., `ProductionTrack`). Depending on global flags (`t_p.ProdctionFlag`), the system decides whether to pause (`Wait`) or execute the cycle.\nInside the loop there is an interrupt mechanism `IF ( t_p.ExitFlag.value == 1 ) THEN BREAK` allowing the operator to safely stop production. At the end of the loop, the robot always returns to a safe home position (`t_p.HomePoint`).",
      "tr": "Bu klasik `ProductionMain.erp` - herhangi bir üretim hücresinin omurgasıdır. Ortam ayarlarıyla başlar (`SetPayload`, `SetColliEnable`). \nDaha sonra alt programların `CALL` aracılığıyla yürütüldüğü sonsuz bir `WHILE` döngüsü başlar. Dijital girişlere ve bayraklara bağlı olarak sistem duraklatmaya veya döngüyü yürütmeye karar verir."
    },
    "code": `// InstParseVersion: V1.02
Start:
SetPayload{PayLoad=t_g.PAYLOAD0}
SetColliEnable{Status=1}
Wait{T=100}

WHILE ( 1 == 1 ) DO
  // Ждем разрешения на производство от PLC или оператора
  IF ( t_p.ProdctionFlag.value == 0 ) THEN
    Wait{T=1000}
  ELSE
    // Переход в домашнюю (безопасную) позицию перед началом работы
    MovJ{P=t_p.HomePoint}
    
    // Вызов внешней подпрограммы выполнения рабочего трека
    CALL{File="ProductionTrack"}
    
    // Проверка сигналов безопасности и флагов выхода
    IF ( t_p.ExitFlag.value == 1 ) THEN
      BREAK
    ENDIF
    
    // Возврат в домашнюю позицию после завершения цикла
    MovJ{P=t_p.HomePoint}
  ENDIF
ENDWHILE

End;`
  }
];

fs.writeFileSync('src/data/examples.json', JSON.stringify(newExamples, null, 2));


// --- ENHANCE COMMANDS.JSON ---
const commands = JSON.parse(fs.readFileSync('src/data/commands.json', 'utf8'));

const movj = commands.Movement.find(c => c.command === 'MovJ');
if (movj) {
    movj.description.ru = "Абсолютно фундаментальная команда. Выполняет интерполированное перемещение в суставных (joint) координатах от текущей позиции до целевой точки `P`. В отличие от `MovL`, траектория между точками не является прямой линией в пространстве, зато робот движется максимально плавно, быстро и с минимальной нагрузкой на серводвигатели. \n\n**Особенности:**\n- Поддерживает установку зоны скругления углов (параметр `C`), что позволяет роботу не останавливаться в точке, а сглаживать траекторию.\n- Поддерживает `B=\"RELATIVE\"` для относительного смещения от текущей позы.\n- Можно задать цифровой выход `DO=\"\"`, который сработает точно по достижении целевой точки без использования отдельной команды `Wait`.";
    movj.description.en = "An absolutely fundamental command. Executes interpolated movement in joint coordinates from the current position to the target point `P`. Unlike `MovL`, the trajectory is not a straight line in space, but the robot moves extremely smoothly, quickly, and with minimal stress on the servo motors. \n\n**Features:**\n- Supports corner rounding zones (parameter `C`), allowing the robot to blend trajectories continuously without stopping.\n- Supports `B=\"RELATIVE\"` for relative offsets from the current posture.\n- You can specify a digital output `DO=\"\"` that triggers exactly when the point is reached without needing a separate `Wait` command.";
}

const movl = commands.Movement.find(c => c.command === 'MovL');
if (movl) {
    movl.description.ru = "Линейная интерполяция (Linear Movement). Команда заставляет робота (TCP) двигаться к целевой точке `P` строго по прямой линии. Это критически важно для таких задач как лазерная резка, сварка или нанесение клея.\n\n**Важно:** Линейные перемещения требуют решения обратной кинематики в реальном времени. Если прямая линия проходит через сингулярность (Singularity) или требует превышения максимальной скорости осей, робот выдаст ошибку и остановится. Рекомендуется использовать `MovJ` для подхода к детали, и `MovL` только для самого рабочего процесса.";
    movl.description.en = "Linear interpolation (Linear Movement). This command forces the robot (TCP) to move to the target point `P` strictly along a straight line. This is critical for tasks like laser cutting, welding, or dispensing.\n\n**Important:** Linear movements require real-time inverse kinematics calculation. If the straight line passes through a singularity or requires exceeding maximum axis speeds, the robot will throw an error and stop. It is recommended to use `MovJ` to approach the workpiece, and `MovL` only for the actual work process.";
}

const ifCmd = commands.Other.find(c => c.command === 'IF');
if (ifCmd) {
    ifCmd.description.ru = "Логический оператор ветвления. Используется для создания сложной логики в зависимости от глобальных переменных `t_g`, локальных флагов `t_l` или состояния цифровых входов (DI). \n\n**Синтаксис:**\n`IF ( условие ) THEN ... ELSE ... ENDIF`\n\n**Применение:**\nМожет быть вложенным в другие блоки `IF` или циклы `WHILE`. Крайне важен для систем безопасности, например, проверка флага `t_p.ExitFlag.value == 1` для экстренного выхода из производственного цикла через команду `BREAK`. Поддерживает стандартные операторы сравнения (`==`, `>=`, `<=`, `!=`).";
    ifCmd.description.en = "Logical branching operator. Used to create complex logic depending on global variables `t_g`, local flags `t_l`, or digital I/O states (DI). \n\n**Syntax:**\n`IF ( condition ) THEN ... ELSE ... ENDIF`\n\n**Usage:**\nCan be nested within other `IF` blocks or `WHILE` loops. Extremely important for safety systems, for instance, checking `t_p.ExitFlag.value == 1` to emergency break a loop using the `BREAK` command. Supports standard comparison operators (`==`, `>=`, `<=`, `!=`).";
}

const whileCmd = commands.Other.find(c => c.command === 'WHILE');
if (whileCmd) {
    whileCmd.description.ru = "Оператор цикла с предусловием. Цикл выполняется до тех пор, пока условие внутри круглых скобок остается истинным. \n\nЧасто используется в связке с локальными счетчиками (например, `t_l.Counter.value = t_l.Counter.value + 1`) для паллетирования или повторения однотипных операций. Для создания бесконечного цикла, например главного рабочего цикла программы (Production Main), используется конструкция `WHILE ( 1 == 1 ) DO`. Выйти из такого цикла можно только по команде `BREAK` или через системное прерывание.";
    whileCmd.description.en = "Pre-condition loop operator. The loop continues to execute as long as the condition inside the parentheses evaluates to true.\n\nOften used in conjunction with local counters (e.g., `t_l.Counter.value = t_l.Counter.value + 1`) for palletizing or repeating similar operations. To create an infinite loop, such as the main production cycle, the syntax `WHILE ( 1 == 1 ) DO` is used. You can only exit such a loop via the `BREAK` command or a system interrupt.";
}

fs.writeFileSync('src/data/commands.json', JSON.stringify(commands, null, 2));
console.log("Enhanced Examples and Commands successfully!");
