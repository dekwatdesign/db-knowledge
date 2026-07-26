# `person_deformed_need_aid_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_need_aid_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_need_aid_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_need_aid_type_name | person_deformed_need_aid_type_name | yes | 1 |
| PRIMARY | person_deformed_need_aid_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_need_aid_type_id": 0,
    "person_deformed_need_aid_type_name": "ไม่ต้องการ",
    "hos_guid": "{DED710F2-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 1,
    "person_deformed_need_aid_type_name": "ด้านการแพทย์และสุขภาพ",
    "hos_guid": "{DED717D4-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 2,
    "person_deformed_need_aid_type_name": "ด้านการศึกษา",
    "hos_guid": "{DED7194E-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 3,
    "person_deformed_need_aid_type_name": "ด้านอาชีพและรายได้",
    "hos_guid": "{DED71AB3-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 4,
    "person_deformed_need_aid_type_name": "ด้านที่อยู่อาศัยและสภาพแวดล้อม",
    "hos_guid": "{DED71C11-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 5,
    "person_deformed_need_aid_type_name": "ด้านสังคมและการมีส่วนร่วม",
    "hos_guid": "{DED71D6C-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 6,
    "person_deformed_need_aid_type_name": "ด้านสิทธิพลเมือง/การเมือง",
    "hos_guid": "{DED71EC6-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_need_aid_type_id": 7,
    "person_deformed_need_aid_type_name": "อื่นๆ",
    "hos_guid": "{DED722AA-9B4C-11DE-B573-1E11FBB7A512}"
  }
]
```
