# `occupation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | YES | UNI | NULL |  |  |
| occupation | varchar(4) | NO | PRI |  |  |  |
| nhso_code | char(4) | YES |  | NULL |  |  |
| code506 | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| zip09_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| nhso_eclaim_occupation_code | char(3) | YES |  | NULL |  |  |
| surveillance_occupation_id | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | occupation | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "(-)",
    "occupation": "000",
    "nhso_code": "9999",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "สถาปนิก",
    "occupation": "101",
    "nhso_code": "2161",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "วิศวกร",
    "occupation": "102",
    "nhso_code": "9311",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "นักสำรวจ",
    "occupation": "103",
    "nhso_code": "2161",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "ช่างเทคนิควิศวกรรม",
    "occupation": "104",
    "nhso_code": "2161",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "นักวิทยาศาสตร์",
    "occupation": "105",
    "nhso_code": "2111",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "แพทย์",
    "occupation": "106",
    "nhso_code": "2211",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  },
  {
    "name": "ศัลยแพทย์",
    "occupation": "107",
    "nhso_code": "2211",
    "code506": null,
    "hos_guid": null,
    "zip09_code": null,
    "hos_guid_ext": null,
    "nhso_eclaim_occupation_code": null,
    "surveillance_occupation_id": null
  }
]
```
