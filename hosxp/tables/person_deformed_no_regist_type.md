# `person_deformed_no_regist_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_no_regist_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_no_regist_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_no_regist_type_name | person_deformed_no_regist_type_name | yes | 1 |
| PRIMARY | person_deformed_no_regist_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_deformed_no_regist_type_id": 1,
    "person_deformed_no_regist_type_name": "พิการไม่รุนแรงสามารถฟื้นฟูให้ประกอบอาชีพได้",
    "hos_guid": "{7189FB24-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_no_regist_type_id": 2,
    "person_deformed_no_regist_type_name": "ฐานะอยู่ในเกณฑ์ดี",
    "hos_guid": "{7189FD68-F61D-11DE-BFF4-00215E472B30}"
  },
  {
    "person_deformed_no_regist_type_id": 3,
    "person_deformed_no_regist_type_name": "อื่นๆ",
    "hos_guid": "{7189FE62-F61D-11DE-BFF4-00215E472B30}"
  }
]
```
