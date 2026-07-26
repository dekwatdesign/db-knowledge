# `person_deformed_refer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_refer_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_refer_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_refer_type_name | person_deformed_refer_type_name | yes | 1 |
| PRIMARY | person_deformed_refer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "person_deformed_refer_type_id": 1,
    "person_deformed_refer_type_name": "ไม่ได้รับการฟื้นฟู",
    "hos_guid": "{72545892-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_refer_type_id": 2,
    "person_deformed_refer_type_name": "ด้านการแพทย์",
    "hos_guid": "{72545AA4-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_refer_type_id": 3,
    "person_deformed_refer_type_name": "ด้านการศึกษา",
    "hos_guid": "{72545BA8-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_refer_type_id": 4,
    "person_deformed_refer_type_name": "ด้านอาชีพ",
    "hos_guid": "{72545C98-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_refer_type_id": 5,
    "person_deformed_refer_type_name": "ด้านสงเคราะห์",
    "hos_guid": "{72545D88-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_refer_type_id": 6,
    "person_deformed_refer_type_name": "อื่นๆ",
    "hos_guid": "{72545E6E-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
