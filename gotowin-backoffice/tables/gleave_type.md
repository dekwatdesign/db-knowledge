# `gleave_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LEAVE_TYPE_ID | int | NO | PRI | NULL |  |  |
| LEAVE_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| TYPE_GROUP | varchar(2) | YES |  |  |  |  |
| LEAVE_COMMENT | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| COUNT__DATE_ALL | enum('True','False') | YES |  | False |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LEAVE_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LEAVE_TYPE_ID": 1,
    "LEAVE_TYPE_NAME": "ลาป่วย",
    "TYPE_GROUP": "A",
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "False"
  },
  {
    "LEAVE_TYPE_ID": 2,
    "LEAVE_TYPE_NAME": "ลาคลอดบุตร",
    "TYPE_GROUP": "A",
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "True"
  },
  {
    "LEAVE_TYPE_ID": 3,
    "LEAVE_TYPE_NAME": "ลากิจ",
    "TYPE_GROUP": "A",
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "False"
  },
  {
    "LEAVE_TYPE_ID": 4,
    "LEAVE_TYPE_NAME": "ลาพักผ่อน",
    "TYPE_GROUP": "B",
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "False"
  },
  {
    "LEAVE_TYPE_ID": 5,
    "LEAVE_TYPE_NAME": "ลาอุปสมบท",
    "TYPE_GROUP": "C",
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "True"
  },
  {
    "LEAVE_TYPE_ID": 6,
    "LEAVE_TYPE_NAME": "ลาช่วยภริยาคลอด",
    "TYPE_GROUP": null,
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "False"
  },
  {
    "LEAVE_TYPE_ID": 7,
    "LEAVE_TYPE_NAME": "ลาเกณฑ์ทหาร",
    "TYPE_GROUP": null,
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "True"
  },
  {
    "LEAVE_TYPE_ID": 8,
    "LEAVE_TYPE_NAME": "ลาศึกษา ฝึกอบรม",
    "TYPE_GROUP": null,
    "LEAVE_COMMENT": "",
    "updated_at": null,
    "created_at": null,
    "COUNT__DATE_ALL": "True"
  }
]
```
