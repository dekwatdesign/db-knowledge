# `stretcher_register_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_register_queue_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_register_queue_num | int(11) | YES |  | NULL |  |  |
| stretcher_register_queue_date | date | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| stretcher_register_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_register_queue_date | stretcher_register_queue_date | no | 1 |
| ix_idx_stretcher_register_queue_doctor_code | doctor_code | no | 1 |
| ix_idx_stretcher_register_queue_register | stretcher_register_id | no | 1 |
| PRIMARY | stretcher_register_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
