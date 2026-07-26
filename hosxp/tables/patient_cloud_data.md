# `patient_cloud_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cloud_data_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | UNI | NULL |  |  |
| patient_key | varchar(200) | YES |  | NULL |  |  |
| enabled_cloud_data | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | yes | 1 |
| PRIMARY | patient_cloud_data_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
