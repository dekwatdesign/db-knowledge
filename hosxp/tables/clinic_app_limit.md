# `clinic_app_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_app_limit_id | int(11) | NO | PRI | 0 |  |  |
| clinic | char(3) | YES | MUL | NULL |  |  |
| holiday_date | date | YES |  | NULL |  |  |
| date_name | varchar(150) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinic_app_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
