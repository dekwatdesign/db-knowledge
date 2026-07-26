# `psychiatric_from_trace_depress`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_from_trace_depress_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_from_trace_depress_date | date | YES |  | NULL |  |  |
| hospcode | varchar(250) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| fdate | date | YES |  | NULL |  |  |
| diag | text | YES |  | NULL |  |  |
| num_Exercise_a | varchar(50) | YES |  | NULL |  |  |
| num_Exercise_b | varchar(50) | YES |  | NULL |  |  |
| num_Exercise_c | varchar(50) | YES |  | NULL |  |  |
| event | text | YES |  | NULL |  |  |
| help_recommend | varchar(50) | YES |  | NULL |  |  |
| help_consult | varchar(50) | YES |  | NULL |  |  |
| help_refer | varchar(50) | YES |  | NULL |  |  |
| help_no | varchar(50) | YES |  | NULL |  |  |
| note_9q | varchar(50) | YES |  | NULL |  |  |
| note_8q | varchar(50) | YES |  | NULL |  |  |
| psychiatric_from_trace_depress_staff | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_from_trace_depress_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
