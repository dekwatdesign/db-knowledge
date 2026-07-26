# `ckup_lead`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_lead_id | int(11) | NO | PRI | 0 |  |  |
| ckup_lead_result | char(1) | YES |  | NULL |  |  |
| ckup_lead_note | varchar(200) | YES |  | NULL |  |  |
| ckup_lead_lab_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_lead_lab_type_id | ckup_lead_lab_type_id | no | 1 |
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_lead_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
