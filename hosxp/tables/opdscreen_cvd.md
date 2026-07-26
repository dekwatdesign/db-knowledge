# `opdscreen_cvd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_cvd_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| screen_datetime | datetime | YES |  | NULL |  |  |
| is_smoking | char(1) | YES |  | NULL |  |  |
| is_diabetes | char(1) | YES |  | NULL |  |  |
| risk_score | double(15,3) | YES |  | NULL |  |  |
| tc | double(15,3) | YES |  | NULL |  |  |
| pfull_score | double(22,9) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| cvd_risk_score_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | yes | 1 |
| PRIMARY | opdscreen_cvd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
