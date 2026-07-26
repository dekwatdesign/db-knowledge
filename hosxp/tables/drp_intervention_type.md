# `drp_intervention_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_intervention_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_intervention_type_name | varchar(200) | YES | UNI | NULL |  |  |
| drp_intervention_group_code | varchar(5) | YES |  | NULL |  |  |
| std_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_intervention_type_name | drp_intervention_type_name | yes | 1 |
| PRIMARY | drp_intervention_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drp_intervention_type_id": 1,
    "drp_intervention_type_name": "ไม่มี intervention",
    "drp_intervention_group_code": "I0",
    "std_code": "I0.1"
  },
  {
    "drp_intervention_type_id": 2,
    "drp_intervention_type_name": "แจ้งให้แพทย์ทราบเพียงอย่างเดียว",
    "drp_intervention_group_code": "I1",
    "std_code": "I1.1"
  },
  {
    "drp_intervention_type_id": 3,
    "drp_intervention_type_name": "ติดต่อแพทย์เพื่อทราบข้อมูลเพิ่มเติม",
    "drp_intervention_group_code": "I1",
    "std_code": "I1.2"
  },
  {
    "drp_intervention_type_id": 4,
    "drp_intervention_type_name": "เสนอ  intervention กับแพทย์",
    "drp_intervention_group_code": "I1",
    "std_code": "I1.3"
  },
  {
    "drp_intervention_type_id": 5,
    "drp_intervention_type_name": "อภิปราย intervention กับแพทย์",
    "drp_intervention_group_code": "I1",
    "std_code": "I1.4"
  },
  {
    "drp_intervention_type_id": 6,
    "drp_intervention_type_name": "ให้คำแนะนำเรื่องยากับผู้ป่วย",
    "drp_intervention_group_code": "I2",
    "std_code": "I2.1"
  },
  {
    "drp_intervention_type_id": 7,
    "drp_intervention_type_name": "ให้ข้อมูลหรือเอกสารประกอบการใช้ยาเพียงอย่างเดียว",
    "drp_intervention_group_code": "I2",
    "std_code": "I2.2"
  },
  {
    "drp_intervention_type_id": 8,
    "drp_intervention_type_name": "ส่งผู้ป่วยกลับไปพบแพทย์",
    "drp_intervention_group_code": "I2",
    "std_code": "I2.3"
  }
]
```
