# `cancer_death_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_death_cause_id | int(11) | NO | PRI | 0 |  |  |
| cancer_death_cause_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_death_cause_name | cancer_death_cause_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_death_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_death_cause_id": 1,
    "cancer_death_cause_name": "โรคมะเร็ง",
    "hos_guid": null
  },
  {
    "cancer_death_cause_id": 2,
    "cancer_death_cause_name": "โรคอื่นๆ",
    "hos_guid": null
  },
  {
    "cancer_death_cause_id": 9,
    "cancer_death_cause_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
