# `physic_main_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_main_regist_id | int(11) | NO | PRI | 0 |  |  |
| physic_main_regist_date | date | YES | MUL | NULL |  |  |
| physic_main_dch_status_id | int(11) | YES | MUL | NULL |  |  |
| physic_main_regist_treatment | varchar(255) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| physic_main_regist_staff | varchar(255) | YES |  | NULL |  |  |
| physic_main_regist_lastupdate | datetime | YES |  | NULL |  |  |
| physic_main_regist_hospital_id | int(11) | YES |  | NULL |  |  |
| physic_main_regist_note | varchar(255) | YES |  | NULL |  |  |
| physic_main_regist_pt_no | int(11) | YES |  | NULL |  |  |
| physic_main_regist_ot_no | int(11) | YES |  | NULL |  |  |
| physic_main_regist_po_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_physic_main_dch_status_id | physic_main_dch_status_id | no | 1 |
| ix_physic_main_regist_date | physic_main_regist_date | no | 1 |
| ix_physic_main_regist_treatment | physic_main_regist_treatment | no | 1 |
| PRIMARY | physic_main_regist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
