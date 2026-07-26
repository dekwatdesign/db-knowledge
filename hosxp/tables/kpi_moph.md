# `kpi_moph`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kpi_moph_id | int(11) | NO | PRI | 0 |  |  |
| kpi_moph_guideline_id | int(11) | YES | MUL | NULL |  |  |
| kpi_moph_date_type_id | int(11) | YES | MUL | NULL |  |  |
| kpi_moph_date_save | date | YES |  | NULL |  |  |
| kpi_moph_year | int(11) | YES |  | NULL |  |  |
| kpi_moph_month | int(11) | YES |  | NULL |  |  |
| kpi_moph_number_a | double(20,7) | YES |  | NULL |  |  |
| kpi_moph_number_b | double(20,7) | YES |  | NULL |  |  |
| kpi_moph_number_c | double(20,7) | YES |  | NULL |  |  |
| kpi_moph_number_mean | double(20,7) | YES |  | NULL |  |  |
| kpi_moph_number_result | double(20,7) | YES |  | NULL |  |  |
| kpi_moph_lastupdate | datetime | YES |  | NULL |  |  |
| kpi_moph_staff_id | int(11) | YES |  | NULL |  |  |
| kpi_moph_staff_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refkpi_moph_criterion1 | kpi_moph_guideline_id | no | 1 |
| ix_Refkpi_moph_date_type2 | kpi_moph_date_type_id | no | 1 |
| PRIMARY | kpi_moph_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
