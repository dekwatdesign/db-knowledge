# `pharm_procedure`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_procedure_id | int(11) | NO | PRI | 0 |  |  |
| pharm_procedure_startdate | date | YES |  | NULL |  |  |
| pharm_procedure_starttime | time | YES |  | NULL |  |  |
| pharm_procedure_enddate | date | YES |  | NULL |  |  |
| pharm_procedure_endtime | time | YES |  | NULL |  |  |
| pharm_procedure_doctor | varchar(25) | YES |  | NULL |  |  |
| pharm_procedure_staff | varchar(10) | YES |  | NULL |  |  |
| pharm_procedure_note | longtext | YES |  | NULL |  |  |
| pharm_type_code | varchar(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| pharm_type_id | int(11) | YES | MUL | NULL |  |  |
| pharm_workload_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| dep_type | varchar(3) | YES |  | NULL |  |  |
| pharm_alyze_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pharm_procedure_pharm_type_id_idx | pharm_type_id | no | 1 |
| ix_pharm_procedure_pharm_workload_id_idx | pharm_workload_id | no | 1 |
| ix_Refpharm_workload121 | pharm_alyze_id | no | 1 |
| PRIMARY | pharm_procedure_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "pharm_procedure_id": 4,
    "pharm_procedure_startdate": "2025-04-21",
    "pharm_procedure_starttime": "14:31:04",
    "pharm_procedure_enddate": "2025-04-21",
    "pharm_procedure_endtime": "0:00:00",
    "pharm_procedure_doctor": "085",
    "pharm_procedure_staff": "yuwa337",
    "pharm_procedure_note": "มีทานยา fexofenadine 60 mg 1x1hs\r\navamys",
    "pharm_type_code": "013-01-00",
    "lastupdate": "2025-04-21 14:32:40",
    "pharm_type_id": 1,
    "pharm_workload_id": null,
    "hn": "650005499",
    "vn": "680421140018",
    "an": null,
    "dep_type": "OPD",
    "pharm_alyze_id": null
  }
]
```
