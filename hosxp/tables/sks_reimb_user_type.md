# `sks_reimb_user_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_reimb_user_type_id | int(11) | NO | PRI | 0 |  |  |
| sks_reimb_user_type_name | varchar(200) | YES | UNI | NULL |  |  |
| sks_code | varchar(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_reimb_user_type_name | sks_reimb_user_type_name | yes | 1 |
| PRIMARY | sks_reimb_user_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "sks_reimb_user_type_id": 1,
    "sks_reimb_user_type_name": "สถานพยาบาลนี้",
    "sks_code": "HP",
    "hos_guid": null
  },
  {
    "sks_reimb_user_type_id": 2,
    "sks_reimb_user_type_name": "ผุ้ใช้บริการ",
    "sks_code": "P0",
    "hos_guid": null
  },
  {
    "sks_reimb_user_type_id": 3,
    "sks_reimb_user_type_name": "ผู้ใช้บริการ, เบิกเอง",
    "sks_code": "P1",
    "hos_guid": null
  },
  {
    "sks_reimb_user_type_id": 4,
    "sks_reimb_user_type_name": "ผู้เบิกประเภทอื่นๆ",
    "sks_code": "ZZ",
    "hos_guid": null
  }
]
```
