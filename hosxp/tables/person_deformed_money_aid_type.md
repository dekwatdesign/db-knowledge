# `person_deformed_money_aid_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_money_aid_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_money_aid_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_money_aid_type_name | person_deformed_money_aid_type_name | yes | 1 |
| PRIMARY | person_deformed_money_aid_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_deformed_money_aid_type_id": 0,
    "person_deformed_money_aid_type_name": "ไม่ได้รับ",
    "hos_guid": "{DCEEEB2E-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_money_aid_type_id": 1,
    "person_deformed_money_aid_type_name": "ได้รับ",
    "hos_guid": "{DCEEF1CF-9B4C-11DE-B573-1E11FBB7A512}"
  },
  {
    "person_deformed_money_aid_type_id": 9,
    "person_deformed_money_aid_type_name": "ไม่ทราบ",
    "hos_guid": "{DCEEF332-9B4C-11DE-B573-1E11FBB7A512}"
  }
]
```
