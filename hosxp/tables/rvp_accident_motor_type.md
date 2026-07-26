# `rvp_accident_motor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_accident_motor_type_code | varchar(10) | NO | PRI |  |  |  |
| rvp_accident_motor_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rvp_accident_motor_type_name | rvp_accident_motor_type_name | yes | 1 |
| PRIMARY | rvp_accident_motor_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rvp_accident_motor_type_code": "1.30",
    "rvp_accident_motor_type_name": "รถจักรยานยนต์"
  },
  {
    "rvp_accident_motor_type_code": "1.60",
    "rvp_accident_motor_type_name": "รถพ่วง"
  },
  {
    "rvp_accident_motor_type_code": "1.20",
    "rvp_accident_motor_type_name": "รถยนต์โดยสารเกิน 7 คน"
  },
  {
    "rvp_accident_motor_type_code": "4.06",
    "rvp_accident_motor_type_name": "รถยนต์ที่ใช้ในการเกษตร"
  },
  {
    "rvp_accident_motor_type_code": "1.10",
    "rvp_accident_motor_type_name": "รถยนต์นั่งไม่เกิน 7 ที่นั่ง"
  },
  {
    "rvp_accident_motor_type_code": "1.42",
    "rvp_accident_motor_type_name": "รถยนต์บรรทุกน้ำมันเชื้อเพลิง แก๊ส หรือกรด"
  },
  {
    "rvp_accident_motor_type_code": "1.40",
    "rvp_accident_motor_type_name": "รถยนต์บรรทุก"
  },
  {
    "rvp_accident_motor_type_code": "4.07",
    "rvp_accident_motor_type_name": "รถยนต์ประเภทอื่นๆ"
  }
]
```
