# `dt_lab_approve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_approve_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_approve_date | date | YES |  | NULL |  |  |
| dt_lab_approve_time | time | YES |  | NULL |  |  |
| dt_lab_approve_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_approve | char(1) | YES |  | NULL |  |  |
| dt_lab_approve_note | varchar(250) | YES |  | NULL |  |  |
| dt_lab_order_id | int(11) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_lab_order32 | dt_lab_order_id | no | 1 |
| PRIMARY | dt_lab_approve_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
