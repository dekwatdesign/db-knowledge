# `psych_assess_setting_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_setting_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_setting_type_num1 | double(18,2) | YES |  | NULL |  |  |
| psych_assess_setting_type_num2 | double(18,2) | YES |  | NULL |  |  |
| psych_assess_setting_type_val | text | YES |  | NULL |  |  |
| psych_assess_setting_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_setting_id | psych_assess_setting_id | no | 1 |
| PRIMARY | psych_assess_setting_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_assess_setting_type_id": 1,
    "psych_assess_setting_type_num1": 1.0,
    "psych_assess_setting_type_num2": 1.0,
    "psych_assess_setting_type_val": "ผู้ป่วยมีความบกพร่องในทักษะด้านนั้นต้องใช้ความช่วยเหลืออย่างมาก",
    "psych_assess_setting_id": 1
  },
  {
    "psych_assess_setting_type_id": 2,
    "psych_assess_setting_type_num1": 2.0,
    "psych_assess_setting_type_num2": 2.0,
    "psych_assess_setting_type_val": "ผู้ป่วยขาดประสิทธิภาพในทักษะนั้นๆต้องให้ความช่วยเหลือบางส่วน เพื่อเกิดประสิทธิภาพและความปลอดภัย",
    "psych_assess_setting_id": 1
  },
  {
    "psych_assess_setting_type_id": 3,
    "psych_assess_setting_type_num1": 3.0,
    "psych_assess_setting_type_num2": 3.0,
    "psych_assess_setting_type_val": "คือ ผู้ป่วยมีทักษะนั้นเพียงพอ แต่ยังบกพร่องเล็กๆน้อยๆ เมื่อให้คำแนะนำ สามารถแก้ไขปรับปรุงให้สมบูรณ์ได้",
    "psych_assess_setting_id": 1
  },
  {
    "psych_assess_setting_type_id": 4,
    "psych_assess_setting_type_num1": 4.0,
    "psych_assess_setting_type_num2": 4.0,
    "psych_assess_setting_type_val": "ผู้ป่วยมีทักษะในด้านนั้นอย่างเพียงพอและครบถ้วน สมบูรณ์",
    "psych_assess_setting_id": 1
  },
  {
    "psych_assess_setting_type_id": 5,
    "psych_assess_setting_type_num1": 1.0,
    "psych_assess_setting_type_num2": 1.0,
    "psych_assess_setting_type_val": "ผู้ป่วยมีความบกพร่องในทักษะด้านนั้นต้องใช้ความช่วยเหลืออย่างมาก",
    "psych_assess_setting_id": 2
  },
  {
    "psych_assess_setting_type_id": 6,
    "psych_assess_setting_type_num1": 2.0,
    "psych_assess_setting_type_num2": 2.0,
    "psych_assess_setting_type_val": "ผู้ป่วยขาดประสิทธิภาพในทักษะนั้นๆต้องให้ความช่วยเหลือบางส่วน เพื่อเกิดประสิทธิภาพและความปลอดภัย",
    "psych_assess_setting_id": 2
  },
  {
    "psych_assess_setting_type_id": 7,
    "psych_assess_setting_type_num1": 3.0,
    "psych_assess_setting_type_num2": 3.0,
    "psych_assess_setting_type_val": "ผู้ป่วยมีทักษะนั้นเพียงพอ แต่ยังบกพร่องเล็กๆน้อยๆ เมื่อให้คำแนะนำ สามารถแก้ไขปรับปรุง",
    "psych_assess_setting_id": 2
  },
  {
    "psych_assess_setting_type_id": 8,
    "psych_assess_setting_type_num1": 4.0,
    "psych_assess_setting_type_num2": 4.0,
    "psych_assess_setting_type_val": "ผู้ป่วยมีทักษะในด้านนั้นอย่างเพียงพอและครบถ้วน สมบูรณ์",
    "psych_assess_setting_id": 2
  }
]
```
