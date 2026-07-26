# `cancer_sex`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_sex_id | int(11) | NO | PRI | 0 |  |  |
| cancer_sex_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_sex_name | cancer_sex_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_sex_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_sex_id": 1,
    "cancer_sex_name": "ชาย",
    "hos_guid": null
  },
  {
    "cancer_sex_id": 2,
    "cancer_sex_name": "หญิง",
    "hos_guid": null
  },
  {
    "cancer_sex_id": 9,
    "cancer_sex_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
