# `dis_person_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dis_person_type_id | int(11) | NO | PRI | 0 |  |  |
| dis_person_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_person_type_name | dis_person_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dis_person_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dis_person_type_id": 1,
    "dis_person_type_name": "แพทย์ทั่วไป",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 2,
    "dis_person_type_name": "แพทย์เฉพาะทาง",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 3,
    "dis_person_type_name": "ทันตแพทย์",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 4,
    "dis_person_type_name": "เภสัชกร",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 5,
    "dis_person_type_name": "พยาบาล",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 6,
    "dis_person_type_name": "นักวิทย์",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 7,
    "dis_person_type_name": "นักสาธารณสุข",
    "hos_guid": null
  },
  {
    "dis_person_type_id": 8,
    "dis_person_type_name": "นักศึกษา",
    "hos_guid": null
  }
]
```
