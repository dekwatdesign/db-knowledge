# `patient_dent_diagram_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_dent_diagram_history_id | int(11) | NO | PRI | 0 |  |  |
| hnkey | varchar(20) | YES | UNI | NULL |  |  |
| dtp_blob | longblob | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hnkey | hnkey | yes | 1 |
| PRIMARY | patient_dent_diagram_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
