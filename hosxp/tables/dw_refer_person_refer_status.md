# `dw_refer_person_refer_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_status_id | int(11) | NO | PRI | 0 |  |  |
| person_refer_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_refer_status_name | person_refer_status_name | yes | 1 |
| PRIMARY | person_refer_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_refer_status_id": 1,
    "person_refer_status_name": "ส่งตัวแล้วรอการตอบรับ",
    "hos_guid": null
  },
  {
    "person_refer_status_id": 2,
    "person_refer_status_name": "ได้รับตัวผู้ป่วยแล้ว",
    "hos_guid": null
  },
  {
    "person_refer_status_id": 3,
    "person_refer_status_name": "รักษาตัวผู้ป่วยเสร็จแล้ว",
    "hos_guid": null
  }
]
```
