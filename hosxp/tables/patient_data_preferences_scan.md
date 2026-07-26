# `patient_data_preferences_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_data_preferences_scan_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| scan_blob | longblob | YES |  | NULL |  |  |
| scan_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| PRIMARY | patient_data_preferences_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
