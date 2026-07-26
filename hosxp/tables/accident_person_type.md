# `accident_person_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_person_type_id | int(11) | NO | PRI | 0 |  |  |
| accident_person_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_person_type_name | accident_person_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | accident_person_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "accident_person_type_id": 1,
    "accident_person_type_name": "ผู้ขับขี่",
    "export_code": "1",
    "hos_guid": null
  },
  {
    "accident_person_type_id": 2,
    "accident_person_type_name": "ผู้โดยสาร",
    "export_code": "2",
    "hos_guid": null
  },
  {
    "accident_person_type_id": 3,
    "accident_person_type_name": "คนเดินเท้า",
    "export_code": "3",
    "hos_guid": null
  },
  {
    "accident_person_type_id": 8,
    "accident_person_type_name": "อื่นๆ",
    "export_code": "8",
    "hos_guid": null
  },
  {
    "accident_person_type_id": 9,
    "accident_person_type_name": "ไม่ทราบ",
    "export_code": "9",
    "hos_guid": null
  }
]
```
