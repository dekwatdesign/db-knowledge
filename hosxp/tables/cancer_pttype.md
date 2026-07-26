# `cancer_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_pttype_id | int(11) | NO | PRI | 0 |  |  |
| cancer_pttype_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_pttype_name | cancer_pttype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_pttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cancer_pttype_id": 1,
    "cancer_pttype_name": "เงินสด",
    "hos_guid": null
  },
  {
    "cancer_pttype_id": 2,
    "cancer_pttype_name": "ต้นสังกัด",
    "hos_guid": null
  },
  {
    "cancer_pttype_id": 3,
    "cancer_pttype_name": "ประกันสังคม",
    "hos_guid": null
  },
  {
    "cancer_pttype_id": 4,
    "cancer_pttype_name": "30 บาท รักษาทุกโรค",
    "hos_guid": null
  }
]
```
