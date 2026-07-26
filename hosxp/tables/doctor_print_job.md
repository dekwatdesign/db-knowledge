# `doctor_print_job`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_print_job_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| order_date_time | datetime | YES |  | NULL |  |  |
| prin_date_time | datetime | YES |  | NULL |  |  |
| print_server | varchar(20) | YES | MUL | NULL |  |  |
| doctor | varchar(20) | YES |  | NULL |  |  |
| print_data | longblob | YES |  | NULL |  |  |
| print_ok | char(1) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_print_job_id | yes | 1 |
| print_ok | print_ok | no | 1 |
| print_server | print_server | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
