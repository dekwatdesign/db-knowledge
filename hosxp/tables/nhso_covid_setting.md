# `nhso_covid_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_covid_setting_id | int(11) | NO | PRI | 0 |  |  |
| nhso_covid_setting_name | varchar(200) | YES | UNI | NULL |  |  |
| nhso_covid_setting_code | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_covid_setting_name | nhso_covid_setting_name | yes | 1 |
| PRIMARY | nhso_covid_setting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
