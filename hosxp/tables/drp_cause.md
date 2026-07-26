# `drp_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_cause_id | int(11) | NO | PRI | 0 |  |  |
| drp_cause_name | varchar(100) | YES | UNI | NULL |  |  |
| std_code | varchar(10) | YES |  | NULL |  |  |
| drp_cause_type_id | int(11) | YES |  | NULL |  |  |
| drp_cause_group_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_cause_name | drp_cause_name | yes | 1 |
| PRIMARY | drp_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drp_cause_id": 1,
    "drp_cause_name": "ใช้ยาไม่เหมาะสมตามแนวทางการรักษาหรือสูตรตำรับยา",
    "std_code": "C1.1",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 2,
    "drp_cause_name": "การใช้ยาไม่เหมาะสมเนื่องจากมีข้อห้ามใช้",
    "std_code": "C1.2",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 3,
    "drp_cause_name": "การใช้ยาที่ไม่มีข้อบ่งใช้",
    "std_code": "C1.3",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 4,
    "drp_cause_name": "การใช้ยาที่ไม่เหมาะสมร่วมกันระหว่างยากับยาหรือยากับสมุนไพร",
    "std_code": "C1.4",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 5,
    "drp_cause_name": "การใช้ยาในกลุ่มเดียวกันซ้ำซ้อนกัน",
    "std_code": "C1.5",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 6,
    "drp_cause_name": "มีข้อบ่งชี้ที่ต้องการใช้ยาแต่ไม่ได้รักษา",
    "std_code": "C1.6",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 7,
    "drp_cause_name": "ใช้ยามากเกินไปสำหรับข้อบ่งใช้เดียวกัน",
    "std_code": "C1.7",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  },
  {
    "drp_cause_id": 8,
    "drp_cause_name": "ไม่มีความจำเป็นต้องได้รับการรักษาด้วยยา",
    "std_code": "C1.8",
    "drp_cause_type_id": null,
    "drp_cause_group_code": "C1"
  }
]
```
