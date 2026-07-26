# `patient_cancer_visit_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_visit_stat_id | int(11) | NO | PRI | 0 |  |  |
| cancer_visit_type_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(20) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| vstdep | varchar(5) | YES |  | NULL |  |  |
| o2sat | double(22,3) | YES |  | NULL |  |  |
| psychosocial_status | varchar(1) | YES |  | NULL |  |  |
| falling_status | varchar(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_visit_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "patient_cancer_visit_stat_id": 1,
    "cancer_visit_type_id": null,
    "vn": "541018122954",
    "vstdate": "2011-10-18",
    "vsttime": "13:51:50",
    "vstdep": null,
    "o2sat": null,
    "psychosocial_status": null,
    "falling_status": null,
    "hos_guid": null
  }
]
```
