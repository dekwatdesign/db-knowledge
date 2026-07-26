# `operation_anes_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_charge_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_charge_name | varchar(200) | YES | UNI | NULL |  |  |
| min_minute | int(11) | YES |  | NULL |  |  |
| max_minute | int(11) | YES |  | NULL |  |  |
| operation_time_type_id | int(11) | YES |  | NULL |  |  |
| anes_complex | char(1) | YES |  | NULL |  |  |
| anes_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_anes_charge_name | operation_anes_charge_name | yes | 1 |
| PRIMARY | operation_anes_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
