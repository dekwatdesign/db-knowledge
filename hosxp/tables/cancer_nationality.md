# `cancer_nationality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_nationality_id | int(11) | NO | PRI | 0 |  |  |
| cancer_nationality_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_nationality_name | cancer_nationality_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_nationality_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_nationality_id": 1,
    "cancer_nationality_name": "ไทย",
    "hos_guid": null
  },
  {
    "cancer_nationality_id": 2,
    "cancer_nationality_name": "จีน",
    "hos_guid": null
  },
  {
    "cancer_nationality_id": 3,
    "cancer_nationality_name": "ลาว",
    "hos_guid": null
  },
  {
    "cancer_nationality_id": 8,
    "cancer_nationality_name": "อื่นๆ",
    "hos_guid": null
  },
  {
    "cancer_nationality_id": 9,
    "cancer_nationality_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
