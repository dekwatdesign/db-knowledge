# `cancer_alcohol_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_alcohol_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_alcohol_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_alcohol_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_alcohol_type_id": 1,
    "cancer_alcohol_type_name": "สุรากลั่น",
    "hos_guid": null
  },
  {
    "cancer_alcohol_type_id": 2,
    "cancer_alcohol_type_name": "สุราหมัก",
    "hos_guid": null
  },
  {
    "cancer_alcohol_type_id": 3,
    "cancer_alcohol_type_name": "สุราต่างประเทศ",
    "hos_guid": null
  },
  {
    "cancer_alcohol_type_id": 4,
    "cancer_alcohol_type_name": "สุราไทย",
    "hos_guid": null
  },
  {
    "cancer_alcohol_type_id": 5,
    "cancer_alcohol_type_name": "สุราพื้นเมือง",
    "hos_guid": null
  }
]
```
