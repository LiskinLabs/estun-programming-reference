const fs = require('fs');
const commands = JSON.parse(fs.readFileSync('src/data/commands.json', 'utf8'));

const movj = commands.Movement.find(c => c.command === 'MovJ');
if (movj && movj.parameters) {
    const pParam = movj.parameters.find(p => p.name === 'P');
    if (pParam) {
        pParam.desc_ru = "Координаты целевой точки. Обязательный параметр. Может принимать как локальные переменные `t_l.P1`, так и глобальные точки `t_p.HomePoint`. Если точка не обучена, выполнение программы будет прервано ошибкой. При относительном смещении (B=\"RELATIVE\") эта точка рассматривается как вектор смещения (X, Y, Z, A, B, C) от текущей позы робота.";
        pParam.desc_en = "Target point coordinates. Required parameter. Can take local variables `t_l.P1` or global points `t_p.HomePoint`. If the point is uninitialized, program execution throws an error. During relative motion (B=\"RELATIVE\"), this point is treated as an offset vector (X, Y, Z, A, B, C) relative to the robot's current posture.";
    }
    const bParam = movj.parameters.find(p => p.name === 'B');
    if (bParam) {
        bParam.desc_ru = "Режим позиционирования. Указывается строкой. \n- \"ABSOLUTE\" (по умолчанию): Робот движется в точные глобальные координаты точки P.\n- \"RELATIVE\": Значения точки P прибавляются к текущей позиции робота. Крайне полезно для параметрического отступа (например, отъезд на +100 мм по оси Z после захвата детали).";
        bParam.desc_en = "Positioning mode. String value. \n- \"ABSOLUTE\" (default): The robot moves to the exact global coordinates of point P.\n- \"RELATIVE\": The values of point P are added to the robot's current position. Highly useful for parametric offsets (e.g., retreating +100 mm along Z-axis after gripping a part).";
    }
    const cParam = movj.parameters.find(p => p.name === 'C');
    if (cParam) {
        cParam.desc_ru = "Зона непрерывного скругления (Continuous Blending). Принимает системные значения, такие как `t_s.C0` (точная остановка, робот гасит скорость в 0), или `t_s.C200` (робот начинает двигаться к следующей точке, не доходя до текущей, срезая угол). Чем больше значение, тем сильнее скругление и выше общая скорость прохождения траектории (меньше Cycle Time).";
        cParam.desc_en = "Continuous Blending Zone. Accepts system variables like `t_s.C0` (fine stop, robot decelerates to 0 velocity), or `t_s.C200` (robot begins moving to the next point before fully reaching the current one, cutting the corner). Higher values increase blending radius and overall cycle speed (reducing Cycle Time).";
    }
}

const movl = commands.Movement.find(c => c.command === 'MovL');
if (movl && movl.parameters) {
    const vParam = movl.parameters.find(p => p.name === 'V');
    if (vParam) {
        vParam.desc_ru = "Скорость перемещения. Принимает системные значения (например, `t_s.V1000`, `t_s.V4000`), которые соответствуют линейной скорости TCP в мм/сек. В отличие от `MovJ`, где скорость задается в процентах от максимума оси, здесь скорость строго детерминирована для обеспечения качественного техпроцесса (сварка, клейка).";
        vParam.desc_en = "Movement velocity. Accepts system variables (e.g., `t_s.V1000`, `t_s.V4000`) mapping to the TCP linear speed in mm/sec. Unlike `MovJ` where speed is a percentage of maximum axis limits, `MovL` requires strict deterministic speed to maintain consistent process quality (like welding or gluing).";
    }
}

fs.writeFileSync('src/data/commands.json', JSON.stringify(commands, null, 2));
console.log("Enhanced Parameters!");
