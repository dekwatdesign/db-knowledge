# `cancer_citizenship`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_citizenship_id | int(11) | NO | PRI | 0 |  |  |
| cancer_citizenship_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_citizenship_name | cancer_citizenship_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_citizenship_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_citizenship_id": 1,
    "cancer_citizenship_name": "ไทย",
    "hos_guid": null
  },
  {
    "cancer_citizenship_id": 2,
    "cancer_citizenship_name": "จีน",
    "hos_guid": null
  },
  {
    "cancer_citizenship_id": 3,
    "cancer_citizenship_name": "ลาว",
    "hos_guid": null
  },
  {
    "cancer_citizenship_id": 8,
    "cancer_citizenship_name": "อื่นๆ",
    "hos_guid": null
  },
  {
    "cancer_citizenship_id": 9,
    "cancer_citizenship_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
