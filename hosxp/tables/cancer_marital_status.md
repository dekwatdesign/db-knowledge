# `cancer_marital_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_marital_status_id | int(11) | NO | PRI | 0 |  |  |
| cancer_marital_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_marital_status_name | cancer_marital_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_marital_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cancer_marital_status_id": 1,
    "cancer_marital_status_name": "โสด",
    "hos_guid": null
  },
  {
    "cancer_marital_status_id": 2,
    "cancer_marital_status_name": "คู่ / หม่าย / หย่า",
    "hos_guid": null
  },
  {
    "cancer_marital_status_id": 3,
    "cancer_marital_status_name": "นักบวช",
    "hos_guid": null
  },
  {
    "cancer_marital_status_id": 9,
    "cancer_marital_status_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
