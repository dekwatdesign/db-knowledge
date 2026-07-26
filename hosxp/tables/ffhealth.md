# `ffhealth`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| work_per_day | tinyint(4) | YES |  | NULL |  |  |
| work_level | tinyint(4) | YES |  | NULL |  |  |
| think_per_day | tinyint(4) | YES |  | NULL |  |  |
| think_level | tinyint(4) | YES |  | NULL |  |  |
| exercise_level | tinyint(4) | YES |  | NULL |  |  |
| exercise_per_day | tinyint(4) | YES |  | NULL |  |  |
| sport_name | varchar(150) | YES |  | NULL |  |  |
| alcohol_per_day | tinyint(4) | YES |  | NULL |  |  |
| alcohol_level | tinyint(4) | YES |  | NULL |  |  |
| smoking_per_day | tinyint(4) | YES |  | NULL |  |  |
| smoking_level | tinyint(4) | YES |  | NULL |  |  |
| coffee_per_day | tinyint(4) | YES |  | NULL |  |  |
| coffee_level | tinyint(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
