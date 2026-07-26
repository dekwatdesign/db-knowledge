# `person_deformed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| deformed_no | varchar(25) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_deformed_refer_type_id | int(11) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| certificate_date | date | YES |  | NULL |  |  |
| remark | varchar(150) | YES |  | NULL |  |  |
| person_deformed_no_regist_type_id | int(11) | YES |  | NULL |  |  |
| person_deformed_money_aid_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_deformed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_id": 1,
    "person_id": 6927,
    "deformed_no": "",
    "hos_guid": "{DAADDC4D-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 2,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  },
  {
    "person_deformed_id": 2,
    "person_id": 7444,
    "deformed_no": "",
    "hos_guid": "{DAADE37B-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 2,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  },
  {
    "person_deformed_id": 3,
    "person_id": 8113,
    "deformed_no": "",
    "hos_guid": "{DAADE4F4-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 2,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  },
  {
    "person_deformed_id": 4,
    "person_id": 7593,
    "deformed_no": "",
    "hos_guid": "{DAADE89A-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 5,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  },
  {
    "person_deformed_id": 5,
    "person_id": 8045,
    "deformed_no": "",
    "hos_guid": "{DAADE98F-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 2,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  },
  {
    "person_deformed_id": 6,
    "person_id": 9558,
    "deformed_no": "",
    "hos_guid": "{DAADEA70-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 2,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  },
  {
    "person_deformed_id": 7,
    "person_id": 4400,
    "deformed_no": "",
    "hos_guid": "{DAADEB50-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 1,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": 9
  },
  {
    "person_deformed_id": 9,
    "person_id": 9672,
    "deformed_no": "",
    "hos_guid": "{DAADED0F-9B4C-11DE-B573-1E11FBB7A512}",
    "person_deformed_refer_type_id": 1,
    "register_date": "1899-12-30",
    "certificate_date": "1899-12-30",
    "remark": "",
    "person_deformed_no_regist_type_id": null,
    "person_deformed_money_aid_type_id": null
  }
]
```
