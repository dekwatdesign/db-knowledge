# `ipd_vaccine_aefi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| vaccine_manufacturer_id | int(11) | YES |  | NULL |  |  |
| vaccination_datetime | datetime | YES |  | NULL |  |  |
| vaccination_hospital_code | varchar(9) | YES |  | NULL |  |  |
| aefi_datetime | datetime | YES |  | NULL |  |  |
| confirm_aefi | char(1) | YES |  | NULL |  |  |
| moph_update_status | char(1) | YES |  | NULL |  |  |
| moph_update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
