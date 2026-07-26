# `hsk_type_nures`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hsk_type_nures_id | int(1) | NO | PRI | 0 |  |  |
| hsk_type_nures_name | varchar(20) | YES |  | NULL |  |  |
| hsk_type_nures_st | varchar(1) | YES |  | NULL |  |  |
| hsk_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hsk_type_nures_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hsk_type_nures_id": 1,
    "hsk_type_nures_name": "4a",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยอาการหนัก และต้องการดูแลมากตลอดเวลา"
  },
  {
    "hsk_type_nures_id": 2,
    "hsk_type_nures_name": "3a",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยอาการหนัก และต้องการดูแลมากตลอดเวลา"
  },
  {
    "hsk_type_nures_id": 3,
    "hsk_type_nures_name": "3b",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยอาการหนัก และต้องการดูแลมาก"
  },
  {
    "hsk_type_nures_id": 4,
    "hsk_type_nures_name": "2a",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยอาการปานกลาง และต้องการดูแลมากตลอดเวลา"
  },
  {
    "hsk_type_nures_id": 5,
    "hsk_type_nures_name": "2b",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยอาการปานกลาง และต้องการดูแลมาก"
  },
  {
    "hsk_type_nures_id": 6,
    "hsk_type_nures_name": "2c",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยอาการปานกลาง และต้องการดูแลปานกลาง"
  },
  {
    "hsk_type_nures_id": 7,
    "hsk_type_nures_name": "1a",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยที่อยู่ในระยะพักฟื้น แต่ต้องการดูแลมากตลอดเวลา"
  },
  {
    "hsk_type_nures_id": 8,
    "hsk_type_nures_name": "1b",
    "hsk_type_nures_st": "Y",
    "hsk_name": "ผู้ป่วยที่อยู่ในระยะพักฟื้น แต่ต้องการดูแลมาก"
  }
]
```
