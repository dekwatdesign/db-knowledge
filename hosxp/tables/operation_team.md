# `operation_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_team_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| position_id | int(11) | YES |  | NULL |  |  |
| fee | double(15,3) | YES |  | NULL |  |  |
| wait_save | char(1) | YES |  | NULL |  |  |
| in_datetime | datetime | YES |  | NULL |  |  |
| out_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| operation_detail_id | int(11) | YES | MUL | NULL |  |  |
| df_qty | int(11) | YES |  | NULL |  |  |
| operation_df_type_id | int(11) | YES |  | NULL |  |  |
| total_df | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_detail_id | operation_detail_id | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | operation_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
