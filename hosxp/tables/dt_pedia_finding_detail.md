# `dt_pedia_finding_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_finding_detail_id | int(11) | NO | PRI | 0 |  |  |
| dtarea_code | varchar(10) | YES |  | NULL |  |  |
| condition_type | varchar(100) | YES |  | NULL |  |  |
| description | varchar(100) | YES |  | NULL |  |  |
| clinical_finding | varchar(255) | YES |  | NULL |  |  |
| pdl | varchar(100) | YES |  | NULL |  |  |
| vitalometer | int(11) | YES |  | NULL |  |  |
| dt_pedia_finding_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_pedia_finding_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
