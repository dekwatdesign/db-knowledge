# `cancer_religion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_religion_id | int(11) | NO | PRI | 0 |  |  |
| cancer_religion_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_religion_name | cancer_religion_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_religion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_religion_id": 1,
    "cancer_religion_name": "พุทธ",
    "hos_guid": null
  },
  {
    "cancer_religion_id": 2,
    "cancer_religion_name": "คริสต์",
    "hos_guid": null
  },
  {
    "cancer_religion_id": 3,
    "cancer_religion_name": "อิสลาม",
    "hos_guid": null
  },
  {
    "cancer_religion_id": 8,
    "cancer_religion_name": "อื่นๆ",
    "hos_guid": null
  },
  {
    "cancer_religion_id": 9,
    "cancer_religion_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
