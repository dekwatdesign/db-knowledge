# `person_deformed_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_type_name | person_deformed_type_name | yes | 1 |
| PRIMARY | person_deformed_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "person_deformed_type_id": 1,
    "person_deformed_type_name": "การมองเห็น",
    "hos_guid": "{73210158-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_type_id": 2,
    "person_deformed_type_name": "การได้ยิน/สื่อความหมาย",
    "hos_guid": "{73210374-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_type_id": 3,
    "person_deformed_type_name": "ทางกายและการเคลื่อนไหว",
    "hos_guid": "{73210478-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_type_id": 4,
    "person_deformed_type_name": "สติปัญญา/การเรียนรู้",
    "hos_guid": "{73210568-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_type_id": 5,
    "person_deformed_type_name": "จิตใจ/พฤติกรรม",
    "hos_guid": "{7321064E-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_type_id": 6,
    "person_deformed_type_name": "ซ้ำซ้อน",
    "hos_guid": "{7321073E-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
