# `survey_satisfy_choice_pcu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| survey_satisfy_choice_id | int(11) | NO | PRI | 0 |  |  |
| survey_satisfy_id | int(11) | YES |  | NULL |  |  |
| survey_satisfy_choice_no | int(11) | YES |  | NULL |  |  |
| survey_satisfy_choice_name | varchar(50) | YES |  | NULL |  |  |
| survey_satisfy_choice_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | survey_satisfy_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "survey_satisfy_choice_id": 1,
    "survey_satisfy_id": 10,
    "survey_satisfy_choice_no": 10,
    "survey_satisfy_choice_name": "ชาย",
    "survey_satisfy_choice_code": "1",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 2,
    "survey_satisfy_id": 10,
    "survey_satisfy_choice_no": 20,
    "survey_satisfy_choice_name": "หญิง",
    "survey_satisfy_choice_code": "2",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 3,
    "survey_satisfy_id": 20,
    "survey_satisfy_choice_no": 10,
    "survey_satisfy_choice_name": "โสด",
    "survey_satisfy_choice_code": "1",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 4,
    "survey_satisfy_id": 20,
    "survey_satisfy_choice_no": 20,
    "survey_satisfy_choice_name": "คู่",
    "survey_satisfy_choice_code": "2",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 5,
    "survey_satisfy_id": 20,
    "survey_satisfy_choice_no": 30,
    "survey_satisfy_choice_name": "ม่าย/หย่า",
    "survey_satisfy_choice_code": "3",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 6,
    "survey_satisfy_id": 30,
    "survey_satisfy_choice_no": 10,
    "survey_satisfy_choice_name": "ไม่ได้เรียน",
    "survey_satisfy_choice_code": "1",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 7,
    "survey_satisfy_id": 30,
    "survey_satisfy_choice_no": 20,
    "survey_satisfy_choice_name": "ประถทศึกษา",
    "survey_satisfy_choice_code": "2",
    "hos_guid": null
  },
  {
    "survey_satisfy_choice_id": 8,
    "survey_satisfy_id": 30,
    "survey_satisfy_choice_no": 30,
    "survey_satisfy_choice_name": "มัธยมศึกษา / อาชีวศึกษา / อนุปริญญา",
    "survey_satisfy_choice_code": "3",
    "hos_guid": null
  }
]
```
