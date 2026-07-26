# `risk_exercise_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_exercise_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_exercise_name | varchar(50) | YES |  | NULL |  |  |
| risk_exercise_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_exercise_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "risk_exercise_type_id": 10,
    "risk_exercise_name": "ไม่ออกกำลังกายเลย",
    "risk_exercise_code": "0",
    "hos_guid": null
  },
  {
    "risk_exercise_type_id": 20,
    "risk_exercise_name": "ออกกำลังกายน้อยกว่าสัปดาห์ละ 3 ครั้ง",
    "risk_exercise_code": "1",
    "hos_guid": null
  },
  {
    "risk_exercise_type_id": 30,
    "risk_exercise_name": "ออกกำลังกายสัปดาห์ละ 3 ครั้ง ครั้งละ 30 นาที สม่ำเ",
    "risk_exercise_code": "2",
    "hos_guid": null
  },
  {
    "risk_exercise_type_id": 40,
    "risk_exercise_name": "ออกกำลังกายสัปดาห์ละมากกว่า 3 ครั้ง ครั้งละ 30 นาท",
    "risk_exercise_code": "3",
    "hos_guid": null
  },
  {
    "risk_exercise_type_id": 50,
    "risk_exercise_name": "ออกกำลังกายทุกวัน ครั้งละ 30 นาที",
    "risk_exercise_code": "4",
    "hos_guid": null
  }
]
```
